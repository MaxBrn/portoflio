import { FaCode, FaGraduationCap, FaGamepad } from "react-icons/fa";
import { HiQuestionMarkCircle, HiDocumentText } from "react-icons/hi";
import { PiFilmSlateFill } from "react-icons/pi";

// Carte individuelle de navigation (Style icône d'application)
const NavigationCard = ({ icon, title, onClick }) => (
    <div
        onClick={onClick}
        className="group flex flex-col items-center justify-center p-4 md:p-6 hover:bg-hover rounded-2xl transition-all duration-300 cursor-pointer :">
      <div className="text-text/80 mb-3 md:mb-4">
        {icon}
      </div>
      <h2 className="text-sm md:text-base font-bold text-text">{title}</h2>
    </div>
);

// Grille de toutes les cartes de navigation
const NavigationCards = ({ onOpenWindow }) => {
  const cards = [
    { id: 'info', icon: <HiQuestionMarkCircle className="text-4xl md:text-5xl" />, title: 'Présentation' },
    { id: 'competences', icon: <FaCode className="text-4xl md:text-5xl" />, title: 'Compétences' },
    { id: 'parcours', icon: <FaGraduationCap className="text-4xl md:text-5xl" />, title: 'Parcours' },
    { id: 'cv', icon: <HiDocumentText className="text-4xl md:text-5xl" />, title: 'CV' },
    { id: 'films', icon: <PiFilmSlateFill className="text-4xl md:text-5xl" />, title: 'Films' },
    { id: 'games', icon: <FaGamepad className="text-4xl md:text-5xl" />, title: 'Jeux Vidéo' }
  ];

  return (
      <div className="bg-bgColor2 border border-border/50 rounded-3xl p-6 md:p-8 shadow-sm w-full lg:w-2/3 flex items-center justify-center">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-center">
          {cards.map(card => (
              <NavigationCard
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  onClick={() => onOpenWindow(card.id)}
              />
          ))}
        </div>
      </div>
  );
};

export default NavigationCards;