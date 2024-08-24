import SavedNews from '@/pages/saved/saved-news';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias Salvas',
  description: 'Coleção de noticias salvas',
};

export default async function SavedPage() {
  return (
    <section className="container min-h-screen">
      <SavedNews />
    </section>
  );
}
