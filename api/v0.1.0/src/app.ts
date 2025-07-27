// src/app.ts
import { FastifyPluginAsync } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import websocket from '@fastify/websocket';
import { prisma } from './config/db';

const app: FastifyPluginAsync = async (fastify) => {
  fastify.register(cors, { origin: true });
  fastify.register(helmet);
  fastify.register(cookie);
  fastify.register(jwt, { secret: process.env.JWT_SECRET! });
  fastify.register(websocket);
  fastify.decorate('prisma', prisma);

  fastify.get('/healthz', async () => ({ status: 'ok' }));
};

export default app;
