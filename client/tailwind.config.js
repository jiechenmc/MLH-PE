module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { sm: "320px", md: "768px" },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
