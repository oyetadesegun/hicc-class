'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { getAdminAssignmentReviewData, gradeAssignmentSubmission } from '@/lib/actions/admin-assignments';
import { CheckCircle2, Clock, ExternalLink, FileText, GraduationCap, Paperclip, Search, XCircle } from 'lucide-react';
import { toast } from 'sonner';

type AssignmentReviewData = Awaited<ReturnType<typeof getAdminAssignmentReviewData>>;
type AssignmentReviewRow = AssignmentReviewData['rows'][number];

export default function AdminAssignmentsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [data, setData] = useState<AssignmentReviewData | null>(null);
  const [fetching, setFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');
  const [studentFilter, setStudentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedRow, setSelectedRow] = useState<AssignmentReviewRow | null>(null);
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'ADMIN')) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  const fetchData = async () => {
    try {
      setFetching(true);
      setData(await getAdminAssignmentReviewData());
    } catch (error) {
      console.error('Failed to load assignment review data:', error);
      toast.error('Failed to load assignment review data');
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (user?.role === 'ADMIN') {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    setStudentFilter('all');
  }, [courseFilter]);

  const studentOptions = useMemo(() => {
    const rows = data?.rows ?? [];
    const students = new Map<string, { id: string; name: string; email: string }>();

    rows.forEach((row) => {
      if (courseFilter !== 'all' && row.courseId !== courseFilter) return;
      students.set(row.studentId, {
        id: row.studentId,
        name: row.studentName,
        email: row.studentEmail,
      });
    });

    return Array.from(students.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [courseFilter, data?.rows]);

  const filteredRows = useMemo(() => {
    const rows = data?.rows ?? [];
    const query = searchTerm.toLowerCase().trim();

    return rows.filter((row) => {
      if (courseFilter !== 'all' && row.courseId !== courseFilter) return false;
      if (studentFilter !== 'all' && row.studentId !== studentFilter) return false;
      if (statusFilter === 'missing' && row.submitted) return false;
      if (statusFilter === 'submitted' && !row.submitted) return false;
      if (statusFilter === 'ungraded' && (!row.submitted || row.status === 'GRADED')) return false;
      if (statusFilter === 'graded' && row.status !== 'GRADED') return false;

      if (!query) return true;
      return [row.studentName, row.studentEmail, row.assignmentTitle, row.courseTitle, row.lessonTitle ?? '']
        .some((value) => value.toLowerCase().includes(query));
    });
  }, [courseFilter, data?.rows, searchTerm, statusFilter, studentFilter]);

  const openGradeDialog = (row: AssignmentReviewRow) => {
    setSelectedRow(row);
    setScore(row.score === null ? '' : String(row.score));
    setFeedback(row.feedback ?? '');
  };

  const handleSaveGrade = async () => {
    if (!selectedRow?.submissionId) return;

    try {
      setSaving(true);
      await gradeAssignmentSubmission(selectedRow.submissionId, {
        score: score.trim() ? Number(score) : null,
        feedback,
      });
      toast.success('Submission graded');
      setSelectedRow(null);
      await fetchData();
    } catch (error) {
      console.error('Failed to grade submission:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to grade submission');
    } finally {
      setSaving(false);
    }
  };

  if (loading || fetching) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  if (!user || user.role !== 'ADMIN') return null;

  const stats = data?.stats ?? { submitted: 0, missing: 0, graded: 0, ungraded: 0 };
  const selectedStudent = studentOptions.find((student) => student.id === studentFilter);
  const selectedStudentStats = {
    total: filteredRows.length,
    submitted: filteredRows.filter((row) => row.submitted).length,
    missing: filteredRows.filter((row) => !row.submitted).length,
    graded: filteredRows.filter((row) => row.status === 'GRADED').length,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-16 md:pb-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-outfit">Assignment Review</h1>
          <p className="text-muted-foreground">Review submissions, identify missing work, and grade student assignments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Submitted</CardTitle></CardHeader><CardContent className="text-2xl font-bold text-green-600">{stats.submitted}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Missing</CardTitle></CardHeader><CardContent className="text-2xl font-bold text-destructive">{stats.missing}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Ungraded</CardTitle></CardHeader><CardContent className="text-2xl font-bold text-orange-500">{stats.ungraded}</CardContent></Card>
          <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Graded</CardTitle></CardHeader><CardContent className="text-2xl font-bold text-primary">{stats.graded}</CardContent></Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filters</CardTitle>
            <CardDescription>Select a course and student to review one learner's assignment details, or keep all students for audit mode.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger><SelectValue placeholder="Course" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All courses</SelectItem>
                {(data?.courses ?? []).map((course) => <SelectItem key={course.id} value={course.id}>{course.title}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={studentFilter} onValueChange={setStudentFilter}>
              <SelectTrigger><SelectValue placeholder="Student" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All students</SelectItem>
                {studentOptions.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name} - {student.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="missing">Missing</SelectItem>
                <SelectItem value="ungraded">Ungraded</SelectItem>
                <SelectItem value="graded">Graded</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {selectedStudent && (
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Selected Student</p>
                  <h2 className="text-xl font-bold">{selectedStudent.name}</h2>
                  <p className="text-sm text-muted-foreground">{selectedStudent.email}</p>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div><p className="font-bold">{selectedStudentStats.total}</p><p className="text-xs text-muted-foreground">Total</p></div>
                  <div><p className="font-bold text-green-600">{selectedStudentStats.submitted}</p><p className="text-xs text-muted-foreground">Submitted</p></div>
                  <div><p className="font-bold text-destructive">{selectedStudentStats.missing}</p><p className="text-xs text-muted-foreground">Missing</p></div>
                  <div><p className="font-bold text-primary">{selectedStudentStats.graded}</p><p className="text-xs text-muted-foreground">Graded</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-3">
          {filteredRows.length === 0 ? (
            <Card className="p-12 text-center text-muted-foreground border-dashed">No assignment records match the current filters.</Card>
          ) : filteredRows.map((row) => (
            <Card key={row.id} className={`p-5 space-y-4 ${row.submitted ? 'border-green-200/70' : 'border-destructive/30 bg-destructive/5'}`}>
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="space-y-2 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <FileText className="w-5 h-5 text-secondary" />
                    <h2 className="font-semibold text-lg">{row.assignmentTitle}</h2>
                    {row.status === 'GRADED' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"><GraduationCap className="w-3 h-3" />Graded</span>
                    ) : row.submitted ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700"><Clock className="w-3 h-3" />Ungraded</span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-semibold text-destructive"><XCircle className="w-3 h-3" />Missing</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{row.courseTitle}{row.lessonTitle ? ` - ${row.lessonTitle}` : ''}</p>
                  <p className="text-sm"><span className="font-medium">{row.studentName}</span><span className="text-muted-foreground"> - {row.studentEmail}</span></p>
                  <p className="text-xs text-muted-foreground">Due {new Date(row.dueDate).toLocaleDateString()}{row.submittedAt ? ` - Submitted ${new Date(row.submittedAt).toLocaleString()}` : ''}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  {row.projectUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={row.projectUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" />Open Project</a>
                    </Button>
                  )}
                  {row.attachmentUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={row.attachmentUrl} target="_blank" rel="noopener noreferrer">
                        <Paperclip className="w-4 h-4 mr-2" />
                        {row.attachmentName ? 'Open File' : 'Open Attachment'}
                      </a>
                    </Button>
                  )}
                  {row.submissionId && <Button size="sm" onClick={() => openGradeDialog(row)}>{row.status === 'GRADED' ? 'Update Grade' : 'Grade'}</Button>}
                </div>
              </div>

              {row.attachmentUrl && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-lg border bg-muted/30 p-4 text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <Paperclip className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="font-medium truncate">{row.attachmentName || 'Submitted attachment'}</span>
                  </div>
                  {row.attachmentType && <span className="text-xs text-muted-foreground">{row.attachmentType}</span>}
                </div>
              )}

              {row.response && <div className="rounded-lg border bg-muted/30 p-4 text-sm whitespace-pre-wrap">{row.response}</div>}

              {row.status === 'GRADED' && (
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Score: {row.score ?? 'N/A'} / 100{row.feedback ? ` - ${row.feedback}` : ''}</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedRow} onOpenChange={(open) => !open && setSelectedRow(null)}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Grade Submission</DialogTitle>
              <DialogDescription>{selectedRow?.studentName} - {selectedRow?.assignmentTitle}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="score">Score out of 100</Label>
                <Input id="score" type="number" min={0} max={100} value={score} onChange={(event) => setScore(event.target.value)} placeholder="e.g. 85" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea id="feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Give the student clear, actionable feedback..." className="min-h-32" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedRow(null)}>Cancel</Button>
              <Button onClick={handleSaveGrade} disabled={saving || !selectedRow?.submissionId}>{saving ? 'Saving...' : 'Save Grade'}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
