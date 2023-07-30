/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mr-background': '#F6F6F7',
        'mr-border': '#CCCCCC',
        'mr-border-dark': '#222222',
        'mr-star': '#C90000',
        'mr-font-primary': '#888888',
        'mr-font-secondary': '#222222'
      }
    }
  },
  plugins: []
}
