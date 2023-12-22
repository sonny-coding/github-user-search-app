/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "ghost-white": "#f6f8ff",
          blue: "#0079ff",
          "teal-blue": "#4b6a9b",
          charcoal: "#2b3442",
        },
        dark: {
          blue: "#0079ff",
          "zodiac-blue": "#1e2a47",
          mirage: "#141d2f",
        },
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
