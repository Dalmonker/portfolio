import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        redhatdisplay: ["var(--font-red-hat-display)"],
      },
    },
    screens: {
      miniSm: "360px",
      sm: "480px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
      megaXl: "1400px",
    },
    colors: {
      blackTitle: "#26292E",
      blackText: "#404040",
      blackBg: "#26292E",
      grayBg: "#C5C6CA",
      grayBorder: "#C3C6CC",
      grayHover: "#E5E5E7",
      grayInput: "#656565",
      grayFooterText: "#A5A5A5",
      blue: "#2E4EEC",
      blueHover: "#362EEC",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
} satisfies Config;
