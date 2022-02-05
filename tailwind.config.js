module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'green-custom': '#8BD2BD',
        'red-custom': '#F26440',
        'yellow-custom': '#FFE031',
        'main-text': '#1D262D',
        'hero': '#F8F7F1'
      },
      fontSize: {
        'h1': ['46px', '60px'],
        'h2': ['30px', '45px'],
        'h1-mobile': ['22px', '32px'],
        'h2-mobile': ['16px', '24px']
      },
      fontFamily :{
        'outfit': ['"Outfit"', 'sans-serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}