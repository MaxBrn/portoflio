import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { supabase } from '../../utils/supabase';
import { LuRefreshCw } from "react-icons/lu";
import { useState, useEffect } from "react";

const ProjetsWindow = () => {
  const [projetsData, setProjetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProjetsData() {
    setIsLoading(true);
    setError(false);
    try {
      // Requête avec jointure pour récupérer les projets et leurs technologies
      const { data: projets, error } = await supabase
        .from('projets')
        .select(`
          *,
          projets_technos (
            technologies (
              id,
              name
            )
          )
        `)
        .order('id', { ascending: true });

      if (error) {
        console.error('Erreur lors du chargement des projets:', error);
        setError(true);
        return;
      }

      if (projets && projets.length > 0) {
        // Transformation des données pour avoir un format plus facile à utiliser
        const projetsWithTechnologies = projets.map(projet => ({
          ...projet,
          technologies: projet.projets_technos?.map(pt => pt.technologies) || []
        }));
        
        setProjetsData(projetsWithTechnologies);
      } else {
        console.log('Aucun projet trouvé');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProjetsData();
  }, []);

  // État de chargement
  if (isLoading) {
    return (
      <div className="bg-bgColor pb-20 flex md:pt-10">
        <div className="text-center border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button w-auto mx-auto">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <p className="mt-3">Chargement des projets...</p>
          </div>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="bg-bgColor pb-20 md:pt-10 flex">
        <div className="w-auto mx-auto text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button">
            <p className="text-red-500">Oops on dirait qu'il y a eu un problème dans la récupération des données. </p>
            <button
              onClick={() => getProjetsData()}
              className="mt-4 p-2 bg-button rounded-full hover:bg-hover hover:rotate-180 transition-transform duration-300"
            >
              <LuRefreshCw className="text-xl " />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {projetsData.map((projet, index) => (
          <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition flex md:flex-row flex-col items-center gap-10 md:w-3/4 w-full mx-auto">
            <div className='md:w-1/2'>
              <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
              <p className="mb-3 text-left md:leading-loose leading-relaxed">{projet.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {projet.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 rounded-lg text-sm border border-border`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <p className="text-sm">{projet.details}</p>
            </div>
            <div className="md:w-1/2">
              <div className='w-full'>
                <Link href={projet.link} className="relative block w-fit group transition-transform duration-300 hover:scale-105 mx-auto">
                  <div className="relative">
                    <img
                      src={projet.src}
                      width={700}
                      height={500}
                      alt={projet.title}
                      className="rounded-xl shadow-md transition w-full"
                    />
                    {/* Icône en haut à droite */}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white p-2 rounded-full text-s opacity-80 group-hover:opacity-100 transition">
                      <IoMdOpen />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-20">
        <p className='mb-20'>D'autres arriveront par la suite...</p>
      </div>
    </div>
  );
};

export default ProjetsWindow;