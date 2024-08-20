'use server';

import { GET_NEWS } from '@/api';
import { News } from '@/tipos';

export default async function getNews(id: string) {
  if (!id) {
    return {
      data: null,
      error: 'Noticia nao encontrada',
      ok: false,
    };
  }
  try {
    const { url } = GET_NEWS(id);
    const response = await fetch(url);

    if (!response.ok) throw new Error('noticia nao encontrada');
    const data = (await response.json()) as News;

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
