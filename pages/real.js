import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from 'react';
import { IoMdOpen } from "react-icons/io";

export default function Real() {
  const [isOpen, setIsOpen] = useState(false); // Gère l'ouverture d'une compétence
  const [files, setFiles] = useState([]); // Fichiers à afficher
  const [folder, setFolder] = useState(null); // Dossier sélectionné
  const [preloadedFiles, setPreloadedFiles] = useState({}); // Fichiers préchargés pour chaque dossier
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  // Fonction pour précharger les fichiers au démarrage
  const preloadFiles = async () => {
    const folders = ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6']; // Liste des dossiers à précharger
    const preloaded = {};

    try {
      await Promise.all(
        folders.map(async (folder) => {
          const response = await fetch(`/api/getFiles?folder=${folder}`);
          const data = await response.json();
          preloaded[folder] = data;
        })
      );
      setPreloadedFiles(preloaded); // Met à jour les fichiers préchargés
    } catch (error) {
      console.error('Erreur lors du préchargement des fichiers:', error);
    }
  };

  // Précharge les fichiers au chargement de la page
  useEffect(() => {
    preloadFiles();
  }, []);

  // Fonction pour afficher les fichiers d'une compétence
  const handleOpenCompetence = async (selectedFolder) => {
    setFolder(selectedFolder);
    setLoading(true); // Active le chargement

    if (preloadedFiles[selectedFolder]) {
      setFiles(preloadedFiles[selectedFolder]);
    } else {
      try {
        const response = await fetch(`/api/getFiles?folder=${selectedFolder}`);
        const data = await response.json();
        setFiles(data);
        setPreloadedFiles((prev) => ({ ...prev, [selectedFolder]: data })); // Met à jour les fichiers préchargés
      } catch (error) {
        console.error(`Erreur de chargement pour le dossier ${selectedFolder}:`, error);
        setFiles(['Erreur de chargement des fichiers.']);
      }
    }

    setLoading(false); // Désactive le chargement
    setIsOpen(true);
  };

  return (
    <div className="pb-10">
      {/* Section des réalisations */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center">Réalisations</h1>
        {/* Réalisations en stage */}
        <h1 className="text-center text-xl">Les réalisations en stage</h1>
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
        <p className="mt-20 text-center text-xl flex gap-2 justify-center">Les compétences du cursus <Link href='/competence/synthese.pdf'><IoMdOpen/></Link></p>
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

      {/* Modal ou contenu des fichiers */}
      {isOpen && (
        <div className="modal">
          <button onClick={() => setIsOpen(false)} className="close-modal">
            Fermer
          </button>
          {loading ? (
            <p>Chargement des fichiers...</p>
          ) : (
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
