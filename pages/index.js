import Hero from '../components/sections/Hero';
import NavigationCards from '../components/sections/NavigationCards';
import WindowsContainer from '../components/sections/WindowsContainer';
import { useWindowManager } from '../hooks/useWindowManager';
import { FaUser, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Index() {
  const { openWindows, openWindow, closeWindow } = useWindowManager();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const setVH = () => {
      const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      let vh = height * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setVH);
    } else {
      window.addEventListener('resize', setVH);
    }

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

          {/* Fenêtre principale */}
          <div className="bg-border rounded-lg shadow-2xl border-4 border-border overflow-hidden transition-all duration-300 w-full h-full md:h-auto md:w-4/5 lg:w-3/4 max-w-6xl flex flex-col">

            <div className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none flex-shrink-0'>
              <div className="flex items-center gap-2">
                <FaUser className="text-lg text-text" />
                <span className="font-bold text-sm md:text-base text-text">Portfolio - Maxime Brunin</span>
              </div>

              <div className="flex gap-2">
                <button
                    className="w-4 h-4 bg-red-400 rounded-full hover:bg-red-500 transition shadow-sm"
                    onClick={() => {alert("Erreur fatale impossible de fermer ce beau portfolio, enfin si vous pouvez mais pas comme ça je l'ai pas codé.")}}
                >
                  <FaTimes className="w-2 h-2 m-auto text-red-800" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-bgColor">
              <div className="p-4 md:p-8 min-h-full items-center justify-center flex">

                {/* Le conteneur qui sépare le Hero et la Grille en deux blocs distincts */}
                <div className="flex flex-col lg:flex-row w-full max-w-5xl items-stretch justify-center gap-6 md:gap-8">
                  <Hero />
                  <NavigationCards onOpenWindow={openWindow} />
                </div>

              </div>
            </div>
          </div>
        </div>

        <WindowsContainer
            openWindows={openWindows}
            onCloseWindow={closeWindow}
        />
      </div>
  );
}