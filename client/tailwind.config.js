/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Safelist so SERVICES_MENU bg classes (from constants) are always generated
  safelist: [
    "bg-[#ECFBA9]",
    "bg-[#f7f8f4]",
    "bg-[#F9F871]",
    "bg-[#67E5C9]",
    "bg-[#F9BA71]",
    "bg-[#E8F4E6]",
    "bg-white",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D71EB9",
          50: "#fdf0fb",
          100: "#fae0f7",
          200: "#f5c1ef",
          300: "#ed93e2",
          400: "#e157cf",
          500: "#D71EB9",
          600: "#b5149a",
          700: "#94117e",
          800: "#7a1167",
          900: "#661356",
          950: "#430235",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
