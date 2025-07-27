// import fastify from 'fastify';
// import buildApp from './app';     
// import dotenv from 'dotenv';
// dotenv.config();                       

// const server = fastify({
//   logger: {
//     transport: {
//       target: 'pino-pretty',
//       options: { translateTime: 'HH:MM:ss', ignore: 'pid,hostname' },
//     },
//   },
// });

// server.register(buildApp);         

// server.get('/health', async () => ({ status: 'ok' }));


// const PORT = Number(process.env.PORT) || 8082;
// server
//   .listen({ port: PORT, host: '0.0.0.0' })
//   .then(() => {
//     server.log.info(` API ready at http://localhost:${PORT}`);
//   })
//   .catch((err) => {
//     server.log.error(err);
//     process.exit(1);
//   });
