import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = `${process.env.DATABASE_URL}${process.env.DATABASE_URL?.includes('?') ? '&' : '?'}application_name=scripts`;

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

async function main() {
  console.log('Starting attendance marking...');

  try {
    // Get all courses
    const courses = await prisma.course.findMany({
      include: {
        lessons: true,
        enrolledUsers: true,
      },
    });

    for (const course of courses) {
      console.log(`\nProcessing course: ${course.title}`);
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
              console.log(
                `    ✓ Marked ${student?.name || 'User'} as attended for "${lesson.title}"`
              );
            } else {
              console.log(
                `    → ${student?.name || 'User'} already marked for "${lesson.title}"`
              );
            }
          } catch (error) {
            console.error(
              `    ✗ Error marking attendance for ${student?.name}: ${error}`
            );
          }
        }
      }
    }

    console.log('\n✓ Attendance marking completed!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
