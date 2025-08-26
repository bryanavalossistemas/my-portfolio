import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo y descripcion */}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Bryan Avalos Loa y Pardo
          </h2>

          {/* Enlaces de scroll */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Conéctate</h3>
            <div className="flex space-x-4">
              <a className="text-gray-700 hover:text-violet-400 transition-colors" href="https://github.com/bryanavalossistemas" target="_blank">
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://www.linkedin.com/in/bryanavalossistemas/"
                target="_blank"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>

              <a
                className="text-gray-700 hover:text-violet-400 transition-colors"
                href="https://wa.me/51915115894?text=Hola%20Bryan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Bryan Avalos Loa y Pardo. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Políticas de privacidad
            </a>
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Términos de servicio
            </a>
            <a className="text-gray-500 hover:text-white text-sm transition-colors" href="#">
              Políticas de cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
