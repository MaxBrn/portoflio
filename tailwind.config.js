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

        // Palette "Soft Periwinkle" basée sur #a3c5ff
        'bgColor': '#F3F7FF',    // Fond très léger, nuance glacée pour détacher les fenêtres
        'bgColor2': '#FFFFFF',   // Blanc pur pour l'intérieur des fenêtres
        'border': '#A3C5FF',     // Ta couleur de base : doux et lisible
        'button': '#F3F7FF',     // Un ton plus saturé que la bordure pour appeler au clic
        'hover': 'rgba(163,197,255,0.13)',      // Plus foncé au survol pour valider l'interaction
        'text': '#1A2640'        // Bleu ardoise très sombre, contraste maximal pour la lecture
      },
      screens: {
        sm: "640px",
        md: "900px",
      },
      fontFamily: {
        sans: ['Consolas', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};