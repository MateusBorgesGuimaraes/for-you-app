'use client';

import putLikes from '@/actions/put-likes';
import putSavedNews from '@/actions/put-saved-news';
import { useToast } from '@/components/ui/use-toast';
import formatDate from '@/functions/fomatDate';
import { useNewsStore } from '@/store/news';
import { useUserStore } from '@/store/user';
import { Categories } from '@/tipos';
import Image from 'next/image';
import React from 'react';

type NewsHeaderProps = {
  image: string;
  title: string;
  author: string;
  likes: string[] | undefined;
  views: number;
  date: string;
  comments: number;
  category: Categories;
  id: string;
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
  id,
}: NewsHeaderProps) {
  const { user } = useUserStore();
  const { news, setNews } = useNewsStore();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = React.useState(false);

  async function changeLikes() {
    const response = await putLikes(id);
    if (!response.ok) {
      console.log(response.error);
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao curtir noticia',
        description: response.error,
      });
      return;
    }

    if (news && response.ok) {
      const userAlreadyLiked = likes?.includes(user?.id ?? '');
      const updatedLikes = userAlreadyLiked
        ? likes?.filter((userId) => userId !== user?.id)
        : [...(likes ?? []), user?.id ?? ''];

      setNews({
        ...news,
        likes: updatedLikes,
      });
    }
  }

  let contains = false;
  if (user?.id && likes) {
    contains = likes?.includes(user?.id);
  }

  async function toggleFavorite() {
    const response = await putSavedNews(id);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao favoritar noticia',
        description: response.error,
      });
      return;
    }
    if (response.ok) {
      setIsFavorite(!isFavorite);
    }
    if (user && user.savedNews) {
      const updatedSavedNews = isFavorite
        ? user.savedNews.filter((newsId) => newsId !== id)
        : [...(user.savedNews || []), id];

      useUserStore.setState({
        user: {
          ...user,
          savedNews: updatedSavedNews,
        },
      });
    }
  }

  React.useEffect(() => {
    if (user && user.savedNews && user.savedNews.includes(id)) {
      setIsFavorite(true);
    }
  }, [id, user]);

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

          <button
            onClick={changeLikes}
            className="flex items-center gap-2 font-bold text-xl text-slate-600"
          >
            {contains ? (
              <>
                {likes?.length}
                <Image
                  src={'/assets/icons/color-like-icon-full.svg'}
                  width={24}
                  height={24}
                  alt={'Icone de likes'}
                />
              </>
            ) : (
              <>
                {likes?.length}
                <Image
                  src={'/assets/icons/color-like-icon.svg'}
                  width={24}
                  height={24}
                  alt={'Icone de likes'}
                />
              </>
            )}
          </button>

          <p className="flex items-center gap-2 font-bold text-xl text-slate-600">
            {views}{' '}
            <Image
              src={'/assets/icons/color-views-icon.svg'}
              width={24}
              height={24}
              alt={'Icone de views'}
            />
          </p>

          <button
            onClick={toggleFavorite}
            className="flex items-center gap-2 font-bold text-xl text-slate-600"
          >
            {isFavorite ? (
              <>
                desfavoritar
                <Image
                  src={'/assets/icons/unfavorite.svg'}
                  width={24}
                  height={24}
                  alt={'Icone de desfavoritar'}
                />
              </>
            ) : (
              <>
                favoritar
                <Image
                  src={'/assets/icons/favorite.svg'}
                  width={24}
                  height={24}
                  alt={'Icone de favoritar'}
                />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
