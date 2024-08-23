import { useFormContext } from 'react-hook-form';

type RedatotTextAreaProps = {
  label: string;
  name: string;
};

export default function RedatotTextArea({ label, name }: RedatotTextAreaProps) {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xl text-slate-700 font-bold">
        {label}
      </label>
      <textarea
        id={name}
        className="border-2 border-slate-800 rounded-[8px] h-20 hover:border-sky-800 duration-300 px-2 resize-none"
        {...register(name)}
      />
    </div>
  );
}
