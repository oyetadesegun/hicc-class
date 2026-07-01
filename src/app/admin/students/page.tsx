'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getAdminStudentsOverview } from '@/lib/actions/admin-students';
import { Award, BookOpen, Mail, Phone, Search, TrendingUp, Users } from 'lucide-react';
import { toast } from 'sonner';

type StudentsOverview = Awaited<ReturnType<typeof getAdminStudentsOverview>>;

export default function AdminStudentsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<StudentsOverview | null>(null);
  const [fetching, setFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.role !== 'ADMIN') return;

      try {
        setFetching(true);
        setData(await getAdminStudentsOverview());
      } catch (error) {
        console.error('Failed to load students:', error);
        toast.error('Failed to load students');
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [user]);

  const filteredRows = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    const rows = data?.rows ?? [];
    if (!query) return rows;

    return rows.filter((student) =>
      [student.name, student.email, student.phoneNumber ?? '', ...student.courses.map((course) => course.courseTitle)]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [data?.rows, searchTerm]);

  if (loading || fetching) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  if (!user || user.role !== 'ADMIN') return null;

  const stats = data?.stats ?? { totalStudents: 0, activeStudents: 0, averageProgress: 0, averageAttendance: 0 };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-16 md:pb-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-outfit">Students</h1>
          <p className="text-muted-foreground">Track enrollment, attendance, assignment activity, and certificates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Users className="w-4 h-4" />Students</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{stats.totalStudents}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><BookOpen className="w-4 h-4" />Active</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{stats.activeStudents}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><TrendingUp className="w-4 h-4" />Avg Progress</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{stats.averageProgress}%</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2"><Award className="w-4 h-4" />Avg Attendance</CardTitle></CardHeader><CardContent className="text-2xl font-bold">{stats.averageAttendance}%</CardContent></Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students, email, phone, or course..."
                className="pl-10"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredRows.length === 0 ? (
            <Card className="p-12 text-center text-muted-foreground border-dashed">No students match the current search.</Card>
          ) : filteredRows.map((student) => (
            <Card key={student.id} className="p-5 space-y-5">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">{student.name}</h2>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Mail className="w-4 h-4" />{student.email}</span>
                    {student.phoneNumber && <span className="inline-flex items-center gap-1"><Phone className="w-4 h-4" />{student.phoneNumber}</span>}
                    <span>Joined {new Date(student.joinedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div><p className="font-bold">{student.enrolledCourseCount}</p><p className="text-xs text-muted-foreground">Courses</p></div>
                  <div><p className="font-bold">{student.averageProgress}%</p><p className="text-xs text-muted-foreground">Progress</p></div>
                  <div><p className="font-bold">{student.averageAttendance}%</p><p className="text-xs text-muted-foreground">Attendance</p></div>
                  <div><p className="font-bold">{student.certificateCount}</p><p className="text-xs text-muted-foreground">Certificates</p></div>
                </div>
              </div>

              {student.courses.length === 0 ? (
                <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">No enrolled courses yet.</div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {student.courses.map((course) => (
                    <div key={course.courseId} className="rounded-lg border p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{course.courseTitle}</h3>
                          <p className="text-xs text-muted-foreground">
                            {course.submittedAssignments}/{course.totalAssignments} assignments submitted
                          </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => router.push('/admin/attendance')}>
                          Attendance
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span>{course.watchedLessons}/{course.totalLessons} lessons</span>
                        <span>{course.attendedLiveSessions}/{course.totalLiveSessions} classes</span>
                        <span>{course.attendance}% attendance</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
