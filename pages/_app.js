import '@/app/globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Index from '.';
import BtsSio from './btsSio';
import Real from './real';
import VeilleTechno from './veilleTechno';

export default function MyApp() {
    return (
      <>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Head>
          <title>Portfolio - Maxime Brunin</title>
          <link rel="icon" href="/icon.ico" />
          <meta name="description" content="Bienvenue sur mon portfolio. Découvrez mes compétences et projets en développement web." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preload" href="/image/background.jpg" as="image" />
          <link rel="preload" href="/image/backgroundDark.jpg" as="image" />
        </Head>
        <Header/>
        <NavBar/>        
        <Index/>
        <BtsSio/>
        <VeilleTechno/>
        <Real/>
        <SpeedInsights/>
        <Analytics/>
        <Footer />
        </ThemeProvider>
      </>
    );
  }
