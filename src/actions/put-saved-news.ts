'use server';

import { PUT_SAVED_NEWS } from '@/api';
import { cookies } from 'next/headers';

export default async function putSavedNews(id: string) {
  const token = cookies().get('token')?.value;
  if (!id || !token) return { data: 'erro', ok: true, error: 'dados faltando' };
  try {
    const { url } = PUT_SAVED_NEWS(id);
    const reponse = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!reponse.ok) throw new Error('erro ao adicinonar as noticias salvas');
    const data = await reponse.json();
    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
