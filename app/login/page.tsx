import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-4">
      <div className="w-full">
        <LoginForm />
      </div>
    </div>
  );
}
