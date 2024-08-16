import CardNewsHeroFooterContent from './card-news-hero-footer-content';

type CardNewsHeroFooterProps = {
  children: React.ReactNode;
};

export default function CardNewsHeroFooter({
  children,
}: CardNewsHeroFooterProps) {
  return (
    <div className="flex gap-4">
      {/* <p className="flex gap-2 items-center text-slate-100 font-bold">
            <Image
              src={'/assets/icons/comment-icon.svg'}
              height={24}
              width={24}
              alt="logo representando comentrarios"
            />{' '}
            12
          </p>

          <p className="flex gap-2 items-center text-slate-100 font-bold">
            <Image
              src={'/assets/icons/like-icon.svg'}
              height={24}
              width={24}
              alt="logo representando o like"
            />{' '}
            39
          </p>

          <p className="flex gap-2 items-center text-slate-100 font-bold">
            <Image
              src={'/assets/icons/views-icon.svg'}
              height={24}
              width={24}
              alt="logo representando visualizações"
            />{' '}
            33
          </p> */}
      {children}
    </div>
  );
}

CardNewsHeroFooter.Content = CardNewsHeroFooterContent;
