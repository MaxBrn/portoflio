import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoMdOpen } from "react-icons/io";
import Image from 'next/image';

export default function Real() {
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [folder, setFolder] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleOpenCompetence = (selectedFolder,description, files) => {
    setFolder(selectedFolder);
    setDescription(description);
    setFiles(files);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative pb-10">
      <section className="py-28 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Mes réalisations</h1>
          <p className="text-lg text-gray-300">
            Certaines de mes réalisations personnelles, en classe, en stage.
          </p>
        </div>
        <div className='flex flex-col items-center gap-8 bg-bgColor2 p-6 border border-border shadow-lg shadow-button rounded-3xl mx-6 mb-10'>
          <div className='text-center mx-auto flex flex-col gap-4'>
            <Image
              src="/image/logoLS.png"
              width={200}
              height={500}
              alt="Logo LocaService"
              className="rounded-xl shadow-md transition mx-auto"
            />
            <p>
            Loca Service est une entreprise de location de matériel frigorifique,
            elle fait partie des leaders du secteur. Fondée par Pascal Bouve en 1981, elle a ensuite été reprise par son fils Aurélien Bouve en 2016.
            Ce dernier porte énormément d'attention à ce que l'entreprise reste en constante innovation et ne cesse de se réinventer,
            d'explorer des projets divers et variés. Les projets qui m'ont été assignés poursuivent cette idée. Loca Service accorde une
            grande importance à son impact écologique et sociétal, ce qui la pousse à toujours tenter de s'améliorer sur ces axes et de
            faire de la société un endroit où il fait bon vivre pour tous, et respectueux de l'environnement. Ils possèdent plusieurs agences dans
            toute la France, mais j'ai effectué mon stage à La Bassée, là où se trouve leur siège social.
            J'ai été intégré au sein de leur équipe informatique, qui s'occupe de toute l'infrastructure réseau et des systèmes informatiques,
            mais aussi du support des applications métiers développées par des prestataires. Cette dernière ne contenant aucun développeur,
            j'étais en autonomie sur ce point, mais tout de même encadré et grandement aidé sur certains aspects. Je remercie d'ailleurs toutes
            les personnes que j'ai pu côtoyer lors de cette merveilleuse expérience.
            </p>
          </div>
          <Link 
                  className='bg-button p-3 rounded-xl text-center hover:bg-hover transition'
                  href={'https://www.canva.com/design/DAGmHG_I9aU/muNAForHSkwgSJdv0r0NwA/view?utm_content=DAGmHG_I9aU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h038924ba23'}
                >
                  Présentation
                </Link>
          <div className='w-full flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 text-center p-4 border border-border flex flex-col gap-6  rounded-3xl'>
              <h2>Premier stage</h2>
              <p>
                J'ai conçu et implémenté une solution pour afficher les données de capteurs (température, eau, gaz) dans le cadre du smart building. 
                Mon objectif était de proposer une alternative interne pour réduire les coûts d'abonnement. 
                J'ai assuré le développement en full stack, de la récupération des données à leur affichage, 
                tout en apprenant les outils nécessaires en autonomie.
              </p>
              <div className='flex flex-wrap gap-3 text-xs mx-auto'>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Vue.js</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Kuzzle</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>TypeScript</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>NodeMailer</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Chart.js</span>
                
              </div>
              <div className='mx-auto w-3/4 flex flex-col gap-4 mt-4'>
                <button 
                  onClick={() => handleOpenCompetence('Stage 1', 'Mon premier stage', [
                    { name: 'Rapport Stage', path: 'rapport1.pdf' },
                    { name: 'Fonctionnalitées', path: 'Fonctionnalité du site.pdf' },
                    { name: 'Installation Kuzzle', path: 'installationKuzzle.pdf' },
                    { name: 'Requêtes Kuzzle', path:'kuzzlerequete.pdf'},
                    { name: 'Attestation Stage', path:'attestation1.pdf'}
                  ])} 
                  className='bg-button p-3 rounded-xl text-center hover:bg-hover transition'>Documentation
                </button>
              </div>
            </div>
            <div className='md:w-1/2 text-center p-4 border border-border flex flex-col gap-6  rounded-3xl'>
              <h2>Deuxième stage</h2>
              <p>
                J'ai réalisé une application mobile pour créer des prises de devis pour la commande de meuble réfrigéré. 
                L'objectif était de rendre le processus plus rapide et moins archaïque que d'origine.
                J'en ai assuré le développmeent en autonomie et en full stack sur Android Studio. J'ai développé en parrallèle une API REST pour l'accès
                à la base de données que j'ai aussi mise en place.
              </p>
              <div className='flex flex-wrap gap-3 text-xs mx-auto'>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Android Studio</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Kotlin</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>API REST</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>PHP</span>
                <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>MySQL</span>
                
              </div>
              <div className='mx-auto w-3/4 flex flex-col gap-4 mt-4'>
                <button 
                  onClick={() => handleOpenCompetence('Stage 2', 'Mon deuxième stage', [
                    { name: 'Rapport Stage', path: 'rapport2.pdf' },
                    { name: 'Guide Installation', path: 'guideinstall.pdf'},
                    { name: 'Attestation Stage', path:'attestation2.pdf'}
                  ])} 
                  className='bg-button p-3 rounded-xl text-center hover:bg-hover transition'>Documentation
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-8 bg-bgColor2 p-6 border border-border shadow-lg shadow-button rounded-3xl mx-6'>
          <div className='w-full md:w-3/5'>
            <Link href="https://mariteam.vercel.app/" className="relative block w-fit group transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/image/marieteamPage.png"
                  width={700}
                  height={500}
                  alt="Index Marieteam"
                  className="rounded-xl shadow-md transition w-full"
                />
                {/* Icône en haut à droite */}
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white p-2 rounded-full text-s opacity-80 group-hover:opacity-100 transition">
                  <IoMdOpen />
                </div>
              </div>
            </Link>
          </div>
          
          <div className='w-full md:w-2/5 flex flex-col gap-6 text-center'>
            <h2 className='text-2xl text-primary'>Marieteam Web</h2>
            <p className='text-base'>Marieteam est une simulation de site de réservation de transport maritime. 
              Connecté à une base de données, il permet aux utilisateurs de réserver des trajets et de consulter leurs réservations. 
              Un dashboard admin offre la gestion des liaisons, le suivi des places réservées et l'analyse des revenus.
            </p>
            <div className='flex flex-wrap gap-3 text-xs mx-auto'>
              <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Next.JS</span>
              <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>Supabase</span>
              <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>PostgreSQL</span>
              <span className='border border-border px-4 py-2 rounded-full shadow-sm whitespace-nowrap'>TailwindCSS</span>
            </div>
            <div className='mx-auto w-3/4 flex flex-col gap-4 mt-4'>
              <button 
                onClick={() => handleOpenCompetence('marieteam', 'Les documents de Marieteam', [])} 
                className='bg-button p-3 rounded-xl text-center hover:bg-hover transition'>Documentation</button>
            </div>
          </div>
        </div>



        <p className="mt-20 text-center text-xl flex gap-2 justify-center">Les compétences du cursus <Link href='/competence/synthese.pdf'><IoMdOpen/></Link></p>
        <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[ 
            { folder: '1.1', description: 'Gestion du patrimoine informatique', files: 
              [
                { name: 'Habilitations GLPI', path: 'marieteamglpi.pdf' },
                { name: 'Continuité d\'un Service', path: 'marieteamglpi.pdf'},
                {name: 'Premier stage', path:'../Stage 1/rapport1.pdf'},
                {name: 'Deuxième stage', path:'../Stage 2/rapport2.pdf'},

              ] 
            },
            { folder: '1.2', description: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution', files: 
              [
                { name: 'Installation GLPI', path: 'marieteamglpi.pdf' },
                { name: 'Collecteur GLPI', path: 'marieteamglpi.pdf' }
              ] 
            },
            { folder: '1.3', description: 'Développer la présence en ligne de l\'organisation', files: 
              [
                {name: 'Premier stage', path:'../Stage 1/rapport1.pdf'},
                {name: 'Deuxième stage', path:'../Stage 2/rapport2.pdf'},
                {name: 'Portfolio Maxime', path:'../portfolio.pdf'},
              ] 
            },
            { folder: '1.4', description: 'Travailler en mode projet', files: 
              [
                {name: 'Premier stage', path:'../Stage 1/rapport1.pdf'},
                {name: 'Deuxième stage', path:'../Stage 2/rapport2.pdf'},
              ] 
            },
            { folder: '1.5', description: 'Mettre à disposition des utilisateurs un service informatique', files: 
              [
                { name: 'Installation GLPI', path: 'marieteamglpi.pdf' },
                { name: 'Portfolio Maxime', path:'../portfolio.pdf'},
              ] 
            },
            { folder: '1.6', description: 'Organiser son développement personnel', files: 
              [
                { name: 'Formation Unity', path: 'formationUnity.pdf' },
                { name: 'Premier stage', path:'../Stage 1/rapport1.pdf'},
                { name: 'Deuxième stage', path:'../Stage 2/rapport2.pdf'},
                { name: 'Portfolio Maxime', path:'../portfolio.pdf'},
                { name: 'Guide Installation', path: '../Stage 2/guideinstall.pdf'},
                { name: 'Installation Kuzzle', path: '../Stage 1/installationKuzzle.pdf' },
                { name: 'Requêtes Kuzzle', path:'../Stage 1/kuzzlerequete.pdf'},
              ] 
            },
          ].map(({ folder, description, files }) => (
            <button key={folder} onClick={() => handleOpenCompetence(folder,description, files)} className=" min-h-[150px] w-full h-full p-4 bg-bgColor2 border border-border rounded-2xl hover:bg-button transition">
              <p className="font-bold">Compétence {folder}</p>
              <p className='pt-2'>{description}</p>
            </button>
          ))}
        </div>
      </section>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>
      )}

      <div className={`p-4 fixed top-0 right-0 h-full md:w-80 w-full bg-gradient-to-b from-bgColor to-button transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 text-center`}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-lg">✖</button>
        <div className="p-4">
          <h2 className="text-xl font-semibold">Compétence {folder}</h2>
          <p className='pt-10'>{description}</p>
          <div className='my-4 border-t border-b border-border'></div>
          <ul className="mt-4 flex flex-col gap-4">
            {files.map(({ name, path }, index) => (
              <li key={index}>
                <Link href={`/competence/${folder}/${path}`} target="_blank" className="block p-2 border border-border bg-bgColor2 rounded-2xl hover:bg-button text-center transition">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
