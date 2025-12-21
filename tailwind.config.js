/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#E76F51", // Vibrant Orange (from original brand)
                primaryDark: "#D65A3A",
                secondary: "#25517F", // Navy Blue (from original brand)
                secondaryDark: "#1a3b5c",
                dark: "#222222",
                light: "#F8F9FB",
                "accent-yellow": "#F4A261", 
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                cursive: ['Dancing Script', 'cursive'],
                serif: ['Playfair Display', 'serif'],
            },
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    lg: "1120px",
                    xl: "1280px",
                },
            },
        },
    },
    plugins: [],
};