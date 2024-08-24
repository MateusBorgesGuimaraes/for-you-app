import CategoriesPage from '@/pages/categories/categories-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categoria',
  description: 'Categorias de notícias.',
};

export type CaregoryParams = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CaregoryParams) {
  return (
    <section className="container pb-8">
      <CategoriesPage category={params.category} />
    </section>
  );
}
