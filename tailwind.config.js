const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Tango", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightgreen: "#9DD3A8",
                brown: "#5E382F",
                lightblue: "#D2EBFF",
                orange: "#EB7F67",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
