'use server';

import prisma from '../prisma';
import { Course, Lesson, Quiz, Exam, LiveSession } from '@prisma/client';
import { getCurrentUser } from '@/lib/auth/session';
import { requireAdmin, requireUser } from '@/lib/auth/session';
import { randomBytes } from 'node:crypto';
import { signMediaUrl } from '@/lib/imagekit';
import { revalidatePath } from 'next/cache';

const COURSE_SECTION_TYPES = ['CORE', 'RECORDED'] as const;
type CourseSectionTypeValue = (typeof COURSE_SECTION_TYPES)[number];

function isCourseSectionType(value: unknown): value is CourseSectionTypeValue {
  return typeof value === 'string' && COURSE_SECTION_TYPES.includes(value as CourseSectionTypeValue);
}

async function findCourseSection(courseId: string, type: CourseSectionTypeValue) {
  const section = await prisma.courseSection.findUnique({
    where: { courseId_type: { courseId, type } },
    select: { id: true, courseId: true, type: true },
  });
  if (!section) throw new Error('Course section not found');
  return section;
}

function withoutCorrectAnswers(assessment: any) {
  if (!assessment) return null;
  const questions = Array.isArray(assessment.questions) ? assessment.questions : [];
  return {
    ...assessment,
    questions: questions.map(({ correctAnswer: _correctAnswer, ...question }: any) => question),
  };
}

async function getUserId() {
  return (await getCurrentUser())?.id;
}

export async function getCourses() {
  const currentUser = await getCurrentUser();
  if (currentUser?.role !== 'ADMIN') {
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        thumbnail: true,
        category: true,
        instructor: true,
        level: true,
        duration: true,
        price: true,
        createdAt: true,
        updatedAt: true,
        lessons: {
          where: { section: { countsTowardProgress: true } },
          select: { id: true, title: true, duration: true, order: true },
          orderBy: { order: 'asc' },
        },
        sections: {
          select: { type: true, _count: { select: { lessons: true } } },
          orderBy: { order: 'asc' },
        },
        assignments: { select: { id: true, title: true, dueDate: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return courses.map((course) => ({ ...course, liveSessions: [], quiz: null, exam: null }));
  }

  const courses = await prisma.course.findMany({
    include: {
      lessons: {
        orderBy: { order: 'asc' },
        include: { assignments: true, section: true },
      },
      sections: { orderBy: { order: 'asc' } },
      liveSessions: true,
      assignments: true,
      quizzes: true,
      exams: true,
    },
  });

  return courses.map(course => ({
    ...course,
    lessons: course.lessons.map((lesson) => ({ ...lesson, sectionType: lesson.section.type })),
    quiz: course.quizzes[0] || null,
    exam: course.exams[0] || null,
  }));
}

export async function getCourse(id: string) {
  const currentUser = await requireUser();
  if (currentUser.role !== 'ADMIN') {
    const enrollment = await prisma.userCourse.findUnique({
      where: { userId_courseId: { userId: currentUser.id, courseId: id } },
      select: { userId: true },
    });
    if (!enrollment) throw new Error('You are not enrolled in this course');
  }

  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
        include: { assignments: true, section: true },
      },
      sections: { orderBy: { order: 'asc' } },
      liveSessions: true,
      assignments: true,
      quizzes: true,
      exams: true,
    },
  });

  if (!course) return null;

  return {
    ...course,
    lessons: course.lessons.map((lesson) => ({
      ...lesson,
      sectionType: lesson.section.type,
      videoUrl: signMediaUrl(lesson.videoUrl),
      attachmentUrl: signMediaUrl(lesson.attachmentUrl),
      assignments: lesson.assignments.map((assignment) => ({
        ...assignment,
        attachmentUrl: signMediaUrl(assignment.attachmentUrl),
      })),
    })),
    assignments: course.assignments.map((assignment) => ({
      ...assignment,
      attachmentUrl: signMediaUrl(assignment.attachmentUrl),
    })),
    quiz: currentUser.role === 'ADMIN' ? course.quizzes[0] || null : withoutCorrectAnswers(course.quizzes[0]),
    exam: currentUser.role === 'ADMIN' ? course.exams[0] || null : withoutCorrectAnswers(course.exams[0]),
  };
}

