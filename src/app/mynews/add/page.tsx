import AddNews from '@/pages/mynews/add-news';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adicinar Noticia',
  description: 'Adicione uma nova noticia',
};

export default async function AddNewsPage() {
  return (
    <section className="container min-h-screen w-full flex items-center justify-center">
      <AddNews />
    </section>
  );
}
