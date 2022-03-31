/*
  Warnings:

  - You are about to drop the column `contactId` on the `Customer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_contactId_fkey";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "contactId";
