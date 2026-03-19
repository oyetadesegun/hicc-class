'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Certificate, Course } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import {
  User,
  Mail,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
} from 'lucide-react';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [completedCourses, setCompletedCourses] = useState<Course[]>([]);
  const [avgAttendance, setAvgAttendance] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        // Fetch Certificates
        const allCerts = await vignan.entities.Certificate.list();
        const userCerts = allCerts.filter(
          (cert: Certificate) => cert.studentId === user.id
        );
        setCertificates(userCerts);

        // Fetch Courses
        const allCourses = await vignan.entities.Course.list();
        const userEnrolled = allCourses.filter(c =>
          user.enrolledCourses.includes(c.id)
        );
        setEnrolledCourses(userEnrolled);

        const userCompleted = userEnrolled.filter(
          c => user.attendance[c.id] === 100
        );
        setCompletedCourses(userCompleted);

        const avg = user.enrolledCourses.length > 0
          ? Math.round(
              Object.values(user.attendance).reduce((a, b) => a + b, 0) /
              user.enrolledCourses.length
            )
          : 0;
        setAvgAttendance(avg);
      }
    };
    fetchData();
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

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0 max-w-4xl">
        {/* Profile Header */}
        <Card className="p-8 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white">
                <User className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">Student Profile</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => router.back()}>
              Back
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
              <p className="text-lg font-medium">{user.email}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Member Since</span>
              </div>
              <p className="text-lg font-medium">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Courses Enrolled
              </h3>
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold">{user.enrolledCourses.length}</p>
            <p className="text-xs text-muted-foreground">
              {completedCourses.length} completed
            </p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Certificates
              </h3>
              <Award className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{certificates.length}</p>
            <p className="text-xs text-muted-foreground">Earned</p>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground">
                Avg Attendance
              </h3>
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-3xl font-bold">{avgAttendance}%</p>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </Card>
        </div>

        {/* Enrolled Courses */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Enrolled Courses</h2>

          {enrolledCourses.length === 0 ? (
            <p className="text-muted-foreground">
              You haven't enrolled in any courses yet.
            </p>
          ) : (
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium">
                        {user.attendance[course.id]}%
                      </p>
                      <p className="text-xs text-muted-foreground">Progress</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/courses/${course.id}`)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Recent Certificates */}
        {certificates.length > 0 && (
          <Card className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Recent Certificates</h2>

            <div className="space-y-3">
              {certificates.slice(-3).map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold">{cert.courseName}</h3>
                    <p className="text-sm text-muted-foreground">
                      Issued {new Date(cert.issuedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push(`/certificates/${cert.id}`)}
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
