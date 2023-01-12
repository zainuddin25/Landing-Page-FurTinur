/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black' : '#151411',
        'paragraph' : '#AFADB5',
        'main' : '#518581',
        'secondary' : '#FFB23F',
        'placholder' : '#F9F9F9'
      }, 
      fontFamily: {
        'passion' : 'Passion One'
      }
    },
  },
  plugins: [],
}
