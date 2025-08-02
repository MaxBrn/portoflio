export const projetsData = [
  {
    title: "Portfolio",
    description: "Mon site web personnel",
    technologies: [
      { name: "Next.js"},
      { name: "Tailwind"},
      { name: "React"},
      { name: "Supabase"},
      { name: "PostgreSQL"}
    ],
    details: "C'est le portfolio que vous consultez actuellement. J'ai voulu recréer une sorte de bureau avec des fenêtres qui s'ouvrent pour afficher les informations à mon sujet. J'y ai récemment connecté une base de données en PostgreSQL hébergée sur Supabase. Elle contiendra à terme par exemple les détails de mes projets, mes compétences, les films et jeux que j'aime... Le site est voué à encore évoluer alors n'hésitez pas à revenir régulièrement pour voir les nouveautés.",
    src: "/image/portfolio.png",
    link:"https://maximebrunin.vercel.app/"
  },
  {
    title: "Marieteam Web",
    description: "Site web de réservation",
    technologies: [
      { name: "Next.js"},
      { name: "TailwindCSS"},
      { name: "React" },
      { name: "JavaScript", },
      { name: "Supabase", },
      { name: "PostgreSQL", },
      
    ],
    details: "Marieteam est une simulation de site de réservation de transport maritime. Connecté à une base de données, il permet aux utilisateurs de réserver des trajets et de consulter leurs réservations. Un dashboard admin offre la gestion des liaisons, le suivi des places réservées et l'analyse des revenus.",
    src: "/image/marieteamWeb.png",
    link: "https://mariteam.vercel.app/"
  },
  {
    title: "Marieteam Java",
    description: "Application Java pour la gestion de la flotte de bateaux",
    technologies: [
      { name: "Java", },
      { name: "Swing", },
      { name: "PostgreSQL", },
      { name: "Supabase", },
    ],
    details: "Permet de générer des PDF contenant tous les bateaux de la flotte. Permet aussi de modifier les informations d'un bateau sélectionné. La solution est reliée à la même base de données que le projet Web.",
    src: "/image/javaMarieteam.png",
    link: "/"
  },
  
];