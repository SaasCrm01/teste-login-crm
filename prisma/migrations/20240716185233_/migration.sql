/*
  Warnings:

  - The primary key for the `ClientSeller` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ClientSeller` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ClientSeller_clientId_sellerId_key";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ClientSeller" DROP CONSTRAINT "ClientSeller_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ClientSeller_pkey" PRIMARY KEY ("clientId", "sellerId");

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
