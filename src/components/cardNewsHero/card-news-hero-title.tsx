type CardNewsHeroTitleProps = {
  children: React.ReactNode;
  small?: boolean;
};

export default function CardNewsHeroTitle({
  children,
  small,
}: CardNewsHeroTitleProps) {
  return (
    <h1
      className={`font-bold text-3xl text-slate-100 ${small ? 'text-xl' : ''}`}
    >
      {children}
    </h1>
  );
}
