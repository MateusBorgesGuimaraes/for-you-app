import LoginForm from '@/pages/login/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Entre na sua conta.',
};

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}
