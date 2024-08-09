/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        theme: {
          secondary: "#80CBC4",
        },
      },
    },
  },
  plugins: [],
};
