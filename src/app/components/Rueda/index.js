"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default function Rueda() {
  const trigger = useRef();
  const ruedaElement = useRef();
  const ruedaTotal = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const alturaVentana = window.innerHeight;
    const alturaTrigger = trigger.current.offsetHeight;

    gsap.fromTo(
      ruedaTotal.current,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top center",
          end: `top top`,
          scrub: true,
        },
      }
    );

    const ruedaTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: `bottom 150%`,
        scrub: true,
      },
    });

    const textosTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: `bottom 125%`,
        scrub: true,
      },
    });

    gsap.set(".rueda-texto-1", {
      opacity: 1,
    });

    textosTl.to(".rueda-texto-1", {
      opacity: 1,
    });
    textosTl.to(".rueda-texto-1", {
      opacity: 0,
    });
    textosTl.to(".rueda-texto-2", {
      opacity: 1,
    });
    textosTl.to(".rueda-texto-2", {
      opacity: 0,
    });
    textosTl.to(".rueda-texto-3", {
      opacity: 1,
    });
    textosTl.to(".rueda-texto-3", {
      opacity: 0,
    });

    ruedaTl.fromTo(
      ruedaElement.current,
      {
        rotate: 0,
      },
      {
        rotate: -240,
        ease: "linear",
      }
    );
    gsap.to("#rueda-texto, #rueda-elemento", {
      opacity: 0,
      filter: "blur(10px)",
      scrollTrigger: {
        trigger: trigger.current,
        start: `${alturaTrigger - alturaVentana * 1.5} top`,
        end: `bottom bottom`,
        scrub: true,
      },
    });
  }, []);
  return (
    <section id="rueda" ref={trigger}>
      <div id="rueda-sticky">
        <div id="rueda-content" ref={ruedaTotal}>
          <div id="rueda-texto">
            <div className="rueda-texto-elemento rueda-texto-1">
              <h3>Being Reshaped</h3>
              <h4>Pasado</h4>
              <p>
                La adversidad es una oportunidad porque nos obliga a ir más
                profundo, nos empuja a despertar y a hacernos preguntas
                significativas.
              </p>
            </div>
            <div className="rueda-texto-elemento rueda-texto-2">
              <h3>BEING REWIRED</h3>
              <h4>Presente</h4>
              <p>
                La mayoría de personas viven entre dos planos imaginarios: el
                pasado, que no pueden cambiar o el futuro, que no pueden
                predecir.
              </p>
            </div>
            <div className="rueda-texto-elemento rueda-texto-3">
              <h3>BEING IN FULL CONSCIOUSNESS</h3>
              <h4>Futuro</h4>
              <p>
                Para convertir una visión en una realidad es necesario
                desarrollar una mentalidad específica «growth mindset». Un
                visionario es aquel capaz de ver más allá del presente, de
                imaginar un futuro más creativo y consciente.
              </p>
            </div>
          </div>
          <div id="rueda-elemento" ref={ruedaElement}>
            <div className="point point-1" />
            <div className="point point-2" />
            <div className="point point-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
