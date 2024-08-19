'use server';

import { POST_USER } from '@/api';
import { RegisterUserType } from '@/zodSchemas/register';
import { cookies } from 'next/headers';

export default async function postUser({
  username,
  password,
  email,
}: RegisterUserType) {
  try {
    if (!username || !password || !email) {
      return {
        data: null,
        error: 'Todos os campos devem ser preenchidos',
        ok: false,
      };
    }

    const { url } = POST_USER();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (!response.ok) throw new Error('erro ao registrar usuario');
    const data = await response.json();

    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

    return { data: 'sucesso', ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
