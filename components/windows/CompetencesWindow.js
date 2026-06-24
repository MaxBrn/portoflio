import { useState } from 'react';
import { competencesData } from '../../data/competences';
import SkeletonImage from '../ui/SkeletonImage';

// Badge individuel pour chaque compétence
const SkillBadge = ({ item, onImageLoad, forceShow }) => {
    return (
        <div className="cursor-default flex-shrink-0">
            <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4 w-20 sm:w-24 md:w-28">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-white/5 overflow-hidden">
                    <SkeletonImage
                        src={item.icon}
                        alt={item.name}
                        sizes="(max-width: 768px) 48px, 64px"
                        className="object-contain p-2"
                        onImageLoad={onImageLoad}
                        forceShow={forceShow}
                    />
                </div>
                <span className="font-medium text-xs sm:text-sm text-center leading-tight select-none px-1">
          {item.name}
        </span>
            </div>
        </div>
    );
};

// Section pour une catégorie de compétences
const CategorySection = ({ title, items, onImageLoad, forceShow }) => {
    return (
        <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border"></div>
                <div className="flex-shrink-0">
                    <h3 className="text-base sm:text-lg font-semibold text-center">
                        {title}
                    </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {items.map((item) => (
                    <SkillBadge
                        key={item.id}
                        item={item}
                        onImageLoad={onImageLoad}
                        forceShow={forceShow}
                    />
                ))}
            </div>
        </div>
    );
};

// Fenêtre principale des compétences
const CompetencesWindow = () => {
    // Calcul du nombre total d'icônes à charger à travers toutes les catégories
    const totalItemsCount = Object.values(competencesData).reduce((total, category) => total + category.items.length, 0);

    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const allImagesLoaded = loadedImagesCount >= totalItemsCount;

    return (
        <div className="md:w-3/4 mx-auto cursor-default">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="space-y-6 sm:space-y-8">
                    {Object.entries(competencesData).map(([key, competence]) => (
                        <CategorySection
                            key={key}
                            title={competence.title}
                            items={competence.items}
                            onImageLoad={() => setLoadedImagesCount(prev => prev + 1)}
                            forceShow={allImagesLoaded}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompetencesWindow;