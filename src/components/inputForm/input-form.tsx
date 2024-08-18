import { useFormContext } from 'react-hook-form';

type InputFormProps = {
  label: string;
  type: string;
  name: string;
};

export default function InputForm({ label, type, name }: InputFormProps) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="text-xl text-slate-700 font-bold">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="border-2 border-slate-800 rounded-[8px] h-10 hover:border-sky-800 duration-300 px-2"
        {...register(name)}
      />
    </div>
  );
}
