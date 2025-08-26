import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  // Imagenes de los proyectos
  const projectImages = [
    {
      id: 1,
      title: "Factzil - Sistema de Facturación",
      imageSrc: "/images/project-1-Factzil-2.png",
      href: "https://sistema.factzil.com/auth/login?demo=true",
      hrefRepo: "https://github.com/bryanavalossistemas/factzil-sistema",
    },
    {
      id: 2,
      title: "GuitarLA - Tienda de Guitarras",
      imageSrc: "/images/project-2-GuitarLA.png",
      href: "https://sensational-bublanina-922cde.netlify.app/",
      hrefRepo: "https://github.com/bryanavalossistemas/guitar_la",
    },
    {
      id: 3,
      title: "Planificador de Gastos",
      imageSrc: "/images/project-3-PlanificadorDeGastos.png",
      href: "https://stunning-palmier-13a090.netlify.app/",
      hrefRepo: "https://github.com/bryanavalossistemas/control_gastos",
    },
    {
      id: 4,
      title: "Contador de Calorías",
      imageSrc: "/images/project-4-ContadorDeCalorias.png",
      href: "https://joyful-biscochitos-c2efc9.netlify.app/",
      hrefRepo: "https://github.com/bryanavalossistemas/contador_calorias",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animacion de revelacion del titulo
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animacion del Title Line
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Efecto de entrada de los proyectos
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Efecto paralax para la seccion de entrada
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Scroll horizontal
    // Crear la animacion de scroll horizontal
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Animacion de las imagenes
    // Animar cada imagen del panel
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel, i) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      // Opacidad y escalamiento de la imagen
      tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 1, duration: 0.5 });

      // Animacion del titulo si existe
      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImages.length]);

  return (
    <section ref={sectionRef} id="horizontal-section" className="relative py-20 bg-[#f6f6f6] overflow-hidden">
      {/* Seccion del titulo */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0">
          Proyectos destacados
        </h2>
        <div ref={titleLineRef} className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"></div>
      </div>

      {/* Seccion de los proyectos */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="horizontal-section flex md:w-[400%] w-[420%]">
          {projectImages.map((project) => (
            <div Loading key={project.id} className="panel relative flex items-center justify-center">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <a href={project.href} target="_blank">
                  <img src={project.imageSrc} alt={project.title} className="project-image max-w-full max-h-full rounded-2xl object-cover" />
                </a>
                <a
                  href={project.href}
                  target="_blank"
                  className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                >
                  {project.title} <SlShareAlt />
                </a>
                <a
                  href={project.hrefRepo}
                  target="_blank"
                  className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer"
                >
                  Repositorio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
