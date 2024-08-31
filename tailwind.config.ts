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
        'gradient-start': 'rgb(194, 255, 182)',
        'gradient-middle-1': 'rgb(255, 163, 182)',
        'gradient-middle-2': 'rgb(221, 169, 255)',
        'gradient-end': 'rgb(162, 209, 255)',
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to right, rgb(194, 255, 182), rgb(255, 163, 182), rgb(221, 169, 255), rgb(162, 209, 255))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
