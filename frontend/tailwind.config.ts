import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        specText: ["var(--font-inter)"],
        specTitle: ["var(--font-citynova)"],
      },
      colors: {
        "spec-gold-light": "#F7E98C",
        "spec-gold-light-hover": "#DDB04C",
        "spec-black-light": "#1E1E1E",
        "spec-text-white": "rgba(255,255,255,0.75)",
      },
      keyframes: {
        "scale-in-top": {
          "0%": {
            transform: "scale(0.95)",
            transformOrigin: "50% 0%",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            transformOrigin: "50% 0%",
            opacity: "1",
          },
        },
      },
      animation: {
        "scale-in-top":
          "scale-in-top 20s linear both",
      },
    },
  },
  plugins: [],
};
export default config;
