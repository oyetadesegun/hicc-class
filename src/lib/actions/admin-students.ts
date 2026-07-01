'use server';

import { cookies } from 'next/headers';
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

function percent(completed: number, total: number) {
  if (total <= 0) return 0;
  return Math.round((completed / total) * 100);
}

export async function getAdminStudentsOverview() {
  await requireAdmin();

  const students = await prisma.user.findMany({
    where: { role: 'STUDENT' },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      createdAt: true,
      certificates: { select: { id: true } },
      submissions: {
        where: { type: 'ASSIGNMENT' },
        select: {
          id: true,
          status: true,
          assignmentId: true,
          assignment: { select: { courseId: true } },
        },
      },
      attendanceRecords: {
        select: {
          courseId: true,
          lessonId: true,
          liveSessionId: true,
        },
      },
      enrolledCourses: {
        include: {
          course: {
            select: {
              id: true,
              title: true,
              lessons: { select: { id: true } },
              liveSessions: { select: { id: true } },
              assignments: { select: { id: true } },
            },
          },
        },
        orderBy: { enrolledAt: 'desc' },
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  const rows = students.map((student) => {
    const courseSummaries = student.enrolledCourses.map((enrollment) => {
      const course = enrollment.course;
      const records = student.attendanceRecords.filter((record) => record.courseId === course.id);
      const watchedLessons = new Set(records.filter((record) => record.lessonId).map((record) => record.lessonId as string));
      const attendedLiveSessions = new Set(records.filter((record) => record.liveSessionId).map((record) => record.liveSessionId as string));
      const submittedAssignments = new Set(
        student.submissions
          .filter((submission) => submission.assignment?.courseId === course.id && submission.assignmentId)
          .map((submission) => submission.assignmentId as string)
      );

      const totalItems = course.lessons.length + course.liveSessions.length + course.assignments.length;

      return {
        courseId: course.id,
        courseTitle: course.title,
        progress: percent(watchedLessons.size + attendedLiveSessions.size + submittedAssignments.size, totalItems),
        attendance: percent(attendedLiveSessions.size, course.liveSessions.length),
        submittedAssignments: submittedAssignments.size,
        totalAssignments: course.assignments.length,
        watchedLessons: watchedLessons.size,
        totalLessons: course.lessons.length,
        attendedLiveSessions: attendedLiveSessions.size,
        totalLiveSessions: course.liveSessions.length,
      };
    });

    const averageProgress = percent(
      courseSummaries.reduce((sum, course) => sum + course.progress, 0),
      courseSummaries.length * 100
    );
    const averageAttendance = percent(
      courseSummaries.reduce((sum, course) => sum + course.attendance, 0),
      courseSummaries.length * 100
    );

    return {
      id: student.id,
      name: student.name,
      email: student.email,
      phoneNumber: student.phoneNumber,
      joinedAt: student.createdAt.toISOString(),
      enrolledCourseCount: student.enrolledCourses.length,
      certificateCount: student.certificates.length,
      submittedAssignmentCount: student.submissions.length,
      gradedAssignmentCount: student.submissions.filter((submission) => submission.status === 'GRADED').length,
      averageProgress,
      averageAttendance,
      courses: courseSummaries,
    };
  });

  return {
    stats: {
      totalStudents: rows.length,
      activeStudents: rows.filter((row) => row.enrolledCourseCount > 0).length,
      averageProgress: percent(rows.reduce((sum, row) => sum + row.averageProgress, 0), rows.length * 100),
      averageAttendance: percent(rows.reduce((sum, row) => sum + row.averageAttendance, 0), rows.length * 100),
    },
    rows,
  };
}
