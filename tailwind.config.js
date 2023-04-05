/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#191919",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      "dark-panel-bg": "#141517",
      "dark-panel-sub-bg": "#191a1f",
    },
    extend: {},
  },
  plugins: [],
};
