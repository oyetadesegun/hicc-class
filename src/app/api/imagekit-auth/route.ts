import { createHmac } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireUser } from '@/lib/auth/session';
import prisma from '@/lib/prisma';

type UploadPurpose = 'lesson-video' | 'course-material' | 'assignment-submission';

function encodeJwtPart(value: object) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function signUploadToken(payload: Record<string, string | number>) {
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  if (!publicKey || !privateKey) throw new Error('Missing ImageKit environment variables');

  const header = encodeJwtPart({ alg: 'HS256', typ: 'JWT', kid: publicKey });
  const body = encodeJwtPart(payload);
  const signature = createHmac('sha256', privateKey).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${signature}`;
}

function uploadPolicy(
  purpose: UploadPurpose,
  userId: string,
  context?: { courseId: string; sectionType: 'CORE' | 'RECORDED' },
) {
  switch (purpose) {
    case 'lesson-video':
      if (!context) throw new Error('Course and section are required for lesson videos');
      return {
        folder: `/courses/${context.courseId}/${context.sectionType === 'RECORDED' ? 'recorded-live-sessions' : 'course-lessons'}`,
        checks: '"file.mime" : video AND "file.size" <= "100MB"',
      };
    case 'course-material':
      return {
        folder: '/course-materials',
        checks: '"file.size" <= "25MB"',
      };
    case 'assignment-submission':
      return {
        folder: `/assignment-submissions/${userId}`,
        checks: '"file.mime" IN ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain", "application/zip", "image/png", "image/jpeg", "image/webp"] AND "file.size" <= "25MB"',
      };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      fileName?: string;
      purpose?: UploadPurpose;
      courseId?: string;
      sectionType?: 'CORE' | 'RECORDED';
    };
    const fileName = body.fileName?.trim();
    const purpose = body.purpose;

    if (!fileName || fileName.length > 255 || !purpose) {
      return NextResponse.json({ error: 'Invalid upload request' }, { status: 400 });
    }

    const user = purpose === 'assignment-submission' ? await requireUser() : await requireAdmin();
    let lessonContext: { courseId: string; sectionType: 'CORE' | 'RECORDED' } | undefined;
    if (purpose === 'lesson-video') {
      const courseId = body.courseId?.trim();
      const sectionType = body.sectionType;
      if (!courseId || !/^[A-Za-z0-9_-]{1,191}$/.test(courseId) || (sectionType !== 'CORE' && sectionType !== 'RECORDED')) {
        return NextResponse.json({ error: 'Invalid course section' }, { status: 400 });
      }
      const section = await prisma.courseSection.findUnique({
        where: { courseId_type: { courseId, type: sectionType } },
        select: { id: true },
      });
      if (!section) return NextResponse.json({ error: 'Course section not found' }, { status: 404 });
      lessonContext = { courseId, sectionType };
    }
    const policy = uploadPolicy(purpose, user.id, lessonContext);
    const now = Math.floor(Date.now() / 1000);
    const uploadPayload = {
      fileName,
      folder: policy.folder,
      useUniqueFileName: 'true',
      isPrivateFile: 'true',
      checks: policy.checks,
      iat: now,
      exp: now + 5 * 60,
    };

    return NextResponse.json({ token: signUploadToken(uploadPayload), uploadPayload });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Upload authorization failed';
    const status = message === 'Not authenticated' ? 401 : message === 'Unauthorized' ? 403 : 500;
    return NextResponse.json(
      { error: status === 500 ? 'Failed to authorize upload' : message },
      { status },
    );
  }
}
