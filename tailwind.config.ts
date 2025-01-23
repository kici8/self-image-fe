import type { Config } from "tailwindcss";
import * as tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex-condensed)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "self-blue": {
          50: "hsl(237.4 56.1% 92% / <alpha-value>)",
          100: "hsl(237 60.6% 87.1% / <alpha-value>)",
          200: "hsl(236.7 64.3% 78% / <alpha-value>)",
          300: "hsl(236.6 67.1% 69% / <alpha-value>)",
          400: "hsl(237.1 70.6% 60% / <alpha-value>)",
          500: "hsl(237.2 66.3% 50% / <alpha-value>)",
          600: "hsl(236.8 63.7% 40% / <alpha-value>)",
          700: "hsl(236.8 60.8% 30% / <alpha-value>)",
          800: "hsl(236.9 56.9% 20% / <alpha-value>)",
          900: "hsl(237.8 52.9% 10% / <alpha-value>)",
          950: "hsl(240 46.2% 5.1% / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
