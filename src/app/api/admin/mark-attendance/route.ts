import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth/session';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const courseId = request.nextUrl.searchParams.get('courseId');
    if (!courseId) {
      return NextResponse.json({ success: false, error: 'courseId is required' }, { status: 400 });
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        lessons: { select: { id: true } },
        enrolledUsers: { select: { userId: true } },
      },
    });
    if (!course) {
      return NextResponse.json({ success: false, error: 'Course not found' }, { status: 404 });
    }

    const records = course.enrolledUsers.flatMap(({ userId }) =>
      course.lessons.map(({ id: lessonId }) => ({ userId, lessonId, courseId }))
    );
    const result = records.length
      ? await prisma.attendanceRecord.createMany({ data: records, skipDuplicates: true })
      : { count: 0 };

    return NextResponse.json({ success: true, markedCount: result.count });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Request failed';
    const status = message === 'Not authenticated' ? 401 : message === 'Unauthorized' ? 403 : 500;
    return NextResponse.json({ success: false, error: status === 500 ? 'Internal server error' : message }, { status });
  }
}
