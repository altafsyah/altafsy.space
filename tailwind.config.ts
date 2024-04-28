import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F4",
        secondary: "#EEEEEE",
        tGray: "#42464C",
        tLightGray: "#828282",
      },
    },
  },
  plugins: [],
} satisfies Config;
