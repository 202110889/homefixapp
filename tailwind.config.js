/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js, jsx, tx, tsx}", "./app/*.{js, jsx, tx, tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
