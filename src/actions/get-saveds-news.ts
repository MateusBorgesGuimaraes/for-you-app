'use server';

import { GET_SAVED_NEWS } from '@/api';
import { cookies } from 'next/headers';

export default async function getSavedNews() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return {
        data: null,
        error: 'Logue na sua conta',
        ok: false,
      };
    }
    const { url } = GET_SAVED_NEWS();

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) throw new Error('Erro ao recuperar noticias salvas');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
