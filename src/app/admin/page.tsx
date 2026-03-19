'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Plus, Settings, Users, BarChart3, QrCode, Trash2, BookOpen, Clock, List, ListPlus, Video, X, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/src/components/ui/dialog';
import { Label } from '@/src/components/ui/label';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';

export default function AdminCoursesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [newCode, setNewCode] = useState('');

  const [lessonFormData, setLessonFormData] = useState({
    title: '',
    duration: '',
    videoUrl: '',
    order: 1,
  });

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    instructor: '',
    duration: '',
    level: 'Beginner',
    thumbnail: '',
  });

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const fetchCourses = async () => {
    const allCourses = await vignan.entities.Course.list();
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await vignan.entities.Course.create(formData);
      toast.success('Course created successfully!');
      setIsCreateModalOpen(false);
      fetchCourses();
    } catch (error) {
      toast.error('Failed to create course');
    }
  };

  const handleDeleteCourse = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course? This action cannot be undone.')) return;
    try {
      await vignan.entities.Course.delete(id);
      toast.success('Course deleted successfully');
      fetchCourses();
    } catch (error) {
      toast.error('Failed to delete course');
    }
  };

  const handleInitiateAttendance = async (course: Course) => {
    if (!course.liveSession) {
      // Create a dummy live session if none exists
      try {
        await vignan.entities.Course.createLiveSession(course.id, {
          title: 'Live Session - ' + course.title,
          date: new Date(),
          duration: course.duration,
          instructor: course.instructor,
          link: '#',
          secretCode: Math.floor(100000 + Math.random() * 900000).toString(),
        });
        toast.success('Live session and attendance code initiated!');
        fetchCourses();
      } catch (error) {
        toast.error('Failed to initiate live session');
      }
      return;
    }
    
    setSelectedCourse(course);
    setNewCode(Math.floor(100000 + Math.random() * 900000).toString());
    setIsAttendanceModalOpen(true);
  };

  const handleManageLessons = (course: Course) => {
    setSelectedCourse(course);
    setLessonFormData({
      title: '',
      duration: '',
      videoUrl: '',
      order: course.lessons.length + 1,
    });
    setIsLessonModalOpen(true);
  };

  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    try {
      await (vignan.entities as any).Lesson.create(selectedCourse.id, lessonFormData);
      toast.success('Lesson added successfully!');
      setLessonFormData({
        title: '',
        duration: '',
        videoUrl: '',
        order: selectedCourse.lessons.length + 2,
      });
      fetchCourses();
      // Refresh selected course to show new lesson
      const allCourses = await vignan.entities.Course.list();
      const updatedCourse = allCourses.find((c: Course) => c.id === selectedCourse.id);
      if (updatedCourse) setSelectedCourse(updatedCourse);
    } catch (error) {
      toast.error('Failed to add lesson');
    }
  };

  const handleDeleteLesson = async (lessonId: string) => {
    if (!confirm('Are you sure you want to delete this lesson?')) return;
    try {
      await (vignan.entities as any).Lesson.delete(lessonId);
      toast.success('Lesson deleted');
      fetchCourses();
      // Refresh selected course
      const allCourses = await vignan.entities.Course.list();
      const updatedCourse = allCourses.find((c: Course) => c.id === selectedCourse?.id);
      if (updatedCourse) setSelectedCourse(updatedCourse);
    } catch (error) {
      toast.error('Failed to delete lesson');
    }
  };

  const confirmAttendanceCode = async () => {
    if (selectedCourse?.liveSession) {
      try {
        await vignan.entities.Course.updateLiveSessionCode(
          selectedCourse.id,
          selectedCourse.liveSession.id,
          newCode
        );
        toast.success(`Attendance code for ${selectedCourse.title} updated: ${newCode}`);
        setIsAttendanceModalOpen(false);
        fetchCourses();
      } catch (error) {
        toast.error('Failed to update attendance code');
      }
    }
  };

  if (loading || !user) return null;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground font-outfit">Manage courses and track student attendance</p>
          </div>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create New Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Course</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateCourse} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input 
                    id="title" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Advanced Theology 101" 
                    required 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input 
                    id="category" 
                    value={formData.category} 
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="e.g., Theology" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="instructor">Instructor</Label>
                    <Input 
                      id="instructor" 
                      value={formData.instructor} 
                      onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                      placeholder="Doctor Name" 
                      required 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input 
                      id="duration" 
                      value={formData.duration} 
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="e.g., 8 weeks" 
                      required 
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={formData.description} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe what students will learn..." 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full">Create Course</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-all flex flex-col">
              <div className="h-32 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary/40" />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {course.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {course.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg line-clamp-1">{course.title}</h3>
                </div>
                
                <div className="flex items-center justify-between text-sm py-2 border-y border-border/40">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="font-medium text-primary">
                    {course.lessons.length} Lessons
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleInitiateAttendance(course)}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    Attendance
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => handleManageLessons(course)}
                  >
                    <ListPlus className="w-3.5 h-3.5" />
                    Lessons
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 col-span-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete Course
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Attendance Modal */}
        <Dialog open={isAttendanceModalOpen} onOpenChange={setIsAttendanceModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Initiate Attendance</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6 space-y-6 text-center">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Generate a new attendance code for the current live session of:
                </p>
                <p className="font-bold text-lg">{selectedCourse?.title}</p>
              </div>
              
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="text-5xl font-mono font-black tracking-widest text-primary p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 w-full animate-pulse">
                  {newCode}
                </div>
                <p className="text-xs text-muted-foreground max-w-xs italic">
                  Show this code to your students. They can enter it manually or scan a QR code generated from it.
                </p>
              </div>

              <div className="flex gap-3 w-full pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsAttendanceModalOpen(false)}>
                  Cancel
                </Button>
                <Button className="flex-1 gap-2" onClick={confirmAttendanceCode}>
                  <CheckCircle2 className="w-4 h-4" />
                  Apply & Share
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Lesson Management Modal */}
        <Dialog open={isLessonModalOpen} onOpenChange={setIsLessonModalOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
            <DialogHeader className="p-6 border-b">
              <DialogTitle>Manage Lessons: {selectedCourse?.title}</DialogTitle>
              <DialogDescription>Add new lessons or remove existing ones from this course.</DialogDescription>
            </DialogHeader>
            
            <div className="flex-1 overflow-auto p-6 space-y-8">
              {/* Existing Lessons List */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <List className="w-4 h-4" /> 
                  Current Lessons ({selectedCourse?.lessons.length})
                </h3>
                <div className="space-y-2">
                  {selectedCourse?.lessons.length === 0 ? (
                    <p className="text-sm text-muted-foreground italic p-4 border rounded-lg border-dashed text-center">
                      No lessons added yet.
                    </p>
                  ) : (
                    selectedCourse?.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg border bg-muted/30 group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {lesson.order}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration} mins • {lesson.videoUrl}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDeleteLesson(lesson.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Add New Lesson Form */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold flex items-center gap-2">
                  <Plus className="w-4 h-4" /> 
                  Add New Lesson
                </h3>
                <form onSubmit={handleCreateLesson} className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="lesson-title">Lesson Title</Label>
                    <Input 
                      id="lesson-title" 
                      value={lessonFormData.title} 
                      onChange={(e) => setLessonFormData({...lessonFormData, title: e.target.value})}
                      placeholder="e.g., Understanding the Covenant" 
                      required 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lesson-duration">Duration (minutes)</Label>
                    <Input 
                      id="lesson-duration" 
                      value={lessonFormData.duration} 
                      onChange={(e) => setLessonFormData({...lessonFormData, duration: e.target.value})}
                      placeholder="e.g., 15" 
                      required 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lesson-order">Order Number</Label>
                    <Input 
                      id="lesson-order" 
                      type="number"
                      value={lessonFormData.order} 
                      onChange={(e) => setLessonFormData({...lessonFormData, order: parseInt(e.target.value)})}
                      required 
                    />
                  </div>
                  <div className="grid gap-2 col-span-2">
                    <Label htmlFor="lesson-video">Video URL / Provider ID</Label>
                    <Input 
                      id="lesson-video" 
                      value={lessonFormData.videoUrl} 
                      onChange={(e) => setLessonFormData({...lessonFormData, videoUrl: e.target.value})}
                      placeholder="e.g., youtube_id or vimeo_id" 
                      required 
                    />
                  </div>
                  <Button type="submit" className="col-span-2 gap-2">
                    <Plus className="w-4 h-4" />
                    Add Lesson to Course
                  </Button>
                </form>
              </div>
            </div>

            <DialogFooter className="p-6 border-t bg-muted/20">
              <Button variant="secondary" onClick={() => setIsLessonModalOpen(false)}>
                Finished
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}

