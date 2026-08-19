'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, BookOpen, Clock, Code2, Laptop, PlayCircle, Sparkles, Users } from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { LoadingScreen } from '@/components/loading-screen';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/lib/auth-context';
import { Course } from '@/lib/mock-data';
import { vignan } from '@/lib/vignan-client';
import { getTechCellCourses } from '@/lib/actions/courses';

export default function TechCellLearningPage() {
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [fetching, setFetching] = useState(true);
  const [enrolling, setEnrolling] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [loading, router, user]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setCourses(await getTechCellCourses() as unknown as Course[]);
      } finally {
        setFetching(false);
      }
    };

    loadCourses();
  }, []);

  const techCellCourses = useMemo(() => courses, [courses]);

  const handleEnroll = async (courseId: string) => {
    if (!user) return;
    setEnrolling(courseId);

    try {
      await vignan.entities.Course.enroll(courseId);
      const updatedUser = await vignan.auth.me();
      if (updatedUser) updateUser(updatedUser);
    } finally {
      setEnrolling(null);
    }
  };

  if (loading || fetching) {
    return (
      <DashboardLayout>
        <LoadingScreen />
      </DashboardLayout>
    );
  }

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="space-y-10 pb-20 md:pb-4">
        <section className="relative overflow-hidden rounded-3xl border bg-primary px-6 py-10 text-primary-foreground shadow-xl sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <Sparkles className="h-4 w-4 text-secondary" />
                Powered by Tech Cell
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight font-outfit sm:text-5xl">
                  Tech Cell Learning Center
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/75">
                  Practical technology training for creators, builders, and problem-solvers. Learn how to turn ideas into working digital products.
                </p>
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-white/70">
                <span className="inline-flex items-center gap-2"><PlayCircle className="h-4 w-4 text-secondary" />Self-paced videos</span>
                <span className="inline-flex items-center gap-2"><Laptop className="h-4 w-4 text-secondary" />Hands-on projects</span>
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-secondary" />Community powered</span>
              </div>
            </div>

            <div className="hidden rounded-2xl border border-white/15 bg-black/25 p-5 font-mono text-sm shadow-2xl backdrop-blur lg:block">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-secondary" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2 text-white/75">
                <p><span className="text-secondary">const</span> idea = <span className="text-green-300">&quot;your vision&quot;</span>;</p>
                <p><span className="text-secondary">const</span> skills = <span className="text-green-300">&quot;vibe coding&quot;</span>;</p>
                <p className="pt-2 text-white"><span className="text-blue-300">build</span>(idea, skills);</p>
                <p className="pt-3 text-green-300">✓ Ready to launch</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Learning tracks</p>
              <h2 className="text-3xl font-bold tracking-tight font-outfit">Start building</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Follow each lesson, complete the practical work, and track your progress from your dashboard.
            </p>
          </div>

          {techCellCourses.length === 0 ? (
            <Card className="overflow-hidden border-dashed p-8 sm:p-12">
              <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                <div className="mb-5 rounded-2xl bg-primary/10 p-4"><Code2 className="h-9 w-9 text-primary" /></div>
                <h3 className="text-xl font-bold font-outfit">The first Tech Cell course is coming in</h3>
                <p className="mt-2 text-muted-foreground">
                  Create the Vibe Coding course in the admin dashboard and set its category to <strong>Tech Cell</strong>. It will automatically appear here.
                </p>
                {user.role === 'ADMIN' && (
                  <Button className="mt-6" onClick={() => router.push('/admin')}>
                    Add the course <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {techCellCourses.map((course) => {
                const enrolled = user.enrolledCourses.includes(course.id);
                const recordedCount = course.sections?.[0]?._count?.lessons || 0;
                return (
                  <Card key={course.id} className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary via-primary to-blue-900">
                      {course.thumbnail ? (
                        <img src={course.thumbnail} alt="" className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="flex h-full items-center justify-center"><Code2 className="h-16 w-16 text-white/25" /></div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">TECH CELL</span>
                    </div>
                    <div className="space-y-5 p-6">
                      <div>
                        <h3 className="text-xl font-bold font-outfit">{course.title}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-secondary" />{course.lessons.length} lessons</span>
                        <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-secondary" />{course.duration}</span>
                        {recordedCount > 0 && (
                          <span className="col-span-2 inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-secondary" />{recordedCount} recorded sessions</span>
                        )}
                      </div>
                      <Button
                        className="w-full"
                        variant={enrolled ? 'default' : 'outline'}
                        disabled={enrolling === course.id}
                        onClick={() => enrolled ? router.push(`/courses/${course.id}`) : handleEnroll(course.id)}
                      >
                        {enrolled ? 'Continue learning' : enrolling === course.id ? 'Enrolling...' : 'Enroll and start'}
                        {enrolled && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}
