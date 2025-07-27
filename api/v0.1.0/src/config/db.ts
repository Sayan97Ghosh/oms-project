import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();
export async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log('Prisma DB connection established');
  } catch (error) {
    console.error('Error connecting to the database with Prisma:', error);
    process.exit(1);
  }
}
