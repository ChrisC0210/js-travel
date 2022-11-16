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
            })
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      colors: {
        primary: '#00807e',
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
