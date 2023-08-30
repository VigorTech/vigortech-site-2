/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgContact: "url(http://localhost:3000/fundo-contato.png)",
        bgCostumers: "url(http://localhost:3000/fundo-clientes.png)",
      },
      dropShadow: {
        "3xl": "0 50px 70px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      textColor: {
        title: "#1A2E35",
        text: "#333333",
        cardTitle: "#04D6B2",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
