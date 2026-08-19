import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/lib/auth/password';

const prisma = new PrismaClient();

async function main() {
  const studentPassword = process.env.SEED_STUDENT_PASSWORD;
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  if (!studentPassword || !adminPassword) {
    throw new Error('SEED_STUDENT_PASSWORD and SEED_ADMIN_PASSWORD are required');
  }

  console.log('Cleaning up database...');
  await prisma.submission.deleteMany();
  await prisma.userCourse.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.liveSession.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.assignment.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  console.log('Seeding initial data...');

  // Create Users
  const student = await prisma.user.create({
    data: {
      id: 'student-1',
      name: 'Harvester Student',
      email: 'student@harvesters.org',
      password: await hashPassword(studentPassword),
      role: 'STUDENT',
      createdAt: new Date('2026-01-15'),
    },
  });

  const admin = await prisma.user.create({
    data: {
      id: 'admin-1',
      name: 'Admin User',
      email: 'admin@harvesters.org',
      password: await hashPassword(adminPassword),
      role: 'ADMIN',
    },
  });

  // Courses from mock-data
  const coursesData = [
    {
      id: 'course-leadership',
      title: 'Basic Leadership',
      description: 'Develop essential leadership skills to lead teams effectively and inspire others.',
      instructor: 'Dr. James Wilson',
      duration: '6 weeks',
      category: 'Leadership',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      level: 'Beginner',
      price: 0,
      lessons: [
        { id: 'lesson-l1', title: 'Leadership Foundations', videoUrl: '/videos/leadership-foundations.mp4', duration: '45 mins', order: 1 },
        { id: 'lesson-l2', title: 'Communication Skills', videoUrl: '/videos/communication-skills.mp4', duration: '50 mins', order: 2 },
      ],
      liveSessions: [
        {
          id: 'live-l1',
          title: 'Leadership Workshop',
          date: new Date('2026-03-25T10:00:00Z'),
          instructor: 'Dr. James Wilson',
          duration: '2 hours',
          link: 'https://zoom.us/j/987654',
        }
      ],
      quizzes: [
        {
          id: 'quiz-l1',
          title: 'Leadership Basics Quiz',
          questions: [
            {
              id: 'lq1',
              question: 'What is the most important quality of a leader?',
              options: ['Authority', 'Integrity', 'Intelligence', 'Wealth'],
              correctAnswer: 1,
            },
          ],
        }
      ],
      exams: [
        {
          id: 'exam-l1',
          title: 'Basic Leadership Certification Exam',
          duration: 60,
          questions: [
            {
              id: 'le1',
              question: 'Explain the difference between management and leadership.',
              options: ['They are the same', 'Management is about processes, leadership is about people', 'Leadership is a rank', 'Management is for small teams'],
              correctAnswer: 1,
            },
          ],
        }
      ],
    },
  ];

  for (const courseItem of coursesData) {
    const { lessons, liveSessions, quizzes, exams, ...courseInfo } = courseItem;
    
    const course = await prisma.course.create({
      data: {
        ...courseInfo,
        sections: {
          create: [
            { title: 'Course Lessons', type: 'CORE', order: 1, countsTowardProgress: true },
            { title: 'Recorded Live Sessions', type: 'RECORDED', order: 2, countsTowardProgress: false },
          ],
        },
        liveSessions: {
          create: liveSessions,
        },
        quizzes: {
          create: quizzes,
        },
        exams: {
          create: exams,
        },
      },
      include: { sections: true },
    });
    const coreSection = course.sections.find((section) => section.type === 'CORE');
    if (!coreSection) throw new Error(`Core section was not created for ${course.title}`);
    await prisma.lesson.createMany({
      data: lessons.map((lesson) => ({ ...lesson, courseId: course.id, sectionId: coreSection.id })),
    });
    console.log(`Created course: ${course.title}`);
  }

  // Enroll student in courses
  await prisma.userCourse.createMany({
    data: [
      { userId: 'student-1', courseId: 'course-leadership', progress: 0 },
    ],
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
