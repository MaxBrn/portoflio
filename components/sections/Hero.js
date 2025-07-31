import Link from 'next/link';
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex md:flex-col flex-row justify-center items-center gap-5 md:w-1/4 text-center">

      <div className="flex flex-col items-center gap-4 w-full">
        <h1 className="md:text-3xl text-xl">Maxime Brunin</h1>
        <h1 className="md:text-2xl text-xl">Etudiant développeur</h1>
        
      </div>
      
    
      
      <div className="flex flex-col gap-10 items-center mx-auto w-full">
        
        <div className="w-full flex flex-col items-center">
          <Image
            src="/image/pdpcrp.png"
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
  );
};

export default Hero;