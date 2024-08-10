/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        theme: {
          secondary: "#5C5C5C",
        },
      },
    },
  },
  plugins: [],
};
