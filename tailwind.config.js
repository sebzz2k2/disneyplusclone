module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        gray: {
          450: "#090b13",
          550: "#040714",
        },
      },
    },
  },
  // },
  variants: {
    extend: {},
  },
  plugins: [],
};
