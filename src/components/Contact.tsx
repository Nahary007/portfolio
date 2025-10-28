import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

interface ContactProps {
  lang: string;
}

const Contact = ({ lang }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sectionTitle = lang === 'fr' ? 'Me Contacter' : 'Contact Me';
  const paragraph = lang === 'fr' ? 
    "Envie de donner vie à votre projet ? Contactez-moi dès maintenant ou rejoignez-moi sur les réseaux sociaux." :
    "Want to bring your project to life? Contact me now or join me on social networks.";
  const formTitle = lang === 'fr' ? 'Envoyez un Message' : 'Send a Message';

  const labels = lang === 'fr' ? {
    name: 'Nom',
    email: 'Email',
    subject: 'Objet',
    message: 'Message',
    namePh: 'Votre nom',
    emailPh: 'votre@email.com',
    subjectPh: 'Objet du message',
    messagePh: 'Votre message...',
  } : {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    namePh: 'Your name',
    emailPh: 'your@email.com',
    subjectPh: 'Message subject',
    messagePh: 'Your message...',
  };

  const sendButton = lang === 'fr' ? 'Envoyer' : 'Send';
  const successMsg = lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!';
  const errorMsg = lang === 'fr' ? 'Une erreur est survenue. Réessayez.' : 'An error occurred. Please try again.';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_9sgw6mj", 
        "template_hovptjf",
        form.current,
        "YrVTw-NdB4IDZiUB3"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 min-h-screen bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-950/50 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Arrière-plan subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-2xl"
        >
          {sectionTitle}
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 text-lg max-w-3xl mx-auto">
          {paragraph}
        </p>


        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulaire EmailJS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="bg-gray-100/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{formTitle}</h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {labels.name}
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-gray-100/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={labels.namePh}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {labels.email}
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-gray-100/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={labels.emailPh}
                />
              </div>

              <div>
                <label htmlFor="objet" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {labels.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  id="objet"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-gray-100/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={labels.subjectPh}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {labels.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300/50 dark:border-gray-700/50 bg-gray-100/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={labels.messagePh}
                ></textarea>
              </div>

              <input type="hidden" name="to_email" value="toavina.rabenjanaharisoa@gmail.com" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {sendButton}
              </motion.button>
            </form>

            {status === "success" && (
              <p className="text-blue-600 dark:text-blue-400 mt-4 text-center">{successMsg}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 mt-4 text-center">{errorMsg}</p>
            )}
          </motion.div>

          {/* Panneau contact et réseaux */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">
                    toavina.rabenjanaharisoa@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">+261 38 51 920 03</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">Ankadindramamy</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-md">
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Nahary007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/toavina-rabenjanaharisoa-7b70b6365/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
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