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
        <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s font">
          Mes projets personnels, de stage, de cours
        </p>
      </header>
  
        {/* Section des réalisations */}
        <section className="py-24 max-w-5xl mx-auto">

          {/* Les réalisations en AP */}
          <p className='text-center text-xl'>Les réalisations en stage</p>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className='p-6  '>
              <img src="/image/logoLS.png" alt="Stage Loca" className="w-52 m-auto" />
            </div>
            <div className='p-6 m-auto '>
              <p>Deuxième stage en février</p>
            </div>
          </div>

          <p className='text-center mt-20 text-xl'>Les réalisations en cours</p>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className='p-6'>
              <img src="/image/logoMDJ.png" alt="MDJ" className="w-40 m-auto" />
            </div>
          </div>

          <p className='mt-20 text-center text-xl'>Les compétences du cursus</p>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.1</p>
              <p className='pt-2'>Gestion du patrimoine informatique</p>
            </div>
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.2</p>
              <p className='pt-2'>Répondre aux incidents et aux demandes d'assistance et d'évolution</p>
            </div>
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.3</p>
              <p className='pt-2'>Développer la présence en ligne de l'organisation</p>
            </div>
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.4</p>
              <p className='pt-2'>Travailler en mode projet</p>
            </div>
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.5</p>
              <p className='pt-2'>Mettre à disposition des utilisateurs un service informatique</p>
            </div>
            <div className="p-6 border border-black rounded-xl">
              <p className='font-bold'>Competence 1.6</p>
              <p className='pt-2'>Organiser son développement personnel</p>
            </div>
          </div>

        </section>
      </div>
    );
  }
  