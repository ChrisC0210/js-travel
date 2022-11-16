/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html,js}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    } ,
    borderColor: theme => ({
      'primary': '#00807e',
    }),
    backgroundColor: theme => ({
      'primary': '#00807e',
      'primary-600': '#007572',
    })
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      colors: {
        'primary': '#00807e',
        'primary-600': '#007572'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),({
      strategy: 'base', // only generate global styles
      strategy: 'class',
    })
  ],
}
