import Image from "next/image";
import { useState } from "react";

const SkeletonImage = ({ src, alt, sizes, className, onImageLoad, forceShow }) => {
    const [localLoaded, setLocalLoaded] = useState(false);

    // Si on reçoit "forceShow", le composant parent prend le contrôle.
    // Sinon, il gère son affichage tout seul
    const isVisible = forceShow !== undefined ? forceShow : localLoaded;

    const handleLoad = () => {
        setLocalLoaded(true);
        if (onImageLoad) {
            onImageLoad();
        }
    };

    return (
        <div className="relative w-full h-full">
            {!isVisible && (
                <div className="absolute inset-0 bg-border/30 animate-pulse rounded-inherit" />
            )}

            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                onLoad={handleLoad}
                onError={handleLoad} // Évite un blocage global si une seule image est cassée/introuvable
                className={`${className} transition-opacity duration-700 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
};

export default SkeletonImage;