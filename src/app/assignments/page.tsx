'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course, Assignment } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { FileText, Calendar, CheckCircle2 } from 'lucide-react';

interface CourseAssignment extends Assignment {
  courseId: string;
  courseName: string;
}

export default function AssignmentsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [assignments, setAssignments] = useState<CourseAssignment[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchAssignments = async () => {
      if (user) {
        const courses = await vignan.entities.Course.list();
        const enrolledCourses = (courses as Course[]).filter((c: any) =>
          user.enrolledCourses.includes(c.id)
        );

        const allAssignments: CourseAssignment[] = [];
        enrolledCourses.forEach(course => {
          course.assignments.forEach(assignment => {
            allAssignments.push({
              ...assignment,
              courseId: course.id,
              courseName: course.title,
            });
          });
        });

        setAssignments(allAssignments);
      }
    };
    fetchAssignments();
  }, [user]);

  if (loading) {
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

  const isDueSoon = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const daysLeft = Math.ceil(
      (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysLeft <= 3 && daysLeft > 0;
  };

  const isOverdue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    return due < today;
  };

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
                Check back later for course assignments
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            {assignments.map((assignment) => {
              const submitted = Object.keys(assignment.submissions).length > 0;
              const dueSoon = isDueSoon(assignment.dueDate);
              const overdue = isOverdue(assignment.dueDate);

              return (
                <Card
                  key={assignment.id}
                  className={`p-6 space-y-4 ${
                    overdue ? 'border-destructive/50 bg-destructive/5' : ''
                  } ${dueSoon && !overdue ? 'border-yellow-600/50 bg-yellow-50' : ''}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-secondary flex-shrink-0" />
                        <h3 className="font-semibold text-lg">
                          {assignment.title}
                        </h3>
                        {submitted && (
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {assignment.courseName}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {assignment.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm pt-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span
                          className={
                            overdue
                              ? 'text-destructive font-medium'
                              : dueSoon
                              ? 'text-yellow-600 font-medium'
                              : 'text-muted-foreground'
                          }
                        >
                          Due: {assignment.dueDate}
                          {overdue && ' (Overdue)'}
                          {dueSoon && !overdue && ' (Due soon)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() =>
                      router.push(`/assignments/${assignment.id}`)
                    }
                  >
                    {submitted ? 'View Submission' : 'Submit Assignment'}
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
