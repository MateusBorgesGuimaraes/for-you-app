import getNews from '@/actions/get-news';
import NewsFooter from '@/pages/news/news-footer';
import NewsHeader from '@/pages/news/news-header';
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
  const { id } = params;

  if (!id) return <div>Not found</div>;

  const data = await getNews(id);

  if (!data.ok) return <div>{data.error}</div>;

  const news = data.data;
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
