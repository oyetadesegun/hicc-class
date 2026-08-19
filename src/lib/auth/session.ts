import { createHash, randomBytes } from 'node:crypto';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const PRODUCTION_COOKIE = '__Host-hicc_session';
const DEVELOPMENT_COOKIE = 'hicc_session';
const LEGACY_COOKIE = 'auth_session';

function cookieName() {
  return process.env.NODE_ENV === 'production' ? PRODUCTION_COOKIE : DEVELOPMENT_COOKIE;
}

function tokenHash(token: string) {
  return createHash('sha256').update(token, 'utf8').digest('hex');
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString('base64url');
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await prisma.$transaction([
    prisma.session.deleteMany({ where: { userId, expiresAt: { lte: new Date() } } }),
    prisma.session.create({ data: { userId, tokenHash: tokenHash(token), expiresAt } }),
  ]);

  const cookieStore = await cookies();
  cookieStore.set(cookieName(), token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    expires: expiresAt,
    priority: 'high',
  });
  cookieStore.delete(LEGACY_COOKIE);
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;
  if (!token) return null;

  const session = await prisma.session.findUnique({
    where: { tokenHash: tokenHash(token) },
    include: { user: true },
  });

  if (!session || session.expiresAt <= new Date()) return null;
  return session.user;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error('Not authenticated');
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== 'ADMIN') throw new Error('Unauthorized');
  return user;
}

export async function deleteCurrentSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName())?.value;

  if (token) {
    await prisma.session.deleteMany({ where: { tokenHash: tokenHash(token) } });
  }

  cookieStore.delete(cookieName());
  cookieStore.delete(PRODUCTION_COOKIE);
  cookieStore.delete(DEVELOPMENT_COOKIE);
  cookieStore.delete(LEGACY_COOKIE);
}

export async function deleteAllUserSessions(userId: string) {
  await prisma.session.deleteMany({ where: { userId } });
}
