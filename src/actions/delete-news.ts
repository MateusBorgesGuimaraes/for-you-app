'use server';

import { DELETE_NEWS } from '@/api';
import { cookies } from 'next/headers';

export default async function deleteNews(id: string) {
  try {
    if (!id) {
      return {
        data: null,
        error: 'Noticia nao encontrada',
        ok: false,
      };
    }

    const token = cookies().get('token')?.value;

    if (!token) {
      return {
        data: null,
        error: 'Logue na sua conta',
        ok: false,
      };
    }

    const { url } = DELETE_NEWS(id);

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204) {
      return { data: null, ok: true, error: '' };
    }

    if (!response.ok) throw new Error('erro deletar noticia');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
