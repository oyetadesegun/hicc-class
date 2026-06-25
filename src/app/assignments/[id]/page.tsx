'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { getAssignmentById, submitAssignment } from '@/lib/actions/assignments';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Send, FileText, CheckCircle2, ArrowLeft, ExternalLink, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface AssignmentData {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  course: { id: string; title: string };
  lesson: { id: string; title: string; order: number } | null;
  submissions: Array<{
    id: string;
    status: string;
    content: any;
    projectUrl: string | null;
    feedback: string | null;
    score: number | null;
    submittedAt: Date;
  }>;
}

export default function AssignmentDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [assignment, setAssignment] = useState<AssignmentData | null>(null);
  const [fetching, setFetching] = useState(true);
  const [description, setDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!user) return;
      try {
        const data = await getAssignmentById(params.id);
        setAssignment(data as AssignmentData | null);
      } catch (error) {
        console.error('Failed to fetch assignment:', error);
      } finally {
        setFetching(false);
      }
    };
    fetchAssignment();
  }, [params.id, user]);

  const handleSubmit = async () => {
    if (!assignment || !user || !description.trim()) return;

    setSubmitting(true);

    try {
      const result = await submitAssignment(assignment.id, {
        description: description.trim(),
        projectUrl: projectUrl.trim() || undefined,
      });

      if (result.success) {
        toast.success('Assignment submitted successfully!');
        // Refresh assignment data to show the submission
        const refreshed = await getAssignmentById(params.id);
        setAssignment(refreshed as AssignmentData | null);
      } else {
        toast.error(result.error || 'Failed to submit assignment');
      }
    } catch (error) {
      console.error('Assignment submission error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || fetching) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!user || !assignment) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Assignment not found</p>
        </div>
      </DashboardLayout>
    );
  }

  const submission = assignment.submissions[0] || null;
  const isSubmitted = !!submission;

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6 py-8 pb-16 md:pb-0">
        {/* Back button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        {/* Header */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <BookOpen className="w-4 h-4" />
              <span>{assignment.course.title}</span>
              {assignment.lesson && (
                <>
                  <span className="text-muted-foreground/50">·</span>
                  <span>Lesson {assignment.lesson.order}</span>
                </>
              )}
            </div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FileText className="w-7 h-7 flex-shrink-0" />
              {assignment.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                Due:{' '}
                {new Date(assignment.dueDate).toLocaleDateString('en-GB', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            {isSubmitted && (
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Submitted</span>
              </div>
            )}
          </div>
        </div>

        {/* Assignment Description */}
        <Card className="p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-semibold">Assignment Details</h2>
          <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {assignment.description}
          </p>
        </Card>

        {/* Submission Form / View */}
        <Card className="p-6 md:p-8 space-y-6">
          <h2 className="text-lg font-semibold">
            {isSubmitted ? 'Your Submission' : 'Submit Your Work'}
          </h2>

          {isSubmitted ? (
            // ── Read-only view of existing submission ──
            <div className="space-y-5">
              {submission.projectUrl && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-muted-foreground">
                    Project URL
                  </label>
                  <a
                    href={submission.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline break-all"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    {submission.projectUrl}
                  </a>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">
                  Your Response
                </label>
                <div className="rounded-lg border bg-muted/30 p-4 text-sm whitespace-pre-wrap">
                  {(submission.content as any)?.description || ''}
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-4 rounded-lg space-y-2">
                <p className="text-sm font-medium text-green-900 dark:text-green-200">
                  Submitted on{' '}
                  {new Date(submission.submittedAt).toLocaleString('en-GB', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p className="text-sm text-green-800 dark:text-green-300">
                  {submission.status === 'GRADED'
                    ? `Graded: ${submission.score ?? 'N/A'}`
                    : 'Your instructor will review your submission and provide feedback.'}
                </p>
              </div>

              {/* Instructor Feedback */}
              {submission.feedback && (
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg space-y-2">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-200">
                    Instructor Feedback
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-300 whitespace-pre-wrap">
                    {submission.feedback}
                  </p>
                </div>
              )}
            </div>
          ) : (
            // ── Editable submission form ──
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium block">
                  Project URL{' '}
                  <span className="text-muted-foreground font-normal">
                    (optional - paste your deployed project link)
                  </span>
                </label>
                <Input
                  type="url"
                  placeholder="https://your-project.vercel.app"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium block">
                  Your Response{' '}
                  <span className="text-destructive">*</span>
                </label>
                <Textarea
                  placeholder="Describe your work, what you built, how you approached it, and any challenges you faced..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[200px] resize-y"
                />
                <p className="text-xs text-muted-foreground text-right">
                  {description.length.toLocaleString()} / 10,000
                </p>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!description.trim() || submitting}
                size="lg"
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitting ? 'Submitting...' : 'Submit Assignment'}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}
