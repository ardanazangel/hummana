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
        <div className="circle"></div>
      </div>
      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be empowered</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            Bali trasciende la definición de una isla. Es un poderoso centro
            energético que te regresa a tus raíces más profundas. Los balineses
            tienen una honda conexión espiritual en la vida diaria, no solo para
            ellos sino para la humanidad. Sé que Bali te acogerá y te recibirá
            tal como lo necesitas en este momento de tu camino.
          </p>
        </div>
      </div>

      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be empowered</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            Bali trasciende la definición de una isla. Es un poderoso centro
            energético que te regresa a tus raíces más profundas. Los balineses
            tienen una honda conexión espiritual en la vida diaria, no solo para
            ellos sino para la humanidad. Sé que Bali te acogerá y te recibirá
            tal como lo necesitas en este momento de tu camino.
          </p>
        </div>
      </div>

      <div className="module-content">
        <div className="text-module__title">
          <h2 className="center-type">Be empowered</h2>
        </div>
        <div className="text-module__description">
          <p className="center-type">
            Bali trasciende la definición de una isla. Es un poderoso centro
            energético que te regresa a tus raíces más profundas. Los balineses
            tienen una honda conexión espiritual en la vida diaria, no solo para
            ellos sino para la humanidad. Sé que Bali te acogerá y te recibirá
            tal como lo necesitas en este momento de tu camino.
          </p>
        </div>
      </div>
    </section>
  );
}
