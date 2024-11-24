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
        'custom-cream':'rgb(242 222 181)',
        'custom-cream2':'rgb(223 198 146)',
        'custom-text':'rgb(51 51 51)',
        'custom-button':'rgb(218 120 74)',
        'custom-night':'rgb(21 32 43)',
        'custom-night2':'rgb(14 25 36)',
        'custom-nightLite':'rgb(50, 77, 103)',
        'custom-creamLite':'rgb(231, 194, 126)',
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
