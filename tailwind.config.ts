import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-dark": "rgba(var(--color-primary-dark))",
        "primary": "rgba(var(--color-primary))",
        "primary-light": "rgba(var(--color-primary-light))",
        "secondary-pink": "rgba(var(--color-secondary-pink))",
        "secondary-green": "rgba(var(--color-secondary-green))",
      },
    },
  },
  plugins: [],
};
export default config;
