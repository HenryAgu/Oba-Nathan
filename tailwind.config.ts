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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        sorts: ['var(--font-sorts-milly-goudy)', 'serif'],
        calligraffitti: ['var(--font-calligraffitti)', 'cursive'],
        vogue: ['var(--font-vogue)', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
