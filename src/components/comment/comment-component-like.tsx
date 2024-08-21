import Image from 'next/image';

type CommentComponentLikeProps = {
  likes: number;
};

export default function CommenComponentLike({
  likes,
}: CommentComponentLikeProps) {
  return (
    <button className="flex gap-2 items-center self-end">
      <Image
        src={'/assets/icons/color-like-icon.svg'}
        width={24}
        height={24}
        alt="icone de like"
      />
      <p className="text-slate-600 font-bold text-xl">{likes}</p>
    </button>
  );
}
