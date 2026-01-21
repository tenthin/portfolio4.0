/** @type {import('tailwindcss').Config} */
import { colors } from "./src/theme/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { light: "#F8FAFC", dark: "#0F172A" },
        surface: { light: "#FFFFFF", dark: "#020617" },
        textPrimary: { light: "#0F172A", dark: "#E5E7EB" },
        textSecondary: { light: "#475569", dark: "#9CA3AF" },
        accent: { light: "#2563EB", dark: "#38BDF8" },
        cta: { light: "#16A34A", dark: "#22C55E" },
        border: { light: "#E2E8F0", dark: "#1F2937" },
      },
    },
  },
  plugins: [],
};
