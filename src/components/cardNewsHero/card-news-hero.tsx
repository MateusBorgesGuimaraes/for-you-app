import CardNewsHeroHeader from './card-news-hero-header';
import CardNewsHeroTitle from './card-news-hero-title';
import CardNewsHeroFooter from './card-news-hero-footer';

type CardNewsHeroProps = {
  children: React.ReactNode;
  url: string;
  link?: string;
};

export default function CardNewsHero({ children, url }: CardNewsHeroProps) {
  return (
    <div
      className={`bg-cover rounded-2xl max-w-[24.625rem] max-h-[16.75rem] h-full cursor-pointer`}
      style={{ backgroundImage: `url('${url}')` }}
    >
      <div className="backdrop-contrast-50 hover:backdrop-contrast-100 duration-300 bg-slate-950/40 rounded-2xl p-3 flex flex-col justify-between max-h-[16.75rem] h-full">
        {children}
      </div>
    </div>
  );
}

CardNewsHero.Header = CardNewsHeroHeader;
CardNewsHero.Title = CardNewsHeroTitle;
CardNewsHero.Footer = CardNewsHeroFooter;
