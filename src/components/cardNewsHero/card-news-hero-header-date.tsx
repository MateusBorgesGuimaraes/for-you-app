type CardNewsHeroHeaderDateProps = {
  children?: React.ReactNode;
};

export default function CardNewsHeroHeaderDate({
  children,
}: CardNewsHeroHeaderDateProps) {
  return (
    <p className="py-[2px] px-3 bg-slate-900 text-slate-100 rounded-2xl text-xs">
      {children}
    </p>
  );
}
