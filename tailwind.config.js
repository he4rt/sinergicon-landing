const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3DA9FC',
        dark: '#094067',
        light: '#D8EEFE',
        gray: '#606C7A',
      },
    },
    fontFamily: {
      work: ['Work Sans'],
      montserrat: ['Montserrat'],
      space: ['Space Grotesk'],
    },
  },
  plugins: [],
}
