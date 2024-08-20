'use client';

import ButtonLink from '@/components/buttonLink/button-link';
import CardNewsHero from '@/components/cardNewsHero/card-news-hero';
import formatDate from '@/functions/fomatDate';
import type { News } from '@/tipos';
import Image from 'next/image';
import React from 'react';
import getUser from '@/actions/get-user';
import { useUserStore } from '@/store/user';

type HeroProps = {
  news: News[];
};

export default function Hero({ news }: HeroProps) {
  const firstTwoNews = news.slice(0, 2);
  const lastTreeNews = news.slice(-3);
  const { user, setUser } = useUserStore();

  React.useEffect(() => {
    async function loadUser() {
      if (user) return;
      const { data } = await getUser();
      if (data && !user) setUser(data);
    }
    loadUser();
  }, [setUser, user]);

  return (
    <section className=" h-[calc(100vh-80px)] flex items-center justify-center gap-[.375rem]">
      <div
        className={`bg-[url('/assets/images/building-hero.jpg')] bg-cover max-h-[42.5rem] max-w-[28.75rem] h-full flex items-center justify-center flex-col gap-8`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl text-slate-900 font-bold">For You</h1>
          <p className="text-base text-slate-700">
            web magazine premiada, imparcial e com equipe renomada.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:self-start">
          <p className="text-base text-slate-700 lg:max-w-40">
            Revista online apenas com as ultimas noticias, atualizadas
            diretamente e com uma equipe totalmente imparcial, fique por dentro
            do que REALMENTE esta acontecendo pelo mundo.
          </p>

          <div>
            <ButtonLink href="/">REGISTRAR</ButtonLink>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="bg-slate-900 p-2 rounded-md">
            <Image
              src={'/assets/icons/instagram-icon.svg'}
              height={24}
              width={24}
              alt="logo do instagram"
            />
          </div>

          <div className="bg-slate-900 p-2 rounded-md">
            <Image
              src={'/assets/icons/x-icon.svg'}
              height={24}
              width={24}
              alt="logo do twitter"
            />
          </div>

          <div className="bg-slate-900 p-2 rounded-md">
            <Image
              src={'/assets/icons/facebook-icon.svg'}
              height={24}
              width={24}
              alt="logo do facebook"
            />
          </div>

          <div className="bg-slate-900 p-2 rounded-md">
            <Image
              src={'/assets/icons/youtube-icon.svg'}
              height={24}
              width={24}
              alt="logo do youtube"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col h-full gap-[.375rem] justify-center">
        {firstTwoNews.map((news) => (
          <CardNewsHero key={news.id} url={news.image} newsId={news.id}>
            <CardNewsHero.Header>
              <CardNewsHero.Header.Author>
                {news.author}
              </CardNewsHero.Header.Author>
              <CardNewsHero.Header.Date>
                {formatDate(String(news.createdAt))}
              </CardNewsHero.Header.Date>
            </CardNewsHero.Header>
            <CardNewsHero.Title>{news.title}</CardNewsHero.Title>
            <CardNewsHero.Footer>
              <CardNewsHero.Footer.Content
                type="comment"
                value={news.comments?.length || 0}
              />
              <CardNewsHero.Footer.Content
                type="like"
                value={news.likes?.length || 0}
              />
              <CardNewsHero.Footer.Content
                type="views"
                value={news.views || 0}
              />
            </CardNewsHero.Footer>
          </CardNewsHero>
        ))}

        <div className="flex gap-[.375rem]">
          <div className="bg-slate-900 p-3 rounded-2xl flex flex-col justify-between w-full">
            <div className="flex items-center justify-between">
              <Image
                src={'/assets/icons/line-chart-up-icon.svg'}
                width={125}
                height={28}
                alt="line chart up icon"
              />
              <Image
                className="hidden lg:block"
                src={'/assets/icons/up-icon.svg'}
                width={32}
                height={32}
                alt="up icon"
              />
            </div>

            <h3 className="text-slate-100 font-bold text-3xl ">
              5.2%{' '}
              <span className="text-slate-400 font-bold text-xs">0.777900</span>
            </h3>

            <span className="text-slate-400 font-bold text-xs mt-4">
              BRL/USD
            </span>
          </div>

          <div className="bg-slate-900 p-3 rounded-2xl flex flex-col justify-between w-full">
            <div className="flex items-center justify-between">
              <Image
                src={'/assets/icons/line-chart-down-icon.svg'}
                width={125}
                height={28}
                alt="line chart down icon"
              />
              <Image
                className="hidden lg:block"
                src={'/assets/icons/down-icon.svg'}
                width={32}
                height={32}
                alt="down icon"
              />
            </div>

            <h3 className="text-slate-100 font-bold text-3xl ">
              1.2%{' '}
              <span className="text-slate-400 font-bold text-xs">
                -0.004040
              </span>
            </h3>

            <span className="text-slate-400 font-bold text-xs mt-4">
              BRL/BTC
            </span>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex flex-col h-full gap-[.375rem] justify-center">
        <div className="flex items-center">
          <h1 className="text-2xl text-slate-800 font-bold">
            Principais Noticias
            <br /> da Semana
          </h1>
          <Image
            src={'/assets/icons/trending-icon.svg'}
            width={60}
            height={60}
            alt="trending icon"
          />
        </div>
        {lastTreeNews.map((news) => (
          <CardNewsHero key={news.id} url={news.image} newsId={news.id}>
            <CardNewsHero.Header>
              <CardNewsHero.Header.Author>
                {news.author}
              </CardNewsHero.Header.Author>
            </CardNewsHero.Header>
            <CardNewsHero.Title small>{news.title}</CardNewsHero.Title>
            <CardNewsHero.Footer>
              <CardNewsHero.Footer.Content
                type="like"
                value={news.likes?.length || 0}
              />
              <CardNewsHero.Footer.Content
                type="views"
                value={news.views || 0}
              />
            </CardNewsHero.Footer>
          </CardNewsHero>
        ))}
      </div>
    </section>
  );
}
