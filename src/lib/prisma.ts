import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const prismaClientSingleton = () => {
  const connectionString = `${process.env.DATABASE_URL}${process.env.DATABASE_URL?.includes('?') ? '&' : '?'}application_name=nextjs-dev`
  
  const pool = new Pool({ 
    connectionString,
    ssl: { rejectUnauthorized: false },
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
          for (const user of data.users) {
            await client.user.upsert({
              where: { email: user.email },
              update: {},
              create: user
            })
          }

          // Seed Course
          console.log('PRISMA: Seeding courses...')
          for (const courseItem of data.courses) {
            const { lessons, liveSessions, quizzes, exams, ...courseInfo } = courseItem
            await client.course.create({
              data: {
                ...courseInfo,
                lessons: { create: lessons },
                liveSessions: { create: liveSessions.map((s: any) => ({ ...s, date: new Date(s.date) })) },
                quizzes: { create: quizzes },
                exams: { create: exams }
              }
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
