import { Categories } from '@/tipos';

export default function isValidCategory(
  category: string,
): category is Categories | 'all' {
  return [
    'cultura',
    'moda',
    'esporte',
    'arte',
    'politica',
    'natureza',
    'saude',
    'ciencia',
    'entretenimento',
    'all',
  ].includes(category);
}
