/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'featured-image': "url('./public/assets/home/featured.jpg')",
      },
    },
    
  },
  plugins: [
    require('daisyui'),
  ],
}

