// src/app.ts
import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import websocket, { fastifyWebsocket } from '@fastify/websocket';
import { WebSocket } from 'ws';
import { connectToDatabase, prisma } from './config/db';
import { orderRoutes } from './modules/orders/route/order.routes';
import { orderItemRoutes } from './modules/orders/route/orderItem.routes';
import { productRoutes } from './modules/products/route/product.routes';
import { userRoutes } from './modules/customers/route/user.routes';

const app: FastifyPluginAsync = async (fastify) => {
  // fastify.register(cors, { origin: true });
  // fastify.register(helmet);
  // fastify.register(cookie);
  // fastify.register(jwt, { secret: process.env.JWT_SECRET!});
  fastify.decorate('prisma', prisma);
  //Call async DB connection handler
  await connectToDatabase();

  fastify.get('/healthz', async () => ({ status: 'ok' }));
  await fastify.register(orderRoutes, { prefix: '/v1/api'});
  await fastify.register(orderItemRoutes,{ prefix: '/v1/api'});
  await fastify.register(productRoutes, { prefix: '/v1/api' });
  await fastify.register(userRoutes, { prefix: '/v1/api' });

  const websocketClients = new Set<WebSocket>();
  await fastify.register(fastifyWebsocket); 

 fastify.get('/ws', { websocket: true }, (socket: WebSocket, request: FastifyRequest) => {
    websocketClients.add(socket);

    socket.on('close', () => {
      websocketClients.delete(socket);
    });

    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
      socket.send(`Echo: ${message}`);
    });
});

};

export default app;
