/*
  Warnings:

  - The `resultCode` column on the `MpesaTransaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "MpesaTransaction" DROP COLUMN "resultCode",
ADD COLUMN     "resultCode" INTEGER;
