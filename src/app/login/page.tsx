import ButtonAction from '@/components/buttonAction/button-action';
import InputForm from '@/components/inputForm/input-form';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form action="" className="w-full max-w-[480px] space-y-2">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">LOGAR</h1>
        <InputForm label="nome" type="nome" />
        <InputForm label="senha" type="senha" />
        <div className="py-3">
          <ButtonAction>ENTRAR</ButtonAction>
        </div>
        <Link
          href={'/login/register'}
          className="font-bold text-slate-500 underline text-sm hover:text-slate-300 duration-300"
        >
          não tem uma conta? entre agora
        </Link>
      </form>
    </div>
  );
}
