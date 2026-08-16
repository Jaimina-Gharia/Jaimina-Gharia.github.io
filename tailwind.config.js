/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scientific: {
          teal: '#1a3636',       // Deep blue-teal for text
          ivory: '#fcfbf9',      // Warm ivory background
          white: '#ffffff',
          rose: '#e8d4d4',       // Soft dusty rose
          lavender: '#d2d2e2',   // Soft muted periwinkle/lavender
          blue: '#cce0e8',       // Soft blue
          muted: '#5a7373',      // Muted teal for secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        meta: '.05em'
      }
    },
  },
  plugins: [],
}
