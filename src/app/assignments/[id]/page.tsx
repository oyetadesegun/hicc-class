'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { vignan } from '@/lib/vignan-client';
import { Assignment, Course } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Send, FileText, CheckCircle2 } from 'lucide-react';

export default function AssignmentDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchAssignment = async () => {
      if (!user) return;
      const courses = await vignan.entities.Course.list();
      let foundAssignment: Assignment | null = null;
      let foundCourse: Course | null = null;

      for (const c of courses as Course[]) {
        const assign = c.assignments.find((a: any) => a.id === params.id);
        if (assign) {
          foundAssignment = assign;
          foundCourse = c;
          break;
        }
      }

      if (foundAssignment) {
        setAssignment(foundAssignment);
        setCourse(foundCourse);

        // Check if already submitted
        if (user.id in foundAssignment.submissions) {
          setSubmitted(true);
          setContent(foundAssignment.submissions[user.id].content);
        }
      }
    };
    fetchAssignment();
  }, [params.id, user]);

  const handleSubmit = async () => {
    if (!assignment || !course || !user || !content.trim()) return;

    setSubmitting(true);
    
    try {
      const updatedAssignments = course.assignments.map(a => {
        if (a.id === assignment.id) {
          return {
            ...a,
            submissions: {
              ...a.submissions,
              [user.id]: {
                studentId: user.id,
                submittedAt: new Date().toISOString(),
                content,
              }
            }
          };
        }
        return a;
      });

      await vignan.entities.Course.update(course.id, {
        assignments: updatedAssignments
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Assignment submission error:', error);
    } finally {
      setSubmitting(false);
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

  if (!user || !assignment || !course) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Assignment not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8 py-12 pb-16 md:pb-0">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {course.title}
            </p>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <FileText className="w-8 h-8" />
              {assignment.title}
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Due: {assignment.dueDate}</span>
            </div>
            {submitted && (
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Submitted</span>
              </div>
            )}
          </div>
        </div>

        {/* Assignment Description */}
        <Card className="p-8 space-y-4">
          <h2 className="text-xl font-semibold">Assignment Details</h2>
          <p className="text-muted-foreground whitespace-pre-wrap">
            {assignment.description}
          </p>
        </Card>

        {/* Submission Form */}
        <Card className="p-8 space-y-6">
          <h2 className="text-xl font-semibold">
            {submitted ? 'Your Submission' : 'Submit Your Work'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">
                Your Response
              </label>
              <Textarea
                placeholder="Type your assignment response here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={submitted}
                className="min-h-[300px] resize-none"
              />
            </div>

            {submitted && (
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-2">
                <p className="text-sm font-medium text-green-900">
                  ✓ Submitted on{' '}
                  {new Date(
                    assignment.submissions[user.id].submittedAt
                  ).toLocaleString()}
                </p>
                <p className="text-sm text-green-800">
                  Your instructor will review your submission and provide
                  feedback.
                </p>
              </div>
            )}

            {!submitted && (
              <Button
                onClick={handleSubmit}
                disabled={!content.trim() || submitting}
                size="lg"
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                {submitting ? 'Submitting...' : 'Submit Assignment'}
              </Button>
            )}
          </div>
        </Card>

        <Button
          variant="outline"
          onClick={() => router.back()}
          className="w-full"
        >
          Back
        </Button>
      </div>
    </DashboardLayout>
  );
}
