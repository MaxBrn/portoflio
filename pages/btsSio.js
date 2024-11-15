export default function BtsSio() {
  return (
    <div>
      {/* Header */}
      <header className="flex flex-col items-center bg-cover text-white py-64" style={{ backgroundImage: 'url("/image/sliderv2.jpg")' }}>
        <h1 className="text-5xl mb-4">Le BTS SIO</h1>
        <p className="text-3xl">Présentation de la filière</p>
      </header>

      {/* Section Présentation */}
      <section className="py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl mb-6">Qu'est-ce que le BTS SIO ?</h1>
        <p className="text-lg">
        Le BTS SIO est une formation sur deux ans qui permet de soit se former 
                au métier d'administrateur réseau ou celui de développeur. Pour le côté 
                réseau l'étudiant ira en option SISR et pour le développement en SLAM. 
        </p>
      </section>

      {/* Section Options SISR et SLAM */}
      <section className="py-24 flex gap-10 max-w-5xl mx-auto">
        {/* Option SISR */}
        <div className="w-1/2 border-4 border-black p-6">
          <h2 className="text-3xl mb-4">SISR :</h2>
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
        <div className="w-1/2 border-4 border-black p-6">
          <h2 className="text-3xl mb-4">SLAM :</h2>
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
