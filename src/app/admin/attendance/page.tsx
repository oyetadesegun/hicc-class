'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { vignan } from '@/lib/vignan-client';
import { Course } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Loader2,
  Zap,
  QrCode,
  Edit,
  Save,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { autoMarkAttendance } from '@/lib/actions/courses';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { generateSessionCode } from '@/lib/actions/attendance';

export default function AdminAttendancePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [records, setRecords] = useState<any[]>([]);
  const [enrolledUsers, setEnrolledUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isMarking, setIsMarking] = useState(false);
  const [updatingCells, setUpdatingCells] = useState<Set<string>>(new Set());

  // Track regenerating a code so we show a loader
  const [generatingCodeFor, setGeneratingCodeFor] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const fetchData = async ({ showLoading = true }: { showLoading?: boolean } = {}) => {
    try {
      if (showLoading) setIsDataLoading(true);
      const [attendanceData, courseList] = await Promise.all([
        vignan.entities.Course.getAttendanceReports(),
        vignan.entities.Course.list()
      ]);
      setRecords(attendanceData || []);
      setCourses(courseList || []);

      if (courseList && courseList.length > 0 && !selectedCourseId) {
        setSelectedCourseId(courseList[0].id);
      }
    } catch (error) {
      console.error('Failed to fetch attendance data:', error);
      toast.error('Failed to load attendance data');
    } finally {
      if (showLoading) setIsDataLoading(false);
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
        .then(students => setEnrolledUsers(students))
        .catch(err => {
          console.error('Error fetching enrolled users:', err);
          setEnrolledUsers([]);
        });
    }
  }, [selectedCourseId]);

  const handleAutoMarkAttendance = async (courseId?: string) => {
    if (!courseId) return;
    try {
      setIsMarking(true);
      const result = await autoMarkAttendance(courseId);
      toast.success(`Auto-marked ${result.totalMarked} attendance records!`);
      await fetchData();
    } catch (error) {
      console.error('Auto-mark error:', error);
      toast.error('Failed to auto-mark attendance');
    } finally {
      setIsMarking(false);
    }
  };

  const handleToggleLiveAttendance = async (liveSessionId: string, userId: string, currentStatus: boolean) => {
    const cellKey = `${userId}-${liveSessionId}`;
    try {
      setUpdatingCells(prev => new Set(prev).add(cellKey));
      await vignan.entities.Course.toggleLiveAttendance(selectedCourseId, liveSessionId, userId, !currentStatus);
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

  const handleBulkLiveAttendance = async (liveSessionId: string, isPresent: boolean) => {
    try {
      setIsMarking(true);
      const userIds = allStudentsForCourse.map(u => u.id);
      await vignan.entities.Course.bulkToggleLiveAttendance(selectedCourseId, liveSessionId, userIds, isPresent);
      toast.success(`Bulk updated ${userIds.length} students`);
      await fetchData();
    } catch (error) {
      console.error('Bulk attendance error:', error);
      toast.error('Failed to bulk update attendance');
    } finally {
      setIsMarking(false);
    }
  };

  const handleGenerateCode = async (sessionId: string) => {
    try {
      setGeneratingCodeFor(sessionId);
      const res = await generateSessionCode(sessionId);

      if (!res.success || !res.code) {
        toast.error(res.error || 'Failed to generate code');
        return;
      }

      setCourses(prev => prev.map(course => ({
        ...course,
        liveSessions: (course.liveSessions || []).map(session =>
          session.id === sessionId
            ? { ...session, secretCode: res.code, codeGeneratedAt: res.codeGeneratedAt } as any
            : session
        )
      })));

      toast.success(`New code generated: ${res.code}`);

      fetchData({ showLoading: false }).catch((error) => {
        console.error('Failed to refresh attendance data after code generation:', error);
      });
    } catch (error) {
      console.error('Generate code error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setGeneratingCodeFor(null);
    }
  };

  const [editingDateFor, setEditingDateFor] = useState<string | null>(null);
  const [tempDate, setTempDate] = useState<string>('');
  const [tempTitle, setTempTitle] = useState<string>('');

  const handleUpdateSessionDate = async (sessionId: string) => {
    try {
      if (!tempDate || !tempTitle) return;
      await vignan.entities.Course.updateLiveSession(sessionId, { date: tempDate, title: tempTitle });
      toast.success('Session updated successfully');
      setEditingDateFor(null);
      await fetchData();
    } catch (error) {
      console.error('Failed to update session date:', error);
      toast.error('Failed to update date');
    }
  };

  // Get records for selected course
  const courseRecords = records.filter(r => r.courseId === selectedCourseId);
  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  // Group records by LIVE SESSION for easy lookup
  const liveSessionRecordMap = new Map<string, any[]>();
  courseRecords.forEach(record => {
    if (record.liveSessionId) {
      if (!liveSessionRecordMap.has(record.liveSessionId)) {
        liveSessionRecordMap.set(record.liveSessionId, []);
      }
      liveSessionRecordMap.get(record.liveSessionId)!.push(record);
    }
  });

  // Combined student list
  const allStudentsMap = new Map();
  enrolledUsers.forEach(s => {
    if (s && s.id) allStudentsMap.set(s.id, s);
  });
  courseRecords.forEach(record => {
    if (record.user && record.user.id && !allStudentsMap.has(record.userId)) {
      allStudentsMap.set(record.userId, record.user);
    }
  });
  const allStudentsForCourse = Array.from(allStudentsMap.values());

  const filteredSessions = [...(selectedCourse?.liveSessions || [])]
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter((session: any) =>
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (liveSessionRecordMap.get(session.id) || []).some(r =>
        (r.user?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (r.user?.email || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const exportToCSV = () => {
    const headers = ['Class Day', 'Student Name', 'Email', 'Status', 'Attended At'];
    const rows: any[] = [];

    filteredSessions.forEach((session: any) => {
      const sessionRecords = liveSessionRecordMap.get(session.id) || [];
      allStudentsForCourse.forEach(student => {
        const record = sessionRecords.find(r => r.userId === student.id);
        rows.push([
          `Day: ${session.title}`,
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

  const loadImage = (src: string) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  const drawRoundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };

  const drawWrappedText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: CanvasTextAlign = 'left'
  ) => {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    ctx.textAlign = align;

    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = word;
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }

    if (line) ctx.fillText(line, x, currentY);
    return currentY;
  };

  const handleDownloadAttendanceCard = async (session: any) => {
    if (!session.secretCode) {
      toast.error('Generate an attendance code before downloading');
      return;
    }

    try {
      const qrParams = new URLSearchParams({ s: session.id, c: session.secretCode });
      const qrImage = await loadImage(`/api/qr?${qrParams.toString()}`);
      const width = 900;
      const height = 1180;
      const scale = 2;
      const canvas = document.createElement('canvas');
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas is not available');

      ctx.scale(scale, scale);
      ctx.fillStyle = '#fff8ef';
      ctx.fillRect(0, 0, width, height);

      ctx.shadowColor = 'rgba(15, 23, 42, 0.14)';
      ctx.shadowBlur = 28;
      ctx.shadowOffsetY = 10;
      drawRoundRect(ctx, 54, 46, width - 108, height - 92, 34);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.shadowColor = 'transparent';
      ctx.strokeStyle = '#f1d7b2';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.font = '700 30px Arial, sans-serif';
      ctx.fillText('HARVESTERS', 98, 116);

      ctx.fillStyle = '#111827';
      ctx.font = '700 42px Arial, sans-serif';
      drawWrappedText(ctx, session.title, 98, 190, width - 196, 50);

      ctx.fillStyle = '#52617f';
      ctx.font = '400 28px Arial, sans-serif';
      const sessionDate = new Date(session.date).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      });
      ctx.fillText(`${sessionDate} - ${session.duration}`, 98, 260);

      ctx.strokeStyle = '#eadcc8';
      ctx.beginPath();
      ctx.moveTo(98, 316);
      ctx.lineTo(width - 98, 316);
      ctx.stroke();

      ctx.fillStyle = '#111827';
      ctx.font = '700 28px Arial, sans-serif';
      ctx.fillText('ATTENDANCE CODE', 98, 380);

      ctx.fillStyle = '#111827';
      ctx.font = '700 88px "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(session.secretCode, width / 2, 500);

      if (session.codeGeneratedAt) {
        ctx.fillStyle = '#52617f';
        ctx.font = '400 24px Arial, sans-serif';
        ctx.fillText(
          `Generated: ${new Date(session.codeGeneratedAt).toLocaleTimeString()} (Expires in 15m)`,
          width / 2,
          560
        );
      }

      ctx.strokeStyle = '#eadcc8';
      ctx.beginPath();
      ctx.moveTo(150, 620);
      ctx.lineTo(width - 150, 620);
      ctx.stroke();

      const qrSize = 360;
      const qrX = (width - qrSize) / 2;
      const qrY = 670;
      drawRoundRect(ctx, qrX - 18, qrY - 18, qrSize + 36, qrSize + 36, 16);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#e5e7eb';
      ctx.stroke();
      ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);

      ctx.fillStyle = '#52617f';
      ctx.font = '400 28px Arial, sans-serif';
      drawWrappedText(
        ctx,
        'Students can scan this QR code or manually enter the 6-digit code.',
        width / 2,
        1090,
        width - 220,
        36,
        'center'
      );

      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('Could not create image');

      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const safeTitle = session.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      link.href = downloadUrl;
      link.download = `${safeTitle || 'attendance'}-${session.secretCode}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
      toast.success('Attendance card downloaded');
    } catch (error) {
      console.error('Download attendance card error:', error);
      toast.error('Could not download attendance card');
    }
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
            <h1 className="text-3xl font-bold tracking-tight font-outfit">Daily Class Attendance</h1>
            <p className="text-muted-foreground">Monitor student attendance for each daily session.</p>
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
                  <Calendar className="w-4 h-4" />
                  Class Days
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{filteredSessions.length}</div>
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
                  {enrolledUsers.length > 0 && filteredSessions.length > 0
                    ? Math.round((courseRecords.length / (enrolledUsers.length * filteredSessions.length)) * 100)
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
                  <CheckCircle className="w-4 h-4" />
                  Total Present Check-ins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {courseRecords.length}
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
                  placeholder="Search students or class days..."
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
                    <CardTitle className="text-xl">Daily Attendance Matrix</CardTitle>
                    <CardDescription>Comparative view of student attendance across all class days.</CardDescription>
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
                        <TableHead className="min-w-[120px] max-w-[120px] md:min-w-[180px] md:max-w-[180px] font-bold sticky left-0 bg-muted/90 z-20 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] px-2 md:px-4">Student</TableHead>
                        {filteredSessions.map((session: any, index: number) => {
                          const sessionRecords = liveSessionRecordMap.get(session.id) || [];
                          const sessionPercentage = enrolledUsers.length > 0 ? Math.round((sessionRecords.length / enrolledUsers.length) * 100) : 0;

                          // Determine dynamic QR URL
                          const qrUrl = typeof window !== 'undefined' ? `${window.location.origin}/attend?s=${session.id}&c=${session.secretCode || ''}` : '';

                          return (
                            <TableHead key={session.id} className="text-center min-w-[80px] md:min-w-[100px] py-2 md:py-4 px-1 md:px-4">
                              <div className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold truncate max-w-[80px]" title={session.title}>
                                  Day {index + 1}
                                </span>
                                <span className="text-[9px] text-muted-foreground">
                                  {new Date(session.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                </span>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-auto p-1 hover:bg-primary/10" title="Manage Code & Attendance">
                                      <QrCode className={`w-4 h-4 ${session.secretCode ? 'text-primary' : 'text-muted-foreground'}`} />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80">
                                    <div className="space-y-3">
                                      <div className="font-semibold text-sm flex justify-between items-center">
                                        <span>{session.title}</span>
                                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => { 
                                          setEditingDateFor(session.id); 
                                          setTempDate(new Date(session.date).toISOString().slice(0, 16)); 
                                          setTempTitle(session.title);
                                        }}>
                                          <Edit className="w-3 h-3 text-muted-foreground hover:text-primary" />
                                        </Button>
                                      </div>
                                      {editingDateFor === session.id ? (
                                        <div className="flex flex-col gap-2 bg-muted/50 p-2 rounded">
                                          <Input
                                            className="h-7 text-xs w-full font-semibold"
                                            value={tempTitle}
                                            onChange={(e) => setTempTitle(e.target.value)}
                                            placeholder="Session Title"
                                          />
                                          <div className="flex items-center gap-1">
                                            <Input
                                              type="datetime-local"
                                              className="h-7 text-xs w-full" 
                                              value={tempDate} 
                                              onChange={(e) => setTempDate(e.target.value)} 
                                            />
                                            <Button size="sm" className="h-7 w-7 p-0 shrink-0" onClick={() => handleUpdateSessionDate(session.id)}>
                                              <Save className="w-3 h-3" />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0 text-destructive hover:bg-destructive/10" onClick={() => setEditingDateFor(null)}>
                                              <X className="w-3 h-3" />
                                            </Button>
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="text-xs text-muted-foreground">{new Date(session.date).toLocaleString()} • {session.duration}</div>
                                      )}

                                      {/* Code Generation Section */}
                                      <div className="p-3 bg-muted/30 rounded-lg border">
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-xs font-bold uppercase tracking-wider">Attendance Code</span>
                                          <Button
                                            size="sm"
                                            variant="secondary"
                                            className="h-7 text-[10px]"
                                            onClick={() => handleGenerateCode(session.id)}
                                            disabled={generatingCodeFor === session.id}
                                          >
                                            {generatingCodeFor === session.id ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Generate New'}
                                          </Button>
                                        </div>

                                        {session.secretCode ? (
                                          <div className="space-y-3">
                                            <div className="flex flex-col items-center gap-1">
                                              <div className="text-3xl font-mono font-bold tracking-widest text-primary py-2">
                                                {session.secretCode}
                                              </div>
                                              {session.codeGeneratedAt && (
                                                <div className="text-[10px] text-muted-foreground">
                                                  Generated: {new Date(session.codeGeneratedAt).toLocaleTimeString()} (Expires in 15m)
                                                </div>
                                              )}
                                            </div>

                                            <div className="flex justify-center border-t pt-3">
                                              <img
                                                src={`/api/qr?s=${session.id}&c=${session.secretCode}`}
                                                alt="QR Code"
                                                className="w-32 h-32 rounded shadow-sm border p-1 bg-white"
                                              />
                                            </div>
                                            <Button
                                              variant="outline"
                                              size="sm"
                                              className="w-full h-8 gap-2 text-xs"
                                              onClick={() => handleDownloadAttendanceCard(session)}
                                            >
                                              <Download className="w-3.5 h-3.5" />
                                              Download Card
                                            </Button>
                                            <div className="text-[10px] text-center text-muted-foreground">
                                              Students can scan this QR code or manually enter the 6-digit code.
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="text-sm italic text-muted-foreground text-center py-4">
                                            No active code. Click "Generate New" to start taking attendance.
                                          </div>
                                        )}
                                      </div>

                                      <div className="flex justify-between text-[11px] pt-2 border-t">
                                        <span>Present:</span>
                                        <span className="font-bold">{sessionRecords.length} / {enrolledUsers.length}</span>
                                      </div>

                                      <div className="pt-2 border-t mt-2">
                                        <div className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Bulk Actions</div>
                                        <div className="grid grid-cols-2 gap-2">
                                          <Button
                                            size="sm"
                                            className="h-8 text-[10px] bg-green-600 hover:bg-green-700"
                                            onClick={() => handleBulkLiveAttendance(session.id, true)}
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
                                                  This will mark **all students** as absent for "{session.title}". This action cannot be easily undone.
                                                </AlertDialogDescription>
                                              </AlertDialogHeader>
                                              <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                  onClick={() => handleBulkLiveAttendance(session.id, false)}
                                                >
                                                  Confirm Mark All Absent
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog>
                                        </div>
                                      </div>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                                <span className={`text-[10px] font-bold ${sessionPercentage >= 75 ? "text-green-600" : sessionPercentage >= 50 ? "text-orange-500" : "text-destructive"}`}>
                                  {sessionPercentage}%
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
                          // For student percentage, calculate based on past/current live sessions, but for simplicity we show against total sessions
                          const presentCount = studentRecords.filter(r => r.liveSessionId).length;
                          const totalSessions = filteredSessions.length;
                          const percentage = totalSessions > 0 ? Math.round((presentCount / totalSessions) * 100) : 0;

                          return (
                            <TableRow key={student.id} className="hover:bg-muted/30">
                              <TableCell className="font-medium sticky left-0 bg-background z-10 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] p-2 md:p-4">
                                <div className="flex flex-col">
                                  <span>{student?.name || 'Unknown'}</span>
                                  <span className="text-[10px] text-muted-foreground truncate max-w-[150px]">{student?.email}</span>
                                </div>
                              </TableCell>
                              {filteredSessions.map((session: any) => {
                                const record = liveSessionRecordMap.get(session.id)?.find(r => r.userId === student.id);
                                const isUpdating = updatingCells.has(`${student.id}-${session.id}`);

                                return (
                                  <TableCell key={session.id} className="text-center p-1 md:p-4">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className={`h-8 w-8 rounded-full ${isUpdating ? "animate-pulse" : ""}`}
                                      disabled={isUpdating}
                                      onClick={() => handleToggleLiveAttendance(session.id, student.id, !!record)}
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
