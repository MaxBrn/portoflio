import localFont from 'next/font/local';
import './globals.css';

// Intégration de la police Consolas
const consolas = localFont({
  src: [
    {
      path: './fonts/Consolas.ttf', // chemin vers ton fichier de police
      weight: '400', // poids normal
      style: 'normal',
    }
  ],
  variable: '--font-consolas', // définie une variable CSS pour Consolas
});

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de Maxime Brunin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${consolas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
