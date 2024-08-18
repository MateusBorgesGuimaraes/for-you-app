type InputFormProps = {
  label: string;
  type: string;
};

export default function InputForm({ label, type }: InputFormProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor="" className="text-xl text-slate-700 font-bold">
        {label}
      </label>
      <input
        type={type}
        className="border-2 border-slate-800 rounded-[8px] h-10 hover:border-sky-800 duration-300"
      />
    </div>
  );
}
