import 'dotenv/config';
import prisma from '../src/lib/prisma';
import { hashPassword, isPasswordHash } from '../src/lib/auth/password';

async function main() {
  if (process.env.CONFIRM_PASSWORD_MIGRATION !== 'yes') {
    throw new Error('Set CONFIRM_PASSWORD_MIGRATION=yes after confirming DATABASE_URL points to the intended database');
  }

  const users = await prisma.user.findMany({ select: { id: true, password: true } });
  const legacyUsers = users.filter((user) => !isPasswordHash(user.password));

  for (const user of legacyUsers) {
    await prisma.user.update({
      where: { id: user.id },
      data: { password: await hashPassword(user.password) },
    });
  }

  console.log(`Migrated ${legacyUsers.length} legacy password record(s) to scrypt.`);
}

main()
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
