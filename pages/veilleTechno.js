

export default function VeilleTechno() {
  return (
    <div>
      <header
        className="flex flex-col items-center justify-center text-white h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/image/fond.jpg")' }}
      >
        {/* Ajout d'un dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <h1 className="text-5xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">Veille technologique</h1>
        <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
          Ma veille sur les moteurs de jeux vidéo
        </p>
      </header>

      <section className="py-24 max-w-5xl mx-auto text-center">
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
              <h3 className="text-xl ">Qu'est-ce que la veille technologique ?</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                La veille technologique désigne le processus continu de collecte, d'analyse et de suivi des nouvelles technologies, des innovations et des tendances dans un domaine spécifique. 
                Elle permet aux professionnels et entreprises de se tenir informés des évolutions techniques et d'anticiper les changements pour rester compétitifs. 
                Cela inclut la surveillance des outils, des méthodologies, des produits et des recherches dans les domaines d'intérêt. 
                La veille technologique est essentielle pour adapter les stratégies, optimiser les processus et prendre des décisions éclairées. 
                Elle est souvent utilisée dans le cadre de projets de développement, de recherche et d'innovation.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
              <h3 className="text-xl">Thème de la veille technologique</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Je suis très intéressé par le monde du jeux vidéo, étant dans un cursus de programmation informatique, je me suis dit que d'allier les deux pour ma veille technologique pouvait être une bonne idée. 
                C'est pourquoi j'ai décidé d'orienter ma veille technologique autour des moteurs de développement de jeux vidéo et leurs évolutions. J'étudierais en priorité les deux plus gros moteurs qui sont Unreal Engine et Unity.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
              <h3 className="text-xl">Ce que j'ai utilisé</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Pour réaliser ma veille j'utilise le gestionnaire de flux RSS Inoreeder.
              </p>
            </div>
          </div>
          <p className="pt-20">Mes Rapports</p>
          <div className="grid grid-cols-3 gap-10 border border-black p-10 rounded-2xl">
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            <div className="p-2 border border-black rounded-2xl">
              <p className='font-bold'>Rapport 1</p>
              <p>Date du rapport</p>
            </div>
            
            
           
          </div>


        </div>
      </section>
  </div>
    
  );
}
