type ButtonActionProps = {
  children: React.ReactNode;
  borderStyle?: boolean;
};

export default function ButtonAction({
  children,
  borderStyle,
}: ButtonActionProps) {
  return (
    <button
      className={` ${
        borderStyle
          ? 'text-2xl font-bold text-slate-900 bg-none border-2 border-slate-900 py-3 px-5 rounded-lg flex items-center justify-center'
          : 'text-2xl font-bold text-slate-100 bg-slate-900 py-3 px-5 rounded-lg flex items-center justify-center hover:bg-slate-700 duration-300 w-full'
      }`}
    >
      {children}
    </button>
  );
}
