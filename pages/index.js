// pages/index.js
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
import { MdOutlineChildFriendly, MdOutlineQuestionMark } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { FaC, FaCode } from "react-icons/fa6";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


export default function Index() {
    return (
      <div>  
        <header className="flex flex-col items-center justify-center h-screen bg-cover relative text-center bg-[url('/image/background.jpg')] bg-scroll md:bg-fixed px-4">

          <div className="w-full sm:pt-5 sm:w-3/4 md:w-2/4 flex flex-col bg-gradient-to-b from-bgColor/70 to-button/70 rounded-3xl p-4 mx-auto items-center shadow-2xl shadow-border">


            <div className="w-full">
              <h1 className="text-3xl sm:text-5xl">Maxime Brunin</h1>
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
                    className="bg-button hover:bg-hover text-custom-white p-3 rounded-xl block text-center md:inline-block transition"
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
                  className="rounded-full border-2 border-border"
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
          <div className="absolute bottom-0 animate-bounce text-white text-6xl">
            <FaChevronDown/>
          </div>

        </header>

        {/* Section Compétences */}
        <section className="py-24 flex flex-col gap-8 items-center">
          <div className="mx-10">
            <div className="text-center bg-bgColor2 border border-border p-6 mb-10 shadow-lg shadow-button rounded-xl">
              {/* Langages étudiés */}
              <h2 className="text-2xl">Web</h2>
              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { src: "image/iconeJS.png", alt: "JavaScript", title: "JavaScript" },
                  { src: "image/iconeTS.png", alt: "TypeScript", title: "TypeScript" },
                  { src: "image/iconePHP.png", alt: "PHP", title: "PHP" },
                  { src: "image/iconeNext.png", alt: "Next.js", title:"Next.js"},
                  { src: "image/iconeTW.png", alt: "Tailwind", title:"Tailwind"},
                  { src: "image/iconeReact.png", alt: "React", title:"React"},
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-20 h-40 rounded-lg p-4 flex flex-col items-center justify-center"
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
            <div className="flex md:flex-row justify-between flex-col gap-10">
              <div className="max-w-6xl text-center bg-bgColor2 border border-border p-6 shadow-lg shadow-button rounded-3xl">
                {/* Technologies étudiées */}
                <h2 className="text-2xl">Base de données</h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {[
                    { src: "image/logoSQL.png", alt: "SQL", title: "SQL" },
                    { src: "image/iconePostGreSQL.png", alt: "PostgreSQL", title: "PostgreSQL" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-20 h-40 rounded-lg p-4 flex flex-col items-center justify-center"
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
              <div className="max-w-6xl text-center bg-bgColor2 border border-border p-6 shadow-lg shadow-button rounded-3xl">
                {/* Technologies étudiées */}
                <h2 className="text-2xl">Logiciel</h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {[
                    { src: "image/iconeJava.png", alt: "Java", title: "Java" },
                    { src: "image/iconeCSharp.png", alt: "C#", title: "C#" },
                    { src: "image/iconeUnity.png", alt: "Unity", title: "Unity"}
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="w-20 h-40 rounded-lg p-4 flex flex-col items-center justify-center"
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
            </div>
          </div>
        </section>
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
                      <h3 className="text-xl font-semibold mb-4">Et après ?</h3>
                      <p>Je prévois de continuer mes études en alternance en bachelor ou en licence informatique. 
                        Pour ce qui est du projet professionnel, je vise en particulier soit à réaliser mon rêve de devenir développeur de jeux vidéo ou alors me tourner vers le métier d'enseignant en informatique.</p>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
            <div className="pt-6 md:pt-10 ">
                          <Link
                            href="/CV Brunin Maxime.pdf"
                            download="CV_Brunin_Maxime.pdf"
                            className="bg-button hover:bg-hover text-custom-white p-3 rounded-xl block text-center md:inline-block transition"
                          >
                            Télécharger mon CV
                          </Link>
                        </div>
          </div>
          
        </section>



        
      </div>
    );
  }
  
