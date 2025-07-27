import { PrismaClient } from '@prisma/client';
import { CreateUserInput, UpdateUserInput } from '../schema/user.schema';

const prisma = new PrismaClient();

export const createUser = async (data: CreateUserInput) => {
  return await prisma.user.create({ data });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const updateUser = async (id: string, data: UpdateUserInput) => {
  return await prisma.user.update({ where: { id }, data });
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({ where: { id } });
};
