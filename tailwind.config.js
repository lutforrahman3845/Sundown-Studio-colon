/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontWeight: {
        bold: '670',
      },
      fontFamily:{
        'Arial':"arial"
      },
      screens:{
        'sm': '480px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes:{
        hero1: {
          '0%, 100%': { transform:'rotate(-13deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        hero2: {
          '0%, 100%': { transform: 'translatey(-45%)' },
          '50%': { transform: 'translatex(-30%) rotate(15deg)' },
        },
        hero3: {
          '0%, 100%': { transform: 'translatey(-45%) translatex(25%)' },
          '50%': { transform: 'translatex(-10%)' },
        },
        hero4: {
          '0%, 100%': { transform: 'translatey(-20%) translatex(20%)' },
          '50%': { transform: 'translatex(-10%)' },
        },
        hero5: {
          '0%, 100%': { transform:'rotate(-15deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        hero6: {
          '0%, 100%': { transform:'rotate(40deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
        textmove: {
          '0%': { transform: 'translatex(0%)' },
          '100%': { transform: 'translatex(-100%)' },
        },
        showpara:{
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
        animation: {
          hero1: 'hero1 10s ease-in-out infinite',
          hero2: 'hero2 7s ease-in-out infinite',
          hero3: 'hero3 10s ease-in-out infinite',
          hero4: 'hero4 10s ease-in-out infinite',
          hero5: 'hero5 5s ease-in-out infinite',
          hero6: 'hero6 10s ease-in-out infinite',
          textmove:'textmove 9s linear infinite',
          showpara:'showpara 1.5s linear'
        },
        letterSpacing: {
          tightest: '-.075em',
        },
        aspectRatio: {
          '4/5': '4/5',
          '1/2': '1/1.2',
          '4/9':'4/9'
        },
        padding:{
          '2/3':'60%'
        }
    },

  },
  plugins: [require('tailwind-scrollbar')],
}

