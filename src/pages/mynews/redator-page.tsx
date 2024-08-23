'use client';

import deleteNews from '@/actions/delete-news';
import getRedatorNews from '@/actions/get-redator-news';
import ButtonLink from '@/components/buttonLink/button-link';
import CardNewsGeneral from '@/components/cardNewsGeneral/card-news-general';
import TitleDec from '@/components/titleDec/title-dec';
import { toast } from '@/components/ui/use-toast';
import formatDate from '@/functions/fomatDate';
import { useSavedNewsStore } from '@/store/savedNews';
import { useUserStore } from '@/store/user';
import Link from 'next/link';
import React from 'react';

export default function RedatorPage() {
  const { user } = useUserStore();
  const { savedNews, clearSavedNews, setSavedNews } = useSavedNewsStore();

  React.useEffect(() => {
    clearSavedNews();

    if (!user || !user?.isAdmin) {
      window.location.href = '/login';
      return;
    }
    async function loadRedatorNews() {
      if (!user || !user?.id) return;
      const response = await getRedatorNews(user.id);
      if (!response.ok) {
        console.log('erro ao encontras as noticias do redator');
        return;
      }
      setSavedNews(response.data);
    }
    loadRedatorNews();
  }, [user, clearSavedNews, setSavedNews]);

  async function deleteRedatorNews(id: string) {
    const response = await deleteNews(id);
    if (!response.ok) {
      console.log('erro ao deletar noticia');
      return;
    }
    if (savedNews) setSavedNews(savedNews.filter((item) => item.id !== id));

    toast({
      title: 'Sucesso!!!',
      description: 'Notícia deletada com sucesso',
    });
  }

  return (
    <div className="my-12">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <TitleDec>Noticias do(a) {user?.username}</TitleDec>
        </div>
        <ButtonLink href="/mynews/add">ADD NOTICIA</ButtonLink>
      </div>
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
                <CardNewsGeneral.Buttons
                  id={item.id}
                  onClick={() => deleteRedatorNews(item.id)}
                />
              </CardNewsGeneral>
            </div>
          ))}
      </div>
    </div>
  );
}
