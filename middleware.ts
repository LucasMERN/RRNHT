import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { URL } from 'url';
const PUBLIC_FILE = /\.(.*)$/;

// had to make this again here as the other one is in a file with bcrypt which is not supported on edge runtimes
const verifyJWT = async (jwt: string | Uint8Array) => {
  const { payload } = await jwtVerify(
    jwt,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};

export default async function middleware(
  req: { nextUrl: URL; cookies: { get: (arg0: string | undefined) => any; }; },
  res: any
) {
  const pathname = req.nextUrl.pathname;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const jwt = req.cookies.get(process.env.COOKIE_NAME);

  if (!jwt) {
    req.nextUrl.pathname = "/register";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    req.nextUrl.pathname = "/register";
    return NextResponse.redirect(req.nextUrl);
  }
}