const WindowButton = ({ color, icon, onClick, onMouseDown, className = "" }) => {
  const colorClasses = {
    red: "bg-red-400 hover:bg-red-500"
  };

  return (
    <button 
      onClick={onClick}
      onMouseDown={onMouseDown}
      className={`w-4 h-4 ${colorClasses[color]} rounded-full transition ${className}`}
    >
      {icon}
    </button>
  );
};

export default WindowButton;