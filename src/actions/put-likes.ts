'use server';

import { PUT_LIKES } from '@/api';
import { cookies } from 'next/headers';

export default async function putLikes(id: string) {
  const token = cookies().get('token')?.value;
  if (!id || !token) return { data: 'erro', ok: true, error: 'dados faltando' };
  try {
    const { url } = PUT_LIKES(id);
    const reponse = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!reponse.ok) throw new Error('erro ao adicinonar like');
    const data = await reponse.json();
    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
