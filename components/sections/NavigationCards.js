import { FaCode, FaLaptopCode, FaGraduationCap, FaGamepad   } from "react-icons/fa";
import { HiQuestionMarkCircle,HiDocumentText } from "react-icons/hi";
import { PiFilmSlateFill } from "react-icons/pi";

const NavigationCard = ({ icon, title, description, onClick }) => (
  <div className="  flex flex-col items-center m-6">
  <div 
      onClick={onClick}
      className="bg-button rounded-3xl p-4 text-center flex flex-col items-center cursor-pointer hover:bg-hover transition-all duration-300"
    >
        {icon}
        
    </div>
  <h2 className="md:text-xl text-l  font-semibold">{title}</h2>
  </div>
 
);

const NavigationCards = ({ onOpenWindow }) => {
  const cards = [
    {
      id: 'info',
      icon: <HiQuestionMarkCircle className="md:text-3xl text-2xl" />,
      title: 'A propos de moi'
    },
    {
      id: 'competences',
      icon: <FaCode className="md:text-3xl text-2xl" />,
      title: 'Compétences',
      description: 'Les compétences que j\'ai acquises durant mes études et projets'
    },
    {
      id: 'projets',
      icon: <FaLaptopCode className="md:text-3xl text-2xl" />,
      title: 'Projets',
      description: 'Les différents projets que j\'ai réalisé en classe ou en stage'
    },
    {
      id: 'parcours',
      icon: <FaGraduationCap className="md:text-3xl text-2xl" />,
      title: 'Mon Parcours',
    },
    {
      id: 'cv',
      icon: <HiDocumentText className="md:text-3xl text-2xl" />,
      title: 'CV'
    },
    {
      id: 'films',
      icon: <PiFilmSlateFill className="md:text-3xl text-2xl" />,
      title: 'Films'
    },
    {
      id: 'games',
      icon: <FaGamepad className="md:text-3xl text-2xl" />,
      title: 'Jeux Vidéo'
    },
    
    
  ];

  return (
    <div className="md:w-3/4 mx-auto grid grid-cols-3 md:grid-cols-3 gap-6">
        {cards.map(card => (
        <NavigationCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
          onClick={() => onOpenWindow(card.id)}
        />
      ))}
      
    </div>
  );
};

export default NavigationCards;