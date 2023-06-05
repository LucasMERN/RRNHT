'use-client'

import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { delay } from "@/lib/async";
import Image from "next/image";
import { ArrowRight } from "react-feather";

const getData = async () => {
    await delay(1000);
    const user = await getUserFromCookie(cookies());
    return user;
};

const UserCard = async () => {
    const user = await getData();

    return (
        <>
            <div className="bg-blue-950 p-6 rounded-2xl flex justify-center mr-4 relative">
                <Image
                    src="/assets/userpfp.png"
                    alt="Default User Picture"
                    style={{objectFit: "contain"}}
                    height={150}
                    width={150}
                    priority={true}
                    className="p-1"
                    />
            </div>
            <div className="mb-4 flex flex-col space-y-2 flex-1">
                <h1 className="text-2xl tracking-widest font-bold mb-4">
                {/* @ts-expect-error Server Component */}
                {user.firstName} {user.lastName}
                </h1>
                <div className="flex flex-row justify-between">
                    {/* @ts-expect-error Server Component */}
                    <span>{user.department}</span>
                    <div className="flex flex-col">
                        <span>Precision Measuring Tools</span>
                        <span className="flex flex-row">Continue Training<ArrowRight size={20} /></span>
                    </div>
                </div>
                <div>Progress Bar</div>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-row">
                        <div>Image</div>
                        <div className="flex flex-col">
                            <span>2</span>
                            <span>Modules Left</span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>Image</div>
                        <div className="flex flex-col">
                            <span>2</span>
                            <span>Modules Left</span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div>Image</div>
                        <div className="flex flex-col">
                            <span>2</span>
                            <span>Modules Left</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;