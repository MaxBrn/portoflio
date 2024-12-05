import Link from 'next/link';
import CompetenceModal from '@/components/Competence';
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
if (process.env.NODE_ENV === 'production') {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">
        Le site étant en développement, cette section n'est pas encore finalisée et est en cours de développement, merci de votre compréhension.
      </h1>
    </div>
  );
}
export default function Real() {
  const [isOpen, setIsOpen] = useState(false);
  let folder;
  let description;
    const closeModal = () => {
        setIsOpen(false); // Ferme la modale
    };

    const [files, setFiles] = useState([]);

    // Fonction pour récupérer les fichiers
    const fetchFiles = async () => {
        try {
            const response = await fetch(`/api/getFiles?folder=${folder}`);
            const data = await response.json();
            setFiles(data); // Mettre à jour l'état avec les fichiers récupérés
        } catch (error) {
            console.error("Erreur lors de la récupération des fichiers:", error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchFiles(); // Récupère les fichiers à chaque ouverture de la modale
        }
    }, [isOpen, folder]);

  return (
    <div className="pb-10">

      {/* Section des réalisations */}
      <section className="py-24 max-w-7xl mx-auto px-4">

        {/* Les réalisations en AP */}
        <p className='text-center text-xl'>Les réalisations en stage</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className='p-6'>
            <img src="/image/logoLS.png" alt="Stage Loca" className="w-52 m-auto" />
          </div>
          <div className='p-6 m-auto'>
            <p>Deuxième stage en février</p>
          </div>
        </div>

        <p className='text-center mt-20 text-xl'>Les réalisations en cours</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
          <div className='p-6'>
            <img src="/image/logoMDJ.png" alt="MDJ" className="w-40 m-auto" />
          </div>
          <div className='p-6'>
            <Link href="https://mariteam.vercel.app/"><img src="/image/logoMarieteam.png"  alt="Marieteam" className="w-40 m-auto" /></Link>
          </div>
        </div>

        <p className='mt-20 text-center text-xl'>Les compétences du cursus</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          
        <CompetenceModal folder="1.1" description='Gestion du patrimoine informatique'/>
        <CompetenceModal folder="1.2" description="Répondre aux incidents et aux demandes d'assistance et d'évolution"/>
        <CompetenceModal folder="1.3" description="Développer la présence en ligne de l'organisation"/>
        <CompetenceModal folder="1.4" description="Travailler en mode projet"/>
        <CompetenceModal folder="1.5" description="Mettre à disposition des utilisateurs un service informatique"/>
        <CompetenceModal folder="1.6" description="Organiser son développement personnel"/>
         
        </div>

      </section>
    </div>
  );
}
