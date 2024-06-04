/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'monitor': '1536px'
    },
    colors: {
      'primary-color': '#11112F',
      'white': '#FFFFFF',
      'secondary-color': '#757575',
      'yellow-color': '#E59F19',
      'skyblue': '#4141FF',
      'blue': '#1111A1'
    },
    fontFamily: {
      'Montserrat': ["Montserrat", 'sans-serif']
    },
    backgroundColor: {
      'primary-bg': '#11112F',
      'secondary-bg': '#DEDEE2',
      'white-bg': '#FFFFFF',
      'yellow-bg': '#E59F19',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
}

