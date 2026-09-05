import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GADIN Official Identity Tokens from Letterhead
        gadin: {
          blue: {
            DEFAULT: "#053C82",
            50: "#EFF6FF",
            100: "#DBEAFE",
            200: "#BFDBFE",
            600: "#053C82",
            700: "#073F86",
            800: "#0B2D62",
            900: "#061F42",
          },
          orange: {
            DEFAULT: "#DD612A",
            light: "#EA580C",
            hover: "#C24F1E",
            50: "#FFF7ED",
            100: "#FFEDD5",
          },
          dark: {
            DEFAULT: "#0B192C",
            surface: "#111827",
            card: "#1F2937",
          },
          border: {
            light: "#E2E8F0",
            medium: "#CBD5E1",
            dark: "#1E293B",
          }
        },
        paper: {
          50: "#FCFCFA",
          100: "#FBFBF9",
          200: "#F4F3EE",
          300: "#EBE8DF",
          400: "#DED9CD",
        },
        charcoal: {
          DEFAULT: "#18181B",
          50: "#F4F4F5",
          100: "#E4E4E7",
          200: "#D4D4D8",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        gadin: "0 10px 30px -5px rgba(5, 60, 130, 0.15)",
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeInSlow: "fadeInSlow 1.2s ease-out forwards",
        float: "float 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 3s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
