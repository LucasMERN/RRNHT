import clsx from 'clsx';
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    className?: ReactNode
}

const Card = ({ className, children }: Props) => {
    return (
        <div className={clsx(
            "rounded-3xl px-10 py-4 drop-shadow-xl bg-orange-500", className
        )}
        >
            {children}
        </div>
    )
}

export default Card;