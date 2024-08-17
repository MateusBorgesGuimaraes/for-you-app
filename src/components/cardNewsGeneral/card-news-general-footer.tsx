import Image from 'next/image';

type CardNewsFooterProps = {
  category: string;
  likes: number;
  views: number;
};

export default function CardNewsGeneralFooter({
  category,
  likes,
  views,
}: CardNewsFooterProps) {
  return (
    <div className="mt-auto flex gap-6 items-center">
      <div className="font-bold text-xs text-slate-700 relative before:block before:absolute before:w-4 before:h-1 before:-bottom-1 before:left-0 before:bg-sky-800">
        {category}
      </div>

      <p className="flex items-center gap-[.375rem]">
        <Image
          src={'/assets/icons/like-dark-icon.svg'}
          width={16}
          height={16}
          alt="like icon"
        />{' '}
        <span className="font-bold text-slate-800 text-sm">{likes}</span>
      </p>

      <p className="flex items-center gap-[.375rem]">
        <Image
          src={'/assets/icons/view-dark-icon.svg'}
          width={16}
          height={16}
          alt="view icon"
        />{' '}
        <span className="font-bold text-slate-800 text-sm">{views}</span>
      </p>
    </div>
  );
}
