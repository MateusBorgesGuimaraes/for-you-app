'use server';

import { GET_REDATOR_NEWS } from '@/api';

export default async function getRedatorNews(id: string) {
  try {
    const { url } = GET_REDATOR_NEWS(id);

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) throw new Error('Noticias nao encontradas');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
