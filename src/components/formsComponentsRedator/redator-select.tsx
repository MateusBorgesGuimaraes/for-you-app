import { useFormContext } from 'react-hook-form';

type RedatorSelectProps = {
  label: string;
  name: string;
};

export default function RedatorSelect({ label, name }: RedatorSelectProps) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xl text-slate-700 font-bold">
        {label}
      </label>
      <select
        id={name}
        className="border-2 border-slate-800 rounded-[8px] h-10 hover:border-sky-800 duration-300 px-2"
        {...register(name)}
      >
        <option value="cultura">Cultura</option>
        <option value="moda">Moda</option>
        <option value="esporte">Esporte</option>
        <option value="arte">Arte</option>
        <option value="politica">Política</option>
        <option value="natureza">Natureza</option>
        <option value="saude">Saúde</option>
        <option value="ciencia">Ciência</option>
        <option value="entretenimento">Entretenimento</option>
      </select>
    </div>
  );
}
