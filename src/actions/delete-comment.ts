'use server';

import { DELETE_COMMENT } from '@/api';
import { cookies } from 'next/headers';

export default async function deleteComment(id: string) {
  try {
    if (!id) {
      return {
        data: null,
        error: 'Comentario nao encontrado',
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

    const { url } = DELETE_COMMENT(id);

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 204) {
      return { data: null, ok: true, error: '' };
    }

    if (!response.ok) throw new Error('erro deletar comentario');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
