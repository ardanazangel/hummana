"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function ModuloTexto() {
  useEffect(() => {
    const modules = document.querySelectorAll(".module-content");
    const modulesWrapper = document.querySelector(".modulo-texto");
    const circleWrapper = document.querySelector(".circle__wrapper");
    const circle = document.querySelector(".circle");

    modulesWrapper.addEventListener("mouseleave", () => {
      gsap.fromTo(circle, { opacity: 1 }, { opacity: 0, duration: 0.01 });
    });
    modulesWrapper.addEventListener("mouseenter", () => {
      gsap.fromTo(circle, { opacity: 0 }, { opacity: 1, duration: 0.2 });
    });

    modules.forEach((module) => {
      module.addEventListener("mouseenter", () => {
        if (!circleWrapper || !circle) return;

        const state = Flip.getState(circleWrapper);

        module.prepend(circleWrapper);

        Flip.from(state, {
          duration: 1,
          ease: "power2.inOut",
          absolute: true,
        });
        // Animate circle opacity
      });
    });

    return () => {
      modules.forEach((module) =>
        module.removeEventListener("mouseenter", () => {})
      );
    };
  }, []);

  return (
    <section className="modulo-texto">
      <div className="circle__wrapper">
        <div className="circle" style={{ borderRadius: "999" }}></div>
      </div>
      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be Connected</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            Adéntrate en una experiencia donde la naturaleza cobra vida propia.
            HUMMANA se encuentra en el pulmón de la isla de Bali, Indonesia. Un
            oasis de paz y de tranquilidad donde disfrutarás la belleza de la
            selva, las playas majestuosas y los atardeceres impactantes. Un
            entorno salvaje para elevar tu mente, tu cuerpo y tu espíritu.
          </p>
        </div>
      </div>

      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be Opened</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            HUMMANA es un puente para emprendedores, creativos, altos
            directivos, soñadores, almas curiosas y exploradoras, de distintas
            partes del mundo, dispuestos a la aventura y al autoconocimiento. La
            única regla es venir con una mente abierta.
          </p>
        </div>
      </div>

      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be Empowered</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            HUMMANA es un retiro contemporáneo que cuenta con un cutting-edge
            program centrado en el desarrollo personal en el que la optimización
            de la productividad (hacer) coexiste con el cuidado del bienestar
            interno (ser).
          </p>
        </div>
      </div>
    </section>
  );
}
