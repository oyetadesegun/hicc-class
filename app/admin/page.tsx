'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { vignan } from '@/lib/vignan-client';
import { Course } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Settings, Users, BarChart3, QrCode } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function AdminCoursesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [newCode, setNewCode] = useState('');

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

  const handleInitiateAttendance = async (course: Course) => {
    if (!course.liveSession) {
      // Create a dummy live session if none exists
      try {
        await vignan.entities.Course.createLiveSession(course.id, {
          title: 'Introduction Session',
          date: new Date(),
          duration: '30',
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
                    Initiate Attendance
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Settings className="w-3.5 h-3.5 text-muted-foreground" />
                    Manage
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
      </div>
    </DashboardLayout>
  );
}

import { CheckCircle2 } from 'lucide-react';
