import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    // Définir le texte du header en fonction de la route
    const getPageHeader = () => {
        switch (router.pathname) {
            case "/":
                return {
                    title: "Maxime Brunin",
                    subtitle: "Étudiant en BTS SIO",
                };
            case "/btsSio":
                return {
                    title: "BTS SIO",
                    subtitle: "Présentation de la filière",
                };
            case "/veilleTechno":
                return {
                    title: "Veille Technologique",
                    subtitle: "Ma veille sur les moteurs de jeux vidéo",
                };
            case "/real":
                return {
                    title: "Mes Réalisations",
                    subtitle: "Mes projets personnels, de stage, de cours",
                };
            default:
                return {
                    title: "Maxime Brunin",
                    subtitle: "Étudiant en BTS SIO",
                };
        }
    };

    const { title, subtitle } = getPageHeader();

    return (
        <header
            className="flex flex-col items-center justify-center text-white h-screen bg-cover bg-center bg-fixed relative bg-[url('/image/bgLight.jpg')] dark:bg-[url('/image/bgDark.jpg')]"
        >
            {/* Ajout d'un dégradé */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}

            <h1 className="text-5xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">
                {title}
            </h1>
            <p className="text-3xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
                {subtitle}
            </p>
        </header>
    );
}
