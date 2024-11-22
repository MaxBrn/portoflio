/** @type {import('tailwindcss').Config} */
module.exports = {
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
