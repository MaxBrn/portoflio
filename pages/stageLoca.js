export default function StageLoca() {
    return (
        <div>
            <header className="flex flex-col items-center bg-cover bg-center text-white py-48" style={{ backgroundImage: "url('/image/sliderv2.jpg')" }}>
                <h1 className="text-5xl font-bold">Stage Loca Service</h1>
                <p className="text-3xl mt-4">Mon stage de première année</p>
            </header>

            <section className="py-24 px-6 text-center">
                <h1 className="text-3xl font-semibold mb-6">Qui sont Loca Service ?</h1>
                <p className="text-lg mb-12 mx-auto max-w-7xl">
                    Loca Service est une entreprise de location de matériel frigorifique, elle fait partie des leaders du secteur.
                    Fondée par Pascal Bouve en 1981 et ensuite reprise par son fils Aurélein Bouve en 2016.
                    Ce dernier porte énormément d'attention à ce que l'entreprise reste en constante innovation
                    et ne cesse de se réinventer, d'explorer des projets divers et variés.
                    Le projet qui m'a été assigné poursuit cette idée.
                </p>

                <h1 className="text-3xl font-semibold mb-6">Le projet Kuzzle</h1>
                <p className="text-lg mb-12 mx-auto max-w-7xl">
                    Les meubles de Loca Service communiquent des données via des requêtes HTTP,
                    ces données contiennent par exemple des températures, des taux d'humidité.
                    La société utilise déjà une solution pour visualiser toutes ces données et les capteurs.
                    Mais dans une volonté d'internaliser ce procédé, ils ont décidé de tester de le développer
                    en interne en utilisant des méthodes open source. Ils m'ont donné l'opportunité de prendre
                    ce projet en main en Full Stack, car l'entreprise n'a pas d'équipe de développeur.
                    Le projet utilise Kuzzle pour la base de données et Vue.JS en TypeScript pour le
                    développement du site web.
                </p>

                <h1 className="text-3xl font-semibold mb-6">Explication de Kuzzle</h1>
                <p className="text-lg mb-12 mx-auto max-w-7xl">
                    Kuzzle est une solution Open Source Française permettant de connecter des capteurs
                    et d'en permettre la réception, le décodage, le stockage des données. Une liaison
                    est faite entre le projet Vue.JS et le Kuzzle via un web socket qui permet au backend Kuzzle
                    de communiquer avec le backend de Vue.JS et inversement, ensuite on peut afficher
                    les données transmises dans le front-end. Les données sont regroupées dans des
                    documents JSON, ces documents sont stockés dans une collection elle-même stockée dans
                    un index. On peut ensuite chercher un document avec des fonctions prévues à cet effet
                    et extraire les données pour les traiter. En somme, Kuzzle peut être vu comme la base
                    de données du projet Vue.
                </p>

                <h1 className="text-3xl font-semibold mb-6">Les fonctionnalités du projet</h1>
                <iframe src="rapport/fonctioSite.pdf" width="800px" height="600px" className="mx-auto mb-4"></iframe>
                <a className="text-gray-600 hover:text-black" href="rapport/fonctioSite.pdf">
                    <span className="material-icons">open_in_new</span>
                </a>
                
                <div className="flex justify-center mt-12">
                    <span className="mr-2">Lien vers le projet:</span>
                    <a href="https://kuzzle.loca-service.com:18082/IndexHome">
                        <img src="/image/logoLS.png" alt="Logo Loca Service" width="150" className="hover:scale-105 transition-transform duration-300" />
                    </a>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-white">
                <h1 className="text-3xl font-semibold mb-6">Les réalisations durant mon stage</h1>
                <div className="grid grid-cols-1 md:grid-cols-2"> {/* Utiliser une grille */}
                    {/* Réalisation 1 */}
                    <div className="flex flex-col justify-between items-center mb-12">
                        <div className="text-left text-center">
                            <h1 className="text-lg font-semibold">Gestion patrimoine informatique</h1>
                            <iframe src="rapport/PatrimoineInfo.pdf" width="800px" height="600" className="border"></iframe>
                        </div>
                    </div>
                    {/* Réalisation 2 */}
                    <div className="flex flex-col justify-between items-center mb-12">
                        <div className="text-left text-center">
                            <h1 className="text-lg font-semibold">Répondre aux incidents et aux demandes d’assistance et d’évolution</h1>
                            <iframe src="rapport/ReponseDemande.pdf" width="800px" height="600" className="border"></iframe>                            
                        </div>
                    </div>
                    {/* Autres réalisations */}
                    <div className="flex flex-col justify-between items-center mb-12">
                        <div className="text-left text-center">
                            <h1 className="text-lg font-semibold">Développer la présence en ligne de l’organisation</h1>
                            <iframe src="rapport/DevPresence.pdf" width="800px" height="600" className="border"></iframe>
                        </div>
                    </div>
                    {/* Ajouter d'autres réalisations ici */}
                </div>
            </section>


        </div>
    );
};
