/*
  Warnings:

  - You are about to drop the column `screenId` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[screeningId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `screeningId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_screenId_fkey";

-- DropIndex
DROP INDEX "Ticket_screenId_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "screenId",
ADD COLUMN     "screeningId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_screeningId_key" ON "Ticket"("screeningId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_screeningId_fkey" FOREIGN KEY ("screeningId") REFERENCES "Screening"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
