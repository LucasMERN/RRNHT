import { db } from "@/lib/db";
import fs from 'fs'

const jsonData = fs.readFileSync('prisma/courses.json', 'utf8')
const { courses } = JSON.parse(jsonData)

async function main() {
  
    const user = await db.user.create({
        data: { 
            badge: 12345,
            firstName: 'Lucas',
            lastName: 'Winkler',
        }
    });

    for(const key of courses){

        const course = await db.course.create({
            data: {
                title: key.title,
                thumbnail: key.thumbnail,
                trophy: key.trophy,
            }
        });

        const courseProgress = await db.courseProgress.create({
            data: {
                progress: 0,
                user: { connect: { id: user.id } },
                course: { connect: { id: course.id } },
            },
        });

        for (const myModule of key.modules) {
            const courseModule = await db.courseModule.create({
                data: {
                    title: myModule.title,
                    information: myModule.information,
                    images: myModule.images,
                    course: { connect: { id: course.id } },
                },
            });
        }

            for (const tests of key.tests) {
                const test = await db.test.create({
                    data: {
                        title: tests.title,
                        information: tests.information,
                        images: tests.images,
                        answers: tests.answers,
                        Course: { connect: { id: course.id } },
                    },
                });

                const testScores = await db.testScores.create({
                    data: {
                        score: 0,
                        user: { connect: { id: user.id } },
                        test: { connect: { id: test.id } },
                    },
                });
            }
        }
    }

main()
    .then(async () => {
        await db.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await db.$disconnect();
        process.exit(1);
    });