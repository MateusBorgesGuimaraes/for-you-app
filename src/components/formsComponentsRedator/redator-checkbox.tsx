import { useFormContext } from 'react-hook-form';

type RedatorCheckboxProps = {
  label: string;
  name: string;
};

export default function RedatorCheckbox({ label, name }: RedatorCheckboxProps) {
  const { register } = useFormContext();

  return (
    <div className="flex items-center">
      <input
        id={name}
        type="checkbox"
        className="mr-2 h-5 w-5 border-2 border-slate-800 rounded hover:border-sky-800 duration-300"
        {...register(name)}
      />
      <label htmlFor={name} className="text-xl text-slate-700 font-bold">
        {label}
      </label>
    </div>
  );
}
