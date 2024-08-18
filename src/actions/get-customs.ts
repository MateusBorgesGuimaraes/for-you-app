'use server';

import { GET_CUSTOMS } from '@/api';
import type { CustomsHome } from '@/tipos';

export default async function getCustoms() {
  try {
    const { url } = GET_CUSTOMS();
    const response = await fetch(url, {
      method: 'GET',
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error('erro ao carregar noticias');
    const data = (await response.json()) as CustomsHome;
    return { data: data, ok: true, error: '' };
  } catch (err) {
    if (err instanceof Error) {
      return { data: null, error: err.message, ok: false };
    }
    return { data: null, error: 'Alguma coisa deu errado', ok: false };
  }
}
