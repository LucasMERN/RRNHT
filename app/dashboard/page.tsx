import CourseCard from "@/components/CourseCard";
import SideBar from "@/components/SideBar";
import Trophies from "@/components/Trophy";
import UserCard from "@/components/UserCard";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
    return (
        <>
        <header className='bg-header bg-no-repeat bg-cover p-6 border-b-2 border-blue-700'>
            <Image
                src="/assets/regal-logo.webp"
                alt="Rexnord logo"
                width={400}
                height={200}
            />
        </header>
        <section className="flex h-full">
            <section className="w-1/5 bg-blue-700">
                <SideBar/>
            </section>
            <section className="w-4/5 mx-8">
                <section className="my-8 pb-6 flex flex-row">
                    {/* @ts-expect-error Server Component */}
                    <UserCard />
                </section>
                <section className="my-8 border-b-2 pb-6 border-blue-700">
                    {/* @ts-expect-error Server Component */}
                    <Trophies />
                </section>
                <section className="my-8">
                    {/* @ts-expect-error Server Component */}
                    <CourseCard />
                </section>
            </section>
        </section>
        </>
    );
}