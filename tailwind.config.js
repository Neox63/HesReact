module.exports = {
  purge: ["./component/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "even"],
    },
  },
  plugins: [],
};
