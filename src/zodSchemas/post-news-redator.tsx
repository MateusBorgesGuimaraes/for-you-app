import { z } from 'zod';

export const postNewsSchema = z.object({
  title: z.string().min(3, {
    message: 'O nome é obrigatório e deve ter no minimo 3 caracteres',
  }),
  description: z.string().min(3, {
    message: 'A descricão é obrigatória e deve ter no minimo 3 caracteres',
  }),
  content: z.string().min(3, {
    message: 'O conteudo é obrigatório e deve ter no minimo 3 caracteres',
  }),
  image: z.string().min(3, {
    message: 'A imagem é obrigatória e deve ter no minimo 3 caracteres',
  }),
  author: z.string().min(3, {
    message: 'O autor é obrigatório e deve ter no minimo 3 caracteres',
  }),
  category: z.enum(
    [
      'cultura',
      'moda',
      'esporte',
      'arte',
      'politica',
      'natureza',
      'saude',
      'ciencia',
      'entretenimento',
    ],
    {
      message: 'Categoria inválida',
    },
  ),
  exclusive: z.boolean().default(false),
});

export type PostNewsType = z.infer<typeof postNewsSchema>;
