import { RegisterForm } from '@/components/register-form';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-4">
      <div className="w-full">
        <RegisterForm />
      </div>
    </div>
  );
}
