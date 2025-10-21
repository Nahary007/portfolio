import { motion } from "framer-motion";
import { CalendarDays, Code2, Users, ExternalLink } from "lucide-react";

const projets = [
  {
    titre: "Hackathon Interne",
    date: "07–09 juillet 2025",
    role: "Capitaine & Développeur Backend",
    organisation: "MadaMiray",
    description: [
      "Participation à un hackathon interne à l’ESTI sur le projet MadaMiray, une plateforme web pour le tourisme à Madagascar.",
      "L’application permet de lister des sites touristiques, réserver des guides et agences, et envoyer des e-mails de confirmation.",
      "Carte interactive des destinations avec un chatbot d’exploration de Madagascar.",
      "Projet réalisé avec React, TailwindCSS, Laravel, PostgreSQL, OpenStreetMap API et Claude API.",
      "Mise en place du système de réservation et d’envoi d’e-mails pour chaque agence et guide local.",
    ],
    lien: "https://github.com/madamiray", // Ajout optionnel pour un lien
    couleur: "from-emerald-500 to-teal-600",
  },
  {
    titre: "Webcup 2025",
    date: "17–18 mai 2025",
    role: "Capitaine & Développeur Backend",
    organisation: "TheEndPage",
    description: [
      "Participation à la Webcup 2025 sur la plateforme EndPage, permettant de créer des pages personnalisées.",
      "Gestion complète des profils utilisateurs (création, modification, suppression, authentification).",
      "Réalisation du backend : création, modification, suppression et affichage des pages personnalisables.",
      "Stack : React, TailwindCSS, Express & MySQL, avec JWT pour l’authentification et TypeORM pour la gestion de la base de données.",
    ],
    lien: "https://github.com/theendpage", // Ajout optionnel pour un lien
    couleur: "from-purple-500 to-pink-600",
  },
];

const Realisations = () => {
  return (
    <section id="realisations" className="relative py-24 min-h-screen-75 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300 bg-gradient-to-br from-white/50 via-transparent to-gray-50/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-950/50">
      {/* Arrière-plan subtil avec formes géométriques */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Titre avec effet gradient et animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Mes Réalisations
        </motion.h2>

        {/* Conteneur des projets avec grille responsive */}
        <div className="grid md:grid-cols-2 gap-8 space-y-0 pt-6">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 rounded-3xl shadow-xl p-8 border border-white/20 dark:border-gray-700/50 backdrop-blur-md overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-purple-500/20 transition-all duration-500"
            >

            {/* En-tête du projet */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 relative z-10">

            {/* Conteneur organisation et date */}
            <div className="flex justify-between w-full text-gray-600 dark:text-gray-400 text-sm">
                <span className="font-semibold">{projet.organisation}</span>

                <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{projet.date}</span>
                </div>
            </div>
            </div>



              {/* Rôle */}
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                <Users className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <p className="font-semibold">{projet.role}</p>
              </div>

              {/* Description */}
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                {projet.description.map((ligne, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 pl-4 border-l-2 border-gray-200/50 dark:border-gray-700/50"
                  >
                    <Code2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{ligne}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bouton lien optionnel */}
              {projet.lien && (
                <motion.a
                  href={projet.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 relative z-10"
                >
                  Voir le projet <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}

              {/* Overlay décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;