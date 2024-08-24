import RedatorPage from '@/pages/mynews/redator-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Noticias do Redator',
  description: 'Todas as noticias do redator',
};

export default async function MyNewsPage() {
  return (
    <section className="container min-h-screen w-full ">
      <RedatorPage />
    </section>
  );
}
