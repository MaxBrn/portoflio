import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

export default function CompetenceModal({ folder, description}) { // <-- Assurez-vous que folder est bien récupéré ici
    const [isOpen, setIsOpen] = useState(false);
    const [files, setFiles] = useState([]);

    // Fonction pour récupérer les fichiers
    const fetchFiles = async () => {
        try {
            const response = await fetch(`/api/getFiles?folder=${folder}`);
            const data = await response.json();
            setFiles(data); // Mettre à jour l'état avec les fichiers récupérés
        } catch (error) {
            console.error("Erreur lors de la récupération des fichiers:", error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchFiles(); // Récupère les fichiers à chaque ouverture de la modale
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
                className="p-6 border-2 border-custom-creamLite dark:border-custom-nightLite rounded-2xl"
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
                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique à l'intérieur
                    >
                        

                        {/* Contenu de la modale */}
                        <h2 className="text-lg font-bold mb-4">
                            Fichiers pour la compétence {folder}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {/* Liste des fichiers récupérés */}
                            {files.map((file) => (
                                <Link
                                    key={file.name}
                                    href={file.path}
                                    className="text-blue-500 hover:underline"
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
