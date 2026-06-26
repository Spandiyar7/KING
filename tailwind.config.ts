import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f8f8f7",
        pearl: "#eeeeec",
        ink: "#111111",
        charcoal: "#1c1a17",
        graphite: "#2c2924",
        bronze: "#a18461",
        linen: "#c9c8c2"
      },
      fontFamily: {
        display: ["var(--font-display)", "Montserrat", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Montserrat", "Arial", "sans-serif"]
      },
      letterSpacing: {
        luxury: "0.22em",
        wideLuxury: "0.34em"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.19, 1, 0.22, 1)"
      },
      boxShadow: {
        soft: "0 32px 90px rgba(17, 17, 17, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
