import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animacion del titulo
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: -300,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animacion de entrada
    gsap.fromTo(
      introRef.current,
      { opacity: 0, y: 100, filter: "blur(10px)" },
      {
        opacity: 1,
        y: -400,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animacion de estrellas con diferentes velocidades y direcciones
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section id="sobre-mi" ref={sectionRef} className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
      <div className="absolute inset-0 overflow-hidden">
        {/* Estrellas */}
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">
          Acerca de mí
        </h1>
      </div>

      <div
        ref={introRef}
        className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
      >
        <h3 className="text-sm md:text-2xl font-bold text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]">
          Hola, me llamo Bryan y soy estudiante del décimo ciclo de la carrera de Ingeniería de Sistemas en la Universidad de Lima, ubicado en el
          décimo superior. A lo largo de mi formación he aplicado mis conocimientos en proyectos reales de desarrollo web full-stack, incluyendo la
          implementación de un ERP y soluciones de automatización para procesos empresariales. Me apasiona crear software útil, funcional y escalable.
          Me adapto con facilidad a entornos colaborativos, disfruto resolver problemas técnicos y estoy comprometido con seguir aprendiendo y
          mejorando en cada etapa del desarrollo profesional.
        </h3>

        <img className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten" src="images/me.jpg" alt="imagen de perfil" />
      </div>
    </section>
  );
}
