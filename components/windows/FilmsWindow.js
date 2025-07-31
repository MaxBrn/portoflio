import { filmsData } from "@/data/films";
import Link from "next/link";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import WindowButton from '../ui/WindowButton'; // Ajustez le chemin selon votre structure
const FilmWindow = () => {

  const [selectedFilm, setSelectedFilm] = useState(null);
  
  return (
    <div className="bg-bgColor pb-20 md:pt-10">
        <div filmsData={filmsData} className="w-3/4 mx-auto pb-30 text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button mb-10">
            <p className=" mb-10">Voici la liste de mes films préférés ! </p>
            <p> Bon pas très longue me diriez vous, 
              mais justement cette liste contient les films qui m'ont réellement marqué, voir même fait réfléchir
              sur ma vie. Ils ont clairement eu un impact sur moi et ont une place très forte dans mon cœur. J'aime énormément d'autres films, mais ils ne m'ont pas forcément plus marqué que ceux présents dans cette liste.
            </p><br/>
            <p>
              Si vous voulez voir tous les films que j'ai vu et que j'aime, alors je peux vous rediriger vers mon compte Letterboxd, qui lui contient 
              tous les films que j'ai vu, même les plus mauvais (oui oui je parle de toi Dragon Ball Evolution).
            </p>
            <Link href="https://boxd.it/b85TV" target="_blank" className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-500 hover:text-blue-700 mt-4">
              <FaSquareLetterboxd className="text-2xl" />
              Mon compte Letterboxd
            </Link>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-2/3 mx-auto">
                {filmsData.map((film, index) => (
                    <div key={index} className="">
                        <img 
                          onClick={() => setSelectedFilm(film)} 
                          src={film.image} 
                          alt={film.title} 
                          className="w-full object-fit rounded-lg mb-4 border border-border shadow-lg shadow-button cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                        <h2 className="text-l font-semibold mb-2">{film.title}</h2>
                        <p className="text-l"> {film.director}</p>
                    </div>
                ))}
            </div>
            <p className="mt-20">D'autres films arriveront par la suite...</p>
        </div>:
          {selectedFilm && (
            <div className="fixed inset-0 z-50 md:bg-black/60">
              <div className='absolute bg-border rounded-lg shadow-xl border-4 border-border overflow-hidden transition-all duration-300 md:top-20 md:left-20 md:right-20 md:bottom-20 top-1 left-1 right-1 bottom-1'>
                {/* Barre de titre */}
                <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none'>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{selectedFilm.title}</span>
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
                <div className="w-3/4 mx-auto">
            {/* Contenu du film */}
            <div className="">
              <div className="flex flex-col gap-8 items-center text-center">
                {/* Image du film */}
                <div className="md:w-1/2 flex flex-row items-center gap-10">
                  <img 
                    src={selectedFilm.image} 
                    alt={selectedFilm.title} 
                    className="w-1/3 rounded-lg border border-border shadow-lg shadow-button"
                  />
<div>
                    <h1 className="text-3xl font-bold mb-2">{selectedFilm.title} ({selectedFilm.year})</h1>
                    <p className="text-xlmb-4">Réalisé par {selectedFilm.director}</p>
                  </div>
                </div>
                
                <div className="w-3/4 space-y-6">
                  
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Mon avis</h2>
                    <p className="text-base leading-relaxed text-gray-200">
                      {selectedFilm.description}
                    </p>
                  </div>
                  
                </div>
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