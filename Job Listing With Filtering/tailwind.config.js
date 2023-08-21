/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'Desaturated-Dark-Cyan': 'hsl(180, 29%, 50%)',
        'Light-Grayish-Cyan': 'hsl(180, 52%, 96%)',
        'Light-Grayer-Cyan': 'hsl(180, 31%, 95%)',
        'Dark-Grayish-Cyan': 'hsl(180, 8%, 52%)',
        'Very-Dark-Grayish-Cyan': 'hsl(180, 14%, 20%)',
        'White': 'White',
    },
    extend: {
      fontFamily: {
        'League-Spartan': ['League Spartan', 'sans-serif']
      },
      backgroundImage: {
        'DesktopHeader': "url(./image/bg-header-desktop.svg)",
        'MobileHeader': "url(./image/bg-header-mobile.svg)"
      }
    },
  },
  plugins: [],
}

