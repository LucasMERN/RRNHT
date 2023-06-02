import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { delay } from "@/lib/async";
import Image from "next/image";
import { ArrowRight } from "react-feather";

const getData = async () => {
  await delay(5000);
  const user = await getUserFromCookie(cookies());
  return user;
};

const Greetings = async () => {
  const user = await getData();

  return (
    <div className="w-full py-4 relative flex flex-row justify-center content-center">
        <div className="bg-blue-950 p-6 rounded-2xl flex justify-center mr-4">
            <Image
                src="/assets/userpfp.png"
                alt="Default User Picture"
                width={100}
                height={100}
                priority={true}
                />
        </div>
        <div className="mb-4 flex flex-col">
            <h1 className="text-xl tracking-widest font-bold mb-4">
            {user.firstName} {user.lastName}
            </h1>
            <div className="flex flex-row">
                <span>Large Disc</span>
                <div className="flex flex-col">
                    <span>Precision Measuring Tools</span>
                    <span className="flex flex-row">Continue Training<ArrowRight size={20} /></span>
                </div>
            </div>
            <div>Progress Bar</div>
            <div className="flex flex-row">
                <div>Image</div>
                <div className="flex flex-col">
                    <span>2</span>
                    <span>Modules Left</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Greetings;