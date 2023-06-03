import Image from 'next/image'
import { ArrowRight } from "react-feather";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { delay } from "@/lib/async";

const getData = async () => {
    await delay(5000);
    const user = await getUserFromCookie(cookies());
    return user;
};

export default function CourseCard(){
    return(
        <>
            <ul className="flex flex-1 flex-row justify-between">
                <li>
                    <div className='relative'>
                        <h3 className='absolute top-2 left-2'>Understanding Blueprints</h3>
                        <div className='flex flex-row absolute top-8 left-2'>
                            <span className='pr-2'>4 Modules</span>
                            <span>3 Tests</span>
                        </div>
                        <span className='absolute bottom-2 right-2 flex flex-row'>
                            Start Training
                            <ArrowRight size={20} />
                        </span>
                        <Image
                        src='/assets/blueprintcard.png'
                        alt='card for course'
                        style={{objectFit: "contain"}}
                        loading='lazy'
                        height={300}
                        width={300}
                        className='rounded-2xl border-black border-2'
                        />
                    </div>
                </li>
            </ul>
        </>
    )
}