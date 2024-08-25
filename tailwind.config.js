/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgba(34, 40, 49)",
        secondary: "rgba(49, 54, 63)",
        tertiary: "rgba(118, 171, 174)",
        text: "rgba(238, 238, 238)",
      },
    },
  },
  plugins: [],
};
