/*
  Warnings:

  - Made the column `thumbnail` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `courseId` on table `Test` required. This step will fail if there are existing NULL values in that column.
  - Made the column `images` on table `Test` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_courseId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "thumbnail" SET NOT NULL;

-- AlterTable
ALTER TABLE "Test" ALTER COLUMN "courseId" SET NOT NULL,
ALTER COLUMN "images" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
