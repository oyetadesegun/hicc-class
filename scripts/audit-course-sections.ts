import 'dotenv/config'

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required')
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) })

  try {
    const [courses, lessons] = await Promise.all([
      prisma.course.findMany({
        select: {
          id: true,
          sections: { select: { type: true, countsTowardProgress: true } },
        },
      }),
      prisma.lesson.findMany({
        select: { courseId: true, section: { select: { courseId: true } } },
      }),
    ])

    const invalidCourses = courses.filter((course) => {
      const core = course.sections.filter((section) => section.type === 'CORE' && section.countsTowardProgress)
      const recorded = course.sections.filter((section) => section.type === 'RECORDED' && !section.countsTowardProgress)
      return core.length !== 1 || recorded.length !== 1 || course.sections.length !== 2
    })
    const mismatchedLessons = lessons.filter((lesson) => lesson.courseId !== lesson.section.courseId)

    if (invalidCourses.length || mismatchedLessons.length) {
      throw new Error(`Section integrity failed: ${invalidCourses.length} invalid courses, ${mismatchedLessons.length} mismatched lessons`)
    }

    console.log(`Course section integrity passed: ${courses.length} courses, ${lessons.length} lessons`)
  } finally {
    await prisma.$disconnect()
    await pool.end()
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
