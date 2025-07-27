import { PrismaClient, OrderStatus } from '@prisma/client';
import { CreateOrderInput } from '../schema/order.schema';

const prisma = new PrismaClient();

export const createOrder = async (data: CreateOrderInput) => {
  return await prisma.order.create({
    data: {
      userId: data.userId,
      paymentDone: data.paymentDone ?? false,
      status: data.status ?? OrderStatus.PENDING,
      orderItems: data.orderItems
        ? {
            create: data.orderItems.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          }
        : undefined,
    },
    include: {
      orderItems: true,
    },
  });
};

export const getOrderById = async (id: string) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      orderItems: true,
    },
  });
};

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      orderItems: true,
    },
  });
};
export const updateOrderStatus = async (
  id: string,
  status: OrderStatus
) => {
   if (!Object.values(OrderStatus).includes(status as OrderStatus)) {
    throw new Error('Invalid order status');
  }
  return await prisma.order.update({
    where: { id },
    data: { 
      status:status as OrderStatus
    },
  });
};
