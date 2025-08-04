import Window from '../ui/Window';
import CompetencesWindow from '../windows/CompetencesWindow';
import ProjetsWindow from '../windows/ProjetsWindow';
import ParcoursWindow from '../windows/ParcoursWindow';
import CVWindow from '../windows/CVWindow';
import InfoWindow from '../windows/InfoWindow';
import FilmsWindow from '../windows/FilmsWindow';
import GamesWindow from '../windows/GamesWindow';
import ActusWindow from '../windows/ActusWindow'
import { FaCode, FaLaptopCode, FaGraduationCap, FaGamepad   } from "react-icons/fa";
import { HiQuestionMarkCircle,HiDocumentText } from "react-icons/hi";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoNewspaper } from "react-icons/io5";

const WindowsContainer = ({ openWindows, onCloseWindow }) => {
  return (
    <>
      <Window
        isOpen={openWindows.competences}
        onClose={() => onCloseWindow('competences')}
        title="Compétences"
        icon={<FaCode />}
        windowId="competences"
      >
        <CompetencesWindow />
      </Window>

      <Window
        isOpen={openWindows.projets}
        onClose={() => onCloseWindow('projets')}
        title="Projets"
        icon={<FaLaptopCode />}
        windowId="projets"
      >
        <ProjetsWindow />
      </Window>

      <Window
        isOpen={openWindows.parcours}
        onClose={() => onCloseWindow('parcours')}
        title="Mon Parcours"
        icon={<FaGraduationCap />}
        windowId="parcours"
      >
        <ParcoursWindow />
      </Window>

      <Window
        isOpen={openWindows.cv}
        onClose={() => onCloseWindow('cv')}
        title="Mon CV"
        icon={<HiDocumentText />}
        windowId="cv"
      >
        <CVWindow />
      </Window>

      <Window
        isOpen={openWindows.info}
        onClose={() => onCloseWindow('info')}
        title="Présentation"
        icon={<HiQuestionMarkCircle />}
        windowId="info"
      >
        <InfoWindow />
      </Window>

      <Window
        isOpen={openWindows.films}
        onClose={() => onCloseWindow('films')}
        title="Mes films préférés"
        icon={<PiFilmSlateFill />}
        windowId="films"
      >
        <FilmsWindow />
      </Window>

      <Window
        isOpen={openWindows.games}
        onClose={() => onCloseWindow('games')}
        title="Mes jeux vidéo préférés"
        icon={<FaGamepad />}
        windowId="games"
      >
        <GamesWindow />
      </Window>

      <Window
        isOpen={openWindows.actus}
        onClose={() => onCloseWindow('actus')}
        title="Les actualités"
        icon={<IoNewspaper />}
        windowId="actus"
      >
        <ActusWindow />
      </Window>
    </>
  );
};

export default WindowsContainer;