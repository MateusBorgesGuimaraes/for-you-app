export default function CardNewsGeneralTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="font-bold text-xl text-slate-950 mt-2 hover:text-slate-600 duration-300">
      {children}
    </h1>
  );
}
