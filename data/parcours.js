import { FaGraduationCap, FaSchool, FaCode, FaUser } from "react-icons/fa";

export const parcoursData = [
  {
    date: "2023 - Actuellement",
    title: "L3 MIAGE",
    institution: "Université de Lille",
    description: "Formation en Méthodes Informatiques Appliquées à la Gestion des Entreprises. Apprentissage approfondi du développement web, de la gestion de projet et des systèmes d'information.",
    color: "blue",
    icon: <FaGraduationCap className="text-white text-sm" />
  },
  {
    date: "2021 - 2023",
    title: "DUT Informatique",
    institution: null,
    description: "Formation généraliste en informatique couvrant la programmation, les bases de données, les réseaux et le développement web.",
    color: "green",
    icon: <FaSchool className="text-white text-sm" />
  },
  {
    date: "2023",
    title: "Stage en Développement Web",
    institution: null,
    description: "Stage de 3 mois dans une PME locale, développement d'une application web de gestion interne avec React et Node.js.",
    color: "purple",
    icon: <FaCode className="text-white text-sm" />
  },
  {
    date: "Objectif Futur",
    title: "Enseignant en Développement",
    institution: null,
    description: "Mon rêve est de devenir enseignant en développement informatique pour transmettre ma passion et accompagner les futurs développeurs.",
    color: "orange",
    icon: <FaUser className="text-white text-sm" />
  }
];