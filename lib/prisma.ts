import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const prismaClientSingleton = () => {
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })
  const adapter = new PrismaPg(pool)
  const client = new PrismaClient({ adapter })
  
  // Auto-seeding logic for development
  if (process.env.NODE_ENV !== 'production') {
    (async () => {
      try {
        const courseCount = await client.course.count()
        if (courseCount === 0) {
          console.log('PRISMA: Auto-seeding initial data...')
          const data = require('./initial-data.json')
          
          // Seed Users
          for (const user of data.users) {
            await client.user.upsert({
              where: { email: user.email },
              update: {},
              create: user
            })
          }

          // Seed Course
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
          console.log('PRISMA: Seeding completed')
        }
      } catch (err) {
        console.error('PRISMA: Auto-seeding failed', err)
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
