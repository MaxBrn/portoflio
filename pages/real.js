import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from 'react';

export default function Real() {
  const [isOpen, setIsOpen] = useState(false); // Gère l'ouverture d'une compétence
  const [files, setFiles] = useState([]); // Fichiers à afficher
  const [folder, setFolder] = useState(null); // Dossier sélectionné
  const [preloadedFiles, setPreloadedFiles] = useState({}); // Fichiers préchargés pour chaque dossier

  // Fonction pour précharger les fichiers au démarrage
  const preloadFiles = async () => {
    const folders = ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']; // Liste des dossiers à précharger
    const preloaded = {};

    for (const folder of folders) {
      try {
        const response = await fetch(`/api/getFiles?folder=${folder}`);
        const data = await response.json();
        preloaded[folder] = data;
      } catch (error) {
        console.error(`Erreur lors du préchargement des fichiers pour le dossier ${folder}:`, error);
      }
    }

    setPreloadedFiles(preloaded);
  };

  // Précharge les fichiers au chargement de la page
  useEffect(() => {
    preloadFiles();
  }, []);

  // Fonction pour afficher les fichiers d'une compétence
  const handleOpenCompetence = (selectedFolder) => {
    setFolder(selectedFolder);
    setFiles(preloadedFiles[selectedFolder] || []); // Charge les fichiers préchargés
    setIsOpen(true);
  };

  return (
    <div className="pb-10">
      {/* Pop-up affiché en mode production */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-custom-night2 rounded-lg shadow-lg p-8 w-full max-w-md text-center text-custom-white">
            <h2 className="text-2xl font-bold mb-4">Section en développement</h2>
            <p className="mb-6">
              Cette section n'est pas encore finalisée et est en cours de développement. Certains éléments sont encore
              incomplets et peuvent être dysfonctionnels. Merci de votre compréhension.
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-custom-button text-custom-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Compris
            </button>
          </div>
        </div>
      )}

      {/* Section des réalisations */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        {/* Réalisations en stage */}
        <p className="text-center text-xl">Les réalisations en stage</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className="p-6">
            <img src="/image/logoLS.png" alt="Stage Loca" className="w-52 m-auto" />
          </div>
          <div className="p-6 m-auto">
            <p>Deuxième stage en février</p>
          </div>
        </div>

        {/* Réalisations en cours */}
        <p className="text-center mt-20 text-xl">Les réalisations en cours</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
          <div className="p-6">
            <Link href="https://mariteam.vercel.app/">
              <img src="/image/logoMarieteam.png" alt="Marieteam" className="w-40 m-auto" />
            </Link>
          </div>
        </div>

        {/* Compétences */}
        <p className="mt-20 text-center text-xl">Les compétences du cursus</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[
            { folder: '1.1', description: 'Gestion du patrimoine informatique' },
            { folder: '1.2', description: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution' },
            { folder: '1.3', description: 'Développer la présence en ligne de l\'organisation' },
            { folder: '1.4', description: 'Travailler en mode projet' },
            { folder: '1.5', description: 'Mettre à disposition des utilisateurs un service informatique' },
            { folder: '1.6', description: 'Organiser son développement personnel' },
          ].map(({ folder, description }) => (
            <CompetenceModal
              key={folder}
              folder={folder}
              description={description}
              onClick={() => handleOpenCompetence(folder)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
