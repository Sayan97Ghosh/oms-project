// src/app.ts
import { FastifyPluginAsync } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import websocket from '@fastify/websocket';
import { connectToDatabase, prisma } from './config/db';
import { orderRoutes } from './modules/orders/route/order.routes';
import { orderItemRoutes } from './modules/orders/route/orderItem.routes';
import { productRoutes } from './modules/products/route/product.routes';

const app: FastifyPluginAsync = async (fastify) => {
  // fastify.register(cors, { origin: true });
  // fastify.register(helmet);
  // fastify.register(cookie);
  // fastify.register(jwt, { secret: process.env.JWT_SECRET!});
  // fastify.register(websocket);
  fastify.decorate('prisma', prisma);
  //Call async DB connection handler
  await connectToDatabase();

  fastify.get('/healthz', async () => ({ status: 'ok' }));
  await fastify.register(orderRoutes, { prefix: '/v1/api'});
  await fastify.register(orderItemRoutes,{ prefix: '/v1/api'});
  await fastify.register(productRoutes, { prefix: '/v1/api' });

};

export default app;
