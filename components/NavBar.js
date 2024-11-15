import Link from 'next/link';
export default function NavBar() {
    return(
        <nav className="flex justify-center items-center bg-black text-white py-4">
          <div className="flex gap-8">
            <Link href="/" className="font-bold text-lg">Présentation</Link>
            <Link href="/btsSio" className="font-bold text-lg">BTS SIO</Link>
            <Link href="/veilleTechno" className="font-bold text-lg">Veille technologique</Link>
            <Link href="/real" className="font-bold text-lg">Réalisation</Link>
          </div>
        </nav>
    );
}