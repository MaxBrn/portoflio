import Hero from '../components/sections/Hero';
import NavigationCards from '../components/sections/NavigationCards';
import WindowsContainer from '../components/sections/WindowsContainer';
import { useWindowManager } from '../hooks/useWindowManager';
import { FaUser, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Index() {
  const { openWindows, openWindow, closeWindow } = useWindowManager();

  // Désactiver le scroll de la page en permanence
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Fix pour la hauteur mobile - utilise la hauteur visuelle
    const setVH = () => {
      // Utilise visualViewport si disponible, sinon innerHeight
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      let vh = height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    
    // Écoute les changements de taille du viewport visuel
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVH);
    } else {
      window.addEventListener('resize', setVH);
    }

    // Cleanup au démontage du composant
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setVH);
      } else {
        window.removeEventListener('resize', setVH);
      }
    };
  }, []);

  return (
    <div 
      className="bg-cover bg-center bg-[url('/image/background.jpg')] overflow-hidden min-h-screen"
      style={{ height: 'calc(var(--vh, 1vh) * 100)', minHeight: '-webkit-fill-available' }}
    >
      
      <div className="h-full flex items-center justify-center p-2 md:p-4">
        
        {/* Fenêtre principale avec le même style que vos autres fenêtres */}
        <div className="bg-border rounded-lg shadow-xl border-4 border-border overflow-hidden transition-all duration-300 w-full h-full md:h-auto md:w-3/4 md:max-w-screen-md flex flex-col">
          
          {/* Barre de titre identique à vos autres fenêtres */}
          <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none flex-shrink-0'>
            
            <div className="flex items-center gap-2">
              <FaUser className="text-lg" />
              <span className="font-medium text-sm md:text-base">Portfolio - Maxime Brunin</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                className="w-4 h-4 bg-red-400 rounded-full hover:bg-red-500 transition"
                onClick={() => {alert("Erreur fatale impossible de fermer ce beau portfolio, enfin si vous pouvez mais pas comme ça je l'ai pas codé.")}}
              >
                <FaTimes className="w-2 h-2 m-auto text-red-800" />
              </button>
            </div>
          </div>

          {/* Contenu de la fenêtre - scrollable */}
          <div className="flex-1 overflow-y-auto bg-bgColor">
            <div className="p-4 md:p-6 min-h-full item-center justify-center flex">
              <header className="flex items-center justify-center min-h-full">
                <div className="flex lg:flex-row flex-col lg:w-full w-full items-center justify-center gap-6 md:gap-12">
                  
                  <Hero />
                  
                  {/* Section Navigation */}
                  <NavigationCards onOpenWindow={openWindow} />
                  
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* Fenêtres modales par-dessus */}
      <WindowsContainer 
        openWindows={openWindows}
        onCloseWindow={closeWindow}
      />
    </div>
  );
}