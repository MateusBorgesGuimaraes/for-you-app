'use server';

import { GET_TOKEN } from '@/api';
import { LoginUserType } from '@/zodSchemas/login';
import { cookies } from 'next/headers';

export default async function getToken({ username, password }: LoginUserType) {
  try {
    if (!username || !password) {
      return {
        data: null,
        error: 'Todos os campos devem ser preenchidos',
        ok: false,
      };
    }

    const { url } = GET_TOKEN();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error('usuario nao encontrado');
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
