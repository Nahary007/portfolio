import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import profilePic from "../assets/profil.png";

const Introduction = () => {
  return (
   <section id="profil" className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10 min-h-0 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      
      {/* Photo de profil avec halo doux */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-10 md:mb-0 md:mr-16"
      >
        {/* Halo doux */}
        <div className="absolute -inset-2 bg-blue-500 rounded-3xl blur-xl opacity-20"></div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300/50 dark:border-gray-700/50 bg-gray-100 dark:bg-gray-800 backdrop-blur-md hover:scale-105 transition-transform duration-300">
          <img
            src={profilePic}
            alt="Portrait"
            className="object-cover w-64 h-72 md:w-80 md:h-[360px] rounded-3xl"
          />
        </div>
      </motion.div>

      {/* Texte de présentation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 max-w-2xl text-center md:text-left"
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
          RABENJANAHARISOA Toavina (Nahary)
        </h1>

        <h2 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-blue-400 drop-shadow-sm">
            Développeur Web & Mobile
          </span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
          Passionné par les technologies, je suis fier d’exercer ce métier de développeur qui me pousse à apprendre, à me dépasser, et à résoudre des problèmes concrets avec des solutions élégantes et efficaces ; c’est cette quête constante d’amélioration, ce plaisir de transformer des idées en applications utiles et performantes.
        </p>


        <motion.a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300"
        >
          <ArrowDownToLine className="w-5 h-5" />
          Télécharger CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Introduction;