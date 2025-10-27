import { motion } from "framer-motion";
import { BookOpen, Building2, Landmark } from "lucide-react";

const parcoursItems = [
  {
    type: "experience",
    titre: "Hackathon Interne",
    entreprise: "MadaMiray",
    dates: "07–09 juillet 2025",
    description: `
    Participation à un hackathon interne à l’ESTI sur le projet MadaMiray, une plateforme web pour le tourisme à Madagascar.`,
  },
  {
    type: "experience",
    titre: "Webcup 2025",
    entreprise: "TheEndPage",
    dates: "17–18 mai 2025",
    description: `
    Participation à la Webcup 2025 sur le projet EndPage, une plateforme de création de pages personnalisées avec gestion complète des profils utilisateurs (CRUD, authentification).`,
  },
  {
    type: "diplome",
    titre: "Licence Informatique – 2ᵉ année",
    institution: "ESTI – Antanimena",
    annee: "2024 – Aujourd’hui",
    description: "Formation en développement web, bases de données et conception d’applications logicielles.",
  },
  {
    type: "diplome",
    titre: "Licence Informatique – 1ʳᵉ année",
    institution: "ESTI – Antanimena",
    annee: "2023 – 2024",
    description: "Acquisition des bases solides en programmation et technologies web.",
  },
  {
    type: "diplome",
    titre: "Baccalauréat Série D",
    institution: "LP Éthique – Ankadindramamy",
    annee: "2022 – 2023",
    description: "Études secondaires axées sur les sciences exactes et la logique mathématique.",
  },
];

const Cv = () => {
  return (
    <section
      id="cv"
      className="relative py-24 min-h-screen bg-gradient-to-br from-gray-50/70 via-transparent to-blue-100/30 dark:from-gray-900/70 dark:via-transparent dark:to-blue-900/30 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-blue-100/20 to-blue-300/20 dark:from-blue-500/20 dark:to-blue-700/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Mon Parcours Professionnel
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700 h-full z-0"></div>

          {parcoursItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className={`relative z-10 mb-12 flex items-start ${
                index % 2 === 0
                  ? "flex-row-reverse justify-end"
                  : "justify-start"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 top-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg ring-4 ring-blue-100/50 dark:ring-blue-900/50"></div>

              <div
                className={`w-full max-w-md p-6 rounded-2xl shadow-lg bg-gray-100/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  index % 2 === 0
                    ? "ml-auto rounded-r-none border-r-0"
                    : "rounded-l-none border-l-0"
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {item.type === "formation" && (
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  )}
                  {item.type === "experience" && (
                    <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  )}
                  {item.type === "diplome" && (
                    <Landmark className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  )}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {item.titre}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.institution || item.entreprise} •{" "}
                      {item.dates || item.annee}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cv;