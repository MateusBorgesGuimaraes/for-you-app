import { z } from 'zod';

export const registerUserSchema = z.object({
  username: z.string().min(3, {
    message: 'O nome é obrigatório e deve ter no minimo 3 caracteres',
  }),
  email: z.string().email({ message: 'Email invalido' }),
  password: z.string().min(3, {
    message: 'A senha é obrigatoria e deve ter no minimo 3 caracteres',
  }),
});

export type RegisterUserType = z.infer<typeof registerUserSchema>;
