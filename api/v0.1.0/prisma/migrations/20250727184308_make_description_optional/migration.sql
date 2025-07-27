-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'PLACED';

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" DROP NOT NULL;
