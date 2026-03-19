'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { vignan } from '@/lib/vignan-client';
import { Course } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (!user) return;
      const allCourses = await vignan.entities.Course.list();
      const enrolledCourses = allCourses.filter(c => 
        user.enrolledCourses.includes(c.id)
      );
      setCourses(enrolledCourses);
    };
    fetchEnrolledCourses();
  }, [user]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!user) {
    return null;
  }

  const stats = [
    {
      label: 'Courses Enrolled',
      value: user.enrolledCourses.length,
      icon: BookOpen,
      color: 'text-primary',
    },
    {
      label: 'Certificates Earned',
      value: user.certificates.length,
      icon: Award,
      color: 'text-accent',
    },
    {
      label: 'Average Attendance',
      value: user.enrolledCourses.length > 0
        ? Math.round(
            Object.values(user.attendance).reduce((a, b) => a + b, 0) /
            user.enrolledCourses.length
          )
        : 0,
      icon: BarChart3,
      color: 'text-secondary',
      suffix: '%',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Welcome back, {user.name}!</h1>
          <p className="text-lg text-muted-foreground">
            Continue your learning journey and track your progress.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </h3>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-3xl font-bold">
                {stat.value}
                {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
              </p>
            </Card>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Courses</h2>
          {courses.length === 0 ? (
            <Card className="p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto" />
              <div>
                <h3 className="font-semibold text-lg">No courses yet</h3>
                <p className="text-muted-foreground">
                  Enroll in a course to start learning
                </p>
              </div>
              <Button onClick={() => router.push('/courses')}>
                Browse Courses
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20" />
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {course.category}
                      </p>
                      <h3 className="font-semibold text-lg">{course.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {course.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {user.attendance[course.id] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{
                            width: `${user.attendance[course.id] || 0}%`,
                          }}
                        />
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => router.push(`/courses/${course.id}`)}
                    >
                      Continue
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Available Courses */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Available Courses</h2>
          <Button 
            variant="outline"
            className="w-full"
            onClick={() => router.push('/courses')}
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
