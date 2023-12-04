import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#f5f7fa",
                    100: "#eaeef4",
                    200: "#cfd9e8",
                    300: "#a5b9d4",
                    400: "#7594bb",
                    500: "#51739e",
                    600: "#415e88",
                    700: "#354c6f",
                    800: "#2f425d",
                    900: "#2b394f",
                },
            },
        },
    },

    plugins: [forms],
};
