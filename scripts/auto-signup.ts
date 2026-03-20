import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'

async function main() {
  const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  })
  const adapter = new PrismaPg(pool)
  const prisma = new PrismaClient({ adapter })

  console.log('--- AUTO SIGNUP START ---')

  // 0. Sync Users from initial-data.json
  const data = require('../src/lib/initial-data.json')
  for (const userData of data.users) {
    console.log(`Syncing user: ${userData.email}`)
    await prisma.user.upsert({
      where: { email: userData.email },
      update: { password: userData.password }, // Update password just in case user requested it
      create: userData
    })
  }

  // 1. Get all students
  const students = await prisma.user.findMany({
    where: { role: 'STUDENT' }
  })
  console.log(`Found ${students.length} students.`)

  // 2. Ensure course exists
  const course = await prisma.course.findUnique({
    where: { id: 'course-leadership' },
    include: { lessons: true }
  })

  if (!course) {
    console.error('Course "course-leadership" not found! Run seeding first.')
    return
  }

  const lessonIds = course.lessons.map(l => l.id)

  // 3. Enroll each student and mark attendance for yesterday's lessons
  for (const student of students) {
    console.log(`Marking attendance for student: ${student.email}`)
    await prisma.userCourse.upsert({
      where: {
        userId_courseId: {
          userId: student.id,
          courseId: course.id
        }
      },
      update: {
        progress: 100,
        attendedLive: true,
        watchedLessons: lessonIds
      },
      create: {
        userId: student.id,
        courseId: course.id,
        progress: 100,
        attendedLive: true,
        watchedLessons: lessonIds
      }
    })
  }

  console.log('--- AUTO SIGNUP COMPLETED ---')
  await pool.end()
}

main().catch(console.error)
