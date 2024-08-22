import putViews from '@/actions/put-views';
import NewsPageFull from '@/pages/news/news-page-full';
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
