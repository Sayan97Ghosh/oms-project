import Fastify from 'fastify';
import app  from './app';

const isDev = process.env.NODE_ENV !== 'production';

const server = Fastify({
  logger: isDev
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss',
            ignore: 'pid,hostname',
          },
        },
      }
    : true,
});

server.register(app);

server.listen({ port: 8082 }, (err:any, address:any) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
