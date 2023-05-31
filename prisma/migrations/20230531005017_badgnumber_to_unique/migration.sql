/*
  Warnings:

  - You are about to drop the column `badgenumber` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[badgeNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "USER_ROLE" AS ENUM ('REGULAR', 'ADMIN');

-- DropIndex
DROP INDEX "User_badgenumber_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "badgenumber",
ADD COLUMN     "badgeNumber" INTEGER,
ADD COLUMN     "role" "USER_ROLE" NOT NULL DEFAULT 'REGULAR';

-- CreateIndex
CREATE UNIQUE INDEX "User_badgeNumber_key" ON "User"("badgeNumber");
