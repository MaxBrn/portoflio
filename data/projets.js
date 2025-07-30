export const projetsData = [
  {
    title: "Portfolio",
    description: "Mon site web personnel",
    technologies: [
      { name: "Next.js", className: "bg-blue-100 text-blue-800" },
      { name: "Tailwind", className: "bg-green-100 text-green-800" },
      { name: "React", className: "bg-purple-100 text-purple-800" }
    ],
    details: "C'est le portfolio que vous consultez actuellement. J'ai voulu recréer une sorte de bureau avec des fenêtres qui s'ouvrent pour afficher les informations à mon sujet. Le site est voué à encore évoluer alors n'hésitez pas à revenir régulièrement pour voir les nouveautés.",
    src: "/image/portfolio.png",
    link:"https://maximebrunin.vercel.app/"
  },
  {
    title: "Marieteam Web",
    description: "Site web de réservation",
    technologies: [
      { name: "Next.js", className: "bg-yellow-100 text-yellow-800" },
      { name: "TailwindCSS", className: "bg-yellow-100 text-yellow-800" },
      { name: "React", className: "bg-yellow-100 text-yellow-800" },
      { name: "JavaScript", className: "bg-yellow-100 text-yellow-800" },
      { name: "Supabase", className: "bg-yellow-100 text-yellow-800" },
      { name: "PostgreSQL", className: "bg-yellow-100 text-yellow-800" },
      
    ],
    details: "Marieteam est une simulation de site de réservation de transport maritime. Connecté à une base de données, il permet aux utilisateurs de réserver des trajets et de consulter leurs réservations. Un dashboard admin offre la gestion des liaisons, le suivi des places réservées et l'analyse des revenus.",
    src: "/image/marieteamWeb.png",
    link: "https://mariteam.vercel.app/"
  },
  {
    title: "Marieteam Java",
    description: "Application Java pour la gestion de la flotte de bateaux",
    technologies: [
      { name: "Java", className: "bg-yellow-100 text-yellow-800" },
      { name: "Swing", className: "bg-yellow-100 text-yellow-800" },
      { name: "PostgreSQL", className: "bg-yellow-100 text-yellow-800" },
      { name: "Supabase", className: "bg-yellow-100 text-yellow-800" },
    ],
    details: "Permet de générer des PDF contenant tous les bateaux de la flotte. Permet aussi de modifier les informations d'un bateau sélectionné. La solution est reliée à la même base de données que le projet Web.",
    src: "/image/javaMarieteam.png",
    link: "/"
  },
  
];