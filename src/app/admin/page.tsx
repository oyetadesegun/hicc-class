'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { vignan } from '@/lib/vignan-client';
import { Course } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Settings, Users, BarChart3, QrCode, Trash2, BookOpen, Clock, List, ListPlus, Video, X, CheckCircle2, Edit, Save, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileUpload } from '@/components/file-upload';

export default function AdminCoursesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [newCode, setNewCode] = useState('');

  const [lessonFormData, setLessonFormData] = useState({
    title: '',
    duration: '',
    videoUrl: '',
    attachmentUrl: '',
    attachmentType: '',
    order: 1,
  });

  const [assignmentFormData, setAssignmentFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    attachmentUrl: '',
    attachmentType: '',
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

  const [selectedLessonId, setSelectedLessonId] = useState<string>('');

  const handleInitiateAttendance = async (course: Course) => {
    setSelectedCourse(course);
    setSelectedLessonId(''); // Reset for new selection
    setNewCode(''); // Reset code until lesson is selected
    setIsAttendanceModalOpen(true);
  };

  const generateAttendanceCode = async () => {
    if (!selectedCourse || !selectedLessonId) {
      toast.error('Please select a lesson first');
      return;
    }

    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    try {
      await vignan.entities.Course.createLiveSession(selectedCourse.id, {
        title: 'Live Session - ' + selectedCourse.title,
        date: new Date(),
        duration: selectedCourse.duration,
        instructor: selectedCourse.instructor,
        link: '#',
        secretCode: generatedCode,
        lessonId: selectedLessonId,
      });
      setNewCode(generatedCode);
      toast.success('Attendance code initiated for the selected lesson!');
      fetchCourses();
    } catch (error) {
      toast.error('Failed to initiate attendance');
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const handleEditCourse = (course: Course) => {
    setSelectedCourse(course);
    setFormData({
      title: course.title,
      description: course.description,
      category: course.category,
      instructor: course.instructor,
      duration: course.duration,
      level: course.level || 'Beginner',
      thumbnail: course.thumbnail || '',
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    try {
      await vignan.entities.Course.update(selectedCourse.id, formData);
      toast.success('Course updated successfully!');
      setIsEditModalOpen(false);
      fetchCourses();
    } catch (error) {
      toast.error('Failed to update course');
    }
  };

  const handleManageLessons = (course: Course) => {
    setSelectedCourse(course);
    setEditingLessonId(null);
    setLessonFormData({
      title: '',
      duration: '',
      videoUrl: '',
      attachmentUrl: '',
      attachmentType: '',
      order: course.lessons.length + 1,
    });
    setIsLessonModalOpen(true);
  };

  const handleEditLesson = (lesson: any) => {
    setEditingLessonId(lesson.id);
    setLessonFormData({
      title: lesson.title,
      duration: lesson.duration.toString(),
      videoUrl: lesson.videoUrl || '',
      attachmentUrl: lesson.attachmentUrl || '',
      attachmentType: lesson.attachmentType || '',
      order: lesson.order,
    });
  };

  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    try {
      if (editingLessonId) {
        await (vignan.entities as any).Lesson.update(editingLessonId, lessonFormData);
        toast.success('Lesson updated successfully!');
      } else {
        await (vignan.entities as any).Lesson.create(selectedCourse.id, lessonFormData);
        toast.success('Lesson added successfully!');
      }
      
      setEditingLessonId(null);
      setLessonFormData({
        title: '',
        duration: '',
        videoUrl: '',
        attachmentUrl: '',
        attachmentType: '',
        order: (selectedCourse?.lessons.length || 0) + 2,
      });
      fetchCourses();
      // Refresh selected course to show new lesson
      const allCourses = await vignan.entities.Course.list();
      const updatedCourse = allCourses.find((c: Course) => c.id === (selectedCourse?.id as string));
      if (updatedCourse) setSelectedCourse(updatedCourse);
    } catch (error) {
      toast.error('Failed to add lesson');
    }
  };

  const handleManageAssignments = (course: Course) => {
    setSelectedCourse(course);
    setAssignmentFormData({
      title: '',
      description: '',
      dueDate: '',
      attachmentUrl: '',
      attachmentType: '',
    });
    setIsAssignmentModalOpen(true);
  };

  const handleCreateAssignment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    try {
      await (vignan.entities as any).Assignment.create(selectedCourse.id, assignmentFormData);
      toast.success('Assignment added successfully!');
      setAssignmentFormData({
        title: '',
        description: '',
        dueDate: '',
        attachmentUrl: '',
        attachmentType: '',
      });
      fetchCourses();
      // Refresh selected course
      const allCourses = await vignan.entities.Course.list();
      const updatedCourse = allCourses.find((c: Course) => c.id === selectedCourse.id);
      if (updatedCourse) setSelectedCourse(updatedCourse);
    } catch (error) {
      toast.error('Failed to add assignment');
    }
  };

  const handleDeleteAssignment = async (id: string) => {
    if (!confirm('Are you sure you want to delete this assignment?')) return;
    try {
      await (vignan.entities as any).Assignment.delete(id);
      toast.success('Assignment deleted');
      fetchCourses();
      // Refresh selected course
      const allCourses = await vignan.entities.Course.list();
      const updatedCourse = allCourses.find((c: Course) => c.id === selectedCourse?.id);
      if (updatedCourse) setSelectedCourse(updatedCourse);
    } catch (error) {
      toast.error('Failed to delete assignment');
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

  if (loading || !user) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

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
              <form onSubmit={handleCreateCourse} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input 
                    id="title" 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="e.g., Advanced Theology 101" 
                    required 
                  />
                </div>
                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="category">Category</Label>
                  <Input 
                    id="category" 
                    value={formData.category} 
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    placeholder="e.g., Theology" 
                    required 
                  />
                </div>
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
                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={formData.description} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe what students will learn..." 
                    required 
                  />
                </div>
                <Button type="submit" className="md:col-span-2 w-full mt-2">Create Course</Button>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 w-full justify-start sm:justify-center"
                    onClick={() => handleEditCourse(course)}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 w-full justify-start sm:justify-center"
                    onClick={() => handleManageLessons(course)}
                  >
                    <ListPlus className="w-3.5 h-3.5" />
                    Lessons
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 w-full justify-start sm:justify-center"
                    onClick={() => handleManageAssignments(course)}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Assignments
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 w-full justify-start sm:justify-center"
                    onClick={() => handleInitiateAttendance(course)}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    Attendance
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 sm:col-span-2 text-destructive hover:text-destructive hover:bg-destructive/10 w-full justify-start sm:justify-center"
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

        {/* Edit Course Modal */}
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Edit Course: {selectedCourse?.title}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpdateCourse} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="edit-title">Course Title</Label>
                <Input 
                  id="edit-title" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="edit-category">Category</Label>
                <Input 
                  id="edit-category" 
                  value={formData.category} 
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-instructor">Instructor</Label>
                <Input 
                  id="edit-instructor" 
                  value={formData.instructor} 
                  onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-duration">Duration</Label>
                <Input 
                  id="edit-duration" 
                  value={formData.duration} 
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  required 
                />
              </div>
              <div className="grid gap-2 md:col-span-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required 
                />
              </div>
              <Button type="submit" className="md:col-span-2 w-full mt-2">Update Course</Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* Attendance Modal */}
        <Dialog open={isAttendanceModalOpen} onOpenChange={setIsAttendanceModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Initiate Attendance</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-6 space-y-6 text-center">
              <div className="space-y-4 w-full">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Select the lesson to initiate attendance for:
                  </p>
                  <p className="font-bold text-lg">{selectedCourse?.title}</p>
                </div>

                <div className="grid gap-2 text-left">
                  <Label htmlFor="lesson-select">Lesson</Label>
                  <select 
                    id="lesson-select"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={selectedLessonId}
                    onChange={(e) => setSelectedLessonId(e.target.value)}
                  >
                    <option value="">Select a lesson...</option>
                    {selectedCourse?.lessons.map((lesson) => (
                      <option key={lesson.id} value={lesson.id}>
                        Lesson {lesson.order}: {lesson.title}
                      </option>
                    ))}
                  </select>
                </div>

                {!newCode ? (
                  <Button 
                    className="w-full h-12 text-lg font-bold" 
                    onClick={generateAttendanceCode}
                    disabled={!selectedLessonId}
                  >
                    Generate Attendance Code
                  </Button>
                ) : (
                  <div className="flex flex-col items-center gap-4 w-full animate-in fade-in zoom-in duration-300">
                    <div className="text-5xl font-mono font-black tracking-widest text-primary p-6 bg-primary/5 rounded-2xl border-2 border-primary/20 w-full animate-pulse">
                      {newCode}
                    </div>
                    <p className="text-xs text-muted-foreground max-w-xs italic">
                      Show this code to your students. They can enter it manually in their course dashboard.
                    </p>
                    <Button variant="outline" className="w-full" onClick={() => setNewCode('')}>
                      Generate New Code
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex gap-3 w-full pt-4 border-t">
                <Button variant="ghost" className="flex-1" onClick={() => setIsAttendanceModalOpen(false)}>
                  Close
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
                      <div key={lesson.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border bg-muted/30 group gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 shrink-0 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            {lesson.order}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground truncate">{lesson.duration} mins • {lesson.videoUrl}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 justify-end opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-primary h-8 w-8"
                            onClick={() => handleEditLesson(lesson)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-destructive h-8 w-8"
                            onClick={() => handleDeleteLesson(lesson.id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Add New Lesson Form */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold flex items-center gap-2">
                  {editingLessonId ? <Edit className="w-4 h-4" /> : <Plus className="w-4 h-4" />} 
                  {editingLessonId ? 'Edit Lesson' : 'Add New Lesson'}
                </h3>
                <form onSubmit={handleCreateLesson} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2 md:col-span-2">
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
                  <div className="grid gap-2 md:col-span-2">
                    <Label>Lesson Video</Label>
                    <FileUpload 
                      label="Upload Lesson Video"
                      accept="video/*"
                      folder="lessons/videos"
                      onSuccess={(url) => setLessonFormData({...lessonFormData, videoUrl: url})}
                    />
                    {lessonFormData.videoUrl && (
                      <p className="text-xs text-green-600 truncate px-1">Video uploaded: {lessonFormData.videoUrl}</p>
                    )}
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label>Attachment (Optional)</Label>
                    <FileUpload 
                      label="Upload Attachment"
                      accept="*"
                      folder="lessons/attachments"
                      onSuccess={(url, type) => setLessonFormData({
                        ...lessonFormData, 
                        attachmentUrl: url,
                        attachmentType: type
                      })}
                    />
                    {lessonFormData.attachmentUrl && (
                      <p className="text-xs text-green-600 truncate px-1">Attachment uploaded: {lessonFormData.attachmentUrl}</p>
                    )}
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-2 mt-2">
                    <Button type="submit" className="flex-1 gap-2">
                      {editingLessonId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      {editingLessonId ? 'Update Lesson' : 'Add Lesson to Course'}
                    </Button>
                    {editingLessonId && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => {
                          setEditingLessonId(null);
                          setLessonFormData({
                            title: '',
                            duration: '',
                            videoUrl: '',
                            attachmentUrl: '',
                            attachmentType: '',
                            order: (selectedCourse?.lessons.length || 0) + 1,
                          });
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
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

        {/* Assignment Management Modal */}
        <Dialog open={isAssignmentModalOpen} onOpenChange={setIsAssignmentModalOpen}>
          <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
            <DialogHeader className="p-6 border-b">
              <DialogTitle>Manage Assignments: {selectedCourse?.title}</DialogTitle>
              <DialogDescription>Add new assignments or remove existing ones from this course.</DialogDescription>
            </DialogHeader>
            
            <div className="flex-1 overflow-auto p-6 space-y-8">
              {/* Existing Assignments List */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <List className="w-4 h-4" /> 
                  Current Assignments ({selectedCourse?.assignments.length})
                </h3>
                <div className="space-y-2">
                  {selectedCourse?.assignments.length === 0 ? (
                    <p className="text-sm text-muted-foreground italic p-4 border rounded-lg border-dashed text-center">
                      No assignments added yet.
                    </p>
                  ) : (
                    selectedCourse?.assignments.map((assignment) => (
                      <div key={assignment.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border bg-muted/30 group gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 shrink-0 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-sm truncate">{assignment.title}</p>
                            <p className="text-xs text-muted-foreground truncate">Due: {assignment.dueDate}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-destructive h-8 w-8 self-end sm:self-auto opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleDeleteAssignment(assignment.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Add New Assignment Form */}
              <div className="space-y-4 border-t pt-6">
                <h3 className="font-semibold flex items-center gap-2">
                  <Plus className="w-4 h-4" /> 
                  Add New Assignment
                </h3>
                <form onSubmit={handleCreateAssignment} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2 md:col-span-2">
                    <Label htmlFor="assignment-title">Assignment Title</Label>
                    <Input 
                      id="assignment-title" 
                      value={assignmentFormData.title} 
                      onChange={(e) => setAssignmentFormData({...assignmentFormData, title: e.target.value})}
                      placeholder="e.g., Reflection Essay" 
                      required 
                    />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label htmlFor="assignment-due">Due Date</Label>
                    <Input 
                      id="assignment-due" 
                      type="date"
                      value={assignmentFormData.dueDate} 
                      onChange={(e) => setAssignmentFormData({...assignmentFormData, dueDate: e.target.value})}
                      required 
                    />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label htmlFor="assignment-desc">Description</Label>
                    <Textarea 
                      id="assignment-desc" 
                      value={assignmentFormData.description} 
                      onChange={(e) => setAssignmentFormData({...assignmentFormData, description: e.target.value})}
                      placeholder="Describe the assignment..." 
                      required 
                    />
                  </div>
                  <div className="grid gap-2 md:col-span-2">
                    <Label>Assignment Attachment (Optional)</Label>
                    <FileUpload 
                      label="Upload Assignment Document"
                      accept="*"
                      folder="assignments/materials"
                      onSuccess={(url, type) => setAssignmentFormData({
                        ...assignmentFormData, 
                        attachmentUrl: url,
                        attachmentType: type
                      })}
                    />
                    {assignmentFormData.attachmentUrl && (
                      <p className="text-xs text-green-600 truncate px-1">Attachment uploaded: {assignmentFormData.attachmentUrl}</p>
                    )}
                  </div>
                  <Button type="submit" className="md:col-span-2 gap-2 mt-2">
                    <Plus className="w-4 h-4" />
                    Add Assignment to Course
                  </Button>
                </form>
              </div>
            </div>

            <DialogFooter className="p-6 border-t bg-muted/20">
              <Button variant="secondary" onClick={() => setIsAssignmentModalOpen(false)}>
                Finished
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}

