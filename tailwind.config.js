module.exports = {
  darkMode: "media",
  mode: "jit",
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark': '#363636ff',
        'grey': '#4d4d4dff',
        'grey-dark': '#404040ff',
        'yellow': '#f9d43fff',
        'yellow-dark': '#f2cd41ff',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.18rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
    },
  },
};
