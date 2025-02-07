import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes"; // Importation du hook pour gérer les thèmes

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // S'assurer que le thème est monté
    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === "system" ? systemTheme : theme;

    const handleLinkClick = () => {
        setIsOpen(false); // Ferme le menu lorsqu'un lien est cliqué
    };

    return (
        <nav
            className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[800px] bg-black text-white py-3 px-4 z-50 rounded-xl mt-2 bg-opacity-50"
        >
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center">
                <div className="flex gap-8 m-auto">
                    <Link href="/" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Présentation</Link>
                    <Link href="/btsSio" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>BTS SIO</Link>
                    <Link href="/veilleTechno" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Veille technologique</Link>
                    <Link href="/real" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Réalisation</Link>
                </div>
                <div className="flex gap-6">
                    <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/" target="_blank">
                        <FaLinkedin className="text-[20px] hover:text-gray-300" />
                    </Link>
                    <Link href="https://github.com/MaxBrn" target="_blank">
                        <FaGithub className="text-[20px] hover:text-gray-300" />
                    </Link>

                    {/* Dark Mode Button */}
                    {mounted && (
                        <button
                            onClick={() =>
                                setTheme(currentTheme === "dark" ? "light" : "dark")
                            }
                            className="text-[20px] hover:text-gray-300"
                        >
                            {currentTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-[20px] focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className="flex gap-4">
                    <Link href="https://www.linkedin.com/in/maxime-brunin-860094216/" target="_blank">
                        <FaLinkedin className="text-[20px] hover:text-gray-300" />
                    </Link>
                    <Link href="https://github.com/MaxBrn" target="_blank">
                        <FaGithub className="text-[20px] hover:text-gray-300" />
                    </Link>
                    {/* Dark Mode Button */}
                    {mounted && (
                        <button
                            onClick={() =>
                                setTheme(currentTheme === "dark" ? "light" : "dark")
                            }
                            className="text-[20px] hover:text-gray-300"
                        >
                            {currentTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
                    <Link href="#header" className="font-bold text-[20px] hover:text-gray-300" onClick={handleLinkClick}><FaHome/></Link>
                    <Link href="#index" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Présentation</Link>
                    <Link href="#bts" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>BTS SIO</Link>
                    <Link href="#veille" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Veille technologique</Link>
                    <Link href="#real" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Réalisation</Link>
                    <Link href="#contact" className="font-bold text-[16px] hover:text-gray-300" onClick={handleLinkClick}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
