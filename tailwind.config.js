export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('../../src/assets/img/signup.jpg')",
      },
      colors:{
        'tropical-indigo' : '#A288E3',
        'pink-lavender' : '#D4B2D8',
        'vio-1':'#e4a5ff'
      }
    },
  },
  plugins: [],
}