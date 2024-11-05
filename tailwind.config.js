/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "bottom-only": "0px 2px 2px rgba(255, 255, 255, 0.16)",
      },
    },
  },
  plugins: [],
};
