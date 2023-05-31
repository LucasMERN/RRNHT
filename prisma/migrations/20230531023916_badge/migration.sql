/*
  Warnings:

  - You are about to drop the column `badgeNumber` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[badge]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_badgeNumber_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "badgeNumber",
ADD COLUMN     "badge" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_badge_key" ON "User"("badge");
