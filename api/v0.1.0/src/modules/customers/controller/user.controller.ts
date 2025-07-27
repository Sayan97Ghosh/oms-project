import { FastifyRequest, FastifyReply } from 'fastify';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../service/user.service';
import { CreateUserInput, UpdateUserInput } from '../schema/user.schema';

export const handleCreateUser = async (
  request: FastifyRequest<{ Body: CreateUserInput }>,
  reply: FastifyReply
) => {
  const user = await createUser(request.body);
  reply.code(201).send(user);
};

export const handleGetAllUsers = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const users = await getAllUsers();
  reply.send(users);
};

export const handleGetUserById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const user = await getUserById(request.params.id);
  reply.send(user);
};

export const handleUpdateUser = async (
  request: FastifyRequest<{ Params: { id: string }; Body: UpdateUserInput }>,
  reply: FastifyReply
) => {
  const user = await updateUser(request.params.id, request.body);
  reply.send(user);
};

export const handleDeleteUser = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const user = await deleteUser(request.params.id);
  reply.send({ message: 'User deleted', user });
};
