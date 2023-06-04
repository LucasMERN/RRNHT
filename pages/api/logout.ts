import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function logout(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  if (!jwt) {
    return res.json({});
  } else {
    const serialised = serialize("OursiteJWT", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}