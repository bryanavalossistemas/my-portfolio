import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  // Toggle del boton de menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Estado para ver si el formulario de contacto esta abierto
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Nombre del Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            B
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Bryan Avalos Loa y Pardo</span>
        </motion.div>

        {/* Navegacion para escritorio */}
        <nav className="lg:flex hidden space-x-8 border px-5 py-3">
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Acerca de mí", href: "#sobre-mi" },
            { name: "Proyectos", href: "#horizontal-section" },
            { name: "Contacto", href: "#contacto" },
          ].map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              href={item.href}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Iconos sociales - Escritorio */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://github.com/bryanavalossistemas"
            target="_blank"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://www.linkedin.com/in/bryanavalossistemas/"
            target="_blank"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://wa.me/51915115894?text=Hola%20Bryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="/pdfs/CV-AVALOS-BRYAN.pdf"
            download="CV-AvalosLoayPardoBryanJesus.pdf"
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-500"
          >
            Descargar CV
          </motion.a>

          {/* Contratame */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Mensaje
          </motion.button>
        </div>

        {/* Boton de menu para movil */}
        <div className="md:hidden flex items-center">
          <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-300">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Menu movil */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {[
            { name: "Inicio", href: "#inicio" },
            { name: "Acerca de mí", href: "#sobre-mi" },
            { name: "Proyectos", href: "#horizontal-section" },
            { name: "Contacto", href: "#contacto" },
          ].map((item, index) => (
            <a onClick={toggleMenu} key={item.name} className="text-gray-300 font-medium py-2" href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/bryanavalossistemas" target="_blank">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>

            <a href="https://www.linkedin.com/in/bryanavalossistemas/" target="_blank">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>

            <a href="https://wa.me/51915115894?text=Hola%20Bryan" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <a
            href="/pdfs/CV-AVALOS-BRYAN.pdf"
            download="CV-AvalosLoayPardoBryanJesus.pdf"
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-center"
          >
            Descargar CV
          </a>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contáctame
          </button>
        </div>
      </motion.div>

      {/* Formulario de contacto */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">Ponte en contacto</h1>

                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>

              {/* Campos del formulario */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Tu correo"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="¿Cómo puedo ayudarte?"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
