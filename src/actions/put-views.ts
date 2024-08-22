'use server';

import { PUT_VIEWS } from '@/api';

export default async function putViews(id: string) {
  if (!id) return;
  try {
    const { url } = PUT_VIEWS(id);
    const reponse = await fetch(url, {
      method: 'PUT',
      cache: 'no-store',
    });

    if (!reponse.ok) throw new Error('erro ao incremnetar as views');
    const data = await reponse.json();
    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
