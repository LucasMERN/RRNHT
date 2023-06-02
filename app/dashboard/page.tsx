import UserCard from "@/components/UserCard";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="">
      <div className="">
        <div className="">
            <UserCard />
        </div>
      </div>
    </div>
  );
}