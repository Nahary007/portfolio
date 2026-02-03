import { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  lang: string;
}

const Contact = ({ lang }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sectionTitle = lang === "fr" ? "Me Contacter" : "Contact Me";
  const paragraph =
    lang === "fr"
      ? "Envie de donner vie à votre projet ? Contactez-moi dès maintenant ou rejoignez-moi sur les réseaux sociaux."
      : "Want to bring your project to life? Contact me now or join me on social networks.";
  const formTitle = lang === "fr" ? "Envoyez un Message" : "Send a Message";

  const labels = lang === "fr" ? {
    name: "Nom",
    email: "Email",
    subject: "Objet",
    message: "Message",
    namePh: "Votre nom",
    emailPh: "votre@email.com",
    subjectPh: "Objet du message",
    messagePh: "Votre message...",
  } : {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePh: "Your name",
    emailPh: "your@email.com",
    subjectPh: "Message subject",
    messagePh: "Your message...",
  };

  const sendButton = lang === "fr" ? "Envoyer" : "Send";
  const successMsg = lang === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!";
  const errorMsg = lang === "fr" ? "Une erreur est survenue. Réessayez." : "An error occurred. Please try again.";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      setStatus("error");
      return;
    }

    emailjs
      .sendForm("service_1f4tofu", "template_1bbcpbs", form.current, "YrVTw-NdB4IDZiUB3")
      .then(() => {
        setStatus("success");
        if (form.current) form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className={`
        relative py-10 sm:py-16 lg:py-20
        min-h-screen
        bg-gradient-to-br from-gray-50/70 via-transparent to-gray-100/70
        dark:from-gray-900/70 dark:via-transparent dark:to-gray-950/70
        overflow-hidden text-gray-900 dark:text-white
        transition-colors duration-300
      `}
    >
      {/* Arrière-plan subtil – plus discret sur mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 sm:top-10 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute -bottom-10 sm:bottom-10 right-4 sm:right-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="hidden sm:block absolute top-1/2 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-xl"
        >
          {sectionTitle}
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          {paragraph}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* ---------------- FORMULAIRE ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className={`
              bg-gray-100/80 dark:bg-gray-800/75 
              rounded-2xl sm:rounded-3xl 
              p-6 sm:p-8 lg:p-10 
              shadow-xl border border-gray-200/60 dark:border-gray-700/60 
              backdrop-blur-md
            `}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-gray-900 dark:text-white">
              {formTitle}
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  {labels.name}
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className={`
                    w-full px-4 py-2.5 sm:py-3 
                    rounded-lg sm:rounded-xl 
                    border border-gray-300/60 dark:border-gray-600/60 
                    bg-white/60 dark:bg-gray-800/60 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                    transition-all duration-300
                    text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    text-sm sm:text-base
                  `}
                  placeholder={labels.namePh}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  {labels.email}
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  className={`
                    w-full px-4 py-2.5 sm:py-3 
                    rounded-lg sm:rounded-xl 
                    border border-gray-300/60 dark:border-gray-600/60 
                    bg-white/60 dark:bg-gray-800/60 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                    transition-all duration-300
                    text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    text-sm sm:text-base
                  `}
                  placeholder={labels.emailPh}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2"
                >
                  {labels.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className={`
                    w-full px-4 py-2.5 sm:py-3 
                    rounded-lg sm:rounded-xl 
                    border border-gray-300/60 dark:border-gray-600/60 
                    bg-white/60 dark:bg-gray-800/60 
                    focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                    transition-all duration-300
                    resize-none
                    text-gray-900 dark:text-white
                    placeholder-gray-500 dark:placeholder-gray-400
                    text-sm sm:text-base
                  `}
                  placeholder={labels.messagePh}
                />
              </div>

              <input type="hidden" name="to_email" value="toavina.rabenjanaharisoa@gmail.com" />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className={`
                  w-full 
                  bg-gradient-to-r from-blue-600 to-blue-700 
                  hover:from-blue-700 hover:to-blue-800
                  text-white 
                  py-3 sm:py-3.5 
                  px-6 
                  rounded-lg sm:rounded-xl 
                  font-semibold 
                  shadow-lg hover:shadow-xl 
                  transition-all duration-300
                  text-sm sm:text-base
                `}
              >
                {sendButton}
              </motion.button>
            </form>

            {status === "success" && (
              <p className="text-blue-600 dark:text-blue-400 mt-5 text-center text-sm sm:text-base">
                {successMsg}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 mt-5 text-center text-sm sm:text-base">
                {errorMsg}
              </p>
            )}
          </motion.div>

          {/* ---------------- INFOS + RÉSEAUX ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div
              className={`
                bg-gray-100/80 dark:bg-gray-800/75 
                rounded-2xl sm:rounded-3xl 
                p-6 sm:p-8 lg:p-10 
                shadow-xl border border-gray-200/60 dark:border-gray-700/60 
                backdrop-blur-md
              `}
            >
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 break-all">
                    toavina.rabenjanaharisoa@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">+261 38 51 920 03</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Ankadindramamy</span>
                </div>
              </div>
            </div>

            <div
              className={`
                bg-gray-100/80 dark:bg-gray-800/75 
                rounded-2xl sm:rounded-3xl 
                px-5 sm:px-6 lg:px-8 py-5 sm:py-6 
                shadow-xl border border-gray-200/60 dark:border-gray-700/60 
                backdrop-blur-md
              `}
            >
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-5">
                <motion.a
                  href="https://github.com/Nahary007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="p-3 sm:p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/toavina-rabenjanaharisoa-7b70b6365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="p-3 sm:p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/nahary.gd"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="p-3 sm:p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>

                <motion.a
                  href="https://wa.me/261387904652"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="p-3 sm:p-4 bg-gray-200/70 dark:bg-gray-700/70 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;