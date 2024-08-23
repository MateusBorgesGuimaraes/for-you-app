'use server';

import { PUT_NEWS } from '@/api';
import { cookies } from 'next/headers';
import { PostNewsType } from '@/zodSchemas/post-news-redator';

type PutNewsProps = PostNewsType & {
  user: string;
  id: string;
};

export default async function putNews({
  content,
  title,
  author,
  image,
  category,
  user,
  exclusive,
  description,
  id,
}: PutNewsProps) {
  const token = cookies().get('token')?.value;
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
  try {
    const { url } = PUT_NEWS(id);
    const reponse = await fetch(url, {
      method: 'PUT',
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

    if (!reponse.ok) throw new Error('erro ao editar as noticias');
    const data = await reponse.json();
    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
