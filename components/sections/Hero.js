import Link from 'next/link';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex md:flex-col flex-row justify-center items-center gap-5 md:w-1/4 text-center">
      
      {/* Section titre et nom */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h1 className="md:text-2xl text-xl">Maxime Brunin</h1>
        <h1 className="md:text-xl text-xl">Développeur</h1>
      </div>
      
      {/* Section photo de profil et réseaux sociaux */}
      <div className="flex flex-col gap-10 items-center mx-auto w-full">
        
        <div className="w-full flex flex-col items-center">
          
          {/* Photo de profil */}
          <Image
            src="/image/pdpcrp.jpg"
            width={200}
            height={150}
            alt="Picture of the author"
            className="rounded-full border-2 border-border"
          />
          
          {/* Liens réseaux sociaux */}
          <div className="flex gap-5 justify-center pt-5">
            
            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/">
              <FaLinkedin className="text-3xl sm:text-4xl hover:-translate-y-1.5 hover:shadow-xl hover:shadow-button/30 transition duration-300 ease-out" />
            </Link>
            
            {/* GitHub */}
            <Link href="https://github.com/MaxBrn">
              <FaGithub className="text-3xl sm:text-4xl hover:-translate-y-1.5 hover:shadow-xl hover:shadow-button/30 transition duration-300 ease-out" />
            </Link>

            {/* Email */}
            <Link href="mailto:maxime_brn@hotmail.fr">
              <FaEnvelope className="text-3xl sm:text-4xl hover:-translate-y-1.5 hover:shadow-xl hover:shadow-button/30 transition duration-300 ease-out" />
            </Link>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;