export async function getTechCellCourses() {
  await requireUser();
  return prisma.course.findMany({
    where: {
      OR: [
        { category: { contains: 'tech cell', mode: 'insensitive' } },
        { title: { contains: 'vibecoding', mode: 'insensitive' } },
        { title: { contains: 'vibe coding', mode: 'insensitive' } },
      ],
    },
    select: {
      id: true,
      title: true,
      description: true,
      thumbnail: true,
      category: true,
      instructor: true,
      level: true,
      duration: true,
      lessons: {
        where: { section: { countsTowardProgress: true } },
        select: { id: true },
        orderBy: { order: 'asc' },
      },
      sections: {
        where: { type: 'RECORDED' },
        select: { _count: { select: { lessons: true } } },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
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
      sections: {
        create: [
          {
            title: 'Course Lessons',
            description: 'The structured lessons required for course completion.',
            type: 'CORE',
            order: 1,
            countsTowardProgress: true,
          },
          {
            title: 'Recorded Live Sessions',
            description: 'Additional recordings from previous live classes. These do not affect course completion.',
            type: 'RECORDED',
            order: 2,
            countsTowardProgress: false,
          },
        ],
      },
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
    const session = await prisma.liveSession.create({
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
    
    revalidatePath('/admin');
    revalidatePath('/admin/attendance');
    
    return session;
  } catch (error) {
    console.error('Prisma Create LiveSession Error:', error);
    throw error;
  }
}

export async function updateLiveSession(sessionId: string, data: {
  title?: string;
  description?: string;
  date?: string | Date;
  duration?: string;
  instructor?: string;
  link?: string;
}) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  const updateData: any = { ...data };
  if (data.date) {
    updateData.date = new Date(data.date);
  }

  try {
    const session = await prisma.liveSession.update({
      where: { id: sessionId },
      data: updateData,
    });
    
    revalidatePath('/admin');
    revalidatePath('/admin/attendance');
    
    return session;
  } catch (error) {
    console.error('Prisma Update LiveSession Error:', error);
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
  content?: string;
  videoUrl?: string;
  attachmentUrl?: string;
  attachmentType?: string;
  order: number;
  sectionType?: CourseSectionTypeValue;
}) {
  await requireAdmin();
  const sectionType = isCourseSectionType(data.sectionType) ? data.sectionType : 'CORE';
  const section = await findCourseSection(courseId, sectionType);
  const title = data.title?.trim();
  const duration = data.duration?.trim();
  if (!title || title.length > 200) throw new Error('Lesson title is required and must be at most 200 characters');
  if (!duration || duration.length > 30) throw new Error('Lesson duration is required');
  if (!Number.isInteger(data.order) || data.order < 1 || data.order > 10_000) throw new Error('Invalid lesson order');

  const lesson = await prisma.lesson.create({
    data: {
      title,
      duration,
      content: data.content?.trim() || null,
      videoUrl: data.videoUrl?.trim() || null,
      attachmentUrl: data.attachmentUrl?.trim() || null,
      attachmentType: data.attachmentType?.trim() || null,
      order: data.order,
      courseId,
      sectionId: section.id,
    },
  });
  revalidatePath('/admin');
  revalidatePath(`/courses/${courseId}`);
  revalidatePath('/tech-cell');
  return lesson;
}

export async function updateCourse(id: string, data: any) {
  await requireAdmin();

  const updateData = {
    ...(typeof data.title === 'string' && { title: data.title.trim() }),
    ...(typeof data.description === 'string' && { description: data.description.trim() }),
    ...(typeof data.category === 'string' && { category: data.category.trim() }),
    ...(typeof data.instructor === 'string' && { instructor: data.instructor.trim() }),
    ...(typeof data.duration === 'string' && { duration: data.duration.trim() }),
    ...(typeof data.level === 'string' && { level: data.level.trim() }),
    ...(typeof data.thumbnail === 'string' && { thumbnail: data.thumbnail.trim() }),
  };

  return prisma.course.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteLesson(lessonId: string) {
  await requireAdmin();
  const lesson = await prisma.lesson.delete({
    where: { id: lessonId },
    select: { id: true, courseId: true },
  });
  revalidatePath('/admin');
  revalidatePath(`/courses/${lesson.courseId}`);
  revalidatePath('/tech-cell');
  return lesson;
}

export async function updateLesson(id: string, data: {
  title?: string;
  duration?: string;
  content?: string;
  videoUrl?: string;
  attachmentUrl?: string;
  attachmentType?: string;
  order?: number;
  sectionType?: CourseSectionTypeValue;
}) {
  await requireAdmin();
  const existing = await prisma.lesson.findUnique({ where: { id }, select: { courseId: true } });
  if (!existing) throw new Error('Lesson not found');
  const section = isCourseSectionType(data.sectionType)
    ? await findCourseSection(existing.courseId, data.sectionType)
    : null;
  if (data.order !== undefined && (!Number.isInteger(data.order) || data.order < 1 || data.order > 10_000)) {
    throw new Error('Invalid lesson order');
  }

  const lesson = await prisma.lesson.update({
    where: { id },
    data: {
      ...(data.title !== undefined && { title: data.title.trim() }),
      ...(data.duration !== undefined && { duration: data.duration.trim() }),
      ...(data.content !== undefined && { content: data.content.trim() || null }),
      ...(data.videoUrl !== undefined && { videoUrl: data.videoUrl.trim() || null }),
      ...(data.attachmentUrl !== undefined && { attachmentUrl: data.attachmentUrl.trim() || null }),
      ...(data.attachmentType !== undefined && { attachmentType: data.attachmentType.trim() || null }),
      ...(data.order !== undefined && { order: data.order }),
      ...(section && { sectionId: section.id }),
    },
  });
  revalidatePath('/admin');
  revalidatePath(`/courses/${existing.courseId}`);
  revalidatePath('/tech-cell');
  return lesson;
}

export async function issueCertificate(courseId: string, userId: string) {
  await requireAdmin();

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { enrolledCourses: { where: { courseId } } }
  });
  const course = await prisma.course.findUnique({ where: { id: courseId } });

  if (!user || !course) throw new Error('User or Course not found');
  if (user.enrolledCourses.length === 0) throw new Error('User is not enrolled in this course');

  const existing = await prisma.certificate.findFirst({ where: { userId, courseId } });
  if (existing) return existing;

  const certificateNumber = `HICC-${new Date().getUTCFullYear()}-${randomBytes(8).toString('hex').toUpperCase()}`;

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
  const currentUser = await requireUser();
  const certificate = await prisma.certificate.findUnique({
    where: { id },
    select: {
      id: true,
      certificateNumber: true,
      issuedDate: true,
      userId: true,
      courseId: true,
      studentName: true,
      courseName: true,
    },
  });

  if (!certificate) return null;
  if (currentUser.role !== 'ADMIN' && certificate.userId !== currentUser.id) {
    throw new Error('Unauthorized');
  }

  return certificate;
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
        userId: { in: userIds },
      },
    });
  }
}

