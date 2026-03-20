'use server';

import prisma from '../prisma';
import { Course, Lesson, Quiz, Exam, LiveSession } from '@prisma/client';
import { cookies } from 'next/headers';

const AUTH_COOKIE = 'auth_session';

async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value;
}

export async function getCourses() {
  const courses = await prisma.course.findMany({
    include: {
      lessons: { orderBy: { order: 'asc' } },
      liveSessions: true,
      assignments: true,
      quizzes: true,
      exams: true,
    },
  });

  return courses.map(course => ({
    ...course,
    liveSession: course.liveSessions[0] || null,
    quiz: course.quizzes[0] || null,
    exam: course.exams[0] || null,
  }));
}

export async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      lessons: { orderBy: { order: 'asc' } },
      liveSessions: true,
      assignments: true,
      quizzes: true,
      exams: true,
    },
  });

  if (!course) return null;

  return {
    ...course,
    liveSession: course.liveSessions[0] || null,
    quiz: course.quizzes[0] || null,
    exam: course.exams[0] || null,
  };
}

export async function deleteCourse(id: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  // Cascade delete manually since we might have many relations
  await prisma.userCourse.deleteMany({ where: { courseId: id } });
  await prisma.lesson.deleteMany({ where: { courseId: id } });
  await prisma.liveSession.deleteMany({ where: { courseId: id } });
  await prisma.quiz.deleteMany({ where: { courseId: id } });
  await prisma.assignment.deleteMany({ where: { courseId: id } });
  await prisma.exam.deleteMany({ where: { courseId: id } });
  await prisma.certificate.deleteMany({ where: { courseId: id } });

  return prisma.course.delete({ where: { id } });
}

export async function enrollInCourse(courseId: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  // Check if already enrolled
  const existingEnrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId,
      },
    },
  });

  if (existingEnrollment) {
    return existingEnrollment;
  }

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
  date: string | Date;
  duration: string;
  instructor: string;
  link: string;
  secretCode?: string;
  lessonId?: string;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  console.log('Creating live session for course:', courseId);
  console.log('Session data:', data);

  try {
    return await prisma.liveSession.create({
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        duration: data.duration,
        instructor: data.instructor,
        link: data.link,
        secretCode: data.secretCode,
        lessonId: data.lessonId || null,
        courseId,
      },
    });
  } catch (error) {
    console.error('Prisma Create LiveSession Error:', error);
    throw error;
  }
}

export async function submitAttendanceCode(code: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  // Find the live session with this code
  const session = await prisma.liveSession.findFirst({
    where: { secretCode: code },
    include: { course: true, lesson: true }
  });

  if (!session) throw new Error('Invalid attendance code');
  if (!session.lessonId) throw new Error('This session is not linked to a lesson');

  // Check if student is enrolled
  const enrollment = await prisma.userCourse.findUnique({
    where: { userId_courseId: { userId, courseId: session.courseId } }
  });

  if (!enrollment) throw new Error('You are not enrolled in this course');

  // DEDUPLICATION: Check if already attended this specific lesson
  const existingRecord = await prisma.attendanceRecord.findUnique({
    where: { userId_lessonId: { userId, lessonId: session.lessonId } }
  });

  if (existingRecord) {
    throw new Error('ALREADY_ATTENDED'); // Special error code for the frontend
  }

  // Record attendance
  const record = await prisma.attendanceRecord.create({
    data: {
      userId,
      lessonId: session.lessonId,
      courseId: session.courseId,
    }
  });

  // Also update progress or attendedLive flag if needed
  await prisma.userCourse.update({
    where: { userId_courseId: { userId, courseId: session.courseId } },
    data: { attendedLive: true }
  });

  return record;
}

export async function getAttendanceRecords() {
  const userId = await getUserId();
  if (!userId) {
    console.error('getAttendanceRecords: Not authenticated');
    throw new Error('Not authenticated');
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') {
    console.error(`getAttendanceRecords: Unauthorized user ${userId} with role ${user?.role}`);
    throw new Error('Unauthorized');
  }

  console.log(`getAttendanceRecords: Fetching records for admin ${user.email}`);

  try {
    const records = await prisma.attendanceRecord.findMany({
      include: {
        user: { select: { name: true, email: true } },
        lesson: { select: { title: true } },
        course: { select: { title: true } },
      },
      orderBy: { attendedAt: 'desc' }
    });
    console.log(`getAttendanceRecords: Found ${records.length} records`);
    return records;
  } catch (error) {
    console.error('getAttendanceRecords: Prisma error:', error);
    throw error;
  }
}

