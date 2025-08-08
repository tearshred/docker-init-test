import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Bebas Neue', 'sans-serif'], // Logo Font
        body: ['Lato', 'sans-serif'],         // Body Font
      }
    },
  },
  plugins: [],
} satisfies Config