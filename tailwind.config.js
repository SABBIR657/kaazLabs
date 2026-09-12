/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1A130E",
        espresso2: "#241B14",
        ivory: "#EEEAE2",
        gold: "#C6A15B",
        goldSoft: "#DCC088",
        emerald: "#2F4A3C",
        ink: "#1C1712",
        cream: "#F3EEE4",
        muted: "#B9AFA0",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
