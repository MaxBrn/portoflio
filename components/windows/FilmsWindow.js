'use client'
import Link from "next/link";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import WindowButton from '../ui/WindowButton';
import { supabase } from '../../utils/supabase';

const FilmWindow = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    async function getFilmsData() {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data: films, error } = await supabase
          .from('films')
          .select();
        
        if (error) {
          console.error('Erreur lors du chargement des films');
          return;
        }
        
        if (films && films.length > 0) {
          setFilmsData(films);
        } else {
          console.log('Aucun film trouvé');
        }
      } catch (err) {
        console.error('Erreur');
      } finally {
        setIsLoading(false);
      }
    }
    
    getFilmsData();
  }, []);

  // État de chargement
  if (isLoading) {
    return (
      <div className="bg-bgColor pb-20 flex md:pt-10">
        <div class="text-center border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button w-auto mx-auto">
          <div role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <p className="mt-3">Chargement des films...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bgColor pb-20 md:pt-10">
      <div className="md:w-3/4 mx-auto pb-30 text-center">
        <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button mb-10">
          <p className="mb-10">Voici la liste de mes films préférés ! </p>
          <p className="text-left leading-relaxed md:leading-loose">
            Bon pas très longue me diriez vous, 
            mais justement cette liste contient les films qui m'ont réellement marqué, voir même fait réfléchir
            sur ma vie. Ils ont clairement eu un impact sur moi et ont une place très forte dans mon cœur. J'aime énormément d'autres films, mais ils ne m'ont pas forcément plus marqué que ceux présents dans cette liste.
          </p><br/>
          <p className="text-left leading-relaxed md:leading-loose">
            Si vous voulez voir tous les films que j'ai vu et que j'aime, alors je peux vous rediriger vers mon compte Letterboxd, qui lui contient 
            tous les films que j'ai vu, même les plus mauvais (oui oui je parle de toi Dragon Ball Evolution).
          </p>
          <Link href="https://boxd.it/b85TV" target="_blank" className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-500 hover:text-blue-700 mt-4">
            <FaSquareLetterboxd className="text-2xl" />
            Mon compte Letterboxd
          </Link>
        </div>
        
        {/* Affichage des films ou message si aucun film */}
        {filmsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-2/3 mx-auto">
            {filmsData.map((film) => (
              <div key={film.id} className="">
                <img 
                  onClick={() => setSelectedFilm(film)} 
                  src={film.image} 
                  alt={film.title} 
                  className="w-full object-cover rounded-lg mb-4 border border-border shadow-lg shadow-button cursor-pointer hover:opacity-80 transition-opacity" 
                />
                <h2 className="text-lg font-semibold mb-2">{film.title}</h2>
                <p className="text-lg">{film.director}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>Aucun film trouvé pour le moment.</p>
          </div>
        )}
        
        <p className="mt-20">D'autres films arriveront par la suite...</p>
      </div>

      {/* Modal pour le film sélectionné */}
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
              <div className="md:w-3/4 mx-auto mb-10">
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
                        <p className="text-xl mb-4">Réalisé par {selectedFilm.director}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4 space-y-6">
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Mon avis</h2>
                        <p className="text-left leading-relaxed md:leading-loose">
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