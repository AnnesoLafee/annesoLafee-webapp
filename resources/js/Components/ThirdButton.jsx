export default function ThirdButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `items-center flex justify-start gap-5 px-8 mx-10 py-2  bg-darkblue text-[#FFFEF9] rounded-full font-semibold text-sm uppercase tracking-widest shadow-sm hover:bg-[#FFFEF9] hover:text-darkblue  focus:outline-none focus:ring-2 focus:ring-darkblue focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-500 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
