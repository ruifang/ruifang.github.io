const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.gray[700],
        success: colors.green[700],
        warning: colors.yellow[500],
        danger: colors.red[500] 
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', '-apple-system', 'ui-sans-serif', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(red|green|blue|gray|yellow)-(50|100|200|300|400|500|600|700|800|900)/,
    }
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
