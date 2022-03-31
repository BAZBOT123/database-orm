/*
  Warnings:

  - You are about to drop the column `startsAT` on the `Screening` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Screening" DROP COLUMN "startsAT",
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
