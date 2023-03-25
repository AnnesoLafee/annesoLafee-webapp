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
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightgreen: "#9DD3A8",
                darkgreen: "#4E8C5A",
                brown: "#5E382F",
                lightblue: "#D2EBFF",
                darkblue: "#2E5B7E",
                orange: "#EB7F67",
                pink: "#ffd2cc",
            },
            backgroundImage: {
                pngline: "url('/chartegraphique/wave-haikei.svg')",
                svgblob: "url('/chartegraphique/blob-haikei.svg')",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
