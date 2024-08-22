import getNews from '@/actions/get-news';
import putViews from '@/actions/put-views';
import NewsFooter from '@/pages/news/news-footer';
import NewsHeader from '@/pages/news/news-header';
import NewsPageFull from '@/pages/news/news-page-full';
import NewsText from '@/pages/news/news-text';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Noticias',
};

export type NewsIdParams = {
  params: {
    id: string;
  };
};

export default async function NewsPage({ params }: NewsIdParams) {
  await putViews(params.id);

  return <NewsPageFull id={params.id} />;
}
