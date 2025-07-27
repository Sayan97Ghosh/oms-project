import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  stock: z.number().int().nonnegative(),
  price: z.number().nonnegative(),
});

export type CreateProductInput = z.infer<typeof CreateProductSchema>;
