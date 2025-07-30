import { useState } from 'react';

export const useWindowManager = () => {
  const [openWindows, setOpenWindows] = useState({
    competences: false,
    projets: false,
    parcours: false,
    cv: false,
    info: false,
    films: false,
    games: false
  });

  const openWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: true
    }));
  };

  const closeWindow = (windowName) => {
    setOpenWindows(prev => ({
      ...prev,
      [windowName]: false
    }));
  };

  const isWindowOpen = (windowName) => openWindows[windowName];

  return {
    openWindows,
    openWindow,
    closeWindow,
    isWindowOpen
  };
};