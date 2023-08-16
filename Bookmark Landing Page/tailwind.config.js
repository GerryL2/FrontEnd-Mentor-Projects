/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Soft-Blue': 'hsl(231, 69%, 60%)',
      'Soft-Red': 'hsl(0, 94%, 66%)'  ,   
      'Grayish-Blue': 'hsl(229, 8%, 60%)',
      'Very-Dark-Blue': 'hsl(229, 31%, 21%)',
      'White': 'white',
      "Grey": 'hsl(0, 0%, 93%)',
    },
    extend: {
      fontFamily: {
        "Rubik": ['Rubik', 'sans-serif']
      },
      borderRadius: {
        'Custom': '10rem',
      },
      width: {
        'Nine': '30rem',
        'Ten': '25rem'
      },
    },
  },
  plugins: [],
}

