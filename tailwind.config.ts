import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#181714",
        pearl: "#fbf8f1",
        blush: "#f1dbc7",
        wine: "#d9472c",
        brass: "#5d725c",
        mist: "#e7e1d4"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(24, 23, 20, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
