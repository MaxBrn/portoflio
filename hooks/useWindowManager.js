import { useState } from 'react';

// Hook pour gérer quelles fenêtres sont ouvertes ou fermées dans le portfolio
export const useWindowManager = () => {
  // Etat qui stocke l'ouverture de chaque fenêtre
  const [openWindows, setOpenWindows] = useState({
    competences: false,
    projets: false,
    parcours: false,
    cv: false,
    info: false,
    films: false,
    games: false
  });

  // Ouvre une fenêtre en la mettant à true
  const openWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: true
    }));
  };

  // Ferme une fenêtre en la mettant à false
  const closeWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: false
    }));
  };

  // Vérifie si une fenêtre est ouverte
  const isWindowOpen = (windowName) => openWindows[windowName];

  // On retourne tout ce qu'il faut pour gérer les fenêtres
  return {
    openWindows,
    openWindow,
    closeWindow,
    isWindowOpen
  };
};