import getCustoms from '@/actions/get-customs';
import Hero from '@/pages/main/hero';
import NewsSequence from '@/pages/main/news-sequence';
import NewsTemplateEmpty from '@/pages/main/news-template-empty';
import NewsTeplateExclusive from '@/pages/main/news-template-exclusive';

export default async function Home() {
  const { data, error, ok } = await getCustoms();
  if (!data) return <div>{error}</div>;
  const {
    limitedRelevantNews,
    mostRecentNews,
    randomEsporteNews,
    randomModaNews,
    lastExclusiveNews,
  } = data;
  const newsEmpty = limitedRelevantNews[limitedRelevantNews.length - 1];
  return (
    <section className="container">
      <Hero news={limitedRelevantNews} />
      <NewsSequence news={mostRecentNews} title={'Últimas notícias'} />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8">
        <NewsTemplateEmpty news={newsEmpty} />
        <NewsTeplateExclusive news={lastExclusiveNews} />
      </div>
      <div className="mb-12">
        <NewsSequence news={randomEsporteNews} title={'Esportes'} />
        <NewsSequence news={randomModaNews} title={'Moda'} />
      </div>
    </section>
  );
}
