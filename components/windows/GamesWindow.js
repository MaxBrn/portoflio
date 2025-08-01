import { gamesData } from "@/data/games";
import Link from "next/link";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import WindowButton from '../ui/WindowButton'; // Ajustez le chemin selon votre structure
const GamesWindow = () => {

  const [selectedGame, setSelectedGame] = useState(null);
  
  return (
    <div className="bg-bgColor pb-20 md:pt-10">
        <div filmsData={gamesData} className="md:w-3/4 mx-auto pb-30 text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button mb-10">
            <p className=" mb-10">Voici la liste des jeux qui m'ont marqué ! </p>
           <p className="text-left leading-relaxed md:leading-loose"> La liste ne contient pas tous les jeux que j'ai fait dans ma vie,
            elle me prendrait bien trop de temps à faire et j'en oublierais certains, elle contient surtout les jeux
            qui m'ont rééllement marqué et ont forgé mes goûts en matière de jeux vidéo. 
            </p><br/>
            <p className="text-left leading-relaxed md:leading-loose">
              Que ce soit des jeux de mon enfance, des jeux qui on fait vibrer l'adulte que je suis devenu, 
              des jeux sur lesquels j'ai passé des centaines d'heures, vous trouverez dans cette liste ces jeux qui ont fait le 
              fan de jeu vidéo que je suis aujourd'hui.
            </p>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-2/3 mx-auto">
                {gamesData.map((game, index) => (
                    <div key={index} className="">
                        <img 
                          onClick={() => setSelectedGame(game)} 
                          src={game.image} 
                          alt={game.title} 
                          className="w-full object-fit rounded-lg mb-4 border border-border shadow-lg shadow-button cursor-pointer hover:opacity-80 transition-opacity" 
                        />
                        <h2 className="text-l font-semibold mb-2">{game.title}</h2>
                        <p className="text-l"> {game.studio}</p>
                    </div>
                ))}
            </div>
            <p className="mt-20">D'autres jeux arriveront par la suite...</p>
        </div>
          {selectedGame && (
            <div className="fixed inset-0 z-50 md:bg-black/60">
              <div className='absolute bg-border rounded-lg shadow-xl border-4 border-border overflow-hidden transition-all duration-300 md:top-20 md:left-20 md:right-20 md:bottom-20 top-1 left-1 right-1 bottom-1'>
                {/* Barre de titre */}
                <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none'>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{selectedGame.title}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <WindowButton
                      color="red"
                      icon={<FaTimes className="w-2 h-2 m-auto text-red-800" />}
                      onClick={() => setSelectedGame(null)}
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
                    src={selectedGame.image} 
                    alt={selectedGame.title} 
                    className="w-1/3 rounded-lg border border-border shadow-lg shadow-button"
                  />
<div>
                    <h1 className="text-3xl font-bold mb-2">{selectedGame.title} ({selectedGame.year})</h1>
                    <p className="text-xlmb-4"> par {selectedGame.studio}</p>
                  </div>
                </div>
                
                <div className="md:w-3/4 space-y-6">
                  
                  
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Mon avis</h2>
                    <p className="text-left leading-relaxed md:leading-loose">
                      {selectedGame.description}
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

export default GamesWindow;