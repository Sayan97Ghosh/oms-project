import { FastifyRequest, FastifyReply } from 'fastify';
import { createOrder, getOrderById, getAllOrders, updateOrderStatus } from '../service/order.service';
import { OrderStatus } from '@prisma/client';

export const handleCreateOrder = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const data = req.body as any;
    const order = await createOrder(data);
    return reply.code(201).send(order);
  } catch (err) {
    return reply.code(500).send({ error: 'Unable to create order' });
  }
};

export const handleGetOrder = async (req: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
  const order = await getOrderById(req.params.id);
  if (!order) return reply.code(404).send({ error: 'Order not found' });
  return reply.send(order);
};

export const handleGetOrders = async (_req: FastifyRequest, reply: FastifyReply) => {
  const orders = await getAllOrders();
  return reply.send(orders);
};

export const handleUpdateStatus = async (req: FastifyRequest<{ Params: { id: string }, Body: { status: OrderStatus } }>, reply: FastifyReply) => {
  const order = await updateOrderStatus(req.params.id, req.body.status);
  return reply.send(order);
};
