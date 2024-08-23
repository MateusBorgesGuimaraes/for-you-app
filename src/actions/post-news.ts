'use server';

import { POST_NEWS } from '@/api';
import { PostNewsType } from '@/zodSchemas/post-news-redator';
import { cookies } from 'next/headers';

type PostNewsProps = PostNewsType & {
  user: string;
};

export default async function postNews({
  content,
  title,
  author,
  image,
  category,
  user,
  exclusive,
  description,
}: PostNewsProps) {
  try {
    if (
      content == null ||
      title == null ||
      author == null ||
      image == null ||
      category == null ||
      user == null ||
      description == null ||
      exclusive == null
    ) {
      return {
        data: null,
        error: 'Todos os campos devem ser preenchidos',
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

    const { url } = POST_NEWS();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content,
        title,
        author,
        image,
        category,
        user,
        exclusive,
        description,
      }),
    });

    if (!response.ok) throw new Error('erro postar noticia');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
