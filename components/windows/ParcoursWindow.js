import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import { LuRefreshCw } from "react-icons/lu";
const ParcoursWindow = () => {
  const [activeFilter, setActiveFilter] = useState('tout');
  const [parcoursData, setParcoursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getParcoursData() {
    setIsLoading(true);
    setError(false);
    
    try {
      const { data: parcours, error } = await supabase
        .from('parcours')
        .select(`
          *,
          typeParcours (
            name
          )
        `)
        .order('startDate', { ascending: false });
        
      if (error) {
        console.error('Erreur lors du chargement du parcours:', error);
        setError(true);
        return;
      }
      
      if (parcours && parcours.length > 0) {
        console.log(parcours)
        setParcoursData(parcours);
      } else {
        console.log('Aucune donnée trouvée');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getParcoursData();
  }, []);

  // Fonction pour formater la date selon le type (formation ou expérience)
  const formatDate = (startDate, endDate, typeName) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;
    
    // Pour les formations, on affiche seulement les années
    if (typeName === 'Formation') {
      const startYear = start.getFullYear();
      if (!end) return `Depuis ${startYear}`;
      
      const endYear = end.getFullYear();
      return startYear === endYear 
        ? `${startYear}` 
        : `${startYear}-${endYear}`;
    }
    
    // Pour les expériences, on affiche mois et année
    const formatMonthYear = (date) => {
      const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
                     'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };
    
    const startStr = formatMonthYear(start);
    if (!end) return `Depuis ${startStr}`;
    
    const endStr = formatMonthYear(end);
    return `${startStr} - ${endStr}`;
  };

  // Préparation des données selon le filtre
  const getDisplayData = () => {
    if (isLoading || error) return { grouped: false, items: [] };

    if (activeFilter === 'tout') {
      // Regroupement par catégories : En cours -> Expériences -> Formations
      const enCours = parcoursData.filter(item => item.current);
      const experiences = parcoursData.filter(item => item.typeParcours.name === 'Expérience' && !item.current);
      const formations = parcoursData.filter(item => item.typeParcours.name === 'Formation' && !item.current );
      
      return {
        grouped: true,
        sections: [
          { title: 'En cours', items: enCours, count: enCours.length },
          { title: 'Expériences', items: experiences, count: experiences.length },
          { title: 'Formations', items: formations, count: formations.length }
        ].filter(section => section.count > 0)
      };
    } else if (activeFilter === 'en-cours') {
      return {
        grouped: false,
        items: parcoursData.filter(item => item.current)
      };
    } else {
      return {
        grouped: false,
        items: parcoursData.filter(item => item.typeParcours.name === activeFilter)
      };
    }
  };

  const displayData = getDisplayData();

  const renderItem = (item, index) => {
    const typeName = item.typeParcours?.name || 'experience';
    const dateDisplay = formatDate(item.startDate, item.endDate, typeName);

    return (
      <div 
        key={index}
        className={`bg-bgColor2 border border-border rounded-lg p-6 transition-shadow hover:shadow-lg ${
          item.current ? 'border-l-4 border-l-button' : ''
        }`}
      >
        <div className="space-y-4">
          {/* En-tête avec titre et badges */}
          <div className="flex flex-col gap-3">
            <div className="flex md:flex-row flex-col items-start justify-between gap-4">
              <h3 className="md:text-xl text-l font-semibold text-textColor flex-1">
                {item.title}
              </h3>
              
              {/* Date */}
              <span className="bg-button text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                {dateDisplay}
              </span>
            </div>
            
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {item.current && (
                <span className="bg-button text-white text-xs px-2 py-1 rounded-full font-medium">
                  En cours
                </span>
              )}
              
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                typeName === 'Formation' 
                  ? 'bg-text text-border' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {typeName === 'Formation' ? 'Formation' : 'Expérience'}
              </span>
            </div>
            
            {/* Sous-titre */}
            {item.subtitle && (
              <h4 className="text-sm text-textColor/80 italic">
                {item.subtitle}
              </h4>
            )}
          </div>
          
          {/* Description */}
          {item.description && (
            <div className="pt-2 border-t border-border/30">
              <p className="text-textColor leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

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
                <p className="mt-3">Chargement du parcours...</p>
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
                onClick={() => getParcoursData()} 
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
    <div className="bg-bgColor min-h-screen">
      <section className="mb-10">
        <div className="md:w-3/4 w-full mx-auto">
          
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12">
            
            {/* Navigation responsive */}
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="inline-flex flex-col sm:flex-row border border-border rounded-lg overflow-hidden bg-bgColor2 shadow-sm">
                <button
                  onClick={() => setActiveFilter('tout')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base ${
                    activeFilter === 'tout'
                      ? 'bg-button text-white shadow-inner'
                      : 'bg-bgColor2 text-textColor hover:bg-button/10 hover:text-button'
                  }`}
                >
                  Tout
                </button>
                <button
                  onClick={() => setActiveFilter('en-cours')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'en-cours'
                      ? 'bg-button text-white shadow-inner'
                      : 'bg-bgColor2 text-textColor hover:bg-button/10 hover:text-button'
                  }`}
                >
                  En cours
                </button>
                <button
                  onClick={() => setActiveFilter('Formation')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'Formation'
                      ? 'bg-button text-white shadow-inner'
                      : 'bg-bgColor2 text-textColor hover:bg-button/10 hover:text-button'
                  }`}
                >
                  Formations
                </button>
                <button
                  onClick={() => setActiveFilter('Expérience')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'Expérience'
                      ? 'bg-button text-white shadow-inner'
                      : 'bg-bgColor2 text-textColor hover:bg-button/10 hover:text-button'
                  }`}
                >
                  Expériences
                </button>
              </div>
            </div>
          </div>

          {/* Affichage du contenu */}
          {displayData.grouped ? (
            // Affichage par sections pour "Tout"
            <div className="space-y-8 sm:space-y-12">
              {displayData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <h3 className="text-2xl font-semibold text-textColor">
                      {section.title}
                    </h3>
                    <span className="text-xs sm:text-sm bg-border text-textColor px-2 sm:px-3 py-1 rounded-full font-medium">
                      {section.count}
                    </span>
                  </div>
                  
                  {/* Liste verticale des cartes */}
                  <div className="space-y-6">
                    {section.items.map((item, index) => renderItem(item, `${sectionIndex}-${index}`))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Affichage simple pour les autres filtres
            <div className="space-y-6">
              {displayData.items.map((item, index) => renderItem(item, index))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default ParcoursWindow;