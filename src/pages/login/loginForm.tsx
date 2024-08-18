'use client';

import ButtonAction from '@/components/buttonAction/button-action';
import InputForm from '@/components/inputForm/input-form';
import Link from 'next/link';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema, LoginUserType } from '@/zodSchemas/login';
import ErrorComponent from '@/components/errorComponent/error-component';
import getToken from '@/actions/get-token';
import getUser from '@/actions/get-user';
import { useToast } from '@/components/ui/use-toast';

export default function LoginForm() {
  const { toast } = useToast();
  const methods = useForm<LoginUserType>({
    resolver: zodResolver(loginUserSchema),
  });

  async function loginUser(data: any) {
    const response = await getToken(data);

    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro Logar no sistema',
        description: response.error,
      });
      return;
    }
    const userResponse = await getUser();
    if (!userResponse.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro Logar no sistema',
        description: userResponse.error,
      });
      return;
    }
    console.log(userResponse.data);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(loginUser)}
        className="w-full max-w-[480px] space-y-2"
      >
        <h1 className="text-6xl font-bold text-slate-900 mb-6">LOGAR</h1>
        <InputForm label="nome" type="nome" name="username" />
        {methods.formState.errors.username && (
          <ErrorComponent message={methods.formState.errors.username.message} />
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
        <Link
          href={'/login/register'}
          className="font-bold text-slate-500 underline text-sm hover:text-slate-300 duration-300"
        >
          não tem uma conta? entre agora
        </Link>
      </form>
    </FormProvider>
  );
}
