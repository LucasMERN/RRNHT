/*
  Warnings:

  - You are about to drop the column `moduleId` on the `Test` table. All the data in the column will be lost.
  - Added the required column `information` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "moduleId",
ADD COLUMN     "images" TEXT,
ADD COLUMN     "information" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestScores" ALTER COLUMN "score" SET DEFAULT 0;
