import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from 'react';

export default function Real() {
  const [isOpen, setIsOpen] = useState(false); // Gère l'ouverture d'une compétence
  const [files, setFiles] = useState([]); // Fichiers à afficher
  const [folder, setFolder] = useState(null); // Dossier sélectionné
  const [preloadedFiles, setPreloadedFiles] = useState({}); // Fichiers préchargés pour chaque dossier
  const [loading, setLoading] = useState(false); // État de chargement pour l'utilisateur

  // Fonction pour précharger les fichiers au démarrage (avec Promise.all)
  const preloadFiles = async () => {
    const folders = ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']; // Liste des dossiers à précharger
    try {
      const responses = await Promise.all(
        folders.map((folder) =>
          fetch(`/api/getFiles?folder=${folder}`).then((res) => res.json())
        )
      );

      const preloaded = {};
      folders.forEach((folder, index) => {
        preloaded[folder] = responses[index];
      });

      setPreloadedFiles(preloaded);
    } catch (error) {
      console.error('Erreur lors du préchargement des fichiers:', error);
    }
  };

  // Précharge les fichiers au chargement de la page
  useEffect(() => {
    preloadFiles();
  }, []);

  // Fonction pour afficher les fichiers d'une compétence
  const handleOpenCompetence = (selectedFolder) => {
    setFolder(selectedFolder);
    setLoading(true); // Démarre l'indicateur de chargement
    setIsOpen(true);

    // Charge les fichiers préchargés immédiatement
    setTimeout(() => {
      setFiles(preloadedFiles[selectedFolder] || []);
      setLoading(false); // Arrête l'indicateur une fois les fichiers prêts
    }, 0);
  };

  return (
    <div className="pb-10">
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

      {/* Modale pour afficher les fichiers */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            {loading ? (
              <p>Chargement...</p>
            ) : (
              <div>
                <h2 className="text-xl font-bold mb-4">{`Compétence ${folder}`}</h2>
                <ul>
                  {files.length > 0 ? (
                    files.map((file, index) => (
                      <li key={index} className="mb-2">
                        <a href={file.url} target="_blank" rel="noopener noreferrer">
                          {file.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <p>Aucun fichier disponible pour cette compétence.</p>
                  )}
                </ul>
              </div>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
