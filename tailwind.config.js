/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#5A4235",
        primary: "#48352B",
        "primary-text": "#FAE0D7",
        secondary: "#EED8CD",
        "secondary-hover": "#FBE9E1",
        "secondary-text": "#4E342C",
        accent: "#72ADA0",
        "accent-text": "#E8FFFA",
      },
    },
  },
  plugins: [],
};
