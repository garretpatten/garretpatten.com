/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1D546D',
          50: '#F3F4F4',
          100: '#F3F4F4',
          200: '#F3F4F4',
          300: '#5F9598',
          400: '#5F9598',
          500: '#5F9598',
          600: '#1D546D',
          700: '#1D546D',
          800: '#1D546D',
          900: '#061E29',
        },
        pine: {
          DEFAULT: '#1D546D',
          50: '#F3F4F4',
          100: '#F3F4F4',
          200: '#F3F4F4',
          300: '#5F9598',
          400: '#5F9598',
          500: '#5F9598',
          600: '#1D546D',
          700: '#1D546D',
          800: '#1D546D',
          900: '#061E29',
        },
      },
    },
  },
  plugins: [],
}

