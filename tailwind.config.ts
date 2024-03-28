import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "btn-def-color": "#2D2D2D",
        "btn-func-color": "#707070",
        "btn-res-color": "#1BC300",
        "black": "#000000"
      }
    }
  },
  plugins: [],
};
export default config;
