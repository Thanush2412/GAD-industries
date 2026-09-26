import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          400: "#60A5FA",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
