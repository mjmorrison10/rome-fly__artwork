module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      height: {
        128: "100rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
