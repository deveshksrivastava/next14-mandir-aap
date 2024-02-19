/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'play-back': "url('/play.jpg')",
      },
      keyframes: {
        slidedown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(10%)' },
          // '10%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slidedown: 'slidedown 3s ',
        zoomOut: 'zoomOut 7s ease-in-out ',
        moveRightToLeft: 'moveRightToLeft 2s ',
      },
    },
  },
  plugins: [],
};
