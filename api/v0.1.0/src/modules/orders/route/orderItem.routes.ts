import { FastifyInstance } from 'fastify';
import { getOrderItemsHandler, createOrderItemHandler } from '../controller/orderItem.controller';

export const orderItemRoutes = async (app: FastifyInstance) => {
  app.post('/order-items', createOrderItemHandler);
  app.get('/order-items/:orderId', getOrderItemsHandler);
};
