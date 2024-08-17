import getCustoms from '@/actions/get-customs';
import Hero from '@/pages/main/hero';
import RecentsNews from '@/pages/main/recents-news';

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
  return (
    <section className="container ">
      <Hero news={limitedRelevantNews} />
      <RecentsNews news={mostRecentNews} />
    </section>
  );
}
