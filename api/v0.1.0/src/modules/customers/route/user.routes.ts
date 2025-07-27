import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUser,
} from '../controller/user.controller';

export const userRoutes = async (app:FastifyInstance) => {
  app.post('/users', handleCreateUser);
  app.get('/users', handleGetAllUsers);
  app.get('/users/:id', handleGetUserById);
  app.put('/users/:id', handleUpdateUser);
  app.delete('/users/:id', handleDeleteUser);
};
