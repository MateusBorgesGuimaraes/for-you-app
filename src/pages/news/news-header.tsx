import formatDate from '@/functions/fomatDate';
import { Categories } from '@/tipos';
import Image from 'next/image';

type NewsHeaderProps = {
  image: string;
  title: string;
  author: string;
  likes: number;
  views: number;
  date: string;
  comments: number;
  category: Categories;
};

export default function NewsHeader({
  image,
  title,
  author,
  likes,
  views,
  date,
  comments,
  category,
}: NewsHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row lg:items-center">
      <div className="justify-self-center self-center w-full h-full sm:min-h-full lg:max-h-[400px] lg:min-h-[400px] max-w-[580px] rounded-lg overflow-hidden">
        <Image
          className="sm:min-h-full w-full max-w-[580px] object-cover rounded-lg"
          src={image}
          alt={title}
          width={580}
          height={400}
        />
      </div>
      <div>
        <div className="flex flex-col gap-3 border-y border-slate-400 py-4 lg:py-8">
          <p className="font-bold text-xl text-slate-600 relative before:block before:absolute before:w-6 before:h-2 before:-bottom-2 before:left-0 before:bg-sky-800 mb-4">
            {category}
          </p>
          <h1 className="font-bold lg:text-5xl text-3xl text-slate-800">
            {title}
          </h1>
          <p className="font-bold text-xl text-slate-600 flex items-center gap-20">
            {author}{' '}
            <span className="text-slate-500 text-sm">• {formatDate(date)}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="flex items-center gap-2 font-bold text-xl text-slate-600">
            {comments}
            <Image
              src={'/assets/icons/color-comment-icon.svg'}
              width={24}
              height={24}
              alt={'Icone de comentários'}
            />
          </p>

          <p className="flex items-center gap-2 font-bold text-xl text-slate-600">
            {likes}{' '}
            <Image
              src={'/assets/icons/color-like-icon.svg'}
              width={24}
              height={24}
              alt={'Icone de likes'}
            />
          </p>

          <p className="flex items-center gap-2 font-bold text-xl text-slate-600">
            {views}{' '}
            <Image
              src={'/assets/icons/color-views-icon.svg'}
              width={24}
              height={24}
              alt={'Icone de views'}
            />
          </p>

          <p className="flex items-center gap-2 font-bold text-xl text-slate-600">
            favoritar
            <Image
              src={'/assets/icons/favorite.svg'}
              width={24}
              height={24}
              alt={'Icone de favoritar'}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
