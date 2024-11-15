import { MdMail, MdPhoneIphone, MdMap, MdGroup } from 'react-icons/md';

export default function Footer() {
  return (
    <div>
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl mb-10">Me contacter</h2>
          <div className="flex justify-center gap-20">
            <div>
              <MdMail className="text-2xl mx-auto" />
              <p>E-mail</p>
              <p>maxime_brn@outlook.fr</p>
            </div>
            <div>
              <MdPhoneIphone className="text-2xl mx-auto" />
              <p>Téléphone</p>
              <p>07 67 44 95 08</p>
            </div>
            <div>
              <MdMap className="text-2xl mx-auto" />
              <p>Localisation</p>
              <p>62138 Douvrin, France</p>
            </div>
            <div>
              <MdGroup className="text-2xl mx-auto" />
              <p>Linkedin</p>
              <p><a href="https://www.linkedin.com/in/maxime-brunin-860094216/" className="text-white underline">Maxime Brunin</a></p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 bg-black text-gray-500">
        <p>Réalisé par Maxime Brunin</p>
      </footer>
    </div>
  );
}
