import Image from 'next/image';

type CardNewsGeneralImageProps = {
  image: string;
};

export default function CardNewsGeneralImage({
  image,
}: CardNewsGeneralImageProps) {
  return (
    <div className="rounded-2xl overflow-hidden max-h-40">
      <Image
        className="hover:scale-125 duration-300 max-h-40"
        src={image}
        width={280}
        height={160}
        alt="imagem teste"
      />
    </div>
  );
}
