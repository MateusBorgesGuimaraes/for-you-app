type CardNewsHeroHeaderTitleProps = {
  children?: React.ReactNode;
};

export default function CardNewsHeroHeaderAuthor({
  children,
}: CardNewsHeroHeaderTitleProps) {
  return (
    <p className="py-[2px] px-3 bg-slate-900 text-slate-100 rounded-2xl text-sm">
      {children}
    </p>
  );
}
