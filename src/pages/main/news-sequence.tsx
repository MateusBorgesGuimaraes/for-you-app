import CardNewsGeneral from '@/components/cardNewsGeneral/card-news-general';
import TitleDec from '@/components/titleDec/title-dec';
import formatDate from '@/functions/fomatDate';
import { News } from '@/tipos';
import Link from 'next/link';

type RecentsNewsProps = {
  news: News[];
  title: string;
};

export default function NewsSequence({ news, title }: RecentsNewsProps) {
  if (!news) return <div>Erro ao carregar noticias</div>;
  const firstFour = news?.slice(0, 4);
  return (
    <div className="mt-12">
      <TitleDec>{title}</TitleDec>
      <div className="mt-5 gap-5  grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {firstFour.map((item) => (
          <div key={item.id} className="flex  justify-center">
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
            </CardNewsGeneral>
          </div>
        ))}
      </div>
    </div>
  );
}
