import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        deepscan: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        brand: {
          purple: "#5850ec",
          darkPurple: "#4338ca",
          lightBg: "#f4f5fd",
          cardBg: "#ffffff",
          navy: "#0d0f2b",
          coral: "#ff5757",
          teal: "#10b981",
        }
      },
      boxShadow: {
        subtle: "0 2px 8px -1px rgba(79, 70, 229, 0.06), 0 1px 3px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(79, 70, 229, 0.07), 0 4px 10px -2px rgba(0, 0, 0, 0.03)",
        glow: "0 0 25px -3px rgba(99, 102, 241, 0.35)",
        btn: "0 4px 14px 0 rgba(79, 70, 229, 0.39)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
};

export default config;

