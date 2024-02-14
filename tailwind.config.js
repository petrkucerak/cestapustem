/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet-light": "#543fb6ff",
        "violet-dark": "#49379fff",
        "primary-light": "#50A2A7",
        "primary-dark": "#418285",
      },
    },
  },
  plugins: [],
};
