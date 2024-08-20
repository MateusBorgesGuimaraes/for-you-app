'use server';

import { POST_COMMENT } from '@/api';
import { cookies } from 'next/headers';

export default async function postComment({
  content,
  news,
}: {
  content: string;
  news: string;
}) {
  try {
    if (!content || !news) {
      return {
        data: null,
        error: 'Content deve ser preenchido',
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

    const { url } = POST_COMMENT();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content, news }),
    });

    if (!response.ok) throw new Error('erro postar comentario');
    const data = await response.json();

    return { data: 'sucesso', ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
