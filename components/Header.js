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
                    subtitle: "Ma veille sur les moteurs de jeux vidéo\n(En developpement)",
                };
            case "/real":
                return {
                    title: "Mes Réalisations",
                    subtitle: "Mes projets personnels, de stage, de cours\n(En developpement)",
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
            className="flex flex-col items-center justify-center text-custom-white h-screen bg-cover relative text-stroke text-center
            bg-[url('/image/background.jpg')] dark:bg-[url('/image/backgroundDark.jpg')] 
            bg-scroll md:bg-fixed"
        >
            <h1 className="text-6xl mb-4 relative z-10 animate__animated animate__fadeIn animate__delay-1s">
            {title}
            </h1>
            <p className="text-4xl text-center px-4 relative z-10 animate__animated animate__fadeIn animate__delay-2s">
            {subtitle}
            </p>
      </header>
      

    );
}
