/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
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
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
