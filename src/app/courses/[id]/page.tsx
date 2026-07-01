'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { getCourse } from '@/lib/actions/courses';
import { markLessonWatched, submitSessionCode, getUserAttendance } from '@/lib/actions/attendance';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Clock, Users, Zap, FileText, BookOpen, CheckCircle2, QrCode, KeyRound, CheckCircle, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FileViewer } from '@/components/file-viewer';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { QRScanner } from '@/components/qr-scanner';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';

const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/CGhSYILSI9hCQFA3Weix0N';

export default function CourseDetailPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [course, setCourse] = useState<any | undefined>();
  const [fetching, setFetching] = useState(true);

  const [selectedLesson, setSelectedLesson] = useState(0);
  const [activeTab, setActiveTab] = useState('lessons');

  const [watchedLessons, setWatchedLessons] = useState<Set<string>>(new Set());
  const [attendedLiveSessions, setAttendedLiveSessions] = useState<Set<string>>(new Set());

  // States for marking live attendance
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [otpValue, setOtpValue] = useState('');
  const [submittingLive, setSubmittingLive] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getCourse(params.id);
        if (courseData) {
          setCourse(courseData);

          if (user) {
            const attendance = await getUserAttendance(params.id);
            setWatchedLessons(new Set(attendance.watchedLessons));
            setAttendedLiveSessions(new Set(attendance.attendedLiveSessions));
          }
        }
      } catch (error) {
        console.error('Failed to load course details:', error);
      } finally {
        setFetching(false);
      }
    };
    if (user) {
      fetchData();
    }
  }, [params.id, user]);

  const handleLiveAttendance = async (code: string) => {
    if (!activeSessionId) return;
    setSubmittingLive(true);

    try {
      const result = await submitSessionCode(code, params.id);

      if (result.success && result.liveSessionId) {
        setAttendedLiveSessions(prev => new Set(prev).add(result.liveSessionId!));
        setIsModalOpen(false);
        setOtpValue('');
        setActiveSessionId(null);
        toast.success('Attendance marked successfully!');
      } else {
        if (result.error === 'ALREADY_ATTENDED') {
          toast.info('You have already taken attendance for this session.');
          setIsModalOpen(false);
          setOtpValue('');
          setActiveSessionId(null);
        } else {
          toast.error(result.error || 'Invalid attendance code. Please try again.');
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setSubmittingLive(false);
    }
  };

  const handleLessonWatch = async (lessonId: string) => {
    // Optimistic update
    const newWatched = new Set(watchedLessons);
    newWatched.add(lessonId);
    setWatchedLessons(newWatched);

    const result = await markLessonWatched(lessonId, params.id);
    if (!result.success) {
      // Revert on failure
      const reverted = new Set(newWatched);
      reverted.delete(lessonId);
      setWatchedLessons(reverted);
      toast.error(result.error || 'Failed to mark lesson as watched');
    }
  };

  const openAttendanceModal = (sessionId: string) => {
    setActiveSessionId(sessionId);
    setOtpValue('');
    setIsModalOpen(true);
  };

  const getSessionJoinUrl = (session: any) => {
    if (typeof session.link === 'string' && /^https?:\/\//i.test(session.link)) {
      return session.link;
    }

    return WHATSAPP_GROUP_LINK;
  };

  const handleJoinLiveSession = (session: any) => {
    window.open(getSessionJoinUrl(session), '_blank', 'noopener,noreferrer');
  };

  if (loading || fetching || !course) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  if (!user) return null;

  const isEnrolled = user.enrolledCourses.includes(params.id);
  const currentLesson = course.lessons[selectedLesson];
  const totalItems = course.lessons.length + course.liveSessions.length;
  const attendedItems = watchedLessons.size + attendedLiveSessions.size;
  const progressPercentage = totalItems === 0 ? 0 : Math.round((attendedItems / totalItems) * 100);
  const liveSessions = [...(course.liveSessions || [])].sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const sessionsToMark = liveSessions.filter((session: any) => !attendedLiveSessions.has(session.id));
  const attendedSessions = liveSessions.filter((session: any) => attendedLiveSessions.has(session.id));

  const renderLiveSessionCard = (session: any) => {
    const hasAttended = attendedLiveSessions.has(session.id);
    const isFutureSession = false; // new Date(session.date).getTime() > Date.now();

    return (
      <Card key={session.id} className={`p-6 space-y-4 transition-colors ${hasAttended ? 'border-green-200 bg-green-50/30 dark:border-green-800 dark:bg-green-950/20' : ''} ${isFutureSession ? 'opacity-75 bg-muted/20' : ''}`}>
        <div className="flex items-start gap-4">
          <Zap className={`w-8 h-8 shrink-0 mt-1 ${hasAttended ? 'text-green-500' : isFutureSession ? 'text-muted-foreground/50' : 'text-accent'}`} />
          <div className="flex-1 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <h2 className="text-xl font-bold">
                {session.title}
              </h2>
              {hasAttended ? (
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium px-3 py-1 bg-green-100 dark:bg-green-900/40 rounded-full border border-green-200 dark:border-green-800 w-fit">
                  <CheckCircle className="w-4 h-4" />
                  <span>Attended</span>
                </div>
              ) : isFutureSession ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium px-3 py-1 bg-muted rounded-full border w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>Upcoming</span>
                </div>
              ) : null}
            </div>

            <p className="text-muted-foreground">
              {session.description}
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Instructor:</span>{' '}
                {session.instructor}
              </p>
              <p className="text-sm">
                <span className="font-medium">Scheduled:</span>{' '}
                {new Date(session.date).toLocaleString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                className="flex-1 sm:flex-none"
                disabled={isFutureSession}
                onClick={() => handleJoinLiveSession(session)}
              >
                Join Live Session
              </Button>
              {!hasAttended && (
                <Button
                  variant={isFutureSession ? "outline" : "secondary"}
                  className="gap-2"
                  onClick={() => openAttendanceModal(session.id)}
                  disabled={isFutureSession}
                >
                  <QrCode className="w-4 h-4" />
                  {isFutureSession ? 'Available Soon' : 'Mark Attendance'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };

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
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4 flex-1">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {course.category}
              </p>
              <h1 className="text-4xl font-bold font-outfit">{course.title}</h1>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground border-b pb-4">
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
          </div>

          <Card className="p-6 md:w-80 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Course Progress</span>
                <span className="text-muted-foreground">{progressPercentage}% complete</span>
              </div>
              <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </Card>
        </div>
        {/* Course Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="live">Class Schedule</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
          </TabsList>
          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Sidebar List */}
              <div className="space-y-4 md:col-span-1 order-2 md:order-1">
                <h3 className="font-semibold text-lg">Lessons</h3>
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {course.lessons.map((lesson: any, index: number) => (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLesson(index)}
                      className={`w-full text-left p-4 rounded-lg transition-colors border ${selectedLesson === index
                        ? 'border-primary bg-primary/5'
                        : 'border-transparent hover:border-border hover:bg-secondary/50'
                        }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Lesson {index + 1}
                          </span>
                          {watchedLessons.has(lesson.id) && (
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          )}
                        </div>
                        <p className={`font-medium line-clamp-2 ${selectedLesson === index ? 'text-primary' : ''
                          }`}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {lesson.duration}m
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Viewer area */}
              <div className="md:col-span-2 order-1 md:order-2">
                {currentLesson ? (
                  <Card className="overflow-hidden">
                    <div className="aspect-video bg-black relative">
                      {currentLesson.videoUrl ? (
                        currentLesson.videoUrl.includes('youtube.com') || currentLesson.videoUrl.includes('youtu.be') ? (
                          <iframe
                            src={currentLesson.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                            className="w-full h-full"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          />
                        ) : (
                          <FileViewer
                            url={currentLesson.videoUrl}
                            type="video/mp4"
                            title={currentLesson.title}
                          />
                        )
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-4 bg-secondary/10">
                          <Play className="w-16 h-16 opacity-20" />
                          <p>Reading material available below</p>
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                      <h2 className="text-2xl font-bold">{currentLesson.title}</h2>

                      {currentLesson.attachmentUrl && (
                        <div className="pt-4 border-t">
                          <p className="text-sm font-semibold mb-2">Lesson Attachment:</p>
                          <FileViewer
                            url={currentLesson.attachmentUrl}
                            type={currentLesson.attachmentType || undefined}
                            title={`${currentLesson.title} Attachment`}
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{currentLesson.duration} minutes</span>
                        </div>
                      </div>

                      {currentLesson.content && (
                        <div className="pt-4 pb-2 border-t">
                          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none break-words">
                            <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
                          </div>
                        </div>
                      )}

                      {/* Per-Lesson Assignment Card */}
                      {currentLesson.assignments && currentLesson.assignments.length > 0 && (
                        <div className="pt-4 border-t">
                          <div className="rounded-lg border-2 border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800 p-5 space-y-3">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-amber-600" />
                              <h3 className="font-semibold text-amber-900 dark:text-amber-200">
                                Assignment for this Lesson
                              </h3>
                            </div>
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                              {currentLesson.assignments[0].title}
                            </p>
                            <p className="text-xs text-amber-700/80 dark:text-amber-400/70 line-clamp-2">
                              {currentLesson.assignments[0].description}
                            </p>
                            <Button
                              variant="outline"
                              className="w-full border-amber-300 bg-white hover:bg-amber-100 text-amber-900 dark:bg-amber-950 dark:hover:bg-amber-900 dark:text-amber-200"
                              onClick={() => router.push(`/assignments/${currentLesson.assignments[0].id}`)}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              Take Assignment
                            </Button>
                          </div>
                        </div>
                      )}

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
                ) : (
                  <Card className="p-12 flex items-center justify-center text-muted-foreground border-dashed">
                    No lessons have been uploaded for this course yet.
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Live Sessions Tab */}
          <TabsContent value="live" className="space-y-6">
            {liveSessions.length > 0 ? (
              <Tabs defaultValue="mark-attendance" className="space-y-5">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mark-attendance">
                    Mark Attendance ({sessionsToMark.length})
                  </TabsTrigger>
                  <TabsTrigger value="attended">
                    Attended Classes ({attendedSessions.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mark-attendance" className="space-y-4">
                  {sessionsToMark.length > 0 ? (
                    sessionsToMark.map(renderLiveSessionCard)
                  ) : (
                    <Card className="p-12 text-center text-muted-foreground border-dashed">
                      You have marked attendance for all available classes.
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="attended" className="space-y-4">
                  {attendedSessions.length > 0 ? (
                    attendedSessions.map(renderLiveSessionCard)
                  ) : (
                    <Card className="p-12 text-center text-muted-foreground border-dashed">
                      No attended classes yet. Mark attendance for a class and it will appear here.
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            ) : (
                <p className="text-muted-foreground text-center py-12">
                  No live sessions scheduled yet
                </p>
            )}

            {/* Global Modal for Attendance */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
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
                          disabled={submittingLive}
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
                          disabled={otpValue.length !== 6 || submittingLive}
                        >
                          <KeyRound className="w-4 h-4" />
                          {submittingLive ? 'Verifying...' : 'Submit Code'}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <div className="space-y-4">
              {course.assignments && course.assignments.length > 0 ? (
                course.assignments.map((assignment: any) => (
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
                          Due: {new Date(assignment.dueDate).toLocaleDateString()}
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
                ))
              ) : (
                <Card className="p-12 text-center text-muted-foreground border-dashed">
                  No assignments available for this course yet.
                </Card>
              )}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </DashboardLayout>
  );
}
