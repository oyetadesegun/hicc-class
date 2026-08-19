import 'dotenv/config'

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'

async function main() {
  const email = process.argv[2]?.trim().toLowerCase()
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error('Usage: npm run admin:promote -- person@example.com')
  }
  if (process.env.CONFIRM_ADMIN_PROMOTION !== 'yes') {
    throw new Error('Set CONFIRM_ADMIN_PROMOTION=yes to confirm this privileged change')
  }
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required')

  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter: new PrismaPg(pool) })

  try {
    const existing = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, role: true },
    })
    if (!existing) throw new Error(`No account exists for ${email}`)

    const user = await prisma.user.update({
      where: { id: existing.id },
      data: { role: 'ADMIN' },
      select: { id: true, email: true, role: true },
    })

    console.log(`Promoted ${user.email} to ${user.role}`)
  } finally {
    await prisma.$disconnect()
    await pool.end()
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
