import CardNewsHeroHeaderAuthor from './card-news-hero-header-author';
import CardNewsHeroHeaderDate from './card-news-hero-header-date';

type CardNewsHeroHeaderProps = {
  children?: React.ReactNode;
};

export default function CardNewsHeroHeader({
  children,
}: CardNewsHeroHeaderProps) {
  return <div className="flex flex-col gap-2 items-start">{children}</div>;
}

CardNewsHeroHeader.Author = CardNewsHeroHeaderAuthor;
CardNewsHeroHeader.Date = CardNewsHeroHeaderDate;
