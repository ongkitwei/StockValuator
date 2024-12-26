/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        irish: ['"Irish Grover"', "cursive"],
        lato: ['"Lato"', "serif"] // Add Irish Grover with fallback
      }
    }
  },
  plugins: []
};
