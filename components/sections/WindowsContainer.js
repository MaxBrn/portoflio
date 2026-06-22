import Window from '../ui/Window';
import CompetencesWindow from '../windows/CompetencesWindow';
import ParcoursWindow from '../windows/ParcoursWindow';
import CVWindow from '../windows/CVWindow';
import InfoWindow from '../windows/InfoWindow';
import FilmsWindow from '../windows/FilmsWindow';
import GamesWindow from '../windows/GamesWindow';
import { FaCode, FaLaptopCode, FaGraduationCap, FaGamepad } from "react-icons/fa";
import { HiQuestionMarkCircle, HiDocumentText } from "react-icons/hi";
import { PiFilmSlateFill } from "react-icons/pi";

// Container pour toutes les fenêtres du site
const WindowsContainer = ({ openWindows, onCloseWindow }) => {
  return (
    <>
      {/* Fenêtre Compétences */}
      <Window
        isOpen={openWindows.competences}
        onClose={() => onCloseWindow('competences')}
        title="Compétences"
        icon={<FaCode />}
        windowId="competences"
      >
        <CompetencesWindow />
      </Window>

      {/* Fenêtre Parcours */}
      <Window
        isOpen={openWindows.parcours}
        onClose={() => onCloseWindow('parcours')}
        title="Mon Parcours"
        icon={<FaGraduationCap />}
        windowId="parcours"
      >
        <ParcoursWindow />
      </Window>

      {/* Fenêtre CV */}
      <Window
        isOpen={openWindows.cv}
        onClose={() => onCloseWindow('cv')}
        title="Mon CV"
        icon={<HiDocumentText />}
        windowId="cv"
      >
        <CVWindow />
      </Window>

      {/* Fenêtre Présentation */}
      <Window
        isOpen={openWindows.info}
        onClose={() => onCloseWindow('info')}
        title="Présentation"
        icon={<HiQuestionMarkCircle />}
        windowId="info"
      >
        <InfoWindow />
      </Window>

      {/* Fenêtre Films */}
      <Window
        isOpen={openWindows.films}
        onClose={() => onCloseWindow('films')}
        title="Mes films préférés"
        icon={<PiFilmSlateFill />}
        windowId="films"
      >
        <FilmsWindow />
      </Window>

      {/* Fenêtre Jeux Vidéo */}
      <Window
        isOpen={openWindows.games}
        onClose={() => onCloseWindow('games')}
        title="Mes jeux vidéo préférés"
        icon={<FaGamepad />}
        windowId="games"
      >
        <GamesWindow />
      </Window>
    </>
  );
};

export default WindowsContainer;