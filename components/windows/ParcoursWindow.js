import { parcoursData } from '../../data/parcours';

const TimelineItem = ({ date, title, institution, description, color, icon }) => {
  const colorClasses = {
    blue: "bg-blue-500 text-blue-600",
    green: "bg-green-500 text-green-600",
    purple: "bg-purple-500 text-purple-600",
    orange: "bg-orange-500 text-orange-600"
  };

  return (
    <div className="flex items-start">
      <div className={`w-8 h-8 ${colorClasses[color].split(' ')[0]} rounded-full flex items-center justify-center z-10`}>
        {icon}
      </div>
      <div className="ml-6">
        <h3 className={`text-lg font-semibold ${colorClasses[color].split(' ')[1]}`}>{date}</h3>
        <h4 className="font-medium text-gray-800">{title}</h4>
        {institution && <p className="text-gray-600 font-medium">{institution}</p>}
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const ParcoursWindow = () => {
  return (
    <div className="bg-bgColor">
        {/* Section Parcours */}
        <section className="py-10">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-center mb-12">Mon Parcours</h2>

            {/* Timeline */}
            <div className="relative">
              {/* Ligne centrale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border md:block"></div>

              {/* Étapes */}
              <div className="flex flex-col space-y-12">
                {/* Étape 1 */}
                <div className="relative md:flex md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-border rounded-full"></div>
                  <div className="md:w-1/2 md:pr-8 text-center">
                    <div className="bg-bgColor2 p-6 border border-border rounded-lg shadow-lg shadow-button">
                      <h3 className="text-xl font-semibold mb-4">Terminale S</h3>
                      <p>La spécialité ISN m'a amené mon premier contact avec le développement informatique. Apprentissage des bases du développement web en HTML, JavaScript et CSS. 
                        Réalisation d’un projet inspiré du Projet Voltaire mais en anglais en HTML, JavaScript et CSS, noté 19/20.</p>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="relative md:flex md:items-center md:flex-row-reverse">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-border rounded-full"></div>
                  <div className="md:w-1/2 md:pl-8 text-center">
                    <div className="bg-bgColor2 p-6 border border-border rounded-lg shadow-lg shadow-button">
                      <h3 className="text-xl font-semibold mb-4">Université</h3>
                      <p>Du fait de mes meilleurs notes et facilités en langues j'ai décidé de m'orienter vers un cursus universitaire dans les langues. 
                        Une année en LLCER Anglais lv2 Japonais, une année en LLCER Japonais lv2 Anglais et une année en licence d'histoire.</p>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative md:flex md:items-center">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-border rounded-full"></div>
                  <div className="md:w-1/2 md:pr-8 text-center">
                    <div className="bg-bgColor2 p-6 border border-border rounded-lg shadow-lg shadow-button">
                      <h3 className="text-xl font-semibold mb-4">BTS SIO SLAM</h3>
                      <p>Me décidant d'enfin me tourner vers le secteur qui m'a toujours attiré, j'ai décidé de rejoindre le BTS SIO en spécialité de développement. 
                        J'y apprends diverses langages de programmation et technologies afin de développer des solutions webs ou logiciels, avec des bases de données.</p>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="relative md:flex md:items-center md:flex-row-reverse">
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-border rounded-full"></div>
                  <div className="md:w-1/2 md:pl-8 text-center">
                    <div className="bg-bgColor2 p-6 border border-border rounded-lg shadow-lg shadow-button">
                      <h3 className="text-xl font-semibold mb-4">L3 MIAGE</h3>
                      <p>J'intègrerai la L3 MIAGE à la rentrée 2025, afin de concrétiser mon projet de devenir enseignant de développement.</p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
          
        </section>
    </div>
  );
};

export default ParcoursWindow;