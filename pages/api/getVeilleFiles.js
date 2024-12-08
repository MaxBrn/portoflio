import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), 'public/veille'); // Chemin vers le dossier

  try {
    // Lire les fichiers dans le dossier
    const files = fs.readdirSync(folderPath);

    // Retourner les fichiers au format JSON
    res.status(200).json(
      files.map((file) => ({
        name: file.replace(/^\d+\./, '').replace(/\.[^/.]+$/, ''), // Enlever l'extension pour le titre
        path: `/veille/${file}`, // URL publique pour accéder au fichier
      }))
    );
  } catch (error) {
    console.error('Erreur lors de la lecture des fichiers :', error);
    res.status(500).json({ error: 'Impossible de lire les fichiers.' });
  }
}
