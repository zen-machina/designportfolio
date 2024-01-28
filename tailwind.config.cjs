/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
      serif: "Archivo Black",
    },
    extend: {
      colors: {
        bgWhite: "#f9f7f7",
        fgPurple: "#17072b",
        zenGrey: "#b7babf",
        zenRed: "#8f3445",
        zenOrange: "#bf695a",
      },
    },
  },
  plugins: [],
};
