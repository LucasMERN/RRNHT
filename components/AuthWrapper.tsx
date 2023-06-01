import clsx from "clsx"; //used to allow extending of classNames for tailwind classes
import React, { ReactNode } from "react";  //fixes binding elements (children and props) any type error.

interface Props {
    children?: ReactNode
    className?: ReactNode
}

const AuthWrapper = ({ children, className }: Props) => {
    return (
        <div className={clsx("glass rounded-2xl border-solid border-2 border-gray-200", className)}>
            {children}
        </div>
    );
};

export default AuthWrapper;