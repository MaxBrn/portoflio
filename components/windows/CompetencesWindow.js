import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import { LuRefreshCw } from "react-icons/lu";

const SkillBadge = ({ item, index }) => {
  return (
    <div className="cursor-default flex-shrink-0">
      <div className="flex flex-col items-center text-center p-2 sm:p-3 md:p-4 w-20 sm:w-24 md:w-28">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center bg-white/5">
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
        <span className="font-medium text-xs sm:text-sm text-center leading-tight select-none px-1">
          {item.name}
        </span>
      </div>
    </div>
  );
};

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      {/* En-tête de catégorie */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border"></div>
        <div className="flex-shrink-0">
          <h3 className="text-base sm:text-lg font-semibold text-center">
            {title}
          </h3>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
      </div>
      {/* Grille responsive des compétences centrée */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {items.map((item, index) => (
          <SkillBadge
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const CompetencesWindow = () => {
  const [competencesData, setCompetencesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getCompetencesData() {
    setIsLoading(true);
    setError(false);
    try {
      // Requête pour récupérer les technologies avec leurs catégories
      const { data: technologies, error } = await supabase
        .from('technologies')
        .select(`
          id,
          name,
          icon,
          categorie,
          techCategories (
            id,
            name
          )
        `)
        .not('icon', 'is', null) // Filtre pour ne prendre que les technologies avec une icône
        .order('id', { ascending: true });

      if (error) {
        console.error('Erreur lors du chargement des compétences:', error);
        setError(true);
        return;
      }

      if (technologies && technologies.length > 0) {
        // Grouper les technologies par catégorie
        const groupedData = technologies.reduce((acc, tech) => {
          const categoryName = tech.techCategories?.name || 'Autres';
          
          if (!acc[categoryName]) {
            acc[categoryName] = {
              title: categoryName,
              items: []
            };
          }
          
          acc[categoryName].items.push({
            id: tech.id,
            name: tech.name,
            icon: tech.icon
          });
          
          return acc;
        }, {});
        
        setCompetencesData(groupedData);
      } else {
        console.log('Aucune compétence trouvée');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCompetencesData();
  }, []);

  // État de chargement
  if (isLoading) {
    return (
      <div className="bg-bgColor pb-20 flex md:pt-10">
        <div className="text-center border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button w-auto mx-auto">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <p className="mt-3">Chargement des compétences...</p>
          </div>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="bg-bgColor pb-20 md:pt-10 flex">
        <div className="w-auto mx-auto text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button">
            <p className="text-red-500">Oops on dirait qu'il y a eu un problème dans la récupération des données. </p>
            <button
              onClick={() => getCompetencesData()}
              className="mt-4 p-2 bg-button rounded-full hover:bg-hover hover:rotate-180 transition-transform duration-300"
            >
              <LuRefreshCw className="text-xl " />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:w-3/4 mx-auto cursor-default">
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