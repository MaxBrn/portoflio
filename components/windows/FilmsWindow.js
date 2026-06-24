import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import WindowButton from '../ui/WindowButton';
import SkeletonImage from '../ui/SkeletonImage';
import { filmsData } from '../../data/films';

const FilmWindow = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);

    // Gestion de l'affichage synchronisé
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const allImagesLoaded = loadedImagesCount >= filmsData.length;

    return (
        <div className="bg-bgColor p-2 mb-6">
            <div className="max-w-6xl mx-auto">

                {/* Grille des films */}
                {filmsData.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filmsData.map((film) => (
                            <div key={film.id} className="relative h-full w-full">
                                <div
                                    onClick={() => setSelectedFilm(film)}
                                    className="group h-full flex flex-col bg-bgColor2 border border-border/60 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-button/30 transition duration-300 ease-out transform-gpu will-change-transform backface-hidden cursor-pointer"
                                >
                                    <div className="relative w-full aspect-[2/3] bg-bgColor border-b border-border/50 transform-gpu backface-hidden">
                                        <SkeletonImage
                                            src={film.image}
                                            alt={`Affiche de ${film.title}`}
                                            sizes="(max-width: 768px) 50vw, 20vw"
                                            className="object-cover transform-gpu"
                                            onImageLoad={() => setLoadedImagesCount(prev => prev + 1)}
                                            forceShow={allImagesLoaded}
                                        />
                                    </div>
                                    <div className="p-3 text-left">
                                        <h2 className="text-sm font-bold text-text truncate transition-colors duration-300">
                                            {film.title}
                                        </h2>
                                        <p className="text-xs text-text/60 truncate mt-0.5">{film.directors?.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-bgColor2 border border-border border-dashed rounded-xl">
                        <p className="text-text/60 font-medium">Aucun film trouvé pour le moment.</p>
                    </div>
                )}

            </div>

            {/* Modale détaillée */}
            {selectedFilm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-text/10 backdrop-blur-sm">
                    <div className='w-full max-w-5xl max-h-[85vh] bg-border rounded-lg shadow-2xl border-4 border-border overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in zoom-in-95'>

                        <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none shrink-0'>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-text">{selectedFilm.title} - {selectedFilm.directors?.name}</span>
                            </div>

                            <div className="flex gap-2">
                                <WindowButton
                                    color="red"
                                    icon={<FaTimes className="w-2 h-2 m-auto text-red-800" />}
                                    onClick={() => setSelectedFilm(null)}
                                    onMouseDown={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>

                        <div className="p-6 h-full overflow-y-auto bg-bgColor">
                            <div className="flex flex-col md:flex-row gap-8 items-center">

                                <div className="w-full md:w-1/3 shrink-0 relative aspect-[2/3] rounded-xl overflow-hidden border border-border shadow-md">
                                    <SkeletonImage
                                        src={selectedFilm.image}
                                        alt={`Affiche de ${selectedFilm.title}`}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1 w-full bg-bgColor2 p-6 md:p-8 rounded-xl border border-border/50 shadow-sm flex flex-col text-left">
                                    <div className="border-b border-border/30 pb-4 mb-6">
                                        <h1 className="text-3xl font-bold text-text mb-2 tracking-tight">
                                            {selectedFilm.title} <span className="text-text/60 font-normal text-2xl">({selectedFilm.year})</span>
                                        </h1>
                                        <p className="text-lg text-text/60 font-medium">
                                            Réalisé par {selectedFilm.directors?.name}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="text-xs font-bold text-text/50 mb-2 uppercase tracking-wider">Synopsis</h2>
                                        <p className="text-text/80 leading-relaxed text-sm md:text-base">
                                            {selectedFilm.synopsis || "Résumé non disponible."}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <h2 className="text-xs font-bold text-text/60 mb-2 uppercase tracking-wider">Ce que j'en retiens</h2>
                                        <p className="text-text/90 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
                                            {selectedFilm.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default FilmWindow;