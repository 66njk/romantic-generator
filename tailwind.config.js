const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      transitionProperty: {
        'transform+shadow': 'transform, shadow'
      },
      zIndex: {
        '-1': '-1'
      },
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
        'cscreen': '768px',
        '720': '720px'
      },
      blur: {
        'xxxxl': '300px'
      },
      scale: {
        '25': '0.25'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
