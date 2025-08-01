import Image from "next/image";

const InfoWindow = () => {
  return (
    <div className="bg-bgColor">
      <div className="md:w-2/3 mx-auto mb-10 text-center bg-bgColor2 border border-border p-6 shadow-lg shadow-button rounded-3xl">
        <Image src="/image/hello.gif" alt="Hello GIF" width={500} height={500} className="mx-auto rounded-3xl shadow-lg shadow-black" />
        <h1 className="text-center text-2xl mt-10">Moi c'est Maxime</h1><br/>
        <p className="text-left leading-relaxed md:leading-loose">Je suis un étudiant développeur en L3 MIAGE qui veut devenir enseignant
          de développement informatique. J'ai toujours rêvé de devenir professeur et transmettre ma passion. 
          J'aime partager mes connaissances et aider les autres à apprendre. On apprend mieux en partageant, n'est-ce pas ?
        </p><br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">J'ai réalisé ce portfolio avec l'idée d'en faire une sorte d'hub inspiré d'un OS pour mieux me connaître (un poil mégalo sur les bords). 
          Vous y retrouvez différentes informations
          sur mon parcours, mes projets, mes passions et bien plus encore par la suite, le site est en constante évolution. 
          Déjà cette apparence est assez nouvelle, il va falloir que je m'y fasse moi-même, quelle idée de tout refaire, bravo
          monsieur le développeur... Et en plus il veut ajouter une base de données non mais il se prend pour qui ?!
        </p><br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">Bon même si j'aime beaucoup la programmation qui me permet d'exprimer ma créativité et mon envie de créer des projets 
          stimulants (il se la raconte là non ?), mes plus grandes passions restent les jeux vidéo et le cinéma. 
          Vous pouvez par ailleurs retrouver sur ce site mes jeux et films préférés ainsi que quelques commentaires à leur sujet, parfois pas très objectifs.
        </p>
        <br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">Je prévois de développer quelques jeux, avec Unreal Engine. Bon j'apprends, mais ne vous inquiétez pas je suis un
          fast learner, alors ça arrivera promis ! Ces jeux seront disponibles sur ce site, associés à certainement
          quelques commentaires ou autres informations à leur sujet.
        </p><br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">Mais assez de blabla, je vous propose de quitter cette page et de cliquer sur les autres boutons, découvrir ce site et en apprendre
          plus sur moi, et si vous souhaitez discuter ou me poser des questions, n'hésitez pas à me contacter ! 
        </p>
        <br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">Merci de votre visite et à bientôt je l'espère !</p>
        <br/><br/>
        <p className="text-left leading-relaxed md:leading-loose">Le très beau et très fort développeur,<br></br> Maxime Brunin (vous voyez qu'il se la raconte !)</p>
      </div>
       

        
    </div>
  );
};

export default InfoWindow;