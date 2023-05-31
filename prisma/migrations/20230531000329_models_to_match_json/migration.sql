/*
  Warnings:

  - You are about to drop the column `pages` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `questions` on the `Test` table. All the data in the column will be lost.
  - Made the column `trophy` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_moduleId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "trophy" SET NOT NULL;

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "pages",
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "information" TEXT[];

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "questions";
