'use client';

import { toast } from 'sonner';
import * as authActions from './actions/auth';
import * as courseActions from './actions/courses';
import { Course, Student, Certificate } from './mock-data';

// Helper to adapt Prisma User to Mock Student
const adaptUserToStudent = (user: any): Student | null => {
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    enrolledCourses: user.enrolledCourses?.map((ec: any) => ec.courseId) || [],
    certificates: user.certificates?.map((c: any) => c.id) || [],
    attendance: user.enrolledCourses?.reduce((acc: any, ec: any) => {
      acc[ec.courseId] = ec.progress;
      return acc;
    }, {}) || {},
    role: user.role,
    phoneNumber: user.phoneNumber,
    createdAt: user.createdAt.toISOString().split('T')[0],
  };
};

const auth = {
  isAuthenticated: async () => {
    const user = await authActions.me();
    return !!user;
  },
  me: async (): Promise<Student | null> => {
    const user = await authActions.me();
    return adaptUserToStudent(user);
  },
  login: async (email: string, password: string): Promise<Student> => {
    const user = await authActions.login(email, password);
    if (!user) toast.error("Invalid email or password");
    return adaptUserToStudent(user)!;
  },
  signup: async (name: string, email: string, password: string, phoneNumber?: string): Promise<Student> => {
    const user = await authActions.signup(name, email, password, phoneNumber);
    return adaptUserToStudent(user)!;
  },
  logout: async () => {
    await authActions.logout();
  },
  updateMe: async (updates: Partial<Student>): Promise<Student> => {
    const user = await authActions.updateMe(updates as any);
    return adaptUserToStudent(user)!;
  }
};

export const entities = {
  Course: {
    list: async (): Promise<Course[]> => {
      const courses = await courseActions.getCourses();
      return courses as any;
    },
    get: async (id: string): Promise<Course | null> => {
      const course = await courseActions.getCourse(id);
      return course as any;
    },
    filter: async (query: any) => {
      const courses = await courseActions.getCourses();
      // Basic client-side filtering since we have a small dataset
      return courses.filter(c => {
        for (const key in query) {
          if ((c as any)[key] !== query[key]) return false;
        }
        return true;
      }) as any;
    },
    enroll: async (courseId: string) => {
      return await courseActions.enrollInCourse(courseId);
    },
    create: async (data: any) => {
      return await courseActions.createCourse(data);
    },
    updateLiveSessionCode: async (courseId: string, sessionId: string, code: string) => {
      return await courseActions.updateLiveSessionCode(courseId, sessionId, code);
    },
    createLiveSession: async (courseId: string, data: any) => {
      return await courseActions.createLiveSession(courseId, data);
    },
    update: async (id: string, data: any) => {
      // For now, this is a placeholder as courseActions might not have a generic update
      // But we can add it to courses.ts if needed, or use existing actions
      return await courseActions.updateCourse(id, data);
    },
    delete: async (id: string) => {
      return await courseActions.deleteCourse(id);
    }
  },
  Lesson: {
    create: async (courseId: string, data: any) => {
      return await courseActions.createLesson(courseId, data);
    },
    delete: async (id: string) => {
      return await courseActions.deleteLesson(id);
    }
  },
  Student: {
    get: async (id: string) => {
      // In this app, we mostly care about the current student
      const user = await authActions.me();
      if (user && user.id === id) return adaptUserToStudent(user);
      return null;
    }
  },
  Certificate: {
    list: async (): Promise<Certificate[]> => {
      const user = await authActions.me();
      return (user?.certificates as any) || [];
    },
    get: async (id: string): Promise<Certificate | null> => {
      const cert = await courseActions.getCertificate(id);
      return cert as any;
    },
    create: async (data: { courseId: string; userId: string }): Promise<Certificate> => {
      const cert = await courseActions.issueCertificate(data.courseId, data.userId);
      return cert as any;
    }
  }
};

export const vignan = {
  auth,
  entities
};
