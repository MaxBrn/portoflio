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
       
        'bgColor':'#11131F',
        'bgColor2':'#141726',
        'border':'#304384',
        'button':'#182449',
        'hover' : '#1D2E62',
        'text':'#D6E1FF'
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
