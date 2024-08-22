'use server';

import { GET_ALL_NEWS, GET_NEWS, GET_NEWS_BY_CATEGORY } from '@/api';
import { Categories, News } from '@/tipos';

type GetNewsByCategoriesProps = {
  categories: Categories | 'all';
  params?: string;
  page?: number;
  limit?: number;
};

export default async function getNewsByCategories({
  categories,
  params = '',
  page = 1,
  limit = 12,
}: GetNewsByCategoriesProps) {
  if (!categories) {
    return {
      data: null,
      error: 'Noticia nao encontrada',
      ok: false,
    };
  }
  try {
    let link;

    if (categories === 'all') {
      link = GET_ALL_NEWS();
    } else {
      link = GET_NEWS_BY_CATEGORY(categories);
    }
    const { url } = link;
    const response = await fetch(`${url}?page=${page}&limit=${limit}`);

    if (!response.ok) throw new Error('noticias nao encontrada');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
