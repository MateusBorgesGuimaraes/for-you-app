'use client';

import ButtonAction from '@/components/buttonAction/button-action';
import InputForm from '@/components/inputForm/input-form';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorComponent from '@/components/errorComponent/error-component';
import getUser from '@/actions/get-user';
import { useToast } from '@/components/ui/use-toast';
import { useUserStore } from '../../../store/user';
import { registerUserSchema, RegisterUserType } from '@/zodSchemas/register';
import postUser from '@/actions/post-user';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const { setUser } = useUserStore();
  const { toast } = useToast();
  const router = useRouter();
  const methods = useForm<RegisterUserType>({
    resolver: zodResolver(registerUserSchema),
  });

  async function registerUser(data: any) {
    const response = await postUser(data);
    // console.log(data);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro criar conta',
        description: response.error,
      });
      return;
    }
    const userResponse = await getUser();

    if (!userResponse.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro criar conta',
        description: userResponse.error,
      });
      return;
    }
    setUser(userResponse.data);

    router.push('/');
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(registerUser)}
        className="w-full max-w-[480px] space-y-2"
      >
        <h1 className="text-6xl font-bold text-slate-900 mb-6">REGISTRAR</h1>
        <InputForm label="nome" type="nome" name="username" />
        {methods.formState.errors.username && (
          <ErrorComponent message={methods.formState.errors.username.message} />
        )}
        <InputForm label="email" type="email" name="email" />
        {methods.formState.errors.email && (
          <ErrorComponent message={methods.formState.errors.email.message} />
        )}
        <InputForm label="senha" type="senha" name="password" />
        {methods.formState.errors.password && (
          <ErrorComponent message={methods.formState.errors.password.message} />
        )}
        <div className="py-3">
          <ButtonAction state={methods.formState.isSubmitting}>
            ENTRAR
          </ButtonAction>
        </div>
      </form>
    </FormProvider>
  );
}
