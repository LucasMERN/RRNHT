import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

interface User {
    id: string;
    badge: string;
    firstName: string;
    lastName: string;
}

export const hashPassword = (badge: string) => bcrypt.hash(badge, 10);

export const comparePasswords = (plainTextBadge: string, hashedBadge: string) =>
    bcrypt.compare(plainTextBadge, hashedBadge);

    export const createJWT = (user: User) => {
        // return jwt.sign({ id: user.id }, 'cookies')
        const iat = Math.floor(Date.now() / 1000);
        const exp = iat + 60 * 60 * 24 * 7;
    
        return new SignJWT({ payload: { id: user.id, badge: user.badge } })
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SECRET));
    };

    export const validateJWT = async (jwt: string | Uint8Array) => {
        const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode(process.env.JWT_SECRET)
        );
    
        return payload.payload as any;
    };

    export const getUserFromCookie = async (cookies: { get: (arg0: string | undefined) => any; }) => {
        const jwt = cookies.get(process.env.COOKIE_NAME);
    
        const { id } = await validateJWT(jwt.value);
    
        const user = await db.user.findUnique({
        where: {
            id: id as string,
        },
        });
    
        return user;
    };