const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      },
      maxWidth: {
        cmw: '1024px'
      },
      minHeight: {
        'post': '7rem'
      },
      spacing: {
        '1.25': '0.305rem',
        '120': '30rem',
        'cscreen': '768px'
      },
      blur: {
        'xxxl': '250px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
