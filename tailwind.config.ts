import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      backgroundImage: {
        radialGradient: "radial-gradient(circle at 50%, #00000000, #000 70%,  #000)",
        "custom-gradient": "linear-gradient(to right, rgb(255, 255, 255) 50%, rgb(66, 60, 60) 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
