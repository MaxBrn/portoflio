import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';
import { projetsData } from '../../data/projets';

const ProjetsWindow = () => {
  return (
    <div className="space-y-6">
      {/* Liste des projets */}
      <div className="space-y-6">
        {projetsData.map((projet, index) => (
          <div 
            key={index} 
            className="border border-border rounded-lg p-6 hover:shadow-md transition flex md:flex-row flex-col items-center gap-10 md:w-3/4 w-full mx-auto"
          >
            {/* Section informations du projet */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
              <p className="mb-3 text-left md:leading-loose leading-relaxed">{projet.description}</p>
              
              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 mb-3">
                {projet.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded-lg text-sm border border-border"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <p className="text-sm">{projet.details}</p>
            </div>

            {/* Section image avec lien */}
            <div className="md:w-1/2">
              <div className="w-full">
                <Link 
                  href={projet.link} 
                  target="_blank"
                  className="relative block w-fit group transition-transform duration-300 hover:scale-105 mx-auto"
                >
                  <div className="relative">
                    <img
                      src={projet.src}
                      width={700}
                      height={500}
                      alt={projet.title}
                      className="rounded-xl shadow-md transition w-full"
                    />
                    {/* Icône d'ouverture */}
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

      {/* Message de fin */}
      <div className="text-center mt-20">
        <p className="mb-20">D'autres arriveront par la suite...</p>
      </div>
    </div>
  );
};

export default ProjetsWindow;