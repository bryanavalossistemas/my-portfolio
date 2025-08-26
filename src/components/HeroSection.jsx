import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* Seccion de la izquierda */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 border px-4 py-3"
        >
          Desarrollo de <br /> Aplicaciones
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          Desarrollo sitios web, aplicaciones web robustas y listos para producción con rapidez y precisión. Cada proyecto que construyo está
          respaldado por un código limpio, buenas prácticas, documentación y un enfoque centrado en el usuario.
        </motion.p>
      </div>

      {/* Seccion de la derecha */}
      <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" scene="https://prod.spline.design/zRvktCT9JUa9pzL4/scene.splinecode" />
    </section>
  );
}
