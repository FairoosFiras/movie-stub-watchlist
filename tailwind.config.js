/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Playfair Display"', 'serif'],
        'mono': ['"Special Elite"', 'monospace'],
        'body': ['"Crimson Text"', 'serif'],
      },
      colors: {
        'vintage-burgundy': '#6B1E2F',
        'vintage-red': '#8B2635',
        'vintage-gold': '#D4AF37',
        'vintage-cream': '#D4C5A0',
        'vintage-beige': '#C9B899',
      },
    },
  },
  plugins: [],
}
