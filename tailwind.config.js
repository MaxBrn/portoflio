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

        // Palette "Soft Periwinkle"
        'bgColor': '#eff4ff',
        'bgColor2': '#FFFFFF',
        'border': '#A3C5FF',
        'button': '#dae6ff',
        'hover': 'rgba(163,197,255,0.13)',
        'text': '#1A2640'
      },
      screens: {
        sm: "640px",
        md: "900px",
      },
      fontFamily: {
        // Défaut pour tout le site
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        // Utiliser via la classe 'font-mono'
        mono: ['Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};