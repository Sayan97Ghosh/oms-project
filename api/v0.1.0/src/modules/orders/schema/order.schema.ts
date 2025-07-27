import { OrderStatus } from '@prisma/client';
import { z } from 'zod';

export const CreateOrderSchema = z.object({
   userId: z.string().uuid({ message: "Invalid user ID format" }),
  paymentDone: z.boolean().optional(),
  status: z.nativeEnum(OrderStatus).optional(),
  orderItems: z
    .array(
      z.object({
        productId: z.string().uuid(),
        quantity: z.number().min(1),
      })
    )
    .optional(),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;
