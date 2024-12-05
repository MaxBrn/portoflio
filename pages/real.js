import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from 'react';

export default function Real() {
  // Hooks d'état
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Gère l'affichage de la modale
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [folder, setFolder] = useState(null);

  // Affiche le pop-up si en production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setIsPopupVisible(true);
    }
  }, []);

  // Fonction pour masquer le pop-up
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  // Fonction pour récupérer les fichiers
  const fetchFiles = async () => {
    if (!folder) return;
    try {
      const response = await fetch(`/api/getFiles?folder=${folder}`);
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des fichiers:', error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchFiles();
    }
  }, [isOpen, folder]);

  // Contenu principal
  return (
    <div className="pb-10">
      {/* Pop-up affiché en mode production */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Section en développement</h2>
            <p className="mb-6">
              Cette section n'est pas encore finalisée et est en cours de développement. Merci de votre compréhension.
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Retourner à l'accueil
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
            <img src="/image/logoMDJ.png" alt="MDJ" className="w-40 m-auto" />
          </div>
          <div className="p-6">
            <Link href="https://mariteam.vercel.app/">
              <img src="/image/logoMarieteam.png" alt="Marieteam" className="w-40 m-auto" />
            </Link>
          </div>
        </div>

        {/* Compétences */}
        <p className="mt-20 text-center text-xl">Les compétences du cursus</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <CompetenceModal
            folder="1.1"
            description="Gestion du patrimoine informatique"
            onClick={() => {
              setFolder('1.1');
              setIsOpen(true);
            }}
          />
          <CompetenceModal
            folder="1.2"
            description="Répondre aux incidents et aux demandes d'assistance et d'évolution"
            onClick={() => {
              setFolder('1.2');
              setIsOpen(true);
            }}
          />
          <CompetenceModal
            folder="1.3"
            description="Développer la présence en ligne de l'organisation"
            onClick={() => {
              setFolder('1.3');
              setIsOpen(true);
            }}
          />
          <CompetenceModal
            folder="1.4"
            description="Travailler en mode projet"
            onClick={() => {
              setFolder('1.4');
              setIsOpen(true);
            }}
          />
          <CompetenceModal
            folder="1.5"
            description="Mettre à disposition des utilisateurs un service informatique"
            onClick={() => {
              setFolder('1.5');
              setIsOpen(true);
            }}
          />
          <CompetenceModal
            folder="1.6"
            description="Organiser son développement personnel"
            onClick={() => {
              setFolder('1.6');
              setIsOpen(true);
            }}
          />
        </div>
      </section>
    </div>
  );
}
