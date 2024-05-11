import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // primary: "#F4F4F4",
        primary: "#111F41",
        // secondary: "#EEEEEE",
        secondary: "#eef0fb",

        // tGray: "#42464C",
        accent: "#0E1934",

        // tLightGray: "#828282",
      },
    },
  },
  plugins: [],
} satisfies Config;
