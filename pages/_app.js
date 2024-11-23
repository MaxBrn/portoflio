import '@/app/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';

export default function MyApp({ Component, pageProps }) {
    return (
      <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Head>
          <title>Portfolio - Maxime Brunin</title>
          <meta name="description" content="Bienvenue sur mon portfolio. Découvrez mes compétences et projets en développement web." />
        </Head>
        <Header/>
        <NavBar/>
        
        <Component {...pageProps} />
        <Footer />
        </ThemeProvider>
      </>
    );
  }