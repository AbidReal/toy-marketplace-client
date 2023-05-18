/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnL: "#0223B0",
        btnR: "#041E8D",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
