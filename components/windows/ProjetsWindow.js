import { projetsData } from '../../data/projets';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdOpen } from 'react-icons/io';

const ProjectCard = ({ title, description, technologies, details,src,link }) => {
  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-md transition flex md:flex-row flex-col items-center gap-10 md:w-3/4 w-full mx-auto">
      <div className='md:w-1/2'>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-3 text-left md:leading-loose leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className={`px-2 py-1 rounded-lg text-sm border border-border`}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <p className="text-sm">{details}</p>
      </div>
      <div className="md:w-1/2">
        <div className='w-full'>
            <Link href={link} className="relative block w-fit group transition-transform duration-300 hover:scale-105 mx-auto">
              <div className="relative">
                <Image
                  src={src}
                  width={700}
                  height={500}
                  alt={title}
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
  );
};

const ProjetsWindow = () => {
  return (
    <div className="space-y-6">
      
      
      <div className="space-y-6">
        {projetsData.map((projet, index) => (
          <ProjectCard
            key={index}
            title={projet.title}
            description={projet.description}
            technologies={projet.technologies}
            details={projet.details}
            src={projet.src}
            link={projet.link}
          />
        ))}
      </div>
      <div className="text-center mt-20">
        <p className='mb-20'>D'autres arriveront par la suite...</p>
      </div>
      
    </div>
  );
};

export default ProjetsWindow;