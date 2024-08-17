export default function TitleDec({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="w-max smallest:text-4xl supersmall:text-5xl text-2xl block font-bold text-slate-800 relative after:w-14 after:h-2 after:bg-slate-700 after:absolute after:-bottom-1 after:right-0 after:block">
        {children}
      </h1>
      <p className="sm:w-1/2 w-4/5 h-[.5px] bg-slate-400 mt-3"></p>
    </>
  );
}
