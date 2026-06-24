import Image from "next/image";

const InfoWindow = () => {
  return (
      <div className="min-h-full bg-bgColor mb-10">

        <div className="max-w-4xl mx-auto bg-bgColor2 border border-border/50 p-8 md:p-14 shadow-xl shadow-border/10 rounded-[2rem]">

          <div className="mb-12">
            <Image
                src="/image/hello.gif"
                alt="Hello GIF"
                width={500}
                height={280}
                className="mx-auto rounded-3xl shadow-xl shadow-border/40 object-cover"
                priority
            />
          </div>

          <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-text">
            Moi c'est Maxime
          </h1>

          <div className="space-y-8 text-left text-base md:text-lg leading-relaxed text-text/90">

            <p>
              Développeur diplômé de la licence MIAGE à l'Université de Lille, qui aimerait faire carrière dans le développement en <span className="font-bold text-text">COBOL</span>, oui oui vous avez bien lu et m'orienter vers l'analyse et la gestion de projet à terme.
            </p>

            <p>
              J'ai réalisé ce portfolio avec l'idée d'en faire une sorte de hub inspiré d'un OS pour mieux me connaître <span className="text-sm text-text/60 italic">(un poil mégalo sur les bords)</span>. Vous y retrouverez différentes informations sur mon parcours, mes projets, mes passions...
            </p>

            <p>
              Même si j'aime la programmation qui me permet d'exprimer ma créativité, mes capacités de réflexion et mon envie de créer des projets stimulants <span className="text-sm text-text/60 italic">(il se la raconte là non ?)</span>, mes plus grandes passions restent les jeux vidéo, le cinéma et le voyage (visites, randonnées). Vous pouvez par ailleurs retrouver sur ce site mes jeux et films préférés ainsi que quelques commentaires à leur sujet, parfois pas très objectifs, même jamais en fait.
            </p>


            <p>
              Mais assez de blabla, je vous propose de quitter cette page et de cliquer sur les autres boutons, découvrir ce site et en apprendre plus sur moi, et si vous souhaitez discuter ou me poser des questions, n'hésitez pas à me contacter !
            </p>


            <p>
              Merci de votre visite et à bientôt je l'espère !
            </p>

            <div className="pt-8 text-right">
              <p className="text-text/80">Le très beau et très fort développeur,</p>
              <p className="font-bold text-text text-xl mt-1">Maxime Brunin</p>
              <p className="text-xs text-text/50 mt-1 italic">(vous voyez qu'il se la raconte !)</p>
            </div>

          </div>
        </div>
      </div>
  );
};

export default InfoWindow;