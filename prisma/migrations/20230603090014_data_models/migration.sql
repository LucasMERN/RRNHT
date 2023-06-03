/*
  Warnings:

  - You are about to drop the column `courseId` on the `CourseProgress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,myCoursesId]` on the table `CourseProgress` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CourseProgress_userId_courseId_key";

-- AlterTable
ALTER TABLE "CourseProgress" DROP COLUMN "courseId";

-- CreateIndex
CREATE UNIQUE INDEX "CourseProgress_userId_myCoursesId_key" ON "CourseProgress"("userId", "myCoursesId");
