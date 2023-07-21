/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  /* si está fuera de extend, elimina las demás y solo trabaja con esas, si está dentro de extend adiciona lo que pongas a las clases de tailwind de siempre */
  extend: {
    spacing: {
      "8xl": "96rem",
      1000: "1000px",
    },
  },
  screens: {
    xs: "400px",

    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1200px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1580px",
    // => @media (min-width: 1536px) { ... }
  },

  container: {
    center: false,
    padding: {
      DEFAULT: "2rem",
      sm: "2rem",
      lg: "5rem",
      xl: "10rem",
      "2xl": "15rem",
    },
  },

  fontFamily: {
    bellefair: ["Bellefair", "sans"],
    barlow: ["Barlow Condensed", "sans"],
    body: ["Bellefair", "sans"],
  },

  fontSize: {
    heading1: "150px",
    heading2: "100px",
    heading3: "56px",
    heading4: "32px",
    heading5: "28px",
    subheading1: "28px",
    subheading2: "16px",
  },

  letterSpacing: {
    /* solo dice 4.75, no es exacto */
    heading5: "4.75px",
    subheading2: "2.7px",
  },

  colors: {
    blackMoon: "#0B0D17",
    grayMoon: "#D0D6F9",
    whiteMoon: "#FFFFFF",
  },
};
export const plugins = [];
