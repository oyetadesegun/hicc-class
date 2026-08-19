import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { hashPassword } from '@/lib/auth/password'

const prismaClientSingleton = () => {
  const connectionString = `${process.env.DATABASE_URL}${process.env.DATABASE_URL?.includes('?') ? '&' : '?'}application_name=nextjs-dev`
  
  const pool = new Pool({ 
    connectionString,
    max: 10,
    idleTimeoutMillis: 60000,
    connectionTimeoutMillis: 30000,
    keepAlive: true,
    statement_timeout: 30000,
  })
  const adapter = new PrismaPg(pool)
  const client = new PrismaClient({ adapter })
  
  // Auto-seeding logic for development
  if (process.env.NODE_ENV !== 'production') {
    (async () => {
      try {
        console.log('PRISMA: Checking database connectivity...')
        const courseCount = await client.course.count()
        if (courseCount === 0) {
          console.log('PRISMA: Auto-seeding initial data...')
          let data;
          try {
            data = require('./initial-data.json')
          } catch (e) {
            console.log('PRISMA: initial-data.json not found, skipping seeding')
            return;
          }
          
          // Seed Users
          console.log('PRISMA: Seeding users...')
          const devSeedPassword = process.env.DEV_SEED_PASSWORD
          if (!devSeedPassword) throw new Error('DEV_SEED_PASSWORD is required to create development users')
          const devSeedPasswordHash = await hashPassword(devSeedPassword)
          for (const user of data.users) {
            await client.user.upsert({
              where: { email: user.email },
              update: {},
              create: { ...user, password: devSeedPasswordHash }
            })
          }

          // Seed Course
          console.log('PRISMA: Seeding courses...')
          for (const courseItem of data.courses) {
            const { lessons, liveSessions, quizzes, exams, ...courseInfo } = courseItem
            const course = await client.course.create({
              data: {
                ...courseInfo,
                sections: {
                  create: [
                    { title: 'Course Lessons', type: 'CORE', order: 1, countsTowardProgress: true },
                    { title: 'Recorded Live Sessions', type: 'RECORDED', order: 2, countsTowardProgress: false },
                  ],
                },
                liveSessions: { create: liveSessions.map((s: any) => ({ ...s, date: new Date(s.date) })) },
                quizzes: { create: quizzes },
                exams: { create: exams }
              },
              include: { sections: true },
            })
            const coreSection = course.sections.find((section) => section.type === 'CORE')
            if (!coreSection) throw new Error(`Core section was not created for ${course.title}`)
            await client.lesson.createMany({
              data: lessons.map((lesson: any) => ({ ...lesson, courseId: course.id, sectionId: coreSection.id })),
            })
          }
          console.log('PRISMA: Seeding completed successfully')
        } else {
          console.log(`PRISMA: Database already has ${courseCount} courses, skipping seeding`)
        }
      } catch (err) {
        console.error('PRISMA: Auto-seeding failed or database unreachable', err)
      }
    })()
  }

  return client
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
