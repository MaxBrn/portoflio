import '@/app/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>Portfolio - Maxime Brunin</title>
          <meta name="description" content="Bienvenue sur mon portfolio. Découvrez mes compétences et projets en développement web." />
        </Head>
        <NavBar/>
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }