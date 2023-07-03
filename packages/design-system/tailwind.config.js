/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.jsx", "./components/**/**/*.jsx", ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#011D5C",
          secondary: "#E2004F",
          white: "#f7f7f7",
        },
        redbubblecraft: "#E2004F",
        orangebubblecraft: "#fdc921",
        greenbubblecraft: "#59cd90",
        blackbubblecraft: "#0F011D",
        bluebubblecraft: "#015C91",
        lightbluebubblecraft: "#011D5C",
        darkblue: "#011039",
        ghostwhite: "#f7f7f7",
        darkghostwhite: "#9a9a9a"
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      transformOrigin: {
        0: "0%",
      },
      flex: {
        2: "2 2 0%",
      },
      width: {
        "30percent": "30%",
        "45percent": "45%",
        fit: "fit-content",
      },
      minHeight: {
        2: "2rem",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "24": "6rem"
      },
      maxWidth: {
        0: "0",
        40: "10rem",
        surgeryForm: "15rem",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  plugins: [],
}

