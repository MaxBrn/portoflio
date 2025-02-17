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
        
        <div className='flex flex-col md:flex-row items-center gap-8 bg-bgColor2 p-6 border border-border shadow-lg shadow-button rounded-3xl mx-6'>
          <div className='w-full md:w-3/5'>
            <Link href="https://mariteam.vercel.app/" className="relative block w-fit group transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/image/marieteamPage.png"
                  width={700}
                  height={500}
                  alt="Index Marieteam"
                  className="rounded-xl shadow-md cursor-pointer transition"
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
                className='bg-button p-3 rounded-xl text-center hover:bg-opacity-50 transition'>Documentation</button>
            </div>
          </div>
        </div>



        <p className="mt-20 text-center text-xl flex gap-2 justify-center">Les compétences du cursus <Link href='/competence/synthese.pdf'><IoMdOpen/></Link></p>
        <div className="mx-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[ 
            { folder: '1.1', description: 'Gestion du patrimoine informatique', files: 
              [
                { name: 'Gestion droits Windows', path: 'gestionDroit.pdf' }, 
                { name: 'Habilitations GLPI', path: 'habilitationGLPI.pdf' },

              ] 
            },
            { folder: '1.2', description: 'Répondre aux incidents et aux demandes d\'assistance et d\'évolution', files: 
              [
                { name: 'Collecteur GLPI', path: 'glpiCollecteur.pdf' }, 
                { name: 'HTTPS-SSL-TSL', path: 'HTTPS-SSL-TSL.pdf' },
                { name: 'RAID', path: 'RAID.pdf' },
                { name: 'rsyslog', path: 'rsyslog.pdf' }
              ] 
            },
            { folder: '1.3', description: 'Développer la présence en ligne de l\'organisation', files: 
              [
                
              ] 
            },
            { folder: '1.4', description: 'Travailler en mode projet', files: 
              [
                
              ] 
            },
            { folder: '1.5', description: 'Mettre à disposition des utilisateurs un service informatique', files: 
              [
                { name: 'Installation GLPI', path: 'installGLPI.pdf' },
              ] 
            },
            { folder: '1.6', description: 'Organiser son développement personnel', files: 
              [
                { name: 'Formation Unity', path: 'formationUnity.pdf' },
                { name: 'Certification Azure', path: 'Certif Azure.pdf' },
                { name: 'Certification Linux', path: 'Certif Linux.png' },
                { name: 'Commande Linux', path: 'Commande Linux.pdf' },
                { name: 'MOOC CNIL', path: 'MOOC CNIL.pdf' },
                { name: 'Certificat PIX', path: 'Pix.pdf' }
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
