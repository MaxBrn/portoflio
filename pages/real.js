import Link from 'next/link';
export default function Real() {
    return (
      <div className="pb-10">
        {/* En-tête de la section Réalisations */}
        <header
        className="flex flex-col items-center justify-center text-white h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url("/image/fond.jpg")' }}
      >
        {/* Ajout d'un dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        <h1 className="text-5xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">Mes réalisations</h1>
        <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
          Mes projets personnels, de stage, de cours
        </p>
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
              <Link href="/stageLoca">
                <img src="/image/logoLS.png" alt="Stage Loca" className="w-52" />
              </Link>
            </div>
          </div>
  
          {/* Les réalisations en AP */}
          <div className="flex gap-10 items-center">
            <div className="w-2/5 text-center border-r-4 border-black">
              <h2 className="text-3xl">Les réalisations en AP</h2>
            </div>
            <div className="w-3/5 flex justify-center">
              <Link href="mdj.html">
                <img src="/image/logoMDJ.png" alt="MDJ" className="w-40" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 mt-40">
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.1</p>
              <p className='pt-2'>Gestion du patrimoine informatique</p>
            </div>
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.2</p>
              <p className='pt-2'>Répondre aux incidents et aux demandes d'assistance et d'évolution</p>
            </div>
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.3</p>
              <p className='pt-2'>Développer la présence en ligne de l'organisation</p>
            </div>
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.4</p>
              <p className='pt-2'>Travailler en mode projet</p>
            </div>
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.5</p>
              <p className='pt-2'>Mettre à disposition des utilisateurs un service informatique</p>
            </div>
            <div className="p-6 border border-black rounded-lg">
              <p className='font-bold'>Competence 1.6</p>
              <p className='pt-2'>Organiser son développement personnel</p>
            </div>
          </div>

        </section>
      </div>
    );
  }
  