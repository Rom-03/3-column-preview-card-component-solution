/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        box1: "hsl(31, 77%, 52%)",
        box2: "hsl(184, 100%, 22%)",
        box3: "hsl(179, 100%, 13%)",
        paragraphs: "hsla(0, 0%, 100%, 0.75)",
        background: "hsl(0, 0%, 95%)",
      },
      fontFamily: {
        bigShoulders: "'Big Shoulders Display', cursive",
        deca: "'Lexend Deca', sans-serif",
      },
    },
  },
  plugins: [],
};
