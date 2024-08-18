import { z } from 'zod';

export const loginUserSchema = z.object({
  username: z.string().min(3, {
    message: 'O nome é obrigatório e deve ter no minimo 3 caracteres',
  }),
  password: z.string().min(3, {
    message: 'A senha é obrigatoria e deve ter no minimo 3 caracteres',
  }),
});

export type LoginUserType = z.infer<typeof loginUserSchema>;
