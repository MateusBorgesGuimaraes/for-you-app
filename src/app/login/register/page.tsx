import RegisterForm from '@/pages/login/register/register-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registre-se',
  description: 'Crie sua conta.',
};

export default function RegisterPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <RegisterForm />
    </div>
  );
}
