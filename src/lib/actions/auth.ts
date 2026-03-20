'use server';

import { cookies } from 'next/headers';
import prisma from '../prisma';
import { User } from '@prisma/client';
import { toast } from 'sonner';
// import { User } from '@prisma/client';

const AUTH_COOKIE = 'auth_session';

async function getUserId() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value;
}

export async function login(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      enrolledCourses: true,
      certificates: true,
    },
  });

  if (user && user.password === password) { // In production, use bcrypt!
    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE, user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return user;
  }

  return null;
}

export async function signup(name: string, email: string, password: string, phoneNumber?: string): Promise<User> {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    toast.error('User already exists');
  }

  const user = await prisma.user.create({
    // @ts-ignore - phoneNumber is not recognized in some type environments
    data: {
      name,
      email,
      password, // In production, use bcrypt!
      phoneNumber,
      role: 'STUDENT',
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });

  return user;
}

export async function me() {
  const cookieStore = await cookies();
  const userId = cookieStore.get(AUTH_COOKIE)?.value;

  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    include: {
      enrolledCourses: {
        include: {
          course: true,
        },
      },
      certificates: true,
    },
  });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
}

export async function updateMe(updates: any): Promise<User> {
  const userId = await getUserId();

  if (!userId) throw new Error('Not authenticated');

  // Filter out fields that shouldn't be updated directly or might cause Prisma errors
  const { id, email, createdAt, updatedAt, ...validUpdates } = updates;

  return prisma.user.update({
    where: { id: userId },
    data: validUpdates,
  });
}

export async function updatePassword(password: string) {
  const userId = await getUserId();
  if (!userId) throw new Error('Not authenticated');

  return prisma.user.update({
    where: { id: userId },
    data: { password },
  });
}
