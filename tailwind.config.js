/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./public/index.html",                // Main HTML file
    "./src/HelpCenter/Overview.html",               
    "./src/**/*.{html,js,jsx}",    // Include all HTML and JS files in /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

