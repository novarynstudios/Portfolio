import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"]
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-bright": "rgb(var(--primary-bright) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 60px rgba(139, 92, 246, 0.24)"
      },
      maxWidth: {
        content: "80rem"
      }
    }
  },
  plugins: []
};

export default config;
