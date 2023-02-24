/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}","index.html"],
  theme: {
    extend: {

      animation:{
        entrata : "entrata .4s ease-in-out 1",
        uscita : "uscita .4s ease-in-out 1",
      },
      screens: {
        "input": "850px",
      },
      colors: {
        'primary-cyan': "hsl(180, 66%, 49%)",
        'primary-darkViolet': "hsl(257, 27%, 26%)",
        'secondary-red': "hsl(0, 87%, 67%)",
        'neutral-gray': "hsl(0, 0%, 75%)",
        'neutral-grayishViolet': "hsl(257, 7%, 63%)",
        'neutral-veryDarkBlue': "hsl(255, 11%, 22%)",
        'neutral-veryDarkViolet': "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif;",
      },
      backgroundImage: {
        'shorten-desktop' : "url('../assets/bg-shorten-desktop.svg')",
        'boost-desktop' : "url('../assets/bg-boost-desktop.svg')",

        'shorten-mobile' : "url('../assets/bg-shorten-mobile.svg')",
        'boost-mobile' : "url('../assets/bg-boost-mobile.svg')",

        'icon-facebook' : "url('../assets/icon-facebook.svg')",
        'icon-twitter' : "url('../assets/icon-twitter.svg')",
        'icon-instagram' : "url('../assets/icon-instagram.svg')",
        'icon-pinterest' : "url('../assets/icon-pinterest.svg')",

        'icon-facebook-cyan' : "url('../assets/img/cyan-facebook.svg')",
        'icon-twitter-cyan' : "url('../assets/img/cyan-twitter.svg')",
        'icon-instagram-cyan' : "url('../assets/img/cyan-instagram.svg')",
        'icon-pinterest-cyan' : "url('../assets/img/cyan-pinterest.svg')",
      },
    },
  },
  plugins: [],
}
