import CardNewsHeroHeaderAuthor from './card-news-hero-header-author';
import CardNewsHeroHeaderDate from './card-news-hero-header-date';

type CardNewsHeroHeaderProps = {
  children?: React.ReactNode;
};

export default function CardNewsHeroHeader({
  children,
}: CardNewsHeroHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-start">
      {/* <p className="py-[2px] px-3 bg-slate-900 text-slate-100 rounded-2xl text-sm">
        {name}
      </p>
      {both && date && (
        <p className="py-[2px] px-3 bg-slate-900 text-slate-100 rounded-2xl text-xs">
          12/04/2024
        </p>
      )} */}
      {children}
    </div>
  );
}

CardNewsHeroHeader.Author = CardNewsHeroHeaderAuthor;
CardNewsHeroHeader.Date = CardNewsHeroHeaderDate;
