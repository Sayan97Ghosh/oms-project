import { PrismaClient } from '@prisma/client';
import { CreateProductInput } from '../schema/product.schema';

const prisma = new PrismaClient();

export const createProduct = async (data: CreateProductInput) => {
  return await prisma.product.create({
    data,
  });
};

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: string) => {
  return await prisma.product.findUnique({ where: { id } });
};

export const updateProductStock = async (id: string, stock: number) => {
  return await prisma.product.update({
    where: { id },
    data: { stock },
  });
};
