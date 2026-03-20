import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const lessons = await prisma.lesson.findMany({
    take: 5,
    select: { id: true, title: true, courseId: true }
  });
  console.log('Database Lessons:', JSON.stringify(lessons, null, 2));
  
  const courses = await prisma.course.findMany({
    take: 5,
    select: { id: true, title: true }
  });
  console.log('Database Courses:', JSON.stringify(courses, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
