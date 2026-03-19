'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Clock, Users, BookOpen } from 'lucide-react';

export default function CoursesPage() {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolling, setEnrolling] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchCourses = async () => {
      const allCourses = await vignan.entities.Course.list();
      setCourses(allCourses);
    };
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId: string) => {
    if (!user) return;
    setEnrolling(courseId);
    
    try {
      if (!user.enrolledCourses.includes(courseId)) {
        await vignan.entities.Course.enroll(courseId);
        
        // Refresh user data from server to get updated enrollments
        const updatedUser = await vignan.auth.me();
        if (updatedUser) {
          updateUser(updatedUser);
        }
      }
    } catch (error) {
      console.error('Enrollment error:', error);
    } finally {
      setEnrolling(null);
    }
  };

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

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Available Courses</h1>
          <p className="text-lg text-muted-foreground">
            Browse and enroll in courses to start learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const isEnrolled = user.enrolledCourses.includes(course.id);
            return (
              <Card key={course.id} className="overflow-hidden hover:border-primary/50 transition-colors flex flex-col">
                <div className="h-40 bg-linear-to-br from-primary/20 to-accent/20" />
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">
                      {course.category.toUpperCase()}
                    </p>
                    <h3 className="font-bold text-lg">{course.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground flex-1">
                    {course.description}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Instructor: {course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons.length} lessons</span>
                    </div>
                  </div>
                  <div className="space-y-2 mt-auto">
                    {isEnrolled ? (
                      <Button 
                        className="w-full"
                        onClick={() => router.push(`/courses/${course.id}`)}
                      >
                        Continue Course
                      </Button>
                    ) : (
                      <Button 
                        className="w-full"
                        variant="outline"
                        onClick={() => handleEnroll(course.id)}
                        disabled={enrolling === course.id}
                      >
                        {enrolling === course.id ? 'Enrolling...' : 'Enroll Now'}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
