import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateOrderItemSchema } from '../schema/orderItem.schema';
import { createOrderItem, getOrderItemsByOrderId } from '../service/orderItem.service';

export const createOrderItemHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const data = CreateOrderItemSchema.parse(req.body);
  const item = await createOrderItem(data);
  return reply.code(201).send(item);
};

export const getOrderItemsHandler = async (
  req: FastifyRequest<{ Params: { orderId: string } }>,
  reply: FastifyReply
) => {
  try {
    const { orderId } = req.params;
    const items = await getOrderItemsByOrderId(orderId);
    
    if (!items || items.length === 0) {
      return reply.code(404).send({ message: 'No order items found for this order ID' });
    }

    return reply.send(items);
  } catch (error) {
    return reply.code(500).send({ error: 'Internal Server Error', details: error });
  }
};
