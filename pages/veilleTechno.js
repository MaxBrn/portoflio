// pages/veille.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function VeilleTechno() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // Affiche le pop-up si en production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      setIsPopupVisible(true);
    }
  }, []);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    
    <div>
      {/* Pop-up affiché en mode production */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-custom-night2 rounded-lg shadow-lg p-8 w-full max-w-md text-center text-custom-white">
            <h2 className="text-2xl font-bold mb-4">Section en développement</h2>
            <p className="mb-6">
              Cette section n'est pas encore finalisée et est en cours de développement. Merci de votre compréhension.
            </p>
            <Link
              href="/index"
              className="bg-custom-button text-custom-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      )}
      {/* Section Principale */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-10 mb-10">
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

        {/* Section Rapports */}
        <h2 className="text-2xl font-bold text-center pt-10 pb-6">Mes Rapports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Exemple de rapports */}
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 1</p>
            <p>Date du rapport</p>
          </div>
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 2</p>
            <p>Date du rapport</p>
          </div>
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 3</p>
            <p>Date du rapport</p>
          </div>
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 4</p>
            <p>Date du rapport</p>
          </div>
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 5</p>
            <p>Date du rapport</p>
          </div>
          <div className="p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl">
            <p className="font-bold">Rapport 6</p>
            <p>Date du rapport</p>
          </div>
        </div>
      </section>
    </div>
  );
}
