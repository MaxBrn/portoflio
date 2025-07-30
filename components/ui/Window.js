import { useState, useRef, useEffect } from 'react';
import { FaTimes, FaExpand } from "react-icons/fa";
import WindowButton from './WindowButton';

const Window = ({ isOpen, onClose, title, icon, children, windowId }) => {
  const windowRef = useRef(null);
  
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        ref={windowRef}
        className='absolute bg-border rounded-lg shadow-xl border-4 border-border overflow-hidden transition-all duration-300  md:top-10 md:left-10 md:right-10 md:bottom-10 top-1 left-1 right-1 bottom-1'>
        {/* Barre de titre */}
        <div 
          className='bg-border px-4 py-2 flex items-center justify-between border-b border-border select-none '>
        
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-medium">{title}</span>
          </div>
          
          <div className="flex gap-2">
            
            <WindowButton
              color="red"
              icon={<FaTimes className="w-2 h-2 m-auto text-red-800" />}
              onClick={onClose}
              onMouseDown={(e) => e.stopPropagation()}
            />
          </div>
        </div>
        
        <div className="p-6 h-full overflow-y-auto bg-bgColor">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Window;