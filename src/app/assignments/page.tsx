'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { getUserAssignments } from '@/lib/actions/assignments';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

interface AssignmentWithMeta {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  course: { id: string; title: string };
  lesson: { id: string; title: string; order: number } | null;
  submissions: Array<{ id: string; status: string; submittedAt: Date }>;
}

export default function AssignmentsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [assignments, setAssignments] = useState<AssignmentWithMeta[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (user) {
        try {
          const data = await getUserAssignments();
          setAssignments(data as AssignmentWithMeta[]);
        } catch (error) {
          console.error('Failed to fetch assignments:', error);
        } finally {
          setFetching(false);
        }
      }
    };
    fetchAssignments();
  }, [user]);

  if (loading || fetching) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!user) {
    return null;
  }

  const isDueSoon = (dueDate: Date) => {
    const today = new Date();
    const due = new Date(dueDate);
    const daysLeft = Math.ceil(
      (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysLeft <= 3 && daysLeft > 0;
  };

  const isOverdue = (dueDate: Date) => {
    return new Date(dueDate) < new Date();
  };

  // Group by course
  const grouped = assignments.reduce<Record<string, { courseName: string; items: AssignmentWithMeta[] }>>((acc, a) => {
    if (!acc[a.course.id]) {
      acc[a.course.id] = { courseName: a.course.title, items: [] };
    }
    acc[a.course.id].items.push(a);
    return acc;
  }, {});

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Assignments</h1>
          <p className="text-lg text-muted-foreground">
            View and submit your course assignments
          </p>
        </div>

        {assignments.length === 0 ? (
          <Card className="p-12 text-center space-y-4">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto" />
            <div>
              <h3 className="font-semibold text-lg">No assignments yet</h3>
              <p className="text-muted-foreground">
                Enroll in a course to see your assignments
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([courseId, { courseName, items }]) => (
              <div key={courseId} className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">{courseName}</h2>
                <div className="space-y-3">
                  {items.map((assignment) => {
                    const submitted = assignment.submissions.length > 0;
                    const dueSoon = isDueSoon(assignment.dueDate);
                    const overdue = isOverdue(assignment.dueDate);

                    return (
                      <Card
                        key={assignment.id}
                        className={`p-5 space-y-3 transition-colors ${
                          submitted
                            ? 'border-green-200 bg-green-50/30 dark:border-green-800 dark:bg-green-950/20'
                            : overdue
                            ? 'border-destructive/50 bg-destructive/5'
                            : dueSoon
                            ? 'border-yellow-600/50 bg-yellow-50 dark:bg-yellow-950/20'
                            : ''
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-secondary flex-shrink-0" />
                              <h3 className="font-semibold text-base">
                                {assignment.title}
                              </h3>
                              {submitted && (
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                              )}
                            </div>
                            {assignment.lesson && (
                              <p className="text-xs text-muted-foreground pl-8">
                                Lesson {assignment.lesson.order}: {assignment.lesson.title}
                              </p>
                            )}
                            <p className="text-sm text-muted-foreground pl-8 line-clamp-2">
                              {assignment.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm pl-8 pt-1">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span
                                className={
                                  submitted
                                    ? 'text-green-600 font-medium'
                                    : overdue
                                    ? 'text-destructive font-medium'
                                    : dueSoon
                                    ? 'text-yellow-600 font-medium'
                                    : 'text-muted-foreground'
                                }
                              >
                                {submitted
                                  ? 'Submitted'
                                  : `Due: ${new Date(assignment.dueDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}`}
                                {!submitted && overdue && ' (Overdue)'}
                                {!submitted && dueSoon && !overdue && ' (Due soon)'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Button
                          variant={submitted ? 'outline' : 'default'}
                          className="w-full"
                          onClick={() =>
                            router.push(`/assignments/${assignment.id}`)
                          }
                        >
                          {submitted ? (
                            <>
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Submission
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4 mr-2" />
                              Submit Assignment
                            </>
                          )}
                        </Button>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
