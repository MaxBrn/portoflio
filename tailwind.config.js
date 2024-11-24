/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-cream':'rgb(225, 201, 167)',
        'custom-cream2':'rgb(215, 185, 142)',
        'custom-text':'rgb(51 51 51)',
        'custom-button':'rgb(218 120 74)',
        'custom-night':'rgb(23, 22, 17)',
        'custom-night2':'rgb(15, 14, 11)',
        'custom-nightLite':'rgb(167, 159, 139)',
        'custom-creamLite':'rgb(202, 163, 104)',
      },
      screens: {
        sm: "640px",
        md: "900px", // Augmenté à 900px
      },
      fontFamily: {
        sans: ['Consolas', 'ui-sans-serif', 'system-ui'],
        // Autres polices que tu souhaites ajouter
    },
    },
  },
  plugins: [],
};
