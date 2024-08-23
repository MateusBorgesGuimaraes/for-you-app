import CategoriesPage from '@/pages/categories/categories-page';
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
