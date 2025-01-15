// pages/index.js
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineChildFriendly, MdOutlineQuestionMark } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaC, FaCode } from "react-icons/fa6";

export default function Index() {
    return (
      <div>  
        {/* Section A propos */}
        <section id="index" className="py-24">
          <div className="max-w-5xl mx-auto flex gap-10">
            <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
              <h2 className="text-2xl">À propos de moi</h2>
            </div>
            <div className="w-3/5">
              <p className="text-lg">
                Actuellement en BTS SIO SLAM (développement), je projette de devenir développeur, avec pour secteur de rêve le développement de jeux vidéo. 
                Je suis passionné de jeux vidéo depuis l'enfance et rêve d'en faire mon métier. Je projete aussi de potentiellement devenir professeur de développement informatique.
              </p>
            </div>
          </div>
          <div className="pt-20 text-center">
            <Link href="/CV Brunin Maxime.pdf" download="CV_Brunin_Maxime.pdf" className="bg-custom-button text-custom-white p-3 rounded-xl">
              Télécharger mon CV
            </Link>
          </div>
        </section>
  
        {/* Section Compétences */}
        <section className="py-14 bg-custom-cream2 dark:bg-custom-night2 transition-bg duration-1000 ease-in-out">
  <div className="max-w-5xl mx-auto text-center">
    {/* Langages étudiés */}
    <h2 className="text-2xl mb-10">Les langages étudiés</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {[
        { src: "image/iconeHTML.png", alt: "HTML", title: "HTML" },
        { src: "image/iconeCSS.png", alt: "CSS", title: "CSS" },
        { src: "image/iconeJS.png", alt: "JavaScript", title: "JavaScript" },
        { src: "image/iconeTS.png", alt: "TypeScript", title: "TypeScript" },
        { src: "image/iconePHP.png", alt: "PHP", title: "PHP" },
        { src: "image/logoSQL.png", alt: "SQL", title: "SQL" },
        { src: "image/iconeJava.png", alt: "Java", title: "Java" },
        { src: "image/iconePython.png", alt: "Python", title: "Python" },
        { src: "image/iconeCSharp.png", alt: "C#", title: "C#" },
      ].map((item, index) => (
        <div
          key={index}
          className="w-40 h-40 rounded-lg p-4 flex flex-col items-center justify-center"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-20 h-20 object-contain"
          />
          <h3 className="mt-2">{item.title}</h3>
        </div>
      ))}
    </div>

    {/* Technologies étudiées */}
    <h2 className="text-2xl mb-10 pt-10">Les technologies étudiées</h2>
    <div className="flex flex-wrap justify-center gap-10">
      {[
        { src: "image/iconeNext.png", alt: "Next.JS", title: "Next.JS" },
        { src: "image/iconeReact.png", alt: "React", title: "React" },
        { src: "image/iconeTW.png", alt: "Tailwind", title: "Tailwind" },
      ].map((item, index) => (
        <div
          key={index}
          className="w-40 h-40 rounded-lg p-4 flex flex-col items-center justify-center"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-20 h-20 object-contain"
          />
          <h3 className="mt-2">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

  
        {/* Section Parcours */}
        {/* Section Parcours */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Mon Parcours</h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-custom-button h-full transform -translate-x-1/2 bg-opacity-50"></div>
            
            <div className="space-y-12">
              
              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5 text-right pr-6">
                  <h3 className="text-xl font-semibold">Avant</h3>
                  <p>
                    Depuis toujours passionné par les jeux vidéo, j'ai toujours rêvé d'un jour en faire mon domaine profesionnel.
                  </p>
                </div>
                <div className="w-12 h-12 bg-custom-button rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><MdOutlineChildFriendly/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5"></div>
                <div className="w-12 h-12 bg-custom-button rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><FaSchool/></span>
                </div>
                <div className="w-2/5 text-left pl-6">
                  <h3 className="text-xl font-semibold">Terminale S option ISN</h3>
                  <p>
                    La spécialité ISN m'a amené mon premier contact avec le développement informatique.
                    Apprentissage des bases du développement web en HTML, JavaScript et CSS. Réalisation d’un projet inspiré du Projet Voltaire mais en anglais en HTML, JavaScript et CSS, noté 19/20.
                  </p>
                </div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5 text-right pr-6">
                  <h3 className="text-xl font-semibold">Exploration universitaire</h3>
                  <p>
                    Du fait de mes meilleurs notes et facilités en langues j'ai décidé de m'orienter vers un cursus universitaire dans les langues.
                    Une année en LLCER Anglais lv2 Japonais, une année en LLCER Japonais lv2 Anglais et une année en licence d'histoire.
                  </p>
                </div>
                <div className="w-12 h-12 bg-custom-button rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><IoSchool/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5"></div>
                <div className="w-12 h-12 bg-custom-button rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><FaCode/></span>
                </div>
                <div className="w-2/5 text-left pl-6">
                  <h3 className="text-xl font-semibold">BTS SIO option SLAM</h3>
                  <p>
                    Me décidant d'enfin me tourner vers le secteur qui m'a toujours attiré, j'ai décidé de rejoindre le BTS SIO en spécialité de développement. 
                    J'y apprends diverses langages de programmation et technologies afin de développer des solutions webs ou logiciels, avec des bases de données.
                  </p>
                </div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5 text-right pr-6">
                  <h3 className="text-xl font-semibold">Et après ?</h3>
                  <p>
                    Je prévois de continuer mes études en licence d'informatique. Pour ce qui est du projet professionnel, je vise en particulier soit à réaliser mon rêve de devenir développeur de jeux vidéo ou alors me tourner vers le métier d'enseignant
                    en informatique.
                  </p>
                </div>
                <div className="w-12 h-12 bg-custom-button rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><MdOutlineQuestionMark/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 text-center">
            <Link href="/CV Brunin Maxime.pdf" download="CV_Brunin_Maxime.pdf" className="bg-custom-button text-custom-white p-3 rounded-xl">
              Télécharger mon CV
            </Link>
          </div>
      </section>
        
      </div>
    );
  }
  