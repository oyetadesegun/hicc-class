'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { Play, Clock, Users, Zap, FileText, BookOpen, CheckCircle2, QrCode, KeyRound } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/src/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/src/components/ui/input-otp';
import { QRScanner } from '@/src/components/qr-scanner';
import { toast } from 'sonner';

export default function CourseDetailPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [course, setCourse] = useState<Course | undefined>();
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [activeTab, setActiveTab] = useState('lessons');
  const [watchedLessons, setWatchedLessons] = useState<Set<string>>(new Set());
  const [attendedLive, setAttendedLive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otpValue, setOtpValue] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchCourse = async () => {
      const courseData = await vignan.entities.Course.get(params.id);
      if (courseData) {
        setCourse(courseData);
        // Initialize watched lessons from localStorage using new prefix
        const watchedKey = `edu_watched_${user?.id}_${params.id}`;
        const saved = localStorage.getItem(watchedKey);
        if (saved) {
          setWatchedLessons(new Set(JSON.parse(saved)));
        }
        // Initialize live attendance
        const liveKey = `edu_live_attended_${user?.id}_${params.id}`;
        setAttendedLive(localStorage.getItem(liveKey) === 'true');
      }
    };
    fetchCourse();
  }, [params.id, user]);

  const updateAttendance = async (watched: Set<string>, live: boolean) => {
    if (user && course) {
      const totalItems = course.lessons.length + (course.liveSession ? 1 : 0);
      const attendedItems = watched.size + (live ? 1 : 0);
      const attendancePercentage = Math.round((attendedItems / totalItems) * 100);
      
      const updatedAttendance = { ...user.attendance, [params.id]: attendancePercentage };
      
      try {
        await vignan.auth.updateMe({
          attendance: updatedAttendance
        });
        
        updateUser({
          ...user,
          attendance: updatedAttendance
        });
      } catch (error) {
        console.error('Failed to update attendance:', error);
      }
    }
  };

  const handleLiveAttendance = (code: string) => {
    if (course?.liveSession && code === course.liveSession.secretCode) {
      setAttendedLive(true);
      if (user) {
        const liveKey = `edu_live_attended_${user.id}_${params.id}`;
        localStorage.setItem(liveKey, 'true');
        updateAttendance(watchedLessons, true);
        setIsModalOpen(false);
        toast.success('Attendance marked successfully!');
      }
    } else {
      toast.error('Invalid attendance code. Please try again.');
    }
  };

  const handleLessonWatch = (lessonId: string) => {
    const newWatched = new Set(watchedLessons);
    newWatched.add(lessonId);
    setWatchedLessons(newWatched);

    // Save to localStorage
    if (user) {
      const watchedKey = `edu_watched_${user.id}_${params.id}`;
      localStorage.setItem(watchedKey, JSON.stringify(Array.from(newWatched)));
      updateAttendance(newWatched, attendedLive);
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

  if (!user || !course) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Course not found</p>
        </div>
      </DashboardLayout>
    );
  }

  const isEnrolled = user.enrolledCourses.includes(params.id);
  const currentLesson = course.lessons[selectedLesson];
  const totalItems = course.lessons.length + (course.liveSession ? 1 : 0);
  const attendedItems = watchedLessons.size + (attendedLive ? 1 : 0);
  const progressPercentage = (attendedItems / totalItems) * 100;

  if (!isEnrolled) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <Card className="p-8 max-w-md text-center space-y-4">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto" />
            <h2 className="text-2xl font-bold">Not Enrolled</h2>
            <p className="text-muted-foreground">
              Please enroll in this course first
            </p>
            <Button onClick={() => router.push('/courses')}>
              Back to Courses
            </Button>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0">
        {/* Course Header */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {course.category}
            </p>
            <h1 className="text-4xl font-bold">{course.title}</h1>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{course.lessons.length} lessons</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Course Progress</span>
              <span className="text-muted-foreground">
                {Math.round(progressPercentage)}% complete
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-5">
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="quiz">Quiz</TabsTrigger>
            <TabsTrigger value="exam" className="hidden md:flex">Exam</TabsTrigger>
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Video Player */}
              <div className="lg:col-span-2 space-y-4">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-primary/10 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-center space-y-2">
                      <Play className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-muted-foreground font-medium">
                        {currentLesson.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {currentLesson.duration} minutes
                      </p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">{currentLesson.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{currentLesson.duration} minutes</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t space-y-3">
                      <p className="text-sm text-muted-foreground">
                        This is lesson {selectedLesson + 1} of {course.lessons.length}
                      </p>
                      {!watchedLessons.has(currentLesson.id) && (
                        <Button
                          onClick={() => handleLessonWatch(currentLesson.id)}
                          className="w-full"
                        >
                          Mark as Watched
                        </Button>
                      )}
                      {watchedLessons.has(currentLesson.id) && (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Lessons List */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Lessons</h3>
                <div className="space-y-2">
                  {course.lessons.map((lesson, index) => {
                    const isWatched = watchedLessons.has(lesson.id);
                    return (
                      <Card
                        key={lesson.id}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedLesson === index
                            ? 'border-primary bg-primary/5'
                            : 'hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedLesson(index)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">
                              Lesson {index + 1}
                            </p>
                            <p className="font-medium text-sm line-clamp-2">
                              {lesson.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {lesson.duration}m
                            </p>
                          </div>
                          {isWatched && (
                            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Live Session Tab */}
          <TabsContent value="live" className="space-y-6">
            <Card className="p-8 space-y-4">
              {course.liveSession ? (
                <>
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div className="flex-1 space-y-3">
                      <h2 className="text-2xl font-bold">
                        {course.liveSession.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {course.liveSession.description}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-medium">Instructor:</span>{' '}
                          {course.liveSession.instructor}
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Scheduled:</span>{' '}
                          {new Date(
                            course.liveSession.scheduledTime
                          ).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="flex-1 sm:flex-none">
                          Join Live Session
                        </Button>
                        {!attendedLive ? (
                          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                            <DialogTrigger asChild>
                              <Button variant="secondary" className="gap-2">
                                <QrCode className="w-4 h-4" />
                                Mark Attendance
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Mark Attendance</DialogTitle>
                              </DialogHeader>
                              <Tabs defaultValue="qr" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                  <TabsTrigger value="qr">Scan QR</TabsTrigger>
                                  <TabsTrigger value="code">Enter Code</TabsTrigger>
                                </TabsList>
                                <TabsContent value="qr" className="space-y-4 pt-4">
                                  <div className="flex flex-col items-center gap-4 text-center">
                                    <p className="text-sm text-muted-foreground">
                                      Scan the QR code shown during the live session
                                    </p>
                                    <QRScanner onScan={(text) => handleLiveAttendance(text)} />
                                  </div>
                                </TabsContent>
                                <TabsContent value="code" className="space-y-6 pt-4">
                                  <div className="flex flex-col items-center gap-6 text-center">
                                    <div className="space-y-2">
                                      <p className="text-sm font-medium">Session Code</p>
                                      <p className="text-sm text-muted-foreground">
                                        Enter the 6-digit code provided by your instructor
                                      </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                      <InputOTP 
                                        maxLength={6} 
                                        value={otpValue} 
                                        onChange={setOtpValue}
                                        onComplete={(v) => handleLiveAttendance(v)}
                                      >
                                        <InputOTPGroup>
                                          <InputOTPSlot index={0} />
                                          <InputOTPSlot index={1} />
                                          <InputOTPSlot index={2} />
                                          <InputOTPSlot index={3} />
                                          <InputOTPSlot index={4} />
                                          <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                      </InputOTP>
                                      <Button 
                                        className="w-full gap-2" 
                                        onClick={() => handleLiveAttendance(otpValue)}
                                        disabled={otpValue.length !== 6}
                                      >
                                        <KeyRound className="w-4 h-4" />
                                        Submit Code
                                      </Button>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-green-600 font-medium px-4 py-2 bg-green-50 rounded-md border border-green-200">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Attendance Marked</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No live sessions scheduled yet
                </p>
              )}
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <div className="space-y-4">
              {course.assignments.map((assignment) => (
                <Card key={assignment.id} className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <FileText className="w-5 h-5 text-secondary" />
                        {assignment.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {assignment.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => router.push(`/assignments/${assignment.id}`)}
                  >
                    View Assignment
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            <Card className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{course.quiz.title}</h2>
                <p className="text-muted-foreground">
                  {course.quiz.questions.length} questions • Passing score:{' '}
                  {course.quiz.passingScore}%
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => router.push(`/quiz/${course.quiz.id}`)}
              >
                Take Quiz
              </Button>
            </Card>
          </TabsContent>

          {/* Exam Tab */}
          <TabsContent value="exam" className="space-y-6">
            <Card className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{course.exam.title}</h2>
                <p className="text-muted-foreground">
                  {course.exam.questions.length} questions • {course.exam.duration}{' '}
                  minutes • Passing score: {course.exam.passingScore}%
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => router.push(`/exam/${course.exam.id}`)}
                disabled={watchedLessons.size < course.lessons.length}
              >
                {watchedLessons.size < course.lessons.length
                  ? 'Complete all lessons first'
                  : 'Take Exam'}
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
