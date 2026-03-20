'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { BookOpen, Home, FileText, Award, User, LogOut, LayoutDashboard, BarChart3, QrCode } from 'lucide-react';
import Link from 'next/link';

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/assignments', label: 'Assignments', icon: FileText },
    { href: '/certificates', label: 'Certificates', icon: Award },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  const adminNavItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/admin', label: 'Admin', icon: LayoutDashboard },
    { href: '/admin/attendance', label: 'Attendance Report', icon: BarChart3 },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/assignments', label: 'Assignments', icon: FileText },
    { href: '/certificates', label: 'Certificates', icon: Award },
    { href: '/profile', label: 'Profile', icon: User },
  ];

  const items = user?.role === 'ADMIN' ? adminNavItems : navItems;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <img src="/logo/logo.png" alt="Harvesters Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold tracking-tight font-outfit text-secondary hidden sm:block">HARVESTERS</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">Welcome, {user?.name}</span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 border-r bg-muted/30 flex-col">
          <nav className="flex-1 p-4 space-y-2">
            {items.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer group">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full">
          {children}
        </main>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="flex gap-2 p-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="flex-1">
              <div className="flex flex-col items-center gap-1 px-3 py-3 rounded-lg hover:bg-muted/50 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-medium hidden sm:inline-block">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
