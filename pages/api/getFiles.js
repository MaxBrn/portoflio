// /pages/api/getFiles.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { folder } = req.query; // Dossier demandé dans l'URL
    const directoryPath = path.join(process.cwd(), 'public', 'competence', folder); // Le chemin vers ton dossier public

    // Lire les fichiers du dossier
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Impossible de lire le dossier' });
        }
        
        // Retourner les fichiers sous forme de tableau
        const filePaths = files.map(file => ({
            name: file,
            path: `/competence/${folder}/${file}` // Chemin relatif vers le fichier
        }));

        res.status(200).json(filePaths);
    });
}
