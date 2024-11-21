// pages/index.js
import { FaFileDownload } from "react-icons/fa";
import Link from 'next/link';
export default function Index() {
    return (
      <div>  
        {/* Header */}
        <header
          className="flex flex-col items-center justify-center text-white h-screen bg-cover bg-center bg-fixed relative"
          style={{ backgroundImage: 'url("/image/fond.jpg")' }}
        >
          {/* Ajout d'un dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <h1 className="text-5xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">Maxime Brunin</h1>
          <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
            Etudiant en BTS SIO
          </p>
        </header>

  
        {/* Section A propos */}
        <section className="py-24">
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
            <Link href="/CV Brunin Maxime.pdf" download="CV_Brunin_Maxime.pdf" className="bg-black text-white p-3 rounded-xl">
              Télécharger mon CV
            </Link>
          </div>
        </section>
  
        {/* Section Compétences */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl mb-10">Les langages étudiés</h2>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeHTML.png" alt="HTML" className="w-40 mx-auto" />
                <h3 className="mt-2">HTML</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeCSS.png" alt="CSS" className="w-40 mx-auto" />
                <h3 className="mt-2">CSS</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeJS.png" alt="JavaScript" className="w-40 mx-auto rounded-2xl" />
                <h3 className="mt-2">JavaScript</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeTS.png" alt="TypeScript" className="w-40 mx-auto" />
                <h3 className="mt-2">TypeScript</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconePHP.png" alt="PHP" className="w-40 mx-auto" />
                <h3 className="mt-2">PHP</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeSQL.png" alt="SQL" className="w-40 mx-auto" />
                <h3 className="mt-2">SQL</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeJava.png" alt="Java" className="w-40 mx-auto" />
                <h3 className="mt-2">PHP</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconePython.png" alt="Python" className="w-40 mx-auto" />
                <h3 className="mt-2">Python</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeCSharp.png" alt="C#" className="w-40 mx-auto" />
                <h3 className="mt-2">C#</h3>
              </div>
              
            </div>
            <h2 className="text-2xl mb-10 pt-10">Les Technos étudiés</h2>
            <div className="flex flex-wrap justify-center gap-10">
              
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeNext.png" alt="Next.JS" className="w-40 mx-auto" />
                <h3 className="mt-2">Next.JS</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeReact.png" alt="React" className="w-40 mx-auto" />
                <h3 className="mt-2">React</h3>
              </div>
              <div className="w-40 bg-gray-100 text-black rounded-lg p-4">
                <img src="image/iconeTW.png" alt="Tailwind" className="w-40 mx-auto" />
                <h3 className="mt-2">Tailwind</h3>
              </div>
            </div>
          </div>
        </section>
  
        {/* Section Parcours */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl mb-10">Mon parcours</h2>
            {/* Ajoute ici chaque étape du parcours comme div */}
            <div className="flex flex-col gap-10 mb-10">

              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <p className="text-xl">Classe de 3ème</p>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  En classe de 3ème j'avais déjà une grande appétence pour le milieu 
                              de l'informatique. J'aimais les jeux vidéo et je voulais par la 
                              suite en créer. J'ai donc voulu faire un stage en développement 
                              informatique, mais en observation je n'ai rien trouvé. J'ai donc 
                              par défaut fait un stage en chauffeur routier avec mon père, ce 
                              qui je l'accorde n'a pas été très enrichissant.
                  </p>
                </div>
              </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Classe de seconde générale</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  En seconde j'avais déjà décidé de poursuivre en Bac Scientifique 
                              option ISN (informatique et science du numérique), pour poursuivre 
                              mon envie de devenir développeur
                  </p>
                </div>
              </div>
              
            <div className='flex'>
              <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Classe de terminale S option ISN</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  Pendant cette année j'ai appris à développer un site web avec du 
                              HTML, CSS et JavaScript, j'ai réalisé un projet de fin d'année qui 
                              consistait en un Projet Voltaire mais pour la langue anglaise. 
                              J'avais choisi ce thème car j'aime aussi beaucoup les langues 
                              vivantes. J'ai obtenu la note de 19/20 pour ce projet. Mais dans 
                              les autres matières scientifiques je ne parvenais pas à suivre. 
                              De plus cette année est née mon envie de devenir professeur ou 
                              journaliste. J'ai obtenu mon bac S quand même mais j'ai décidé de 
                              poursuivre en étude de langue sous les conseils, car j'étais 
                              meilleur dans les matières littéraires. J'ai aussi commencé 
                              l'apprentissage en autodidacte du japonais.
                  </p>
                </div>
            </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Première année LLCER Anglais</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  J'avais en tête de devenir professeur d'anglais avec ces études. 
                              J'ai approfondi mes connaissances dans la langue anglaise et 
                              j'ai aussi suivi des cours de Japonais en deuxième langue vivante. 
                              J'ai décidé de me réorienter car je ne me sentais pas à l'aise dans 
                              ce cursus universitaire.
                  </p>
                </div>
              </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Première année LLCER Japonais</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  Comme j'ai toujours aimé le Japon et que la langue et la culture 
                              m'attire depuis que j'ai commencé son apprentissage en terminale 
                              en autodidacte, je me suis dit que je pourrais devenir professeur
                              ou traducteur en japonais. Je voulais même par la suite m'installer 
                              dans ce pays. J'aimais beaucoup ce cursus mais le covid est arrivé 
                              pendant cette période et j'ai perdu toute la motivation avec le 
                              confinement. Après cette année je décide donc de prendre une pause 
                              d'un an pour tenter de trouver une formation pro et un emploi
                    </p>
                </div>
              </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Année de trou</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  J'ai donc cherché une formation, informatique de préférence, avec 
                              l'aide de la Mission Locale, mais je n'ai rien trouvé. J'ai trouvé
                              un emploi en juin dans un Leclerc en tant qu'employé libre service
                              à temps partiel pour reprendre les études l'année prochaine. Avoir 
                              un emploi m'a donné l'occasion de découvrir bien mieux le monde du 
                              travail. Je pars avec en tête de devenir soit professeur encore ou 
                              journaliste, car une formation en informatique impliquerait 
                              reprendre les sciences et je me pense plus à l'aise dans les 
                              langues.
                  </p>
                </div>
              </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Première année LLCER Histoire</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  Je retourne donc à la fac pour un parcours en histoire pour poursuivre
                              certains de mes métiers voulus. Je suis encore l'apprentissage de 
                              l'anglais et du japonais. J'ai encore aussi mon emploi étudiant à 
                              Leclerc Mais encore une fois l'université me déplait et j'ai de plus 
                              en plus envie de revenir au développement, je décide donc je quitter 
                              la formation et de rejoindre un BTS SIO.
                  </p>
                </div>
              </div>
              
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">BTS SIO option SLAM</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  Je suis donc actuellement en BTS SIO spécialité développement. J'ai 
                              pour projet de devenir développeur logiciel de préférence, de jeux 
                              vidéo encore plus. Je me sens très bien dans la formation et suis 
                              convaincu de ma réussite. J'aimerais aussi devenir pourquoi pas 
                              professeur d'informatique ou journaliste spécialisé car je n'ai pas 
                              oublié ces deux envies malgré les échecs universitaires. 
                  </p>
                </div>
              </div>
             
              <div className='flex'>
                <div className="w-2/5 text-center border-r-4 border-black flex items-center justify-center">
                  <h3 className="text-xl">Et après ?</h3>
                </div>
                <div className="w-3/5 ml-10">
                  <p>
                  Je prévois par la suite de continuer très certainement mes études avec
                              une licence en informatique probablement. Vu les métiers que je vise 
                              (jeux vidéo, enseignement) je ne peux pas exercer avec que le BTS en 
                              poche. J'ai aussi pour projet de réaliser un PVT au Japon pour
                              réaliser mon rêve et potentiellement aussi tenter de trouver un 
                              emploi de développeur là-bas. En somme j'ai beaucoup de projets en 
                              tête, mais contrairement aux années précédentes, je me plais dans ma 
                              formation et la motivation est de mise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20 text-center">
            <Link href="/CV Brunin Maxime.pdf" download="CV_Brunin_Maxime.pdf" className="bg-black text-white p-3 rounded-xl">
              Télécharger mon CV
            </Link>
          </div>
        </section>
        
      </div>
    );
  }
  