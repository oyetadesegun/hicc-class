import { defineConfig } from 'prisma/config';
import 'dotenv/config';
import process from 'node:process';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
