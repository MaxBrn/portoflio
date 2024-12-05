import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Real() {
  // Vérifie si l'environnement est en production
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-center">
          Le site étant en développement, cette section n'est pas encore finalisée et est en cours de développement.
          Merci de votre compréhension.
        </h1>
      </div>
    );
  }

  // État pour la gestion des fichiers et la modale
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [folder, setFolder] = useState(null); // Définir un état pour le folder sélectionné

  // Fonction pour fermer la modale
  const closeModal = () => {
    setIsOpen(false);
  };

  // Fonction pour récupérer les fichiers
  const fetchFiles = async () => {
    if (!folder) return; // Si aucun dossier n'est sélectionné, ne pas effectuer de requête
    try {
      const response = await fetch(`/api/getFiles?folder=${folder}`);
      const data = await response.json();
      setFiles(data); // Met à jour l'état avec les fichiers récupérés
    } catch (error) {
      console.error('Erreur lors de la récupération des fichiers:', error);
    }
  };

  // Récupérer les fichiers lorsque la modale est ouverte ou que le dossier change
  useEffect(() => {
    if (isOpen) {
      fetchFiles();
    }
  }, [isOpen, folder]);

  return (
    <div className="pb-10">
      {/* Section des réalisations */}
      <section className="py-24 max-w-7xl mx-auto px-4">

        {/* Les réalisations en stage */}
        <p className="text-center text-xl">Les réalisations en stage</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className="p-6">
            <img src="/image/logoLS.png" alt="Stage Loca" className="w-52 m-auto" />
          </div>
          <div className="p-6 m-auto">
            <p>Deuxième stage en février</p>
          </div>
        </div>

        {/* Les réalisations en cours */}
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

        {/* Les compétences du cursus */}
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
