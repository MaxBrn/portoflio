

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
            <div className="w-2/5 text-center border-r-4 border-black items-center justify-center">
              <h3 className="text-xl">Qu'est-ce que la veille technologique ?</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste officia nihil, maiores iusto a expedita praesentium consequatur. Labore necessitatibus nemo deleniti consectetur excepturi in quia voluptatibus vero vitae quibusdam pariatur soluta iusto culpa repellat, aliquid magni deserunt eaque blanditiis quisquam accusamus iste? Rerum voluptates tempora quae dignissimos quidem a?
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black items-center justify-center">
              <h3 className="text-xl">Thème de la veille technologique</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste officia nihil, maiores iusto a expedita praesentium consequatur. Labore necessitatibus nemo deleniti consectetur excepturi in quia voluptatibus vero vitae quibusdam pariatur soluta iusto culpa repellat, aliquid magni deserunt eaque blanditiis quisquam accusamus iste? Rerum voluptates tempora quae dignissimos quidem a?
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black items-center justify-center">
              <h3 className="text-xl">Ce que j'ai utilisé</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste officia nihil, maiores iusto a expedita praesentium consequatur. Labore necessitatibus nemo deleniti consectetur excepturi in quia voluptatibus vero vitae quibusdam pariatur soluta iusto culpa repellat, aliquid magni deserunt eaque blanditiis quisquam accusamus iste? Rerum voluptates tempora quae dignissimos quidem a?
              </p>
            </div>
          </div>
          <h2>Mes Rapports</h2>
          <div className="flex">
            <div className="w-2/5 text-center border-r-4 border-black items-center justify-center">
              <h3 className="text-xl">Rapport 1</h3>
            </div>
            <div className="w-3/5 ml-10">
              <p>
                Lien vers le rapport
              </p>
            </div>
          </div>


        </div>
      </section>
  </div>
    
  );
}
