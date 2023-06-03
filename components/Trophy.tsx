import Image from "next/image";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { delay } from "@/lib/async";

const getData = async () => {
    await delay(5000);
    const user = await getUserFromCookie(cookies());
    return user;
};

const Trophies = async () => {
    const user = await getData();

    return(
        <>
            <h2 className="mb-8 font-semibold text-xl">Achievements</h2>
            <ul className="flex flex-1 flex-row justify-between">
                <li className="flex flex-col justify-center items-center">
                    <Image 
                    src="/assets/trophy.svg"
                    alt="Trophy Icon"
                    height={75}
                    width={75}
                    loading="lazy"
                    />
                    <span className="text-sm font-medium">Trophy Name</span>
                </li>
            </ul>
        </>
    )
}

export default Trophies;