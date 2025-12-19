/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{html,jsx}",
        "./components/**/*.{html,jsx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: { min: "360px", max: "639px" },
            },
            colors: {
                primary: "#e76f51",
                primaryDark: "#d65a3a",
            },
        },
    },

    plugins: [],
    corePlugins: {
        preflight: false,
    },
};