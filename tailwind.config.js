module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        paste: {
          200: '#97B0AC',
          400: '#8AF4E0',
          500: '#02B290',
          700: '#1C3E37',
          800: '#0C2924',
        },
      },
      fontSize: {
        tiny: '15px',
      },
      boxShadow: {
        '3xl': '0px 42px 34px rgba(63, 135, 245, 0.25)',
      },
      spacing: {
        '0p': '0%',
        '3p': '3%',
        '5p': '5%',
        '10p': '10%',
        '13p': '13%',
      },
      backgroundPosition: {
        '115p': '115%',
      },
      borderRadius: {
        circle: '50%',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
