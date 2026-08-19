'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { getExamAssessment, submitExamAssessment } from '@/lib/actions/assessments';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export default function ExamPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [exam, setExam] = useState<NonNullable<Awaited<ReturnType<typeof getExamAssessment>>> | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchExam = async () => {
      const assessment = await getExamAssessment(params.id);
      if (assessment) {
        setExam(assessment);
        setAnswers(new Array(assessment.questions.length).fill(-1));
        setTimeLeft(assessment.duration * 60);
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

  const handleSubmit = async () => {
    if (!user || !exam) return;
    const result = await submitExamAssessment(exam.id, answers);
    setScore(result.score);
    setCorrectAnswers(result.correctAnswers);
    setSubmitted(true);
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

  if (!user || !exam) {
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
                {answers.filter((ans, idx) => ans === correctAnswers[idx])
                  .length}{' '}
                out of {exam.questions.length} questions correctly.
              </p>
            </div>
          </Card>

          {/* Review Answers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Review Your Answers</h2>
            {exam.questions.map((q, idx) => {
              const isCorrect = answers[idx] === correctAnswers[idx];
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
                                : optIdx === correctAnswers[idx]
                                ? 'bg-green-50 border-green-200'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">
                              {optIdx === answers[idx] && (
                                <span className="font-medium">Your answer: </span>
                              )}
                              {optIdx === correctAnswers[idx] && !isCorrect && (
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
              onClick={() => router.push(`/courses/${exam.course.id}`)}
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
