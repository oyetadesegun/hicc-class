import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import ExcelJS from 'exceljs';
import * as path from 'path';
import 'dotenv/config';
import { hashPassword } from '../src/lib/auth/password';

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const filePath = path.resolve(__dirname, '..', 'private-imports', 'Basic Leadership Course (Responses).xlsx');
  console.log('Reading file:', filePath);

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  if (!worksheet) throw new Error('Spreadsheet contains no worksheets');

  const headers = worksheet.getRow(1).values as Array<unknown>;
  const data: Record<string, string>[] = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return;
    const record: Record<string, string> = {};
    row.eachCell((cell, columnNumber) => {
      const header = String(headers[columnNumber] ?? '').trim();
      if (header) record[header] = cell.text.trim();
    });
    if (Object.keys(record).length) data.push(record);
  });

  console.log(`Found ${data.length} students in Excel.`);

  const defaultPassword = process.env.IMPORT_DEFAULT_PASSWORD;
  if (!defaultPassword) throw new Error('IMPORT_DEFAULT_PASSWORD is required');
  const passwordHash = await hashPassword(defaultPassword);
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
          password: passwordHash,
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
