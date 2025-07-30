import { competencesData } from '../../data/competences';

const CompetenceCard = ({ title, color, items }) => {

  return (
    <div className=" bg-bgColor2 border border-border p-6 shadow-lg shadow-button rounded-3xl">
      <h3 className="font-semibold mb-2 text-center">{title}</h3>
      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        {items.map((item, index) => (
          <div key={index} className="w-20 h-40 rounded-lg p-4 flex flex-col items-center justify-center">
            <img src={item.src} alt={item.alt} className="w-20 h-20 object-contain" />
            <h3 className="mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompetencesWindow = () => {
  return (
    <div className="md:py-24 mb-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto ">
        {Object.entries(competencesData).map(([key, competence]) => (
          <CompetenceCard
            key={key}
            title={competence.title}
            color={competence.color}
            items={competence.items}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetencesWindow;