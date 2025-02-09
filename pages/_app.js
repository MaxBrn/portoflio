import '@/app/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"


export default function MyApp({ Component, pageProps }) {
    return (
      <>
      <ThemeProvider attribute="class">
        <Head>
          <title>Portfolio - Maxime Brunin</title>
          <link rel="icon" href="/icon.ico" />
          <meta name="description" content="Bienvenue sur mon portfolio. Découvrez mes compétences et projets en développement web." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preload" href="/image/backgroundNew.jpg" as="image" />
        </Head>
        <NavBar/>        
        <Component {...pageProps} />
        <SpeedInsights/>
        <Analytics/>
        <Footer />
        </ThemeProvider>
      </>
    );
  }
