import { z } from 'zod';

export const CreateOrderItemSchema = z.object({
  orderId: z.string().uuid(),
  productId: z.string().uuid(),
  quantity: z.number().min(1),
});

export type CreateOrderItemInput = z.infer<typeof CreateOrderItemSchema>;
