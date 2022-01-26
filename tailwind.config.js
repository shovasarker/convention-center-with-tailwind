module.exports = {
  content: [
    './src/**/*.{html,js}',
    './*{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#02B290',
      },
      borderRadius: {
        circle: '50%',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
