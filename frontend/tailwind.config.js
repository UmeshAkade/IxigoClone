/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // If using Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it scans all components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI
};
