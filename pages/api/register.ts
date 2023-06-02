import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";
import { createJWT, hashPassword } from "@/lib/auth";
import { serialize } from "cookie";

const cookieName: string = process.env.COOKIE_NAME as string;


export default async function register(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const user = await db.user.create({
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                badge: await hashPassword(req.body.badge.toString()),
            },
        });

        const jwt = await createJWT(user);
        res.setHeader(
        "Set-Cookie",
        serialize(cookieName, jwt, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        })
        );
        res.status(201);
        res.end();
    } else {
        res.status(402);
        res.end();
    }
}