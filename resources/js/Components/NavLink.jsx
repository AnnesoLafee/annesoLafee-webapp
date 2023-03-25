import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center py-8 border-b-2 text-xl font-medium leading-5 transition duration-500 ease-in-out focus:outline-none " +
                (active
                    ? " text-gray-900 "
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
