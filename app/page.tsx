'use client';

import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return null; // Wait for auth check or redirect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-outfit text-secondary">HARVESTERS</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => router.push('/login')}>
              Sign In
            </Button>
            <Button onClick={() => router.push('/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance font-outfit">
              Empowering Your 
              <span className="text-primary"> Learning Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access curated faith-based and professional courses designed to help you grow, lead, and serve effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-8 text-lg" onClick={() => router.push('/register')}>
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg" onClick={() => router.push('/login')}>
                Member Login
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-primary/20 to-primary/5 p-8 rounded-2xl space-y-4 border border-primary/10">
              <BookOpen className="w-12 h-12 text-primary" />
              <h3 className="font-bold text-xl font-outfit">Curated Content</h3>
              <p className="text-sm text-muted-foreground">Learn from experienced leaders and practitioners.</p>
            </div>
            <div className="bg-linear-to-br from-accent/20 to-accent/5 p-8 rounded-2xl space-y-4 border border-accent/10">
              <Zap className="w-12 h-12 text-accent" />
              <h3 className="font-bold text-xl font-outfit">Live Mentorship</h3>
              <p className="text-sm text-muted-foreground">Engage directly in real-time training sessions.</p>
            </div>
            <div className="bg-linear-to-br from-secondary/20 to-secondary/5 p-8 rounded-2xl space-y-4 border border-secondary/10 text-secondary">
              <Users className="w-12 h-12" />
              <h3 className="font-bold text-xl font-outfit">Global Community</h3>
              <p className="text-sm opacity-80">Connect with a worldwide network of learners.</p>
            </div>
            <div className="bg-linear-to-br from-primary/20 to-primary/5 p-8 rounded-2xl space-y-4 border border-primary/10">
              <Award className="w-12 h-12 text-primary" />
              <h3 className="font-bold text-xl font-outfit">Recognized Certification</h3>
              <p className="text-sm text-muted-foreground">Earn certificates to validate your growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-outfit">Designed for Growth</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools you need to stay engaged and track your progress effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Video Learning',
                description: 'High-quality on-demand courses you can watch at your own pace.',
                icon: BookOpen,
              },
              {
                title: 'Live Streaming',
                description: 'Join real-time interactive classes and workshops.',
                icon: Zap,
              },
              {
                title: 'Progress Tracking',
                description: 'Monitor your development with intuitive dashboards.',
                icon: Award,
              },
              {
                title: 'Digital Assessments',
                description: 'Test your understanding with quizzes and assignments.',
                icon: Users,
              },
              {
                title: 'Course Certificates',
                description: 'Receive verified proof of your accomplishments.',
                icon: Award,
              },
              {
                title: 'Personalized Library',
                description: 'Save and revisit your favorite learning materials.',
                icon: BookOpen,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-border/50 space-y-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-xl font-outfit">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-secondary to-secondary/90 py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">Ready to Start Growing?</h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">Join the Harvesters community and take your first step towards mastery and impact.</p>
          <Button 
            size="lg" 
            className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border-0"
            onClick={() => router.push('/register')}
          >
            Create Your Account
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl font-outfit text-secondary">HARVESTERS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Harvesters International Christian Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
