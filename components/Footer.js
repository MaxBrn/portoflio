import { MdMail, MdPhoneIphone, MdMap } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* Section "Me Contacter" */}
      <section className="py-24 text-custom">
        <div className="border-t border-custom-creamLite dark:border-custom-nightLite w-[75%] mx-auto mb-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl mb-10">Me contacter</h2>
          <div className="flex flex-wrap justify-center gap-20 md:gap-20">
            {/* Contact par email */}
            <div className="text-center">
              <MdMail className="text-4xl mx-auto mb-2" />
              <p className="font-semibold">E-mail</p>
              <p>maxime_brn@outlook.fr</p>
            </div>
            {/* Contact par téléphone */}
            <div className="text-center">
              <MdPhoneIphone className="text-4xl mx-auto mb-2" />
              <p className="font-semibold">Téléphone</p>
              <p>07 67 44 95 08</p>
            </div>
            {/* Localisation */}
            <div className="text-center">
              <MdMap className="text-4xl mx-auto mb-2" />
              <p className="font-semibold">Localisation</p>
              <p>62138 Douvrin, France</p>
            </div>
            {/* Lien LinkedIn */}
            <div className="text-center">
              <FaLinkedin className="text-4xl mx-auto mb-2" />
              <p className="font-semibold">LinkedIn</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/maxime-brunin-860094216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Maxime Brunin
                </a>
              </p>
            </div>
            {/* Lien GitHub */}
            <div className="text-center">
              <FaGithub className="text-4xl mx-auto mb-2" />
              <p className="font-semibold">GitHub</p>
              <p>
                <a
                  href="https://github.com/MaxBrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  MaxBrn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-custom transition-bg duration-1000 ease-in-out">
        <p>Réalisé par Maxime Brunin</p>
      </footer>
    </div>
  );
}
