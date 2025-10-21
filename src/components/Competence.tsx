import { motion } from "framer-motion";

const competences = [
  { nom: "HTML", pourcentage: 90, icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { nom: "CSS", pourcentage: 75, icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { nom: "Bootstrap", pourcentage: 65, icone: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { nom: "Tailwindcss", pourcentage: 60, icone: "https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" },
  { nom: "C", pourcentage: 75, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { nom: "C++", pourcentage: 75, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { nom: "JavaScript", pourcentage: 75, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { nom: "TypeScript", pourcentage: 85, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { nom: "PHP", pourcentage: 90, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { nom: "Java", pourcentage: 70, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { nom: "Python", pourcentage: 70, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { nom: "Laravel", pourcentage: 87, icone: "https://i.pinimg.com/736x/ab/8b/5e/ab8b5ea6637ebd8e5755c838d952b8c1.jpg" },
  { nom: "Symfony", pourcentage: 78, icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_-q51pPQiLuZf84O0Psnw1dGr1PCd6vMzA&s" },
  { nom: "Expess.js", pourcentage: 85, icone: "https://images.tute.io/media/topics/icons/express-js.png" },
  { nom: "Spring Boot", pourcentage: 60, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
  { nom: "Flutter", pourcentage: 40, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg" },
  { nom: "Dart", pourcentage: 40, icone: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" },

];

const Competences = () => {
  return (
    <section id="competences" className="relative py-24 min-h-screen overflow-hidden text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Mes Compétences
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {competences.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-4 shadow-md border border-gray-300/20 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3">
                <img
                  src={comp.icone}
                  alt={comp.nom}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-center font-semibold text-sm mb-2">{comp.nom}</h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300/30">
                <div
                  className="h-full bg-gray-500 transition-all duration-300"
                  style={{ width: `${comp.pourcentage}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;
