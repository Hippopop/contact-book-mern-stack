/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--neavyBlue)",
        "accent-color": "var(--deeperGreen)",
        "primary-color": "var(--lighterGreen)",
        "secendery-color": "var(--orage)",
        "third-color": "var(--extra)",
      },
    },
  },
  plugins: [],
};
