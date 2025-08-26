import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  // Referencias para los elementos del cursor
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Ocultar cursor en moviles
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    // Obtener elementos del cursor
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // Posición inicial fuera de la pantalla
    gsap.set([cursor, cursorBorder], { xPercent: -50, yPercent: -50 });

    // Variables para la posición del cursor con diferentes velocidades
    const xTo = gsap.quickTo(cursor, "x", { direction: 0.2, ease: "power3.out" });

    const yTo = gsap.quickTo(cursor, "y", { direction: 0.2, ease: "power3.out" });

    const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out" });

    const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out" });

    // Controlador del movimiento del mouse
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // Agregar el escuchador del movimiento del mouse
    window.addEventListener("mousemove", handleMouseMove);

    // Agregar animacion de click
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], { scale: 0.6, duration: 0.2 });
    });

		document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder], { scale: 1, duration: 0.2 });
    });
  }, []);

  return (
    <>
      {/* punto del cursor principal */}
      <dev ref={cursorRef} className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference" />

      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
      />
    </>
  );
}
