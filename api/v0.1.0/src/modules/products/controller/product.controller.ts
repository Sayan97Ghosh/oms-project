import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateProductInput } from '../schema/product.schema';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductStock,
} from '../service/product.service';

export const handleCreateProduct = async (
  request: FastifyRequest<{ Body: CreateProductInput }>,
  reply: FastifyReply
) => {
  const product = await createProduct(request.body);
  reply.send(product);
};

export const handleGetAllProducts = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const products = await getAllProducts();
  reply.send(products);
};

export const handleGetProductById = async (
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) => {
  const product = await getProductById(request.params.id);
  reply.send(product);
};

export const handleUpdateProductStock = async (
  request: FastifyRequest<{ Params: { id: string }; Body: { stock: number } }>,
  reply: FastifyReply
) => {
  const { id } = request.params;
  const { stock } = request.body;
  const updated = await updateProductStock(id, stock);
  reply.send(updated);
};