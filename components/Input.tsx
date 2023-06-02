import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props {
    className?: string
    required?: boolean
    placeholder?: string
    value?: string | undefined | number
    onChange?: (e: any) => void
}

const Input = ({ className, ...props}: Props) => {
    return (
        <input className={clsx(
            "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full text-black bg-indigo-400", className
        )}
        {...props}
        />
    );
};


export default Input;
//TODO: add cva to this like I did with the button component to be able to switch the use of this input for both quiz entries and auth form
