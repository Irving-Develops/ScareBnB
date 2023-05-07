/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// });


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "frontend/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "frontend/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
],
  
  theme: {
    extend: {
      colors: {
        'rose': '#ff385c',
      },
      height: {
        '60vh': '60vh',
        '60%': '60%',
      }
    },
  },
  plugins: [require("daisyui")],
});