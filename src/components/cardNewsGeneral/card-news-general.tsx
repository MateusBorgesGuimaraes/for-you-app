import CardNewsGeneralImage from './card-news-general-image';
import CardNewsGeneralFooter from './card-news-general-footer';
import CardNewsGeneralTitle from './card-news-general-title';
import CardNewsGeneralButtons from './card-news-general.buttons';
import CardNewsGeneralHeader from './card-news-general-header';

export default function CardNewsGeneral({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col max-w-[17.5rem] ">{children}</div>;
}

CardNewsGeneral.Image = CardNewsGeneralImage;
CardNewsGeneral.Header = CardNewsGeneralHeader;
CardNewsGeneral.Footer = CardNewsGeneralFooter;
CardNewsGeneral.Title = CardNewsGeneralTitle;
CardNewsGeneral.Buttons = CardNewsGeneralButtons;
