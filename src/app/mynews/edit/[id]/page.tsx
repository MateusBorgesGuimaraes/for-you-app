import EditNews from '@/pages/mynews/edit-news';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar noticias',
  description: 'Edite a noticia',
};

export type EditNewsParams = {
  params: {
    id: string;
  };
};

export default async function EditNewsPage({ params }: EditNewsParams) {
  return (
    <section className="container min-h-screen w-full flex items-center justify-center">
      <EditNews id={params.id} />
    </section>
  );
}
