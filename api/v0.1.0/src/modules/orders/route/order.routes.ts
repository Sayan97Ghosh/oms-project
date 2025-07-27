import { FastifyInstance } from 'fastify';
import {
  handleCreateOrder,
  handleGetOrder,
  handleGetOrders,
  handleUpdateStatus
} from '../controller/order.controller';

export const orderRoutes = async (app: FastifyInstance) => {
  app.get('/orders', handleGetOrders);
  app.get('/orders/:id', handleGetOrder);
  app.post('/orders', handleCreateOrder);
  app.patch('/orders/:id/status', handleUpdateStatus);
};
