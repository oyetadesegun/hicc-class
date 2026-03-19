'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course, Exam } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group';
import { Label } from '@/src/components/ui/label';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function ExamPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const { user, loading, updateUser } = useAuth();
  const router = useRouter();
  const [exam, setExam] = useState<Exam | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchExam = async () => {
      const courses = await vignan.entities.Course.list();
      const courseWithExam = courses.find(c => c.exam.id === params.id);
      if (courseWithExam) {
        setCourse(courseWithExam);
        setExam(courseWithExam.exam);
        setAnswers(new Array(courseWithExam.exam.questions.length).fill(-1));
        setTimeLeft(courseWithExam.exam.duration * 60); // Convert to seconds
      }
    };
    fetchExam();
  }, [params.id]);

  // Timer
  useEffect(() => {
    if (!submitted && timeLeft > 0 && exam) {
      const timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            handleSubmit();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [submitted, timeLeft, exam]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!exam) return 0;
    let correct = 0;
    exam.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / exam.questions.length) * 100);
  };

  const handleSubmit = async () => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setSubmitted(true);

    // Save exam result
    if (user && exam && course) {
      try {
        await vignan.entities.Course.update(course.id, {
          exam: {
            ...course.exam,
            submissions: {
              ...course.exam.submissions,
              [user.id]: {
                studentId: user.id,
                submittedAt: new Date().toISOString(),
                answers,
                score: calculatedScore,
              }
            }
          }
        });

        // Issue certificate if passed
        if (calculatedScore >= exam.passingScore) {
          const certificateId = `cert-${user.id}-${course.id}-${Date.now()}`;
          
          // Update student
          const updatedCertificates = [...user.certificates, certificateId];
          const updatedUser = await vignan.auth.updateMe({
            certificates: updatedCertificates
          });
          updateUser(updatedUser);

          // Save certificate entity
          await vignan.entities.Certificate.create({
            id: certificateId,
            studentId: user.id,
            courseId: course.id,
            studentName: user.name,
            courseName: course.title,
            issuedDate: new Date().toISOString().split('T')[0],
            certificateNumber: `CERT-${Date.now()}`,
          } as any); // Type cast if needed due to id/created_date handling in service
        }
      } catch (error) {
        console.error('Exam submission error:', error);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

  if (!user || !exam || !course) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Exam not found</p>
        </div>
      </DashboardLayout>
    );
  }

  const isPassed = score >= exam.passingScore;
  const question = exam.questions[currentQuestion];
  const isTimeAlert = timeLeft < 300; // Less than 5 minutes

  if (submitted) {
    return (
      <DashboardLayout>
        <div className="max-w-2xl mx-auto space-y-8 py-12">
          <Card className="p-12 text-center space-y-6">
            <div className="flex justify-center">
              {isPassed ? (
                <CheckCircle2 className="w-24 h-24 text-green-600" />
              ) : (
                <XCircle className="w-24 h-24 text-destructive" />
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {isPassed ? 'Exam Passed!' : 'Exam Failed'}
              </h1>
              <p className="text-2xl font-semibold text-muted-foreground">
                Your Score: {score}%
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Passing score: {exam.passingScore}%
              </p>
            </div>

            {isPassed && (
              <div className="pt-4 border-t space-y-3 bg-green-50 p-4 rounded">
                <p className="text-green-900 font-medium">
                  Congratulations! You have successfully completed this course.
                </p>
                <p className="text-sm text-green-800">
                  Your certificate has been issued. View it in your Certificates section.
                </p>
              </div>
            )}

            <div className="pt-4 border-t space-y-3">
              <p className="text-sm text-muted-foreground">
                You answered{' '}
                {answers.filter((ans, idx) => ans === exam.questions[idx].correctAnswer)
                  .length}{' '}
                out of {exam.questions.length} questions correctly.
              </p>
            </div>
          </Card>

          {/* Review Answers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Review Your Answers</h2>
            {exam.questions.map((q, idx) => {
              const isCorrect = answers[idx] === q.correctAnswer;
              return (
                <Card key={idx} className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold mb-3">
                        Question {idx + 1}: {q.question}
                      </p>
                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-lg border ${
                              optIdx === answers[idx]
                                ? isCorrect
                                  ? 'bg-green-50 border-green-200'
                                  : 'bg-red-50 border-red-200'
                                : optIdx === q.correctAnswer
                                ? 'bg-green-50 border-green-200'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">
                              {optIdx === answers[idx] && (
                                <span className="font-medium">Your answer: </span>
                              )}
                              {optIdx === q.correctAnswer && !isCorrect && (
                                <span className="font-medium">Correct answer: </span>
                              )}
                              {option}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive shrink-0" />
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex gap-4 flex-wrap">
            <Button
              variant="outline"
              className="flex-1 min-w-[120px]"
              onClick={() => router.push(`/courses/${course.id}`)}
            >
              Back to Course
            </Button>
            {isPassed && (
              <Button
                className="flex-1 min-w-[120px]"
                onClick={() => router.push('/certificates')}
              >
                View Certificate
              </Button>
            )}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-8 py-12 pb-16 md:pb-12">
        <Card className={`p-6 space-y-4 ${isTimeAlert ? 'border-destructive bg-destructive/5' : ''}`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{exam.title}</h1>
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {exam.questions.length}
              </p>
            </div>
            <div className={`text-right ${isTimeAlert ? 'text-destructive' : ''}`}>
              <div className="flex items-center gap-2 justify-end font-mono text-lg font-bold">
                <Clock className="w-5 h-5" />
                {formatTime(timeLeft)}
              </div>
              <p className="text-xs text-muted-foreground">Time Remaining</p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / exam.questions.length) * 100}%`,
              }}
            />
          </div>
        </Card>

        <Card className="p-8 space-y-6">
          <h2 className="text-xl font-semibold">{question.question}</h2>

          <RadioGroup
            value={answers[currentQuestion] !== -1 ? answers[currentQuestion].toString() : ''}
            onValueChange={(value) =>
              handleAnswerSelect(currentQuestion, parseInt(value))
            }
          >
            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                  <Label htmlFor={`option-${idx}`} className="cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </Card>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          {currentQuestion < exam.questions.length - 1 ? (
            <Button
              className="flex-1"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </Button>
          ) : (
            <Button className="flex-1" onClick={handleSubmit}>
              Submit Exam
            </Button>
          )}
        </div>

        {/* Question Navigator */}
        <Card className="p-6 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            Jump to question:
          </p>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {exam.questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-medium transition-colors ${
                  idx === currentQuestion
                    ? 'bg-primary text-primary-foreground border-primary'
                    : answers[idx] !== -1
                    ? 'bg-green-100 border-green-300 text-green-900'
                    : 'bg-muted border-border hover:border-primary/50'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
