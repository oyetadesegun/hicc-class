'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib/prisma';

const AUTH_COOKIE = 'auth_session';

async function requireAdmin() {
  const cookieStore = await cookies();
  const userId = cookieStore.get(AUTH_COOKIE)?.value;
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true },
  });

  if (!user || user.role !== 'ADMIN') throw new Error('Unauthorized');
  return user;
}

export async function getAdminAssignmentReviewData() {
  await requireAdmin();

  const [courses, submissions] = await Promise.all([
    prisma.course.findMany({
      include: {
        assignments: {
          include: {
            lesson: { select: { id: true, title: true, order: true } },
          },
          orderBy: { dueDate: 'asc' },
        },
        enrolledUsers: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                phoneNumber: true,
              },
            },
          },
          orderBy: { enrolledAt: 'asc' },
        },
      },
      orderBy: { title: 'asc' },
    }),
    prisma.submission.findMany({
      where: { type: 'ASSIGNMENT' },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phoneNumber: true,
          },
        },
        assignment: {
          select: {
            id: true,
            title: true,
            courseId: true,
          },
        },
      },
      orderBy: { submittedAt: 'desc' },
    }),
  ]);

  const latestSubmissionByStudentAssignment = new Map<string, (typeof submissions)[number]>();
  for (const submission of submissions) {
    if (!submission.assignmentId) continue;
    const key = `${submission.assignmentId}:${submission.userId}`;
    if (!latestSubmissionByStudentAssignment.has(key)) {
      latestSubmissionByStudentAssignment.set(key, submission);
    }
  }

  const rows = courses.flatMap((course) =>
    course.assignments.flatMap((assignment) =>
      course.enrolledUsers.map((enrollment) => {
        const submission = latestSubmissionByStudentAssignment.get(`${assignment.id}:${enrollment.userId}`);
        const response = submission?.content && typeof submission.content === 'object'
          ? (submission.content as { description?: string }).description ?? ''
          : '';

        return {
          id: `${assignment.id}:${enrollment.userId}`,
          courseId: course.id,
          courseTitle: course.title,
          assignmentId: assignment.id,
          assignmentTitle: assignment.title,
          dueDate: assignment.dueDate.toISOString(),
          lessonTitle: assignment.lesson ? `Lesson ${assignment.lesson.order}: ${assignment.lesson.title}` : null,
          studentId: enrollment.user.id,
          studentName: enrollment.user.name,
          studentEmail: enrollment.user.email,
          studentPhoneNumber: enrollment.user.phoneNumber,
          submitted: Boolean(submission),
          submissionId: submission?.id ?? null,
          submittedAt: submission?.submittedAt.toISOString() ?? null,
          status: submission?.status ?? 'MISSING',
          score: submission?.score ?? null,
          feedback: submission?.feedback ?? '',
          projectUrl: submission?.projectUrl ?? null,
          attachmentUrl: submission?.attachmentUrl ?? null,
          attachmentType: submission?.attachmentType ?? null,
          attachmentName: submission?.attachmentName ?? null,
          response,
        };
      })
    )
  );

  return {
    courses: courses.map((course) => ({
      id: course.id,
      title: course.title,
      assignmentCount: course.assignments.length,
      enrolledCount: course.enrolledUsers.length,
    })),
    stats: {
      totalRows: rows.length,
      submitted: rows.filter((row) => row.submitted).length,
      missing: rows.filter((row) => !row.submitted).length,
      graded: rows.filter((row) => row.status === 'GRADED').length,
      ungraded: rows.filter((row) => row.submitted && row.status !== 'GRADED').length,
    },
    rows,
  };
}

export async function gradeAssignmentSubmission(
  submissionId: string,
  data: { score?: number | null; feedback?: string }
) {
  await requireAdmin();

  if (!submissionId) throw new Error('Missing submission ID');

  const score = data.score === null || data.score === undefined ? null : Number(data.score);
  if (score !== null && (!Number.isFinite(score) || score < 0 || score > 100)) {
    throw new Error('Score must be between 0 and 100');
  }

  const submission = await prisma.submission.update({
    where: { id: submissionId },
    data: {
      status: 'GRADED',
      score,
      feedback: data.feedback?.trim() || null,
    },
    select: { id: true },
  });

  revalidatePath('/admin/assignments');
  revalidatePath('/assignments');

  return { success: true, submissionId: submission.id };
}
