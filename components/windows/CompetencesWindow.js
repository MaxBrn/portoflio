import { competencesData } from '../../data/competences';

const SkillBadge = ({ item, index }) => {
  return (
    <div 
      className="cursor-default"
      style={{ 
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center bg-white/5">
          <img 
            src={item.src} 
            alt={item.alt} 
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" 
          />
        </div>
        <span className="font-medium text-xs sm:text-sm text-center leading-tight select-none px-1">
          {item.title}
        </span>
      </div>
    </div>
  );
};

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      {/* En-tête de catégorie */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
        <div className="flex-shrink-0">
          <h3 className="text-base sm:text-lg font-semibold text-button/90">
            {title}
          </h3>
          <div className="h-px bg-gradient-to-r from-button/50 to-transparent w-full mt-1"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border/30 to-transparent"></div>
        <div className="text-xs text-button/60 font-medium px-2 sm:px-3 py-1 rounded-full bg-button/5">
          {items.length}
        </div>
      </div>

      {/* Grille responsive des compétences */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
        {items.map((item, index) => (
          <SkillBadge
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const CompetencesWindow = () => {
  return (
    <div className="mb-12 sm:mb-16 md:mb-20">
      {/* Container principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Sections de compétences */}
        <div className="space-y-6 sm:space-y-8">
          {Object.entries(competencesData).map(([key, competence]) => (
            <CategorySection
              key={key}
              title={competence.title}
              items={competence.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetencesWindow;