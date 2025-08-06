import { MdDownload } from "react-icons/md";

// Fenêtre d'affichage du CV avec bouton de téléchargement
const CVWindow = () => {
  return (
    <div className="bg-bgColor flex flex-col items-center mb-10">
      
      {/* Section bouton de téléchargement */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <a
          href="/cv.pdf"
          download="CV_Brunin_Maxime.pdf"
          className="px-4 py-2 bg-button rounded-lg hover:bg-hover mx-auto flex justify-center items-center gap-1"
        >
          <MdDownload className="text-xl"/>
          Télécharger
        </a>
      </div>

      {/* Affichage de l'image du CV */}
      <div className="overflow-hidden rounded-lg">
        <img 
          src="/image/cv.png" 
          alt="CV Brunin Maxime - Version visuelle"
          className="md:w-2/3 h-auto object-contain mx-auto"
        />
      </div>
      
    </div>
  );
};

export default CVWindow;