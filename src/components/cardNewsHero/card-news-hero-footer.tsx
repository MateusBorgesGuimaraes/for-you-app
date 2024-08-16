import CardNewsHeroFooterContent from './card-news-hero-footer-content';

type CardNewsHeroFooterProps = {
  children: React.ReactNode;
};

export default function CardNewsHeroFooter({
  children,
}: CardNewsHeroFooterProps) {
  return <div className="flex gap-4">{children}</div>;
}

CardNewsHeroFooter.Content = CardNewsHeroFooterContent;
