import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function VeilleTechno() {
  const [files, setFiles] = useState([]);

  // Fonction pour masquer le pop-up
  const handleClosePopup = () => {
    document.body.style.overflow = '';
    setIsPopupVisible(false);
    Router.push('/');
  };

  // Fonction pour récupérer les fichiers
  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/getVeilleFiles'); // Appel à l'API
      const data = await response.json();
      setFiles(data); // Mettre à jour l'état avec les fichiers récupérés
    } catch (error) {
      console.error('Erreur lors de la récupération des fichiers :', error);
    }
  };

  // Récupérer les fichiers au chargement du composant
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      {/* Section Principale */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col gap-20 mb-10">
          {/* Bloc 1 */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 text-center border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center py-4 md:py-0">
              <h3 className="text-xl font-bold">Qu'est-ce que la veille technologique ?</h3>
            </div>
            <div className="w-full md:w-3/5 md:ml-10 mt-4 md:mt-0 text-center">
              <p>
                La veille technologique désigne le processus continu de collecte, d'analyse et de suivi des nouvelles
                technologies, des innovations et des tendances dans un domaine spécifique. Elle permet aux
                professionnels et entreprises de se tenir informés des évolutions techniques et d'anticiper les
                changements pour rester compétitifs. Cela inclut la surveillance des outils, des méthodologies, des
                produits et des recherches dans les domaines d'intérêt.
              </p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 text-center border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center py-4 md:py-0">
              <h3 className="text-xl font-bold">Thème de la veille technologique</h3>
            </div>
            <div className="w-full md:w-3/5 md:ml-10 mt-4 md:mt-0 text-center">
              <p>
                Je suis très intéressé par le monde du jeux vidéo, étant dans un cursus de programmation informatique,
                je me suis dit que d'allier les deux pour ma veille technologique pouvait être une bonne idée. C'est
                pourquoi j'ai décidé d'orienter ma veille technologique autour des moteurs de développement de jeux
                vidéo et leurs évolutions. J'étudierais en priorité les deux plus gros moteurs qui sont Unreal Engine et
                Unity.
              </p>
            </div>
          </div>

          {/* Bloc 3 */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 text-center border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center py-4 md:py-0">
              <h3 className="text-xl font-bold">Ce que j'ai utilisé</h3>
            </div>
            <div className="w-full md:w-3/5 md:ml-10 mt-4 md:mt-0 text-center">
              <p>Pour réaliser ma veille, j'utilise le gestionnaire de flux RSS Inoreader.</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center pt-10 pb-6">Mes Rapports</h2>

        {/* Grille des fichiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <Link
              key={index}
              href={file.path}
              target="_blank"
            >

            <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
              <p className="font-bold">{`Rapport ${file.name}`}</p>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
