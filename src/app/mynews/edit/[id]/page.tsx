import EditNews from '@/pages/mynews/edit-news';

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
