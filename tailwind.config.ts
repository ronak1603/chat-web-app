import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FB8E0B",
        iconColor: "#b9f1ba",
        alert: {
          error: "#F04438",
          success: "#12B76A",
        },
      },
      fontFamily: {
        primary: "sans-serif",
      },
    },
  },
  plugins: [],
};

export default config;
