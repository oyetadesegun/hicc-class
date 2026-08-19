'use server';

import prisma from '@/lib/prisma';
import {
  createSession,
  deleteAllUserSessions,
  deleteCurrentSession,
  getCurrentUser,
  requireUser,
} from '@/lib/auth/session';
import {
  hashPassword,
  isPasswordHash,
  performDummyPasswordCheck,
  validateNewPassword,
  verifyPassword,
} from '@/lib/auth/password';

const userInclude = {
  enrolledCourses: { include: { course: true } },
  certificates: true,
} as const;

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function validateProfile(name: string, email: string, phoneNumber?: string) {
  const normalizedName = name.trim();
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = phoneNumber?.trim() || null;

  if (normalizedName.length < 2 || normalizedName.length > 100) {
    throw new Error('Name must be between 2 and 100 characters');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) || normalizedEmail.length > 254) {
    throw new Error('Enter a valid email address');
  }
  if (normalizedPhone && !/^\+?[0-9 ()-]{7,25}$/.test(normalizedPhone)) {
    throw new Error('Enter a valid phone number');
  }

  return { name: normalizedName, email: normalizedEmail, phoneNumber: normalizedPhone };
}

async function getSafeUser(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: userInclude,
    omit: { password: true },
  });
}

export async function login(email: string, password: string) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail || !password) {
    await performDummyPasswordCheck(password || 'missing-password');
    return null;
  }

  const user = await prisma.user.findUnique({ where: { email: normalizedEmail } });
  if (!user) {
    await performDummyPasswordCheck(password);
    return null;
  }

  if (user.lockedUntil && user.lockedUntil > new Date()) {
    await performDummyPasswordCheck(password);
    return null;
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    const nextAttemptCount = user.failedLoginAttempts + 1;
    await prisma.user.update({
      where: { id: user.id },
      data: nextAttemptCount >= MAX_LOGIN_ATTEMPTS
        ? { failedLoginAttempts: 0, lockedUntil: new Date(Date.now() + LOCK_DURATION_MS) }
        : { failedLoginAttempts: { increment: 1 }, lockedUntil: null },
    });
    return null;
  }

  if (user.failedLoginAttempts || user.lockedUntil) {
    await prisma.user.update({
      where: { id: user.id },
      data: { failedLoginAttempts: 0, lockedUntil: null },
    });
  }

  // Transparently migrate existing plaintext records on first successful login.
  if (!isPasswordHash(user.password)) {
    await prisma.user.update({
      where: { id: user.id },
      data: { password: await hashPassword(password) },
    });
  }

  await deleteCurrentSession();
  await createSession(user.id);
  return getSafeUser(user.id);
}

export async function signup(name: string, email: string, password: string, phoneNumber?: string) {
  const profile = validateProfile(name, email, phoneNumber);
  validateNewPassword(password);

  const existingUser = await prisma.user.findUnique({
    where: { email: profile.email },
    select: { id: true },
  });
  if (existingUser) throw new Error('An account with this email already exists');

  const user = await prisma.user.create({
    data: { ...profile, password: await hashPassword(password), role: 'STUDENT' },
    select: { id: true },
  });

  await deleteCurrentSession();
  await createSession(user.id);
  return getSafeUser(user.id);
}

export async function me() {
  const user = await getCurrentUser();
  if (!user) return null;
  return getSafeUser(user.id);
}

export async function logout() {
  await deleteCurrentSession();
}

export async function updateMe(updates: { name?: string; phoneNumber?: string | null; avatar?: string | null }) {
  const user = await requireUser();
  const data: { name?: string; phoneNumber?: string | null; avatar?: string | null } = {};

  if (updates.name !== undefined) {
    const name = updates.name.trim();
    if (name.length < 2 || name.length > 100) throw new Error('Name must be between 2 and 100 characters');
    data.name = name;
  }
  if (updates.phoneNumber !== undefined) {
    const phone = updates.phoneNumber?.trim() || null;
    if (phone && !/^\+?[0-9 ()-]{7,25}$/.test(phone)) throw new Error('Enter a valid phone number');
    data.phoneNumber = phone;
  }
  if (updates.avatar !== undefined) {
    const avatar = updates.avatar?.trim() || null;
    if (avatar && !URL.canParse(avatar)) throw new Error('Avatar must be a valid URL');
    data.avatar = avatar;
  }

  await prisma.user.update({ where: { id: user.id }, data });
  return getSafeUser(user.id);
}

export async function updatePassword(currentPassword: string, newPassword: string) {
  const user = await requireUser();
  validateNewPassword(newPassword);

  if (!(await verifyPassword(currentPassword, user.password))) {
    throw new Error('Current password is incorrect');
  }
  if (await verifyPassword(newPassword, user.password)) {
    throw new Error('New password must be different from the current password');
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { password: await hashPassword(newPassword) },
  });

  await deleteAllUserSessions(user.id);
  await deleteCurrentSession();
  await createSession(user.id);
  return { success: true };
}
