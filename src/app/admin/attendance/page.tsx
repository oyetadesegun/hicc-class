'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { vignan } from '@/lib/vignan-client';
import { autoMarkAttendance } from '@/lib/actions/attendance';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Download, 
  Search, 
  Users, 
  Calendar,
  BookOpen,
  CheckCircle,
  XCircle,
  Zap,
  KeyRound,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Copy, PlusCircle } from 'lucide-react';

export default function AttendanceReportPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [records, setRecords] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isMarking, setIsMarking] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);
  const [updatingCells, setUpdatingCells] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const fetchData = async () => {
    try {
      setIsDataLoading(true);
      const [attendanceData, courseList] = await Promise.all([
        vignan.entities.Course.getAttendanceReports(),
        vignan.entities.Course.list()
      ]);
      setRecords(attendanceData || []);
      setCourses(courseList || []);
      
      // Set first course as default
      if (courseList && courseList.length > 0) {
        setSelectedCourseId(courseList[0].id);
      }
    } catch (error) {
      console.error('Data fetch error:', error);
      toast.error('Failed to fetch attendance records');
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    if (selectedCourseId) {
      vignan.entities.Course.getEnrolledUsers(selectedCourseId)
        .then(setEnrolledUsers)
        .catch(err => {
          console.error('Error fetching enrolled users:', err);
          setEnrolledUsers([]);
        });
    }
  }, [selectedCourseId]);

  const handleAutoMarkAttendance = async (courseId?: string) => {
    try {
      setIsMarking(true);
      const result = await autoMarkAttendance(courseId);
      toast.success(`Auto-marked ${result.totalMarked} attendance records!`);
      
      // Refresh the data
      await fetchData();
    } catch (error) {
      console.error('Auto-mark error:', error);
      toast.error('Failed to auto-mark attendance');
    } finally {
      setIsMarking(false);
    }
  };

  const handleToggleAttendance = async (lessonId: string, userId: string, currentStatus: boolean) => {
    const cellKey = `${userId}-${lessonId}`;
    try {
      setUpdatingCells(prev => new Set(prev).add(cellKey));
      await vignan.entities.Course.toggleAttendance(selectedCourseId, lessonId, userId, !currentStatus);
      toast.success(`Attendance updated`);
      await fetchData();
    } catch (error) {
      console.error('Toggle attendance error:', error);
      toast.error('Failed to update attendance');
    } finally {
      setUpdatingCells(prev => {
        const next = new Set(prev);
        next.delete(cellKey);
        return next;
      });
    }
  };

  const handleBulkAttendance = async (lessonId: string, isPresent: boolean) => {
    try {
      setIsMarking(true);
      const userIds = allStudentsForCourse.map(u => u.id);
      await vignan.entities.Course.bulkToggleAttendance(selectedCourseId, lessonId, userIds, isPresent);
      toast.success(`Bulk updated ${userIds.length} students`);
      await fetchData();
    } catch (error) {
      console.error('Bulk attendance error:', error);
      toast.error('Failed to bulk update attendance');
    } finally {
      setIsMarking(false);
    }
  };

  // Get records for selected course
  const courseRecords = records.filter(r => r.courseId === selectedCourseId);
  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  // Group records by lesson for easy lookup
  const lessonRecordMap = new Map<string, any[]>();
  courseRecords.forEach(record => {
    const lessonId = record.lessonId;
    if (!lessonRecordMap.has(lessonId)) {
      lessonRecordMap.set(lessonId, []);
    }
    lessonRecordMap.get(lessonId)!.push(record);
  });

  // Combined student list (enrolled + any who might have attendance record but not in enrollment list)
  const allStudentsForCourse = [...enrolledUsers];
  
  // Add students who have records but aren't in enrolledUsers (just in case)
  courseRecords.forEach(record => {
    if (!allStudentsForCourse.find(s => s.id === record.userId)) {
      allStudentsForCourse.push(record.user);
    }
  });

  const filteredLessons = (selectedCourse?.lessons || []).filter((lesson: any) =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lessonRecordMap.get(lesson.id) || []).some(r => 
      (r.user?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.user?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const exportToCSV = () => {
    const headers = ['Lesson', 'Student Name', 'Email', 'Status', 'Attended At'];
    const rows: any[] = [];

    filteredLessons.forEach((lesson: any) => {
      const lessonRecords = lessonRecordMap.get(lesson.id) || [];
      allStudentsForCourse.forEach(student => {
        const record = lessonRecords.find(r => r.userId === student.id);
        rows.push([
          `Lesson ${lesson.order}: ${lesson.title}`,
          student?.name || 'Unknown',
          student?.email || 'Unknown',
          record ? 'Present' : 'Absent',
          record?.attendedAt ? new Date(record.attendedAt).toLocaleString() : 'N/A'
        ]);
      });
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map((cell: any) => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_${selectedCourse?.title || 'report'}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  if (loading || isDataLoading) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-outfit">Attendance By Course</h1>
            <p className="text-muted-foreground">Monitor student attendance per lesson in each course.</p>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => handleAutoMarkAttendance(selectedCourseId)} 
              className="gap-2"
              disabled={!selectedCourseId || isMarking}
              variant="outline"
            >
              <Zap className="w-4 h-4" />
              {isMarking ? 'Marking...' : 'Auto-Mark All'}
            </Button>
            <Button onClick={exportToCSV} className="gap-2" disabled={!selectedCourseId}>
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Course Selector */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Course</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
              <SelectTrigger className="w-full md:w-96">
                <SelectValue placeholder="Choose a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        {selectedCourseId && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Lessons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{filteredLessons.length}</div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Average Attendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {enrolledUsers.length > 0 && filteredLessons.length > 0 
                    ? Math.round((courseRecords.length / (enrolledUsers.length * filteredLessons.length)) * 100)
                    : 0}%
                </div>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Unique Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{new Set(courseRecords.map(r => r.userId)).size}</div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Last Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-bold">
                  {courseRecords.length > 0 && courseRecords[0].attendedAt
                    ? new Date(courseRecords[0].attendedAt).toLocaleDateString()
                    : 'No data'}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Search */}
        {selectedCourseId && (
          <Card>
            <CardHeader>
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students or lessons..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
          </Card>
        )}

        {/* Unified Attendance Matrix */}
        {selectedCourseId && (
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-3 border-b bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Attendance Matrix</CardTitle>
                    <CardDescription>Comparative view of student attendance across all lessons.</CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-muted-foreground">Present</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/40"></div>
                      <span className="text-muted-foreground">Absent</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="min-w-[180px] font-bold sticky left-0 bg-muted/90 z-10 border-r">Student</TableHead>
                        {filteredLessons.map((lesson: any) => {
                          const lessonRecords = lessonRecordMap.get(lesson.id) || [];
                          const lessonPercentage = enrolledUsers.length > 0 ? Math.round((lessonRecords.length / enrolledUsers.length) * 100) : 0;
                          return (
                            <TableHead key={lesson.id} className="text-center min-w-[80px] py-4">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">L{lesson.order}</span>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-auto p-1 hover:bg-primary/10">
                                      <KeyRound className="w-4 h-4 text-primary" />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-64">
                                    <div className="space-y-3">
                                      <div className="font-semibold text-sm">{lesson.title}</div>
                                      <div className="text-xs text-muted-foreground underline decoration-dotted">Session Details:</div>
                                      <div className="flex justify-between text-[11px]">
                                        <span>Attendance:</span>
                                        <span className="font-bold">{lessonRecords.length} / {enrolledUsers.length}</span>
                                      </div>
                                      <div className="flex justify-between text-[11px]">
                                        <span>Percentage:</span>
                                        <span className="font-bold">{lessonPercentage}%</span>
                                      </div>

                                      <div className="pt-2 border-t mt-2">
                                        <div className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Bulk Actions</div>
                                        <div className="grid grid-cols-2 gap-2">
                                          <Button 
                                            size="sm" 
                                            className="h-8 text-[10px] bg-green-600 hover:bg-green-700"
                                            onClick={() => handleBulkAttendance(lesson.id, true)}
                                            disabled={isMarking}
                                          >
                                            Mark All Present
                                          </Button>

                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <Button 
                                                variant="outline" 
                                                size="sm" 
                                                className="h-8 text-[10px] text-destructive hover:bg-destructive/10"
                                                disabled={isMarking}
                                              >
                                                Mark All Absent
                                              </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                              <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                  This will mark **all students** as absent for "{lesson.title}". This action cannot be easily undone.
                                                </AlertDialogDescription>
                                              </AlertDialogHeader>
                                              <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction 
                                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                  onClick={() => handleBulkAttendance(lesson.id, false)}
                                                >
                                                  Confirm Mark All Absent
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog>
                                        </div>
                                      </div>

                                      <div className="text-xs text-muted-foreground mt-2">Attendance Code:</div>
                                      {lesson.liveSession?.secretCode ? (
                                        <div className="flex items-center gap-2 p-2 bg-muted rounded font-mono text-center justify-center text-lg font-bold">
                                          {lesson.liveSession.secretCode}
                                          <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="h-6 w-6" 
                                            onClick={() => {
                                              navigator.clipboard.writeText(lesson.liveSession.secretCode);
                                              toast.success('Code copied!');
                                            }}
                                          >
                                            <Copy className="h-3 w-3" />
                                          </Button>
                                        </div>
                                      ) : (
                                        <div className="text-xs italic text-destructive text-center py-2 border border-dashed rounded bg-destructive/5">
                                          No active session/code.
                                          <Button 
                                            variant="link" 
                                            size="sm" 
                                            className="mt-1 h-auto py-0"
                                            onClick={() => router.push('/admin')}
                                          >
                                            Go to Sessions
                                          </Button>
                                        </div>
                                      )}
                                    </div>
                                  </PopoverContent>
                                </Popover>
                                <span className={`text-[10px] font-bold ${lessonPercentage >= 75 ? "text-green-600" : lessonPercentage >= 50 ? "text-orange-500" : "text-destructive"}`}>
                                  {lessonPercentage}%
                                </span>
                              </div>
                            </TableHead>
                          );
                        })}
                        <TableHead className="text-center font-bold border-l bg-muted/90">Total %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allStudentsForCourse
                        .filter(student => 
                          (student?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (student?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((student) => {
                          const studentRecords = courseRecords.filter(r => r.userId === student.id);
                          const presentCount = studentRecords.length;
                          const totalLessons = filteredLessons.length;
                          const percentage = totalLessons > 0 ? Math.round((presentCount / totalLessons) * 100) : 0;

                          return (
                            <TableRow key={student.id} className="hover:bg-muted/30">
                              <TableCell className="font-medium sticky left-0 bg-background z-10 border-r">
                                <div className="flex flex-col">
                                  <span>{student?.name || 'Unknown'}</span>
                                  <span className="text-[10px] text-muted-foreground truncate max-w-[150px]">{student?.email}</span>
                                </div>
                              </TableCell>
                              {filteredLessons.map((lesson: any) => {
                                const record = lessonRecordMap.get(lesson.id)?.find(r => r.userId === student.id);
                                const isUpdating = updatingCells.has(`${student.id}-${lesson.id}`);
                                
                                return (
                                  <TableCell key={lesson.id} className="text-center">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className={`h-8 w-8 rounded-full ${isUpdating ? "animate-pulse" : ""}`}
                                      disabled={isUpdating}
                                      onClick={() => handleToggleAttendance(lesson.id, student.id, !!record)}
                                    >
                                      {isUpdating ? (
                                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                                      ) : record ? (
                                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                                      ) : (
                                        <XCircle className="w-5 h-5 text-destructive/20 mx-auto hover:text-destructive/50 transition-colors" />
                                      )}
                                    </Button>
                                  </TableCell>
                                );
                              })}
                              <TableCell className="text-center font-bold border-l bg-muted/5">
                                <span className={percentage >= 75 ? "text-green-600" : percentage >= 50 ? "text-orange-500" : "text-destructive"}>
                                  {percentage}%
                                </span>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!selectedCourseId && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center text-muted-foreground py-8">
                Please select a course to view attendance.
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
