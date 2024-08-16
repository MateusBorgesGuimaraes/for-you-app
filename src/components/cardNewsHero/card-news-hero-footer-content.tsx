import Image from 'next/image';

type CardNewsFooterContentProps = {
  type: 'comment' | 'like' | 'views';
  value: number;
};

export default function CardNewsHeroFooterContent({
  type,
  value,
}: CardNewsFooterContentProps) {
  return (
    <p className="flex gap-2 items-center text-slate-100 font-bold">
      <Image
        src={`/assets/icons/${type}-icon.svg`}
        height={24}
        width={24}
        alt="logo representando comentrarios"
      />{' '}
      {value}
    </p>
  );
}
