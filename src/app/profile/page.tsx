'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { vignan } from '@/lib/vignan-client';
import { Certificate, Course } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  Mail,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
  Shield,
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white shrink-0 shadow-lg">
                <User className="w-12 h-12" />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold font-outfit">{user.name}</h1>
                <p className="text-muted-foreground font-medium text-lg italic">Student Profile</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => router.back()} className="rounded-full px-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-outfit">
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
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border rounded-xl hover:bg-muted/50 transition-all hover:border-primary/30 group"
                >
                  <div className="flex-1 min-w-0 mb-4 sm:mb-0">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-muted-foreground italic">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-border">
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">
                        {user.attendance[course.id]}%
                      </p>
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Progress</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push(`/courses/${course.id}`)}
                      className="rounded-full px-5 h-9"
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

        {/* Security / Change Password */}
        <Card className="p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Security</h2>
          </div>
          <p className="text-muted-foreground">
            Update your password to keep your account secure.
          </p>
          
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const password = formData.get('password') as string;
              const confirmPassword = formData.get('confirmPassword') as string;
              
              if (password !== confirmPassword) {
                return toast.error("Passwords do not match");
              }
              
              if (password.length < 6) {
                return toast.error("Password must be at least 6 characters");
              }
              
              await vignan.auth.updatePassword(password);
              e.currentTarget.reset();
            }}
            className="space-y-4 max-w-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" required />
            </div>
            <Button type="submit">Update Password</Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
