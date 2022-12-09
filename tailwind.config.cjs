/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      choco: ["Choco Chici", "Sans-Serif"],
      rassain: ["Rassain", "Sans-Serif"],
      akaya: ["Akaya Telivigala", "Sans-Serif"],
    },
    extend: {
      colors: {
        "background-color": "var(--white)",
        "text-color": "var(--black)",
        "orange-d": "var(--orange-d)",
        "orange-l": "var(--orange-l)",
      
      },
      backgroundImage: {
        "home-desk-d": "url('./assets/images/home-design-d.png')",
        "home-desk-l": "url('./assets/images/home-design-l.png')",
        "home-mob-d": "url('./assets/images/mob-home-design-d.png')",
        "home-mob-l": "url('./assets/images/mob-home-design.png')",

        "about-desk-d": "url('./assets/images/about-design-d.png')",
        "about-desk-l": "url('./assets/images/about-design-l.png')",
        "about-mob-d": "url('./assets/images/mob-about-design-d.png')",
        "about-mob-l": "url('./assets/images/mob-about-design-l.png')",

        "contact-desk-d": "url('./assets/images/contact-design-d.png')",
        "contact-desk-l": "url('./assets/images/contact-design-l.png')",

        "juice-dark-desk": "url('./assets/images/juice-world-dark-desk.png')",
        "juice-light-desk": "url('./assets/images/juice-world-light-desk.png')",
        "juice-dark-mob": "url('./assets/images/juice-world-dark-mob.png')",
        "juice-light-mob": "url('./assets/images/juice-world-light-mob.png')",

        "musicana-dark-desk": "url('./assets/images/musicana-dark-desk.png')",
        "musicana-light-desk": "url('./assets/images/musicana-light-desk.png')",
        "musicana-dark-mob": "url('./assets/images/musicana-dark-mob.png')",
        "musicana-light-mob": "url('./assets/images/musicana-light-mob.png')",

        "getimage-dark-desk": "url('./assets/images/getimage-dark-desk.png')",
        "getimage-light-desk": "url('./assets/images/getimage-light-desk.png')",
        "getimage-dark-mob": "url('./assets/images/getimage-dark-mob.png')",
        "getimage-light-mob": "url('./assets/images/getimage-light-mob.png')",

        "disney-dark-desk": "url('./assets/images/disney-dark-desk.png')",
        "disney-light-desk": "url('./assets/images/disney-light-desk.png')",
        "disney-dark-mob": "url('./assets/images/disney-dark-mob.png')",
        "disney-light-mob": "url('./assets/images/disney-light-mob.png')",
      },
    },
  },
  plugins: [],
};
