import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-light": "rgb(var(--surface-light) / <alpha-value>)",
        primary: {
          DEFAULT: "#FF8A32",
          hover: "#E87622",
          glow: "rgba(255, 138, 50, 0.4)",
        },
        amber: {
          DEFAULT: "rgb(var(--amber) / <alpha-value>)",
          glow: "rgba(255, 180, 92, 0.3)",
        },
        text: {
          white: "rgb(var(--text-white) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
          dim: "rgb(var(--text-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Space Grotesk", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      boxShadow: {
        "orange-glow": "0 0 25px -5px rgba(255, 138, 50, 0.35)",
        "orange-glow-lg": "0 0 50px -10px rgba(255, 138, 50, 0.45)",
        "amber-glow": "0 0 30px -5px rgba(255, 180, 92, 0.35)",
        "cube-shadow": "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "radial-cinematic": "radial-gradient(circle at 50% 30%, rgba(255, 138, 50, 0.14) 0%, rgb(var(--surface) / 0.4) 45%, rgb(var(--background)) 85%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
