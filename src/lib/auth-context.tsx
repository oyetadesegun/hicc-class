'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student } from './mock-data';
import { vignan } from './vignan-client';

interface AuthContextType {
  user: Student | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phoneNumber?: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: Student) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const initAuth = async () => {
      const me = await vignan.auth.me();
      setUser(me);
      setLoading(false);
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const loggedInUser = await vignan.auth.login(email, password);
      setUser(loggedInUser);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string, phoneNumber?: string): Promise<boolean> => {
    try {
      const newUser = await vignan.auth.signup(name, email, password, phoneNumber);
      setUser(newUser);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async () => {
    await vignan.auth.logout();
    setUser(null);
  };

  const updateUser = async (updatedUser: Student) => {
    try {
      const user = await vignan.auth.updateMe(updatedUser);
      setUser(user);
    } catch (error) {
      console.error('Update user error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
