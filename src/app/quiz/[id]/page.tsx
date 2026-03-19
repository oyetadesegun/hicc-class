'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Course, Quiz } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group';
import { Label } from '@/src/components/ui/label';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function QuizPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const courses = await vignan.entities.Course.list();
      const courseWithQuiz = (courses as Course[]).find((c: any) => c.quiz?.id === params.id);
      if (courseWithQuiz) {
        setCourse(courseWithQuiz);
        setQuiz(courseWithQuiz.quiz);
        setAnswers(new Array(courseWithQuiz.quiz.questions.length).fill(-1));
      }
    };
    fetchQuiz();
  }, [params.id]);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const handleSubmit = async () => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setSubmitted(true);

    // Save quiz result
    if (user && quiz && course) {
      try {
        await vignan.entities.Course.update(course.id, {
          quiz: {
            ...course.quiz,
            submissions: {
              ...course.quiz.submissions,
              [user.id]: {
                studentId: user.id,
                submittedAt: new Date().toISOString(),
                answers,
                score: calculatedScore,
              }
            }
          }
        });
      } catch (error) {
        console.error('Quiz submission error:', error);
      }
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

  if (!user || !quiz || !course) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Quiz not found</p>
        </div>
      </DashboardLayout>
    );
  }

  const isPassed = score >= quiz.passingScore;
  const question = quiz.questions[currentQuestion];

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
                {isPassed ? 'Quiz Passed!' : 'Quiz Failed'}
              </h1>
              <p className="text-2xl font-semibold text-muted-foreground">
                Your Score: {score}%
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Passing score: {quiz.passingScore}%
              </p>
            </div>
            <div className="pt-4 border-t space-y-3">
              <p className="text-sm text-muted-foreground">
                You answered {answers.filter((ans, idx) => ans === quiz.questions[idx].correctAnswer).length} out of{' '}
                {quiz.questions.length} questions correctly.
              </p>
            </div>
          </Card>

          {/* Review Answers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Review Your Answers</h2>
            {quiz.questions.map((q, idx) => {
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
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.back()}
            >
              Back
            </Button>
            {!isPassed && (
              <Button
                className="flex-1"
                onClick={() => {
                  setSubmitted(false);
                  setAnswers(new Array(quiz.questions.length).fill(-1));
                  setCurrentQuestion(0);
                }}
              >
                Retake Quiz
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
        <Card className="p-6 space-y-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </p>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{
                width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
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
          {currentQuestion < quiz.questions.length - 1 ? (
            <Button
              className="flex-1"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </Button>
          ) : (
            <Button className="flex-1" onClick={handleSubmit}>
              Submit Quiz
            </Button>
          )}
        </div>

        {/* Question Navigator */}
        <Card className="p-6 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            Jump to question:
          </p>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {quiz.questions.map((_, idx) => (
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
