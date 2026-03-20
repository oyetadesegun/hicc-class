'use server';

import prisma from '../prisma';
import { cookies } from 'next/headers';

const AUTH_COOKIE = 'auth_session';

async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value;
}

export async function autoMarkAttendance(courseId?: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role !== 'ADMIN') throw new Error('Unauthorized');

  try {
    // Get courses to process
    const courseFilter = courseId ? { id: courseId } : {};
    const courses = await prisma.course.findMany({
      where: courseFilter,
      include: {
        lessons: true,
        enrolledUsers: true,
      },
    });

    let totalMarked = 0;
    const markedDetails: any[] = [];

    for (const course of courses) {
      // For each enrolled student
      for (const enrollment of course.enrolledUsers) {
        const student = await prisma.user.findUnique({
          where: { id: enrollment.userId },
        });

        // Create attendance record for each lesson
        for (const lesson of course.lessons) {
          try {
            const existing = await prisma.attendanceRecord.findUnique({
              where: {
                userId_lessonId: {
                  userId: enrollment.userId,
                  lessonId: lesson.id,
                },
              },
            });

            if (!existing) {
              const record = await prisma.attendanceRecord.create({
                data: {
                  userId: enrollment.userId,
                  lessonId: lesson.id,
                  courseId: course.id,
                  attendedAt: new Date(),
                },
              });
              totalMarked++;
              markedDetails.push({
                studentName: student?.name || 'Unknown',
                studentEmail: student?.email || 'Unknown',
                lessonTitle: lesson.title,
                courseTitle: course.title,
              });
            }
          } catch (error) {
            console.error(`Error marking attendance:`, error);
          }
        }
      }
    }

    return {
      success: true,
      totalMarked,
      markedDetails,
      message: `Successfully marked ${totalMarked} attendance records`,
    };
  } catch (error) {
    console.error('Auto-mark attendance error:', error);
    throw error;
  }
}
