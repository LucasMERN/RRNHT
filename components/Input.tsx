import clsx from "clsx";

interface Props {
    className?: string
    required?: boolean
    placeholder?: string
    value?: string | undefined | number
    type?: string
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