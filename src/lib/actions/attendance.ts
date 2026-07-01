'use server';

import prisma from '../prisma';
import { me } from './auth';
import crypto from 'crypto';

/**
 * Mark a standard lesson as watched.
 */
export async function markLessonWatched(lessonId: string, courseId: string) {
  const user = await me();
  if (!user) return { success: false, error: 'Not authenticated' };

  // Check enrollment
  const enrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId,
      },
    },
  });

  if (!enrollment) {
    return { success: false, error: 'You are not enrolled in this course' };
  }

  // Record attendance
  try {
    await prisma.attendanceRecord.upsert({
      where: {
        userId_lessonId: {
          userId: user.id,
          lessonId,
        },
      },
      update: {},
      create: {
        userId: user.id,
        courseId,
        lessonId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to mark lesson watched:', error);
    return { success: false, error: 'Failed to record attendance' };
  }
}

import { revalidatePath } from 'next/cache';

/**
 * Generate a new random 6-digit code for a live session. (Admin only)
 */
export async function generateSessionCode(sessionId: string) {
  const user = await me();
  if (!user || user.role !== 'ADMIN') return { success: false, error: 'Unauthorized' };

  // Generate a random 6-digit numeric code
  const newCode = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const session = await prisma.liveSession.update({
      where: { id: sessionId },
      data: {
        secretCode: newCode,
        codeGeneratedAt: new Date(),
      },
    });
    
    revalidatePath('/admin/attendance');
    revalidatePath('/admin');
    
    return { success: true, code: session.secretCode };
  } catch (error) {
    console.error('Failed to generate session code:', error);
    return { success: false, error: 'Database error' };
  }
}

/**
 * Submit a 6-digit code to mark attendance for a live session.
 */
export async function submitSessionCode(code: string, courseId: string) {
  const user = await me();
  if (!user) return { success: false, error: 'Not authenticated' };

  // Check enrollment
  const enrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId,
      },
    },
  });

  if (!enrollment) {
    return { success: false, error: 'You are not enrolled in this course' };
  }

  // Find the live session with this code in the given course
  const liveSession = await prisma.liveSession.findFirst({
    where: {
      courseId,
      secretCode: code.trim(),
    },
  });

  if (!liveSession || !liveSession.codeGeneratedAt) {
    return { success: false, error: 'Invalid attendance code. Please check and try again.' };
  }

  // Check expiry (15 minutes) - Industry standard for live attendance to prevent code sharing
  const expiryTimeInMs = 15 * 60 * 1000; // 15 mins
  const now = new Date().getTime();
  const generatedTime = new Date(liveSession.codeGeneratedAt).getTime();
  
  if (now - generatedTime > expiryTimeInMs) {
    return { success: false, error: 'This attendance code has expired. Please ask your instructor to generate a new one.' };
  }

  // Check if already attended
  const existing = await prisma.attendanceRecord.findUnique({
    where: {
      userId_liveSessionId: {
        userId: user.id,
        liveSessionId: liveSession.id,
      },
    },
  });

  if (existing) {
    return { success: false, error: 'ALREADY_ATTENDED' };
  }

  // Record attendance
  try {
    await prisma.attendanceRecord.create({
      data: {
        userId: user.id,
        courseId,
        liveSessionId: liveSession.id,
      },
    });

    return { success: true, liveSessionId: liveSession.id };
  } catch (error) {
    console.error('Failed to mark live session attendance:', error);
    return { success: false, error: 'Failed to record attendance' };
  }
}

/**
 * Mark attendance via QR scan (which provides both sessionId and code).
 */
export async function markAttendanceByQR(sessionId: string, code: string) {
  const user = await me();
  if (!user) return { success: false, error: 'Not authenticated' };

  const liveSession = await prisma.liveSession.findUnique({
    where: { id: sessionId },
    include: { course: true }
  });

  if (!liveSession || liveSession.secretCode !== code || !liveSession.codeGeneratedAt) {
    return { success: false, error: 'Invalid or missing QR code data.' };
  }

  // Check expiry (6 hours)
  const sixHoursInMs = 6 * 60 * 60 * 1000;
  const now = new Date().getTime();
  const generatedTime = new Date(liveSession.codeGeneratedAt).getTime();
  
  if (now - generatedTime > sixHoursInMs) {
    return { success: false, error: 'This QR code has expired.' };
  }

  // Check enrollment
  const enrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: liveSession.courseId,
      },
    },
  });

  if (!enrollment) {
    return { success: false, error: 'You are not enrolled in this course.' };
  }

  // Check if already attended
  const existing = await prisma.attendanceRecord.findUnique({
    where: {
      userId_liveSessionId: {
        userId: user.id,
        liveSessionId: liveSession.id,
      },
    },
  });

  if (existing) {
    return { success: false, error: 'ALREADY_ATTENDED', courseTitle: liveSession.course.title, sessionTitle: liveSession.title };
  }

  // Record attendance
  try {
    await prisma.attendanceRecord.create({
      data: {
        userId: user.id,
        courseId: liveSession.courseId,
        liveSessionId: liveSession.id,
      },
    });

    return { 
      success: true, 
      courseTitle: liveSession.course.title,
      sessionTitle: liveSession.title
    };
  } catch (error) {
    console.error('Failed to mark QR attendance:', error);
    return { success: false, error: 'Failed to record attendance' };
  }
}

/**
 * Get the current user's attendance records for a specific course.
 * Returns arrays of completed lesson IDs and live session IDs.
 */
export async function getUserAttendance(courseId: string) {
  const user = await me();
  if (!user) return { watchedLessons: [], attendedLiveSessions: [] };

  const records = await prisma.attendanceRecord.findMany({
    where: {
      userId: user.id,
      courseId,
    },
    select: {
      lessonId: true,
      liveSessionId: true,
    },
  });

  const watchedLessons = records.filter(r => r.lessonId).map(r => r.lessonId as string);
  const attendedLiveSessions = records.filter(r => r.liveSessionId).map(r => r.liveSessionId as string);

  return { watchedLessons, attendedLiveSessions };
}
