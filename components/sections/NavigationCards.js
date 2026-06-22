import { FaCode, FaLaptopCode, FaGraduationCap, FaGamepad } from "react-icons/fa";
import { HiQuestionMarkCircle, HiDocumentText } from "react-icons/hi";
import { PiFilmSlateFill } from "react-icons/pi";

// Carte individuelle de navigation
const NavigationCard = ({ icon, title, onClick }) => (
  <div
      onClick={onClick}
      className="flex flex-col items-center p-3 mb-0 hover:bg-hover rounded-2xl transition-all duration-300 cursor-pointer">
    {/* Bouton cliquable avec icône */}
    <div 
      onClick={onClick}
      className="p-4 pb-3 text-center flex flex-col items-center"
    >
      {icon}
    </div>
    {/* Titre de la carte */}
    <h2 className="md:text-xl text-l mt-3 font-semibold">{title}</h2>
  </div>
);

// Grille de toutes les cartes de navigation
const NavigationCards = ({ onOpenWindow }) => {
  // Liste des cartes avec leurs infos
  const cards = [
    {
      id: 'info',
      icon: <HiQuestionMarkCircle className="md:text-3xl text-2xl" />,
      title: 'Présentation'
    },
    {
      id: 'competences',
      icon: <FaCode className="md:text-3xl text-2xl" />,
      title: 'Compétences'
    },
    {
      id: 'parcours',
      icon: <FaGraduationCap className="md:text-3xl text-2xl" />,
      title: 'Parcours'
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
    }
  ];

  return (
    <div className="md:w-3/4 mx-auto grid grid-cols-3 md:grid-cols-3 gap-6 text-center">
      {/* Affichage de toutes les cartes */}
      {cards.map(card => (
        <NavigationCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          onClick={() => onOpenWindow(card.id)}
        />
      ))}
    </div>
  );
};

export default NavigationCards;