import { filmsData } from "@/data/films";
import Link from "next/link";
import { FaSquareLetterboxd } from "react-icons/fa6";

const FilmWindow = () => {
  return (
    <div className="bg-bgColor pb-20 md:pt-10">
        <div filmsData={filmsData} className="w-3/4 mx-auto pb-30 text-center">
          <div className="border border-border rounded-3xl p-6 bg-bgColor2 shadow-lg shadow-button mb-10">
            <p className=" mb-10">Voici la liste de mes films préférés ! </p>
            <p> Bon pas très longue me diriez vous, 
              mais justement cette liste contient les films qui m'ont réellement marqué, voir même fait réfléchir
              sur ma vie. Ils ont clairement eu un impact sur moi et ont une place très forte dans mon cœur.
            </p><br/>
            <p>
              Si vous voulez voir tous les films que j'ai vu alors je peux vous rediriger vers mon compte Letterboxd, qui lui contient 
              tous les films que j'ai vu, même les plus mauvais (oui oui je parle de toi Dragon Ball Evolution).
            </p>
            <Link href="https://boxd.it/b85TV" target="_blank" className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-500 hover:text-blue-700 mt-4">
              <FaSquareLetterboxd className="text-2xl" />
              Mon compte Letterboxd
            </Link>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-3/4 mx-auto">
                {filmsData.map((film, index) => (
                    <div key={index} className="">
                        <img src={film.image} alt={film.title} className="w-full object-fit rounded-lg mb-4 border border-border shadow-lg shadow-button" />
                        <h2 className="text-l font-semibold mb-2">{film.title}</h2>
                        <p className="text-l"> {film.director}</p>
                    </div>
                ))}
            </div>
          </div>
    </div>
  );
};

export default FilmWindow;