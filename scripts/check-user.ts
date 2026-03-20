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

  const email = 'johnwellacademy@gmail.com'
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      enrolledCourses: true
    }
  })

  console.log('--- USER CHECK ---')
  if (!user) {
    console.log(`User ${email} not found!`)
  } else {
    console.log(`User ID: ${user.id}`)
    console.log(`Email: ${user.email}`)
    console.log(`Enrolled Courses Count: ${user.enrolledCourses.length}`)
    console.log(`Course IDs: ${user.enrolledCourses.map(ec => ec.courseId).join(', ')}`)
  }
  console.log('------------------')
  await pool.end()
}

main().catch(console.error)
