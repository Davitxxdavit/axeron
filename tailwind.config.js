/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090B",
                foreground: "#FAFAFA",
                muted: {
                    DEFAULT: "#27272A",
                    foreground: "#A1A1AA",
                },
                accent: {
                    DEFAULT: "#DFE104",
                    foreground: "#000000",
                },
                border: "#3F3F46",
            },
            fontFamily: {
                sans: ["'Space Grotesk'", "sans-serif"],
            },
            fontSize: {
                "10xl": "10rem",
                "11xl": "12rem",
                "12xl": "14rem",
            },
            letterSpacing: {
                tighter: "-0.04em",
            },
            borderRadius: {
                none: "0px",
                sm: "2px",
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
