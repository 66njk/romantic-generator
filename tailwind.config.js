const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem'
      },
      zIndex: {
        '-1': '-1'
      },
      colors: {
        gray: colors.zinc
      },
      spacing: {
        '120': '30rem',
        '160': '600px',
        '112': '420px',
        'smcreen': 'calc(100vw - 40px)',
        'post-preview-h': 'calc((100vw - 40px) / 1.43)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
