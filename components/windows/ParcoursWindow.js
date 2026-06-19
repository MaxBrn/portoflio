import React, { useState } from 'react';
import { parcoursData } from '../../data/parcours';

const ParcoursWindow = () => {
  const [activeFilter, setActiveFilter] = useState('tout');

  // Formate les dates selon le type (formation ou expérience)
  const formatDate = (startDate, endDate, typeName) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    // Pour les formations, on affiche seulement les années
    if (typeName === 'Formation') {
      const startYear = start.getFullYear();
      if (!end) return `Depuis ${startYear}`;
      const endYear = end.getFullYear();
      return startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`;
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

  // Prépare les données selon le filtre actif
  const getDisplayData = () => {
    if (activeFilter === 'tout') {
      // Regroupement par catégories : En cours -> Expériences -> Formations
      const enCours = parcoursData.filter(item => item.current);
      const experiences = parcoursData.filter(item => item.typeParcours.name === 'Expérience' && !item.current);
      const formations = parcoursData.filter(item => item.typeParcours.name === 'Formation' && !item.current);

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

  // Rendu d'un élément du parcours
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
          <div className="flex flex-col gap-3">
            <div className="flex md:flex-row flex-col items-start justify-between gap-4">
              <h3 className="md:text-xl text-l font-semibold text-textColor flex-1">
                {item.title}
              </h3>
              <span className="bg-button text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                {dateDisplay}
              </span>
            </div>

            {item.subtitle && (
              <h4 className="text-sm text-textColor/80 italic">
                {item.subtitle}
              </h4>
            )}

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
          </div>

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

  return (
    <div className="bg-bgColor mb-10">
      <section>
        <div className="md:w-3/4 w-full mx-auto">
          {/* En-tête avec navigation */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row justify-center">
              <div className="inline-flex flex-col sm:flex-row border border-border rounded-lg overflow-hidden bg-bgColor2 shadow-sm">
                <button
                  onClick={() => setActiveFilter('tout')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base ${
                    activeFilter === 'tout'
                      ? 'bg-button shadow-inner'
                      : 'bg-bgColor2  hover:bg-hover'
                  }`}
                >
                  Tout
                </button>
                <button
                  onClick={() => setActiveFilter('en-cours')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'en-cours'
                     ? 'bg-button shadow-inner'
                      : 'bg-bgColor2  hover:bg-hover'
                  }`}
                >
                  En cours
                </button>
                <button
                  onClick={() => setActiveFilter('Formation')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'Formation'
                      ? 'bg-button shadow-inner'
                      : 'bg-bgColor2  hover:bg-hover'
                  }`}
                >
                  Formations
                </button>
                <button
                  onClick={() => setActiveFilter('Expérience')}
                  className={`px-4 sm:px-6 py-3 font-medium transition-all duration-200 text-sm sm:text-base border-t sm:border-t-0 sm:border-l border-border/50 ${
                    activeFilter === 'Expérience'
                     ? 'bg-button shadow-inner'
                      : 'bg-bgColor2  hover:bg-hover'
                  }`}
                >
                  Expériences
                </button>
              </div>
            </div>
          </div>

          {displayData.grouped ? (
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
                  <div className="space-y-6">
                    {section.items.map((item, index) => renderItem(item, `${sectionIndex}-${index}`))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
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