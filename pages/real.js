export default function Real() {
    return (
      <div className="pb-10">
        {/* En-tête de la section Réalisations */}
        <header className="flex flex-col items-center bg-cover text-white py-64" style={{ backgroundImage: 'url("/image/sliderv2.jpg")' }}>
          <h1 className="text-5xl mb-4">Mes réalisations</h1>
          <p className="text-3xl">Projets de stage ou de cours</p>
        </header>
  
        {/* Section des réalisations */}
        <section className="py-24 max-w-5xl mx-auto">
          <h1 className="text-4xl text-center mb-12">Réalisations</h1>
  
          {/* Les stages */}
          <div className="flex gap-10 items-center mb-16">
            <div className="w-2/5 text-center border-r-4 border-black">
              <h2 className="text-3xl">Les Stages</h2>
            </div>
            <div className="w-3/5 flex justify-center">
              <a href="/stageLoca">
                <img src="/image/logoLS.png" alt="Stage Loca" className="w-52" />
              </a>
            </div>
          </div>
  
          {/* Les réalisations en AP */}
          <div className="flex gap-10 items-center">
            <div className="w-2/5 text-center border-r-4 border-black">
              <h2 className="text-3xl">Les réalisations en AP</h2>
            </div>
            <div className="w-3/5 flex justify-center">
              <a href="mdj.html">
                <img src="/image/logoMDJ.png" alt="MDJ" className="w-40" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  