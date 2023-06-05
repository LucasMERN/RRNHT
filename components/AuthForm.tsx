"use client";

import { register, login } from "@/lib/api";
import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Input from "./Input";
import Image from "next/image";

//objects used to mode switch between the form for each route
const registerContent = {
    linkUrl: "/login",
    linkText: "Already have an account?",
    header: "NEW HIRE TRAINING",
    buttonText: "Get Started",
};

const loginContent = {
    linkUrl: "/register",
    linkText: "Don't have an account?",
    header: "Welcome Back",
    buttonText: "Log In",
};

const initial = { firstName: "", lastName: "", badge: "", password: "", department: "" }; //initial state that can be used to reset the form. DO NOT MUTATE

export default function AuthForm({ mode }: { mode: "register" | "login" }) {
    const [formState, setFormState] = useState({ ...initial }); //pass in a copy of the initial object for the initial state
    const [error, setError] = useState("");

    const router = useRouter();
    const handleSubmit = useCallback( //wrap in usecallback to optimize re-renders/ this will now use the same function if one of the formstates change
        async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            if (mode === "register") {
            await register(formState);
            } else {
            await login(formState);
            }

            router.replace("/dashboard"); //after submitting the form we reroute to the dashboard
        } catch (e) {
            setError(`Could not ${mode}`);
        } finally {
            setFormState({ ...initial });
        }
        },
        [formState, mode, router]
    );

    const content = mode === "register" ? registerContent : loginContent; //content is either register or login depending on the mode

    return (
        <div>
            <Image
                src="/assets/rexnord-logo.png"
                alt="Rexnord logo"
                width={700}
                height={400}
                priority={true} />
            <div className="w-full my-4">
                <div className="text-center">
                <h2 className="text-3xl mb-2 tracking-widest">{content.header}</h2>
                </div>
                <form onSubmit={handleSubmit} className="py-10 w-full">
                    <div className="mb-8">
                        <Input //use input component with the value we are controlling, use onchange to change the value, must pass previous state first before setting the new changes because we are controlling the form with a single useState hook instead of using state on each input.
                        required
                        placeholder="Enter First Name Here"
                        value={formState.firstName}
                        className="border-solid border-violet-950 border px-6 py-2 text-lg rounded-lg w-full placeholder:text-black"
                        onChange={(e) =>
                            setFormState((s) => ({ ...s, firstName: e.target.value })) //pass a callback of the previous state to get access to the new state as to not get your state changes out of sync.
                        }
                        />
                    </div>
                    <div className="mb-8">
                        <Input
                        required
                        placeholder="Enter Last Name Here"
                        value={formState.lastName}
                        className="border-solid border-violet-950 border px-6 py-2 text-lg rounded-lg w-full placeholder:text-black"
                        onChange={(e) =>
                            setFormState((s) => ({ ...s, lastName: e.target.value }))
                        }
                        />
                    </div>
                <div className="mb-8">
                    <Input
                    required
                    placeholder="Enter Badge Number Here"
                    value={formState.badge}
                    className="border-solid border-violet-950 border px-6 py-2 text-lg rounded-lg w-full placeholder:text-black"
                    onChange={(e) =>
                        setFormState((s) => ({ ...s, badge: e.target.value }))
                    }
                    />
                </div>
                <div className="mb-8">
                    <Input
                    required
                    placeholder="Enter Department Name Here"
                    value={formState.department}
                    className="border-solid border-violet-950 border px-6 py-2 text-lg rounded-lg w-full placeholder:text-black"
                    onChange={(e) =>
                        setFormState((s) => ({ ...s, department: e.target.value }))
                    }
                    />
                </div>
                <div className="mb-8">
                        <Input
                        required
                        type="password"
                        placeholder="Enter Password Here"
                        value={formState.password}
                        className="border-solid border-violet-950 border px-6 py-2 text-lg rounded-lg w-full placeholder:text-black"
                        onChange={(e) =>
                            setFormState((s) => ({ ...s, password: e.target.value }))
                        }
                        />
                    </div>
                    
                <div className="mb-8">
                    <div>
                    <Button type="submit" intent="auth">
                        {content.buttonText}
                    </Button>
                    </div>
                    <div>
                    <span>
                        <Link
                        href={content.linkUrl}
                        className="text-white font-bold"
                        >
                        {content.linkText}
                        </Link>
                    </span>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}