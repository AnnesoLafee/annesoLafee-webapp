export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-lightgreen border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-darkgreen focus:bg-darkgreen active:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
