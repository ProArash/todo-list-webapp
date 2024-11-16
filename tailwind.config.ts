import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#081c15",
        foreground: "#d8f3dc",
        primary:"#2d6a4f",
        secondary:"#1B4130FF",
        onPrimary:"#95d5b2",
      },
    },
  },
  plugins: [],
} satisfies Config;
