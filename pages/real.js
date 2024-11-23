import Link from 'next/link';

export default function Real() {
  return (
    <div className="pb-10">

      {/* Section des réalisations */}
      <section className="py-24 max-w-7xl mx-auto px-4">

        {/* Les réalisations en AP */}
        <p className='text-center text-xl'>Les réalisations en stage</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
          <div className='p-6'>
            <img src="/image/logoLS.png" alt="Stage Loca" className="w-52 m-auto" />
          </div>
          <div className='p-6 m-auto'>
            <p>Deuxième stage en février</p>
          </div>
        </div>

        <p className='text-center mt-20 text-xl'>Les réalisations en cours</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          <div className='p-6'>
            <img src="/image/logoMDJ.png" alt="MDJ" className="w-40 m-auto" />
          </div>
        </div>

        <p className='mt-20 text-center text-xl'>Les compétences du cursus</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.1</p>
            <p className='pt-2'>Gestion du patrimoine informatique</p>
          </div>
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.2</p>
            <p className='pt-2'>Répondre aux incidents et aux demandes d'assistance et d'évolution</p>
          </div>
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.3</p>
            <p className='pt-2'>Développer la présence en ligne de l'organisation</p>
          </div>
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.4</p>
            <p className='pt-2'>Travailler en mode projet</p>
          </div>
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.5</p>
            <p className='pt-2'>Mettre à disposition des utilisateurs un service informatique</p>
          </div>
          <div className="p-6 border-2 border-custom-cream2 dark:border-custom-night2 rounded-2xl">
            <p className='font-bold'>Competence 1.6</p>
            <p className='pt-2'>Organiser son développement personnel</p>
          </div>
        </div>

      </section>
    </div>
  );
}