export async function createLesson(courseId: string, data: {
  title: string;
  duration: string;
  videoUrl?: string;
  attachmentUrl?: string;
  attachmentType?: string;
  order: number;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.lesson.create({
    data: {
      ...data,
      courseId,
    },
  });
}

export async function updateCourse(id: string, data: any) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN' && user?.id !== userId) throw new Error('Unauthorized');

  // Filter out unwanted fields for update
  const { id: _, lessons, liveSessions, quizzes, exams, enrolledUsers, ...updateData } = data;

  return prisma.course.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteLesson(lessonId: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.lesson.delete({
    where: { id: lessonId },
  });
}

export async function updateLesson(id: string, data: {
  title?: string;
  duration?: string;
  videoUrl?: string;
  attachmentUrl?: string;
  attachmentType?: string;
  order?: number;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.lesson.update({
    where: { id },
    data,
  });
}

export async function issueCertificate(courseId: string, userId: string) {
  const currentUserId = await getUserId();
  if (!currentUserId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { enrolledCourses: true }
  });
  const course = await prisma.course.findUnique({ where: { id: courseId } });

  if (!user || !course) throw new Error('User or Course not found');

  // Generate a simple certificate number
  const certificateNumber = `CERT-${courseId.slice(0, 4)}-${userId.slice(0, 4)}-${Date.now().toString().slice(-4)}`;

  return prisma.certificate.create({
    data: {
      certificateNumber,
      userId,
      courseId,
      studentName: user.name,
      courseName: course.title,
    },
  });
}

export async function getCertificate(id: string) {
  return prisma.certificate.findUnique({
    where: { id },
    include: {
      course: true,
      user: true,
    },
  });
}

export async function createAssignment(courseId: string, data: {
  title: string;
  description: string;
  dueDate: string | Date;
  attachmentUrl?: string;
  attachmentType?: string;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.assignment.create({
    data: {
      ...data,
      dueDate: new Date(data.dueDate),
      courseId,
    },
  });
}

export async function deleteAssignment(id: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  return prisma.assignment.delete({
    where: { id },
  });
}

export async function getEnrolledUsers(courseId: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  const enrollments = await prisma.userCourse.findMany({
    where: { courseId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        }
      }
    }
  });

  return enrollments.map(e => e.user);
}

export async function toggleAttendance(courseId: string, lessonId: string, userId: string, isPresent: boolean) {
  const adminId = await getUserId();
  if (!adminId) throw new Error('Not authenticated');

  const admin = await prisma.user.findUnique({ where: { id: adminId } });
  if (admin?.role !== 'ADMIN') throw new Error('Unauthorized');

  if (isPresent) {
    // Mark as present
    return prisma.attendanceRecord.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      create: { userId, lessonId, courseId },
      update: { attendedAt: new Date() },
    });
  } else {
    // Mark as absent (delete record)
    return prisma.attendanceRecord.deleteMany({
      where: { userId, lessonId },
    });
  }
}

export async function bulkToggleAttendance(courseId: string, lessonId: string, userIds: string[], isPresent: boolean) {
  const adminId = await getUserId();
  if (!adminId) throw new Error('Not authenticated');

  const admin = await prisma.user.findUnique({ where: { id: adminId } });
  if (admin?.role !== 'ADMIN') throw new Error('Unauthorized');

  if (isPresent) {
    // Mark all as present
    const operations = userIds.map(userId => 
      prisma.attendanceRecord.upsert({
        where: { userId_lessonId: { userId, lessonId } },
        create: { userId, lessonId, courseId },
        update: { attendedAt: new Date() },
      })
    );
    return prisma.$transaction(operations);
  } else {
    // Mark all as absent (delete records)
    return prisma.attendanceRecord.deleteMany({
      where: {
        lessonId,
        userId: { in: userIds }
      },
    });
  }
}
