'use server';

import prisma from '@/lib/prisma';
import { Course, Lesson, Quiz, Exam, LiveSession } from '@prisma/client';
import { cookies } from 'next/headers';

const AUTH_COOKIE = 'auth_session';

async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value;
}

export async function getCourses() {
  return prisma.course.findMany({
    include: {
      lessons: true,
      liveSessions: true,
      quizzes: true,
      exams: true,
    },
  });
}

export async function getCourse(id: string) {
  return prisma.course.findUnique({
    where: { id },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
      },
      liveSessions: true,
      quizzes: true,
      exams: true,
    },
  });
}

export async function enrollInCourse(courseId: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  return prisma.userCourse.create({
    data: {
      userId,
      courseId,
    },
  });
}

export async function getStudentEnrollments() {
  const userId = await getUserId();
  if (!userId) return [];

  return prisma.userCourse.findMany({
    where: { userId },
    include: {
      course: {
        include: {
          lessons: true,
        },
      },
    },
  });
}

export async function updateProgress(courseId: string, progress: number) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  return prisma.userCourse.update({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
    data: {
      progress,
    },
  });
}

export async function createCourse(data: {
  title: string;
  description: string;
  category: string;
  instructor: string;
  duration: string;
  level: string;
  thumbnail: string;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.course.create({
    data: {
      ...data,
      price: 0,
    },
  });
}

export async function updateLiveSessionCode(courseId: string, sessionId: string, code: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.liveSession.update({
    where: { id: sessionId },
    data: { secretCode: code },
  });
}

export async function createLiveSession(courseId: string, data: {
  title: string;
  description?: string;
  date: Date;
  duration: string;
  instructor: string;
  link: string;
  secretCode?: string;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.liveSession.create({
    data: {
      ...data,
      courseId,
    },
  });
}
