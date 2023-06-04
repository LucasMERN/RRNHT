import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const courses = await db.course.findMany();
    const user = await db.user.create({
      data: {
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        badge: req.body.badge,
        department: req.body.department,
        myCourses: {
          create: courses.map((course) => ({
            course: { connect: { id: course.id } },
          })),
        },
      },
      include: {
        myCourses: true,
      },
    });

    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(process.env.COOKIE_NAME as string, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}