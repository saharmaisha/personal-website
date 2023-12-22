import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000', // Replace this with your desired maroon color code
        },
      },
    },
  },
  plugins: [],
} as Config;