export async function toggleLiveAttendance(courseId: string, liveSessionId: string, userId: string, isPresent: boolean) {
  const adminId = await getUserId();
  if (!adminId) throw new Error('Not authenticated');

  const admin = await prisma.user.findUnique({ where: { id: adminId } });
  if (admin?.role !== 'ADMIN') throw new Error('Unauthorized');

  if (isPresent) {
    return prisma.attendanceRecord.upsert({
      where: { userId_liveSessionId: { userId, liveSessionId } },
      create: { userId, liveSessionId, courseId },
      update: { attendedAt: new Date() },
    });
  } else {
    return prisma.attendanceRecord.deleteMany({
      where: { userId, liveSessionId },
    });
  }
}

export async function bulkToggleLiveAttendance(courseId: string, liveSessionId: string, userIds: string[], isPresent: boolean) {
  const adminId = await getUserId();
  if (!adminId) throw new Error('Not authenticated');

  const admin = await prisma.user.findUnique({ where: { id: adminId } });
  if (admin?.role !== 'ADMIN') throw new Error('Unauthorized');

  if (isPresent) {
    // Industry standard: Use createMany with skipDuplicates to avoid transaction timeouts on large lists
    const data = userIds.map(userId => ({
      userId,
      liveSessionId,
      courseId,
    }));
    
    await prisma.attendanceRecord.createMany({
      data,
      skipDuplicates: true,
    });
  } else {
    await prisma.attendanceRecord.deleteMany({
      where: {
        liveSessionId,
        userId: { in: userIds },
      },
    });
  }
  
  revalidatePath('/admin/attendance');
  revalidatePath('/admin');
  return { success: true };
}

export async function autoMarkAttendance(courseId: string) {
  const adminId = await getUserId();
  if (!adminId) throw new Error('Not authenticated');

  const admin = await prisma.user.findUnique({ where: { id: adminId } });
  if (admin?.role !== 'ADMIN') throw new Error('Unauthorized');

  if (!courseId) throw new Error('Course ID is required');

  // Get all enrolled users
  const enrollments = await prisma.userCourse.findMany({
    where: { courseId },
    select: { userId: true }
  });
  
  if (enrollments.length === 0) {
    return { totalMarked: 0 };
  }

  const userIds = enrollments.map(e => e.userId);

  // Get all live sessions for this course
  const sessions = await prisma.liveSession.findMany({
    where: { courseId },
    select: { id: true }
  });

  if (sessions.length === 0) {
    return { totalMarked: 0 };
  }

  let totalMarked = 0;
  const operations = [];

  for (const session of sessions) {
    for (const userId of userIds) {
      operations.push(
        prisma.attendanceRecord.upsert({
          where: { userId_liveSessionId: { userId, liveSessionId: session.id } },
          create: { userId, liveSessionId: session.id, courseId },
          update: { attendedAt: new Date() },
        })
      );
      totalMarked++;
    }
  }

  await prisma.$transaction(operations);

  return { totalMarked };
}
