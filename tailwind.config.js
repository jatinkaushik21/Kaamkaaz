/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",              
    "./src/**/*.{html,js,jsx}",    // Include all HTML and JS files in /src
  ],
  theme: {
    extend: {
       animation: {
        bounceSlow: 'bounce 2s ease-in-out infinite',  // Custom slow bounce
        spinSlow: 'spin 4s linear infinite', // Set to a slower duration, 
      },
    },
  },
  plugins: [],
};

