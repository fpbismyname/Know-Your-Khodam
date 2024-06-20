/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    screens:{
      'mobile': {'max': '639px'},
      'tablet': {'min': '640px', 'max': '1023px'},
      'desktop': {'min': '1024px', 'max': '1279px'},
      'large-desktop': {'min': '1280px', 'max': '1535px'},
    },
    extend: {},
  },
  plugins: [],
}

