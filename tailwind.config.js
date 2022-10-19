/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DE8443',
        secondary: '#B3683C',
        danger: '#A30000',
        lightGrey: '#CECECE',
        darkGrey: '#636363',
      },
      backgroundImage: {
        'landing-page': "url('/src/assets/images/landing-page-bg-2.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-5vh)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOpen: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeOpen: 'fadeOpen 1s',
      },
      boxShadow: {
        allSides: '0 5px 20px 0px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
