import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 flex justify-center items-center bg-black text-white py-4 z-50 rounded-xl mt-2 bg-opacity-50 flex gap-20">
          <div className="flex gap-8">
            <Link href="/" className="font-bold text-lg hover:text-gray-300">Présentation</Link>
            <Link href="/btsSio" className="font-bold text-lg hover:text-gray-300">BTS SIO</Link>
            <Link href="/veilleTechno" className="font-bold text-lg hover:text-gray-300">Veille technologique</Link>
            <Link href="/real" className="font-bold text-lg hover:text-gray-300">Réalisation</Link>
          </div>
          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/" ><FaLinkedin className='text-xl' /></Link>
            <Link href="https://github.com/MaxBrn"><FaGithub className='text-xl' /></Link>
          </div>
        </nav>
    );
}
