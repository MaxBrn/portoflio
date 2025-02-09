// pages/index.js
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineChildFriendly, MdOutlineQuestionMark } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaC, FaCode } from "react-icons/fa6";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Index() {
    return (
      <div>  
        <header
          className="flex flex-col items-center justify-center h-screen bg-cover relative text-center 
          bg-[url('/image/backgroundNew.jpg')]
          bg-scroll md:bg-fixed px-4"
        >
          <div className="w-full sm:w-3/4 md:w-2/4 flex flex-col bg-bgColor rounded-3xl p-6 mx-auto bg-opacity-[70%] items-center">
            <div className="w-full">
              <h1 className="text-4xl sm:text-5xl">Maxime Brunin</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-3/4 mt-6 md:mt-10 text-center">
                <p className="text-lg sm:text-xl">
                  Actuellement étudiant en BTS SIO SLAM, je sais développer des solutions web reliées à une base de données et concevoir des solutions logicielles. Je projette de devenir enseignant en développement informatique ou développeur de jeux vidéo.
                </p>
                <div className="pt-6 md:pt-10">
                  <Link
                    href="/CV Brunin Maxime.pdf"
                    download="CV_Brunin_Maxime.pdf"
                    className="bg-button hover:bg-hover text-custom-white p-3 rounded-xl block text-center md:inline-block"
                  >
                    Télécharger mon CV
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/4 flex flex-col items-center">
                <Image
                  src="/image/pdpcrp.jpg"
                  width={200}
                  height={150}
                  alt="Picture of the author"
                  className="rounded-full"
                />
                <div className="flex gap-5 justify-center pt-5">
                  <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/">
                    <FaLinkedin className="text-3xl sm:text-4xl" />
                  </Link>
                  <Link href="https://github.com/MaxBrn">
                    <FaGithub className="text-3xl sm:text-4xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Section Compétences */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto text-center bg-bgColor2 border border-border p-10">
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
                { src: "image/iconeUnity.png", alt: "Unity", title: "Unity"}
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
            <div className="absolute left-1/2 w-1 bg-border h-full transform -translate-x-1/2 bg-opacity-50"></div>
            
            <div className="space-y-12">
              
              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5 text-right pr-6">
                  <h3 className="text-xl font-semibold">Avant</h3>
                  <p>
                    Depuis toujours passionné par les jeux vidéo, j'ai toujours rêvé d'un jour en faire mon domaine profesionnel.
                  </p>
                </div>
                <div className="w-12 h-12 bg-border rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><MdOutlineChildFriendly/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5"></div>
                <div className="w-12 h-12 bg-border rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
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
                <div className="w-12 h-12 bg-border rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><IoSchool/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>

              {/* Étape */}
              <div className="flex items-center justify-between relative">
                <div className="w-2/5"></div>
                <div className="w-12 h-12 bg-border rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
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
                <div className="w-12 h-12 bg-border rounded-full shadow-lg flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                  <span className="text-3xl text-custom-white"><MdOutlineQuestionMark/></span>
                </div>
                <div className="w-2/5 pl-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 text-center">
            <Link href="/CV Brunin Maxime.pdf" download="CV_Brunin_Maxime.pdf" className="bg-button hover:bg-hover p-3 rounded-xl">
              Télécharger mon CV
            </Link>
          </div>
      </section>
        
      </div>
    );
  }
  
