import Hero from '../components/sections/Hero';
import NavigationCards from '../components/sections/NavigationCards';
import WindowsContainer from '../components/sections/WindowsContainer';
import { useWindowManager } from '../hooks/useWindowManager';

export default function Index() {
  const { openWindows, openWindow, closeWindow } = useWindowManager();

  return (
    <div>  
      <header className="h-screen bg-cover relative text-center bg-[url('/image/background.jpg')] md:bg-fixed px-4 flex items-center justify-center">
      <div className="flex md:flex-row flex-col md:w-2/3 w-full items-center justify-center gap-10 bg-bgColor/50 rounded-3xl p-4 mx-auto">
        <Hero />
        <NavigationCards onOpenWindow={openWindow} />
      </div>
        
      </header>

      <WindowsContainer 
        openWindows={openWindows}
        onCloseWindow={closeWindow}
      />
    </div>
  );
}