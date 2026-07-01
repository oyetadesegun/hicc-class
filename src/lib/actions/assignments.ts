'use server';

import prisma from '@/lib/prisma';
import { me } from './auth';

type AssignmentAttachmentInput = {
  url: string;
  type: string;
  name: string;
};

const ALLOWED_ASSIGNMENT_ATTACHMENT_EXTENSIONS = new Set([
  'pdf',
  'doc',
  'docx',
  'txt',
  'md',
  'zip',
  'png',
  'jpg',
  'jpeg',
  'webp',
]);

function normalizeOptionalUrl(value?: string) {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (!['http:', 'https:'].includes(url.protocol)) {
      return null;
    }
    return url.toString();
  } catch {
    return null;
  }
}

function validateAttachment(attachment?: AssignmentAttachmentInput) {
  if (!attachment) return null;

  const url = normalizeOptionalUrl(attachment.url);
  if (!url) {
    return { error: 'Uploaded file URL is invalid' as const };
  }

  const imagekitEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;
  if (imagekitEndpoint) {
    const uploadHost = new URL(url).host;
    const imagekitHost = new URL(imagekitEndpoint).host;
    if (uploadHost !== imagekitHost) {
      return { error: 'Uploaded file must come from the configured file storage provider' as const };
    }
  }

  const name = attachment.name?.trim();
  if (!name || name.length > 255) {
    return { error: 'Uploaded file name is invalid' as const };
  }

  const extension = name.split('.').pop()?.toLowerCase();
  if (!extension || !ALLOWED_ASSIGNMENT_ATTACHMENT_EXTENSIONS.has(extension)) {
    return { error: 'Uploaded file type is not allowed' as const };
  }

  const type = attachment.type?.trim() || 'application/octet-stream';
  if (type.length > 120) {
    return { error: 'Uploaded file type is invalid' as const };
  }

  return { url, type, name };
}

// ─────────────────────────────────────────────────────────────
// QUERIES
// ─────────────────────────────────────────────────────────────

/**
 * Get the assignment linked to a specific lesson.
 * Returns null if the lesson has no assignment.
 */
export async function getAssignmentByLesson(lessonId: string) {
  const user = await me();
  if (!user) return null;

  const assignment = await prisma.assignment.findFirst({
    where: { lessonId },
    include: {
      submissions: {
        where: { userId: user.id, type: 'ASSIGNMENT' },
        orderBy: { submittedAt: 'desc' },
        take: 1,
      },
    },
  });

  return assignment;
}

/**
 * Get all assignments for a course, with the current user's submission status.
 */
export async function getAssignmentsByCourse(courseId: string) {
  const user = await me();
  if (!user) return [];

  const assignments = await prisma.assignment.findMany({
    where: { courseId },
    include: {
      lesson: { select: { id: true, title: true, order: true } },
      submissions: {
        where: { userId: user.id, type: 'ASSIGNMENT' },
        orderBy: { submittedAt: 'desc' },
        take: 1,
      },
    },
    orderBy: { lesson: { order: 'asc' } },
  });

  return assignments;
}

/**
 * Get a single assignment by ID with the user's submission.
 */
export async function getAssignmentById(assignmentId: string) {
  const user = await me();
  if (!user) return null;

  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
    include: {
      course: { select: { id: true, title: true } },
      lesson: { select: { id: true, title: true, order: true } },
      submissions: {
        where: { userId: user.id, type: 'ASSIGNMENT' },
        orderBy: { submittedAt: 'desc' },
        take: 1,
      },
    },
  });

  return assignment;
}

/**
 * Get all assignments for the current user across all enrolled courses.
 */
export async function getUserAssignments() {
  const user = await me();
  if (!user) return [];

  // Get enrolled course IDs
  const enrollments = await prisma.userCourse.findMany({
    where: { userId: user.id },
    select: { courseId: true },
  });

  const courseIds = enrollments.map((e) => e.courseId);
  if (courseIds.length === 0) return [];

  const assignments = await prisma.assignment.findMany({
    where: { courseId: { in: courseIds } },
    include: {
      course: { select: { id: true, title: true } },
      lesson: { select: { id: true, title: true, order: true } },
      submissions: {
        where: { userId: user.id, type: 'ASSIGNMENT' },
        orderBy: { submittedAt: 'desc' },
        take: 1,
      },
    },
    orderBy: [
      { course: { title: 'asc' } },
      { lesson: { order: 'asc' } },
    ],
  });

  return assignments;
}

// ─────────────────────────────────────────────────────────────
// MUTATIONS
// ─────────────────────────────────────────────────────────────

/**
 * Submit an assignment. Creates a Submission record linked to the assignment.
 * Prevents duplicate submissions (one submission per user per assignment).
 */
export async function submitAssignment(
  assignmentId: string,
  data: { description?: string; projectUrl?: string; attachment?: AssignmentAttachmentInput }
) {
  const user = await me();
  if (!user) {
    return { success: false, error: 'Not authenticated' };
  }

  // Validate the assignment exists
  const assignment = await prisma.assignment.findUnique({
    where: { id: assignmentId },
    select: { id: true, courseId: true },
  });

  if (!assignment) {
    return { success: false, error: 'Assignment not found' };
  }

  // Check the user is enrolled in the course
  const enrollment = await prisma.userCourse.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: assignment.courseId,
      },
    },
  });

  if (!enrollment) {
    return { success: false, error: 'You are not enrolled in this course' };
  }

  // Check for existing submission (prevent duplicates)
  const existing = await prisma.submission.findFirst({
    where: {
      userId: user.id,
      assignmentId,
      type: 'ASSIGNMENT',
    },
  });

  if (existing) {
    return { success: false, error: 'You have already submitted this assignment' };
  }

  // Validate input
  const description = data.description?.trim() ?? '';
  const projectUrl = normalizeOptionalUrl(data.projectUrl);
  const attachment = validateAttachment(data.attachment);

  if (attachment && 'error' in attachment) {
    return { success: false, error: attachment.error };
  }

  if (!description && !projectUrl && !attachment) {
    return { success: false, error: 'Add a response, project URL, or uploaded file before submitting' };
  }

  if (description.length > 10000) {
    return { success: false, error: 'Description must be under 10,000 characters' };
  }

  if (data.projectUrl?.trim() && !projectUrl) {
    return { success: false, error: 'Please enter a valid URL (e.g., https://example.com)' };
  }

  // Create submission
  const submission = await prisma.submission.create({
    data: {
      type: 'ASSIGNMENT',
      status: 'SUBMITTED',
      content: { description },
      projectUrl,
      attachmentUrl: attachment && !('error' in attachment) ? attachment.url : null,
      attachmentType: attachment && !('error' in attachment) ? attachment.type : null,
      attachmentName: attachment && !('error' in attachment) ? attachment.name : null,
      userId: user.id,
      assignmentId,
    },
  });

  return { success: true, submission };
}

/**
 * Check if the current user has submitted a specific assignment.
 */
export async function getUserSubmission(assignmentId: string) {
  const user = await me();
  if (!user) return null;

  const submission = await prisma.submission.findFirst({
    where: {
      userId: user.id,
      assignmentId,
      type: 'ASSIGNMENT',
    },
    orderBy: { submittedAt: 'desc' },
  });

  return submission;
}
