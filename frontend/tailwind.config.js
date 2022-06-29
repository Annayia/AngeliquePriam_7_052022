/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: "#fd2d01",
      light: "#F5F5F5",
      dark: "#4e5166",
      lessdark: "rgba(78,81,102,0.57)",
      lessred: "rgba(253,45,1,0.5)",
      glass: "rgba(126, 137, 147, 0.7)",
      blue: "#517CCF",
      white: "#F1F1F1",
    },

    extend: {
      spacing: {
        xs: "0.5rem",
        small: "1rem",
        medium: "2rem",
        large: "4rem",
        xlg: "180px",
        104: "100vw",
        94: "40rem",
        82: "10rem",
        106: "15rem",
        108: "20rem",
      },
      borderRadius: {
        rounded: "2rem",
      },
    },
  },
  plugins: [],
};
