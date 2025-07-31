import Hero from '../components/sections/Hero';
import NavigationCards from '../components/sections/NavigationCards';
import WindowsContainer from '../components/sections/WindowsContainer';
import { useWindowManager } from '../hooks/useWindowManager';
import { FaUser, FaTimes } from "react-icons/fa";
import { useState } from 'react';

export default function Index() {
  const { openWindows, openWindow, closeWindow } = useWindowManager();
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/image/background.jpg')] md:bg-fixed">
      
      <div className="min-h-screen flex items-center justify-center p-4">
        
        {/* Fenêtre principale avec le même style que vos autres fenêtres */}
        <div className={`bg-border rounded-lg shadow-xl border-4 border-border overflow-hidden transition-all duration-300 md:w-1/2 w-full`}>
          
          {/* Barre de titre identique à vos autres fenêtres */}
          <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none'>
            
            <div className="flex items-center gap-2">
              <FaUser className="text-lg" />
              <span className="font-medium">Portfolio - Maxime Brunin</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                className="w-4 h-4 bg-red-400 rounded-full hover:bg-red-500 transition"
                onClick={() => {/* Optionnel: action de fermeture */}}
              >
                <FaTimes className="w-2 h-2 m-auto text-red-800" />
              </button>
            </div>
          </div>

          {/* Contenu de la fenêtre */}
          
            <div className="h-full overflow-y-auto bg-bgColor">
              <div className="p-6">
                <header className="flex items-center justify-center min-h-full">
                  <div className="flex lg:flex-row flex-col lg:w-full w-full items-center justify-center gap-12">
                    
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