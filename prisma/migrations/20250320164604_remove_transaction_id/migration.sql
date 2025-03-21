/*
  Warnings:

  - You are about to drop the column `transactionId` on the `MpesaTransaction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "MpesaTransaction_transactionId_idx";

-- DropIndex
DROP INDEX "MpesaTransaction_transactionId_key";

-- AlterTable
ALTER TABLE "MpesaTransaction" DROP COLUMN "transactionId";
