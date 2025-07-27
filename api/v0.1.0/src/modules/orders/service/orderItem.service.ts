import { PrismaClient } from '@prisma/client';
import { CreateOrderItemInput } from '../schema/orderItem.schema';

const prisma = new PrismaClient();

export const createOrderItem = async (data: CreateOrderItemInput) => {
  return await prisma.orderItem.create({
    data: {
      orderId: data.orderId,
      productId: data.productId,
      quantity: data.quantity,
    },
  });
};

export const getOrderItemsByOrderId = async (orderId: string) => {
  return await prisma.orderItem.findMany({
    where: { orderId },
    include: { product: true },
  });
};
