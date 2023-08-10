/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "40%": "40%",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      25: "25px",
    },
    extend: {
      height: {
        64: "17rem",
      },
      spacing: {
        64: "17rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
        "2/2": "2 / 2",
        "2/3": "2 / 3",
      },
    },
    colors: {
      primary: "#5A5BA7",
      white: "#fff",
      seccondary: "#0CEAC6",
      thirt: "#5B57A6",
    },
    fontFamily: {
      abeezee: "ABeeZee', sans-serif",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      l: "35px",
      r: "35px",
      xxl: "30px",
    },
  },

  plugins: [],
};
