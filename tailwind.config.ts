import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-color": "var(--bg-color)",
        "txt-color": "var(--txt-color)",
      },
    },
  },
  plugins: [],
};

export default config;
