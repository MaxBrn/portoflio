export default function NavBar() {
    return(
        <nav className="flex justify-center items-center bg-black text-white py-4">
          <div className="flex gap-8">
            <a href="/" className="font-bold text-lg">Présentation</a>
            <a href="/btsSio" className="font-bold text-lg">BTS SIO</a>
            <a href="/veilleTechno" className="font-bold text-lg">Veille technologique</a>
            <a href="/real" className="font-bold text-lg">Réalisation</a>
          </div>
        </nav>
    );
}