/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",                // Main HTML file
    "./Overview.html",               
    "./src/**/*.{html,js,jsx}",    // Include all HTML and JS files in /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

