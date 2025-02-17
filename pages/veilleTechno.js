import { useState } from 'react';
import Link from 'next/link';
import { IoReaderOutline } from "react-icons/io5";

export default function VeilleTechno() {
  // Définir les fichiers manuellement
  const files = [
    { name: 'Octobre 2024', path: '/veille/octobre2024.pdf' },
    { name: 'Novembre 2024', path: '/veille/novembre2024.pdf' },
    // Ajoutez autant de fichiers que nécessaire
  ];

  // État pour gérer l'ouverture/fermeture de la section
  const [isOpen, setIsOpen] = useState(false);

  // Problématiques de la veille
  const problematics = [
    {
      title: "Évolution des moteurs de jeux vidéo",
      description: "Vers plus d'accessibilité ou de complexité ?",
    },
    {
      title: "Impact de l'IA sur les moteurs de jeux vidéo",
      description: "Comment l'intelligence artificielle transforme-t-elle le développement des jeux ?",
    },
    {
      title: "Optimisation des performances",
      description: "Quelles techniques de programmation pour des moteurs plus efficaces ?",
    },
  ];

  return (
    <div>
      {/* Section Principale */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Veille Technologique</h1>
          <p className="text-lg text-gray-300">
            Suivez avec moi les dernières innovations dans le domaine des moteurs de jeux vidéo.
          </p>
        </div>

        {/* Bloc 1 : Qu'est-ce que la veille technologique et comment la faire ? */}
        <div
          className="bg-bgColor2 border border-border p-8 rounded-xl shadow-lg mb-10 cursor-pointer shadow-lg shadow-button"
          onClick={() => setIsOpen(!isOpen)} // Basculer l'état au clic
        >
          <div className="flex items-center justify-between">
            {/* Titre centré */}
            <div className="flex-1 text-center">
              <h3 className="text-2xl font-bold">Qu'est-ce que la veille technologique ?</h3>
            </div>
            {/* Indicateur visuel (flèche) */}
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Contenu déroulant avec animation */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-6">
              <p className="text-gray-300 mb-6">
                La veille technologique est un processus systématique de surveillance, de collecte et d'analyse des
                innovations, des tendances et des évolutions dans un domaine spécifique. Elle permet de rester informé,
                d'anticiper les changements et de prendre des décisions éclairées pour rester compétitif.
              </p>

              {/* Séparateur visuel */}
              <div className="border-t border-border my-6"></div>

              <div className="text-center">
                <h4 className="text-xl font-bold mb-6">Comment réaliser une veille technologique ?</h4>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  {/* Étape 1 */}
                  <div className="flex items-start">
                    <span className="text-lg font-semibold mr-4">1.</span>
                    <p className="text-gray-300">
                      <strong>Identifier des sources fiables</strong> : Blogs, articles scientifiques, forums, réseaux
                      sociaux, et plateformes spécialisées.
                    </p>
                  </div>

                  {/* Étape 2 */}
                  <div className="flex items-start">
                    <span className="text-lg font-semibold mr-4">2.</span>
                    <p className="text-gray-300">
                      <strong>Utiliser des outils adaptés</strong> : Comme <strong>Inoreader</strong> ou <strong>Feedly</strong> pour centraliser les flux d'informations.
                    </p>
                  </div>

                  {/* Étape 3 */}
                  <div className="flex items-start">
                    <span className="text-lg font-semibold mr-4">3.</span>
                    <p className="text-gray-300">
                      <strong>Organiser les informations</strong> : Classer et catégoriser les données pour faciliter leur
                      analyse.
                    </p>
                  </div>

                  {/* Étape 4 */}
                  <div className="flex items-start">
                    <span className="text-lg font-semibold mr-4">4.</span>
                    <p className="text-gray-300">
                      <strong>Analyser et synthétiser</strong> : Extraire les informations clés et en tirer des conclusions
                      pertinentes.
                    </p>
                  </div>

                  {/* Étape 5 */}
                  <div className="flex items-start">
                    <span className="text-lg font-semibold mr-4">5.</span>
                    <p className="text-gray-300">
                      <strong>Partager les résultats</strong> : Diffuser les insights auprès d'une communauté ou d'une équipe
                      pour favoriser la collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des blocs d'information (Thème et Outils) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Bloc 2 : Thème de la veille */}
          <div className="bg-bgColor2 border border-border p-8 rounded-xl shadow-lg shadow-button">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Thème de ma veille</h3>
              <p className="text-gray-300">
                Passionné par le jeu vidéo et la programmation, j'ai orienté ma veille sur les moteurs de jeux vidéo,
                notamment <strong>Unreal Engine</strong> et <strong>Unity</strong>, pour explorer leurs évolutions et
                leurs impacts sur l'industrie.
              </p>
            </div>
          </div>

          {/* Bloc 3 : Outils utilisés */}
          <div className="bg-bgColor2 border border-border p-8 rounded-xl shadow-lg shadow-button">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Outils utilisés</h3>
              <p className="text-gray-300">
                J'utilise <strong>Inoreader</strong>, un gestionnaire de flux RSS, pour collecter et organiser les
                informations issues de sources variées. Cet outil me permet de suivre les actualités en temps réel et de
                centraliser mes recherches.
              </p>
            </div>
          </div>
        </div>

        {/* Section des problématiques sous forme de timeline horizontale */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Problématiques de ma veille</h3>
          <div className="flex flex-col md:flex-row gap-6">
            {problematics.map((problem, index) => (
              <div
                key={index}
                className="flex-1 bg-bgColor2 border border-border p-6 rounded-xl shadow-lg shadow-button"
              >
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">{problem.title}</h4>
                  <p className="text-gray-300">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section des rapports */}
        <h2 className="text-3xl font-bold text-center mb-10">Mes Rapports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <Link
              key={index}
              href={file.path}
              target="_blank"
            >
              <div className="p-4 border bg-bgColor2 border-border rounded-2xl hover:bg-button transition">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg">{`Rapport ${file.name}`}</p>
                 
                  <IoReaderOutline className='text-xl' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}