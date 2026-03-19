'use client';

import { useAuth } from '@/src/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/src/components/dashboard-layout';
import { vignan } from '@/src/lib/vignan-client';
import { Certificate } from '@/src/lib/mock-data';
import { Card } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Award, Download, Eye } from 'lucide-react';

export default function CertificatesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchCertificates = async () => {
      if (user) {
        const allCerts = await vignan.entities.Certificate.list();
        const userCerts = allCerts.filter(
          (cert: Certificate) => cert.studentId === user.id
        );
        setCertificates(userCerts);
      }
    };
    fetchCertificates();
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

  return (
    <DashboardLayout>
      <div className="space-y-8 pb-16 md:pb-0">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Your Certificates</h1>
          <p className="text-lg text-muted-foreground">
            View and download your earned certificates
          </p>
        </div>

        {certificates.length === 0 ? (
          <Card className="p-12 text-center space-y-6">
            <Award className="w-16 h-16 text-muted-foreground mx-auto" />
            <div>
              <h3 className="font-semibold text-lg">No certificates yet</h3>
              <p className="text-muted-foreground">
                Complete courses and pass exams to earn certificates
              </p>
            </div>
            <Button onClick={() => router.push('/courses')}>
              Explore Courses
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Certificate Preview */}
                <div className="aspect-video bg-linear-to-br from-primary/20 via-accent/20 to-secondary/20 p-6 flex flex-col items-center justify-center relative border-b">
                  <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 border-8 border-primary rounded-lg m-2" />
                  <Award className="w-12 h-12 text-primary mb-2 relative z-10" />
                  <p className="text-center text-xs font-semibold text-muted-foreground relative z-10 line-clamp-2">
                    Certificate of Completion
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Course</p>
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {cert.courseName}
                    </h3>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Issued:</span>{' '}
                      {new Date(cert.issuedDate).toLocaleDateString()}
                    </p>
                    <p className="text-muted-foreground font-mono text-xs break-all">
                      {cert.certificateNumber}
                    </p>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        router.push(`/certificates/${cert.id}`)
                      }
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                    <Button variant="secondary" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
