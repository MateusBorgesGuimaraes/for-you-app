'use client';

import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user';
import { useSavedNewsStore } from '@/store/savedNews';
import React from 'react';
import getSavedNews from '@/actions/get-saveds-news';
import TitleDec from '@/components/titleDec/title-dec';
import CardNewsGeneral from '@/components/cardNewsGeneral/card-news-general';
import Link from 'next/link';
import formatDate from '@/functions/fomatDate';
import putSavedNews from '@/actions/put-saved-news';
import { useToast } from '@/components/ui/use-toast';

export default function SavedNews() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  const { setSavedNews, savedNews, deleteSavedNews } = useSavedNewsStore();
  React.useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }

    async function loadSavedNews() {
      const data = await getSavedNews();
      if (!data.ok) {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: data.error,
        });
        return;
      }
      setSavedNews(data.data.savedNews);
    }

    loadSavedNews();
  }, [user, router, setSavedNews, toast]);

  async function removeSavedNews(id: string) {
    const response = await putSavedNews(id);
    if (!response.ok) {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao remover noticia',
        description: response.error,
      });
      return;
    }

    const updatedSavedNews = user?.savedNews?.filter((newsId) => newsId !== id);
    if (user && updatedSavedNews) {
      setUser({
        ...user,
        savedNews: updatedSavedNews,
      });
    }

    deleteSavedNews(id);
    toast({
      title: 'success',
      description: 'Noticia removida com sucesso',
    });
  }

  if (!savedNews) return <div>Loading...</div>;

  return (
    <div className="my-12">
      <TitleDec>Noticias Salvas</TitleDec>
      <div className="mt-5 gap-5  grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {Array.isArray(savedNews) &&
          savedNews.map((item) => (
            <div key={item.id} className="flex justify-center">
              <CardNewsGeneral>
                <CardNewsGeneral.Image
                  image={item.image}
                  description={item.description}
                />
                <CardNewsGeneral.Header
                  author={item.author}
                  date={formatDate(String(item.createdAt))}
                />
                <CardNewsGeneral.Title>
                  <Link href={`/news/${item.id}`}>{item.title}</Link>
                </CardNewsGeneral.Title>
                <CardNewsGeneral.Footer
                  category={item.category}
                  likes={item.likes?.length || 0}
                  views={item.views || 0}
                />
                <CardNewsGeneral.Button
                  onClick={() => removeSavedNews(item.id)}
                />
              </CardNewsGeneral>
            </div>
          ))}
      </div>
    </div>
  );
}
