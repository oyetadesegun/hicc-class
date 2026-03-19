'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { vignan } from '@/lib/vignan-client';
import { Certificate } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share2, Award, Calendar, BookOpen } from 'lucide-react';

export default function CertificateDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchCertificate = async () => {
      if (user) {
        const cert = await vignan.entities.Certificate.get(params.id);
        if (cert && cert.studentId === user.id) {
          setCertificate(cert);
        }
      }
    };
    fetchCertificate();
  }, [params.id, user]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!user || !certificate) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Certificate not found</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto py-12 space-y-8 pb-16 md:pb-0">
        {/* Certificate Display */}
        <Card className="overflow-hidden border-4 border-primary/50">
          <div className="aspect-video bg-linear-to-br from-primary/30 via-accent/20 to-secondary/30 p-12 sm:p-16 flex flex-col items-center justify-center relative">
            {/* Decorative border */}
            <div className="absolute inset-8 border-2 border-primary/30 rounded-lg" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <Award className="w-20 h-20 text-primary mx-auto" />

              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide">
                  CERTIFICATE OF COMPLETION
                </p>
                <p className="text-sm text-muted-foreground">
                  This certifies that
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-bold">
                  {certificate.studentName}
                </p>
                <p className="text-lg text-muted-foreground">
                  has successfully completed
                </p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary">
                  {certificate.courseName}
                </p>
              </div>

              <div className="pt-6 border-t-2 border-primary/30 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Certificate No. {certificate.certificateNumber}
                </p>
                <p className="text-sm text-muted-foreground">
                  Issued on{' '}
                  {new Date(certificate.issuedDate).toLocaleDateString(
                    'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </p>
              </div>

              <div className="pt-6 flex flex-col items-center justify-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 font-bold font-outfit text-secondary uppercase tracking-tighter">
                  <BookOpen className="w-3 h-3" />
                  <span>HARVESTERS</span>
                </div>
                <span>Official Learning Platform</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Certificate Details */}
        <Card className="p-8 space-y-6">
          <h2 className="text-2xl font-bold">Certificate Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Student Name</p>
              <p className="text-lg font-semibold">{certificate.studentName}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Course</p>
              <p className="text-lg font-semibold">{certificate.courseName}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Issued Date</p>
              <p className="text-lg font-semibold">
                {new Date(certificate.issuedDate).toLocaleDateString()}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Certificate No.</p>
              <p className="text-lg font-mono font-semibold">
                {certificate.certificateNumber}
              </p>
            </div>
          </div>

          <div className="p-6 bg-blue-50 rounded-lg space-y-2 border border-blue-200">
            <p className="text-sm font-medium text-blue-900">
              ✓ Verified Certificate
            </p>
            <p className="text-sm text-blue-800">
              This certificate is digitally verified and can be shared on
              professional networks.
            </p>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 flex-wrap">
          <Button size="lg" className="flex-1 min-w-[200px]">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" size="lg" className="flex-1 min-w-[200px]">
            <Share2 className="w-4 h-4 mr-2" />
            Share Certificate
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push('/certificates')}
          >
            Back to Certificates
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
