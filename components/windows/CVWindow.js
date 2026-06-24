import { MdDownload } from "react-icons/md";
import SkeletonImage from '../ui/SkeletonImage';

const CVWindow = () => {
    return (
        <div className="bg-bgColor p-2 mb-6">

            {/* Fenêtre du Lecteur PDF */}
            <div className="max-w-4xl mx-auto bg-bgColor2 rounded-xl shadow-sm border border-border/60 flex flex-col overflow-hidden">

                {/* Barre d'outils */}
                <div className="bg-bgColor2 border-b border-border/50 px-4 py-3 flex items-center justify-between select-none shrink-0">

                    {/* Informations sur le fichier */}
                    <div className="flex items-center gap-3">
                        <div className="bg-red-500/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                            PDF
                        </div>
                        <span className="text-sm font-bold text-text truncate">
              CV_Brunin_Maxime.pdf
            </span>
                    </div>

                    {/* Action de téléchargement */}
                    <div>
                        <a
                            href="/cv.pdf"
                            download="CV_Brunin_Maxime.pdf"
                            className="group flex items-center gap-2 px-4 py-2 hover:bg-hover text-text text-sm font-bold rounded-lg transition-all "
                            title="Télécharger le fichier PDF"
                        >
                            <MdDownload className="text-lg group-hover:scale-110 transition-transform duration-200" />
                            <span>Télécharger</span>
                        </a>
                    </div>
                </div>

                {/* Zone de visualisation assombrie pour le contraste */}
                <div className="bg-text/10 p-4 md:p-8 flex justify-center">

                    <div className="relative w-full max-w-2xl aspect-[210/297] bg-white shadow-2xl shrink-0">
                        <SkeletonImage
                            src="/image/cv.png"
                            alt="Curriculum Vitae de Maxime Brunin"
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CVWindow;