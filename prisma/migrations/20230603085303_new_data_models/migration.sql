/*
  Warnings:

  - Added the required column `myCoursesId` to the `CourseProgress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CourseProgress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseProgress" DROP CONSTRAINT "CourseProgress_courseId_fkey";

-- AlterTable
ALTER TABLE "CourseProgress" ADD COLUMN     "myCoursesId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "department" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MyCourses" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "MyCourses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MyCourses_userId_courseId_key" ON "MyCourses"("userId", "courseId");

-- AddForeignKey
ALTER TABLE "MyCourses" ADD CONSTRAINT "MyCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyCourses" ADD CONSTRAINT "MyCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseProgress" ADD CONSTRAINT "CourseProgress_myCoursesId_fkey" FOREIGN KEY ("myCoursesId") REFERENCES "MyCourses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
