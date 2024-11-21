export default function BtsSio() {
  return (
    <div>
      <header
        className="flex flex-col items-center justify-center text-white h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/image/fond.jpg")' }}
      >
        {/* Ajout d'un dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <h1 className="text-5xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">Le BTS SIO</h1>
        <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
          Présentation de la filière
        </p>
      </header>

      {/* Section Présentation */}
      <section className="py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl mb-6">Qu'est-ce que le BTS SIO ?</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Le BTS SIO est une formation sur deux ans qui permet de se former au métier d'administrateur réseau ou celui de développeur. 
          L'option SISR prépare aux métiers du réseau informatique, et l'option SLAM aux métiers du développement logiciel.
        </p>
      </section>

      {/* Section Options SISR et SLAM */}
      <section className="py-24 flex gap-10 max-w-5xl mx-auto">
        {/* Option SISR */}
        <div className="w-1/2 border-4 border-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
          <h2 className="text-3xl mb-4 flex items-center gap-4">
            <span className="text-indigo-500">🔌</span>
            <span>SISR :</span>
          </h2>
          <p className="text-lg">
            L'option SISR forme les étudiants aux métiers du réseau informatique. En sortie de formation, les étudiants savent gérer et administrer un réseau d'une organisation.
          </p>
          <p className="text-lg mt-2">On peut devenir :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Administrateur réseau</li>
            <li>Technicien d'infrastructure</li>
            <li>Technicien réseaux</li>
            <li>...</li>
          </ul>
        </div>

        {/* Option SLAM */}
        <div className="w-1/2 border-4 border-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
          <h2 className="text-3xl mb-4 flex items-center gap-4">
            <span className="text-indigo-500">💻</span>
            <span>SLAM :</span>
          </h2>
          <p className="text-lg">
            L'option SLAM forme les étudiants aux métiers du développement de logiciel et de sites web pour les organisations. En sortie de formation, les étudiants savent développer des solutions adaptées aux besoins de l'organisation.
          </p>
          <p className="text-lg mt-2">On peut devenir :</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Développeur d'applications informatiques</li>
            <li>Développeur web</li>
            <li>...</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
