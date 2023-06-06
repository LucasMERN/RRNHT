import Image from 'next/image'
import { ArrowRight } from "react-feather";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { delay } from "@/lib/async";
import { db } from '@/lib/db';

const getData = async () => {
  await delay(1000);
  const user = await getUserFromCookie(cookies());
  const userWithCourses = await db.user.findUnique({
    where: { id: user?.id },
    include: { myCourses: true },
  });
  return userWithCourses;
};

const CourseCard = async () => {
    const user = await getData();
  
    if (user) {
        // Fetch course data for each myCourse
        const courses = await Promise.all(
          user.myCourses.map(async (myCourse) => {
            const course = await db.course.findUnique({
              where: { id: myCourse.courseId },
              include: {
                modules: true,
                tests: true,
              },
            });
            return course;
          })
        );
  
    return (
        <>
            <ul className="flex flex-1 flex-row justify-between">
            {courses.map((course) => (
                <li key={course?.id}>
                <div className="relative">
                    <h3 className="absolute top-2 left-2">{course?.title}</h3>
                    <div className="flex flex-row absolute top-8 left-2">
                    <span className="pr-2">{course?.modules.length} Modules</span>
                    <span>{course?.tests.length} Tests</span>
                    </div>
                    <span className="absolute bottom-2 right-2 flex flex-row items-center">
                    Start Training
                    <ArrowRight size={20} />
                    </span>
                    <Image
                    src={course?.thumbnail  || '/assets/shoptalkcard.png'}
                    alt="card for course"
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                    height={300}
                    width={300}
                    className="rounded-2xl border-black border-2"
                    />
                </div>
                </li>
            ))}
            </ul>
        </>
        );
    };
};

export default CourseCard;