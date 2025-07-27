import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import {
  handleCreateProduct,
  handleGetAllProducts,
  handleGetProductById,
  handleUpdateProductStock,
} from '../controller/product.controller';

export const productRoutes = async (app:FastifyInstance) => {
  app.post('/products', handleCreateProduct);
  app.get('/products', handleGetAllProducts);
  app.get('/products/:id', handleGetProductById);
  app.put('/products/:id/stock', handleUpdateProductStock);
};
