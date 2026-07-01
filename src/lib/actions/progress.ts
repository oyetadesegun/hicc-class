'use server';

import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';

const AUTH_COOKIE = 'auth_session';

async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value;
}

function percent(completed: number, total: number) {
  if (total <= 0) return 0;
  return Math.round((completed / total) * 100);
}

export async function getStudentDashboardSummary() {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      certificates: { select: { id: true } },
      enrolledCourses: {
        include: {
          course: {
            include: {
              lessons: {
                select: { id: true, title: true, order: true },
                orderBy: { order: 'asc' },
              },
              liveSessions: {
                select: { id: true, date: true },
                orderBy: { date: 'asc' },
              },
              assignments: {
                select: { id: true },
              },
            },
          },
        },
      },
    },
  });

  if (!user) throw new Error('User not found');

  const enrolledCourseIds = user.enrolledCourses.map((enrollment) => enrollment.courseId);

  const [attendanceRecords, assignmentSubmissions, availableCourses] = await Promise.all([
    enrolledCourseIds.length
      ? prisma.attendanceRecord.findMany({
          where: {
            userId,
            courseId: { in: enrolledCourseIds },
          },
          select: {
            courseId: true,
            lessonId: true,
            liveSessionId: true,
          },
        })
      : Promise.resolve([]),
    enrolledCourseIds.length
      ? prisma.submission.findMany({
          where: {
            userId,
            type: 'ASSIGNMENT',
            assignment: {
              courseId: { in: enrolledCourseIds },
            },
          },
          select: {
            assignmentId: true,
            assignment: {
              select: { courseId: true },
            },
          },
        })
      : Promise.resolve([]),
    prisma.course.findMany({
      where: enrolledCourseIds.length ? { id: { notIn: enrolledCourseIds } } : {},
      include: {
        lessons: { select: { id: true } },
      },
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  const attendanceByCourse = new Map<string, typeof attendanceRecords>();
  for (const record of attendanceRecords) {
    const existing = attendanceByCourse.get(record.courseId) ?? [];
    existing.push(record);
    attendanceByCourse.set(record.courseId, existing);
  }

  const submittedAssignmentsByCourse = new Map<string, Set<string>>();
  for (const submission of assignmentSubmissions) {
    if (!submission.assignmentId) continue;
    const courseId = submission.assignment?.courseId;
    if (!courseId) continue;
    const existing = submittedAssignmentsByCourse.get(courseId) ?? new Set<string>();
    existing.add(submission.assignmentId);
    submittedAssignmentsByCourse.set(courseId, existing);
  }

  const enrolledCourses = user.enrolledCourses.map((enrollment) => {
    const course = enrollment.course;
    const records = attendanceByCourse.get(course.id) ?? [];
    const watchedLessons = new Set(records.filter((record) => record.lessonId).map((record) => record.lessonId as string));
    const attendedLiveSessions = new Set(records.filter((record) => record.liveSessionId).map((record) => record.liveSessionId as string));
    const submittedAssignments = submittedAssignmentsByCourse.get(course.id) ?? new Set<string>();

    const totalRequiredItems = course.lessons.length + course.liveSessions.length + course.assignments.length;
    const completedItems = watchedLessons.size + attendedLiveSessions.size + submittedAssignments.size;
    const progress = percent(completedItems, totalRequiredItems);
    const attendance = percent(attendedLiveSessions.size, course.liveSessions.length);

    return {
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      instructor: course.instructor,
      duration: course.duration,
      level: course.level,
      thumbnail: course.thumbnail,
      lessonCount: course.lessons.length,
      liveSessionCount: course.liveSessions.length,
      assignmentCount: course.assignments.length,
      completedItems,
      totalRequiredItems,
      progress,
      attendance,
      enrolledAt: enrollment.enrolledAt.toISOString(),
    };
  });

  const averageProgress = percent(
    enrolledCourses.reduce((sum, course) => sum + course.progress, 0),
    enrolledCourses.length * 100
  );
  const averageAttendance = percent(
    enrolledCourses.reduce((sum, course) => sum + course.attendance, 0),
    enrolledCourses.length * 100
  );

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    stats: {
      coursesEnrolled: enrolledCourses.length,
      certificatesEarned: user.certificates.length,
      averageProgress,
      averageAttendance,
      completedCourses: enrolledCourses.filter((course) => course.progress === 100).length,
    },
    enrolledCourses,
    availableCourses: availableCourses.map((course) => ({
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      instructor: course.instructor,
      duration: course.duration,
      level: course.level,
      thumbnail: course.thumbnail,
      lessonCount: course.lessons.length,
    })),
  };
}
