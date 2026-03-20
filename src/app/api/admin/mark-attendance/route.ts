import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// Initialize Prisma
const connectionString = `${process.env.DATABASE_URL}${process.env.DATABASE_URL?.includes('?') ? '&' : '?'}application_name=nextjs-api`;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 30000,
  keepAlive: true,
  statement_timeout: 30000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  try {
    // Get query parameters for optional filtering
    const { searchParams } = new URL(request.url);
    const courseId = searchParams.get('courseId');

    console.log('Starting attendance marking...');

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
    const markedStudents: any[] = [];

    for (const course of courses) {
      console.log(`Processing course: ${course.title}`);
      console.log(`  - Lessons: ${course.lessons.length}`);
      console.log(`  - Enrolled users: ${course.enrolledUsers.length}`);

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
              markedStudents.push({
                studentName: student?.name || 'Unknown',
                lessonTitle: lesson.title,
                courseTitle: course.title,
              });
              console.log(
                `  ✓ Marked ${student?.name || 'User'} as attended for "${lesson.title}"`
              );
            }
          } catch (error) {
            console.error(
              `  ✗ Error marking attendance for ${student?.name}: ${error}`
            );
          }
        }
      }
    }

    console.log(`Total attendance records created: ${totalMarked}`);

    return NextResponse.json(
      {
        success: true,
        message: `Successfully marked ${totalMarked} attendance records`,
        markedCount: totalMarked,
        markedStudents,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error marking attendance:', error);
    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
