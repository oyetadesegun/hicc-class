'use server';

import { randomBytes } from 'node:crypto';
import prisma from '@/lib/prisma';
import { requireUser } from '@/lib/auth/session';

type StoredQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

const PASSING_SCORE = 70;

function parseQuestions(value: unknown): StoredQuestion[] {
  if (!Array.isArray(value)) throw new Error('Assessment questions are invalid');
  return value.map((question) => {
    if (!question || typeof question !== 'object') throw new Error('Assessment question is invalid');
    const item = question as Partial<StoredQuestion>;
    if (
      typeof item.id !== 'string' ||
      typeof item.question !== 'string' ||
      !Array.isArray(item.options) ||
      !item.options.every((option) => typeof option === 'string') ||
      !Number.isInteger(item.correctAnswer)
    ) {
      throw new Error('Assessment question is invalid');
    }
    return item as StoredQuestion;
  });
}

async function requireCourseAccess(user: { id: string; role: string }, courseId: string) {
  if (user.role === 'ADMIN') return;
  const enrollment = await prisma.userCourse.findUnique({
    where: { userId_courseId: { userId: user.id, courseId } },
    select: { userId: true },
  });
  if (!enrollment) throw new Error('You are not enrolled in this course');
}

function publicQuestions(questions: StoredQuestion[]) {
  return questions.map(({ correctAnswer: _answer, ...question }) => question);
}

function grade(questions: StoredQuestion[], answers: number[]) {
  if (answers.length !== questions.length || answers.some((answer) => !Number.isInteger(answer))) {
    throw new Error('Assessment answers are invalid');
  }
  const correct = questions.reduce((total, question, index) => {
    const answer = answers[index];
    if (answer < -1 || answer >= question.options.length) throw new Error('An answer is invalid');
    return total + (answer === question.correctAnswer ? 1 : 0);
  }, 0);
  return Math.round((correct / questions.length) * 100);
}

export async function getQuizAssessment(quizId: string) {
  const user = await requireUser();
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: { course: { select: { id: true, title: true } } },
  });
  if (!quiz) return null;
  await requireCourseAccess(user, quiz.courseId);
  const questions = parseQuestions(quiz.questions);
  return { id: quiz.id, title: quiz.title, passingScore: PASSING_SCORE, questions: publicQuestions(questions), course: quiz.course };
}

export async function submitQuizAssessment(quizId: string, answers: number[]) {
  const user = await requireUser();
  const quiz = await prisma.quiz.findUnique({ where: { id: quizId } });
  if (!quiz) throw new Error('Quiz not found');
  await requireCourseAccess(user, quiz.courseId);
  const questions = parseQuestions(quiz.questions);
  const existing = await prisma.submission.findFirst({
    where: { userId: user.id, quizId: quiz.id, type: 'QUIZ' },
    select: { score: true },
    orderBy: { submittedAt: 'desc' },
  });
  if (existing?.score !== null && existing?.score !== undefined) {
    return { score: existing.score, passingScore: PASSING_SCORE, correctAnswers: questions.map((question) => question.correctAnswer) };
  }
  const score = grade(questions, answers);

  await prisma.submission.create({
    data: { type: 'QUIZ', status: 'GRADED', score, answers, userId: user.id, quizId: quiz.id },
  });
  return { score, passingScore: PASSING_SCORE, correctAnswers: questions.map((question) => question.correctAnswer) };
}

export async function getExamAssessment(examId: string) {
  const user = await requireUser();
  const exam = await prisma.exam.findUnique({
    where: { id: examId },
    include: { course: { select: { id: true, title: true } } },
  });
  if (!exam) return null;
  await requireCourseAccess(user, exam.courseId);
  const questions = parseQuestions(exam.questions);
  return { id: exam.id, title: exam.title, duration: exam.duration, passingScore: PASSING_SCORE, questions: publicQuestions(questions), course: exam.course };
}

export async function submitExamAssessment(examId: string, answers: number[]) {
  const user = await requireUser();
  const exam = await prisma.exam.findUnique({
    where: { id: examId },
    include: { course: { select: { id: true, title: true } } },
  });
  if (!exam) throw new Error('Exam not found');
  await requireCourseAccess(user, exam.courseId);
  const questions = parseQuestions(exam.questions);
  const existingSubmission = await prisma.submission.findFirst({
    where: { userId: user.id, examId: exam.id, type: 'EXAM' },
    select: { score: true },
    orderBy: { submittedAt: 'desc' },
  });
  if (existingSubmission?.score !== null && existingSubmission?.score !== undefined) {
    const existingCertificate = await prisma.certificate.findFirst({
      where: { userId: user.id, courseId: exam.courseId },
      select: { id: true },
    });
    return {
      score: existingSubmission.score,
      passingScore: PASSING_SCORE,
      correctAnswers: questions.map((question) => question.correctAnswer),
      certificateId: existingCertificate?.id ?? null,
    };
  }
  const score = grade(questions, answers);

  await prisma.submission.create({
    data: { type: 'EXAM', status: 'GRADED', score, answers, userId: user.id, examId: exam.id },
  });

  let certificateId: string | null = null;
  if (score >= PASSING_SCORE) {
    const existing = await prisma.certificate.findFirst({
      where: { userId: user.id, courseId: exam.courseId },
      select: { id: true },
    });
    if (existing) {
      certificateId = existing.id;
    } else {
      const certificate = await prisma.certificate.create({
        data: {
          certificateNumber: `HICC-${new Date().getUTCFullYear()}-${randomBytes(8).toString('hex').toUpperCase()}`,
          userId: user.id,
          courseId: exam.courseId,
          studentName: user.name,
          courseName: exam.course.title,
        },
        select: { id: true },
      });
      certificateId = certificate.id;
    }
  }

  return {
    score,
    passingScore: PASSING_SCORE,
    correctAnswers: questions.map((question) => question.correctAnswer),
    certificateId,
  };
}
