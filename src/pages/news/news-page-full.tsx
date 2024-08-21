'use client';

import React from 'react';
import NewsFooter from './news-footer';
import NewsHeader from './news-header';
import NewsText from './news-text';
import getNews from '@/actions/get-news';
import { useNewsStore } from '@/store/news';

type NewsPageFullProps = {
  id: string;
};

export default function NewsPageFull({ id }: NewsPageFullProps) {
  const { news, setNews, clearNews } = useNewsStore();

  React.useEffect(() => {
    clearNews();
    async function loadNews() {
      const data = await getNews(id);
      if (!data.ok) return <div>{data.error}</div>;
      if (!data.data) return <div>Not found</div>;
      setNews(data.data);
    }
    loadNews();
  }, [setNews, id, clearNews]);

  if (!news) return <div>Not found</div>;
  const {
    image,
    title,
    content,
    createdAt,
    likes,
    comments,
    views,
    category,
    author,
  } = news;

  return (
    <section className="container flex flex-col py-8 gap-8">
      <div className="">
        <NewsHeader
          image={image}
          title={title}
          date={String(createdAt)}
          likes={likes?.length || 0}
          comments={comments?.length || 0}
          views={views || 0}
          category={category}
          author={author}
        />
      </div>
      <div className="lg:max-w-[61.25rem] self-center">
        <NewsText content={content} />
      </div>
      <div className="">
        <NewsFooter comments={comments} newsId={id} />
      </div>
    </section>
  );
}
