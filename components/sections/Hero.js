import Link from 'next/link';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
      <div className="bg-bgColor2 border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center gap-6 w-full lg:w-1/3">

          <div className="relative group flex justify-center">
              <Image
                  src="/image/pdpcrp.jpg"
                  width={150}
                  height={150}
                  alt="C'est moi"
                  className="rounded-full border-4 border-bgColor shadow-sm object-cover aspect-square"
              />

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-bgColor2 text-text text-xs font-bold rounded-xl border border-border/50 shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-10 transform-gpu will-change-transform">
                  Coucou c'est moi

                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-bgColor2 border-t border-l border-border/50 rotate-45"></div>
              </div>
          </div>

        {/* Section titre et nom */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl md:text-2xl font-bold text-text tracking-tight">Maxime Brunin</h1>
          <h2 className="text-lg md:text-xl font-medium text-text/70">Développeur</h2>
        </div>

        {/* Ligne de séparation et réseaux sociaux */}
        <div className="flex gap-6 justify-center pt-6 w-full border-t border-border/30">
          <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-text/80  hover:-translate-y-1 transition duration-300 ease-out" />
          </Link>

          <Link href="https://github.com/MaxBrn" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-text/80 hover:-translate-y-1 transition duration-300 ease-out" />
          </Link>

          <Link href="mailto:maxime_brn@hotmail.fr">
            <FaEnvelope className="text-3xl text-text/80 hover:-translate-y-1 transition duration-300 ease-out" />
          </Link>
        </div>

      </div>
  );
};

export default Hero;