'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import { markAttendanceByQR } from '@/lib/actions/attendance';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2, Calendar } from 'lucide-react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/dashboard-layout';

export default function AttendPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const sessionId = searchParams.get('s');
  const code = searchParams.get('c');

  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'already_attended'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [sessionDetails, setSessionDetails] = useState({ course: '', title: '' });

  const hasProcessedRef = React.useRef(false);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      // Not logged in, redirect to login then back here
      const currentUrl = encodeURIComponent(`/attend?s=${sessionId}&c=${code}`);
      router.push(`/login?redirect=${currentUrl}`);
      return;
    }

    if (!sessionId || !code) {
      setStatus('error');
      setErrorMessage('Invalid QR Code link. Missing session or code parameters.');
      return;
    }

    if (hasProcessedRef.current) return;
    hasProcessedRef.current = true;

    const processAttendance = async () => {
      try {
        const result = await markAttendanceByQR(sessionId, code);
        
        if (result.success) {
          setSessionDetails({ course: result.courseTitle || '', title: result.sessionTitle || '' });
          setStatus('success');
        } else if (result.error === 'ALREADY_ATTENDED') {
          setSessionDetails({ course: result.courseTitle || '', title: result.sessionTitle || '' });
          setStatus('already_attended');
        } else {
          setStatus('error');
          setErrorMessage(result.error || 'Failed to mark attendance.');
          hasProcessedRef.current = false; // allow retry on error
        }
      } catch (error) {
        setStatus('error');
        setErrorMessage('An unexpected error occurred while verifying the QR code.');
        hasProcessedRef.current = false;
      }
    };

    processAttendance();
  }, [user, loading, router, sessionId, code]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <Card className="w-full max-w-md shadow-lg border-primary/20">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4 bg-muted/30 p-3 rounded-full w-16 h-16 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-outfit">Daily Attendance</CardTitle>
            <CardDescription>
              Processing your QR code scan...
            </CardDescription>
          </CardHeader>
          
          <CardContent className="flex flex-col items-center text-center pt-4 pb-6 space-y-6">
            {status === 'loading' && (
              <div className="flex flex-col items-center gap-4 py-8">
                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Verifying attendance securely...</p>
              </div>
            )}

            {status === 'success' && (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-green-500 drop-shadow-sm" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-500">Attendance Logged!</h3>
                  <p className="text-muted-foreground">You have been marked present for today.</p>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 w-full text-left space-y-2 mt-2 border">
                  <p className="text-sm"><span className="font-semibold">Course:</span> {sessionDetails.course}</p>
                  <p className="text-sm"><span className="font-semibold">Class Day:</span> {sessionDetails.title}</p>
                  <p className="text-sm"><span className="font-semibold">Time:</span> {new Date().toLocaleTimeString()}</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/dashboard">Return to Dashboard</Link>
                </Button>
              </div>
            )}

            {status === 'already_attended' && (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-16 h-16 text-blue-500 drop-shadow-sm" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500">Already Marked</h3>
                  <p className="text-muted-foreground">You are already marked present for this session.</p>
                </div>
                <div className="bg-muted/40 rounded-lg p-4 w-full text-left space-y-2 mt-2 border">
                  <p className="text-sm"><span className="font-semibold">Course:</span> {sessionDetails.course}</p>
                  <p className="text-sm"><span className="font-semibold">Class Day:</span> {sessionDetails.title}</p>
                </div>
                <Button asChild className="w-full mt-4">
                  <Link href="/dashboard">Return to Dashboard</Link>
                </Button>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                <XCircle className="w-16 h-16 text-destructive drop-shadow-sm" />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-destructive">Verification Failed</h3>
                  <p className="text-muted-foreground">{errorMessage}</p>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link href="/dashboard">Return to Dashboard</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
