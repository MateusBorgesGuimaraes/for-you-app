'use server';

import { GET_USER } from '@/api';
import { cookies } from 'next/headers';

export default async function getUser() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) {
      return {
        data: null,
        error: 'Login expirou, faca login novamente',
        ok: false,
      };
    }
    const { url } = GET_USER();

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('usuario nao encontrado');
    const data = await response.json();

    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
