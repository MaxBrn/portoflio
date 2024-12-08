import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function CompetenceModal({ folder, description }) {
    const [isOpen, setIsOpen] = useState(false);
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        try {
            const response = await fetch(`/api/getFiles?folder=${folder}`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setFiles(data);
            } else {
                console.error("La réponse de l'API n'est pas un tableau :", data);
                setFiles([]);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des fichiers:", error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchFiles();
        }
    }, [isOpen, folder]);

    const closeModal = () => {
        setIsOpen(false); // Ferme la modale
    };

    return (
        <div>
            {/* Bouton principal */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-full h-full p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl hover:bg-custom-creamLite dark:hover:bg-custom-nightLite"
            >
                <div>
                    <p className="font-bold">Compétence {folder}</p>
                    <p className="pt-2">{description}</p>
                </div>
            </button>

            {/* Modale */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    onClick={closeModal} // Fermer la modale si on clique en dehors
                >
                    <div
                        className="bg-custom-cream2 dark:bg-gray-800 p-6 rounded-2xl shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique à l'intérieur
                    >
                        {/* Bouton pour fermer */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
                        >
                            <IoMdClose size={24} />
                        </button>

                        {/* Contenu de la modale */}
                        <h2 className="text-lg font-bold mb-10 text-center">
                            Fichiers pour la compétence {folder}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                            {files.map((file) => (
                                <Link
                                    key={file.name}
                                    href={file.path}
                                    target="_blank"
                                    className="w-full h-full p-4 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl hover:bg-custom-creamLite dark:hover:bg-custom-nightLite"
                                >
                                    {file.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
