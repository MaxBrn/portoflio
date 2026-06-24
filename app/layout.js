import './globals.css';

export const metadata = {
  title: "Portoflio - Brunin Maxime",
  description: "Portoflio - Brunin Maximen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
