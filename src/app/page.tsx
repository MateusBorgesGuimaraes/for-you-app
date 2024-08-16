import getCustoms from '@/actions/get-customs';
import Hero from '@/pages/main/hero';

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
    <div className="container">
      <Hero news={limitedRelevantNews} />
    </div>
  );
}
