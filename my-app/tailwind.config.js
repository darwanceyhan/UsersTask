/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pagination-bg": "#2940D3",
        "pagination-text": "#E3E6EB",
        "pagination-arrow": "#82868C",
      },
    },
  },
  plugins: [],
};
