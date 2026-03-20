import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as XLSX from 'xlsx';
import * as path from 'path';
import 'dotenv/config';

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const filePath = path.resolve(__dirname, '..', 'public', 'Basic Leadership Course (Responses).xlsx');
  console.log('Reading file:', filePath);

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: any[] = XLSX.utils.sheet_to_json(worksheet);

  console.log(`Found ${data.length} students in Excel.`);

  const DEFAULT_PASSWORD = '123456';
  const COURSE_ID = 'course-leadership'; // From prisma/seed.ts

  for (const row of data) {
    const email = row['Email Address']?.trim().toLowerCase();
    const name = row['Name']?.trim();
    const phoneNumber = row['Phone Number']?.toString().trim();

    if (!email || !name) {
      console.warn('Skipping row due to missing email or name:', row);
      continue;
    }

    try {
      // Create or update user
      const user = await prisma.user.upsert({
        where: { email },
        update: {
          name,
          phoneNumber,
        },
        create: {
          email,
          name,
          phoneNumber,
          password: DEFAULT_PASSWORD,
          role: 'STUDENT',
        },
      });

      // Enroll in course
      await prisma.userCourse.upsert({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId: COURSE_ID,
          },
        },
        update: {}, // No change if already enrolled
        create: {
          userId: user.id,
          courseId: COURSE_ID,
          progress: 0,
        },
      });

      console.log(`Synchronized student: ${name} (${email})`);
    } catch (error) {
      console.error(`Failed to sync student ${email}:`, error);
    }
  }

  console.log('Import completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
