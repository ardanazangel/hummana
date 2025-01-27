"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  useEffect(() => {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Crear la timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        scrub: true,
        start: "top 0%",
        end: "bottom 100%",
      },
    });

    const scrollerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          scrub: true,
          start: "top 0%",
          end: "bottom 100%",
        },
      });

    scrollerTl.fromTo(".scroller",{
        height:'0%'
    },{
        height:'100%'
    })  

    // Animación de opacidad con timeline
    tl.fromTo(
      ".first-message",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
      }
    ).to(".first-message", {
      opacity: 0,
      filter: "blur(5px)",
    });

    tl.fromTo(
      ".second-message",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
      }
    ).to(".second-message", {
      opacity: 0,
      filter: "blur(5px)",
    });

    tl.fromTo(
      ".third-message",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
      }
    ).to(".third-message", {
      opacity: 0,
      filter: "blur(5px)",
    });

    tl.fromTo(
      ".fourth-message",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
      }
    )
  }, []);

  return (
    <div className="about-section">
        <div className="scroller-wrapper">
            <div className="scroller-tracker">
                <div className="scroller-opacity"></div>
                <div className="scroller"></div>
            </div>
        </div>
      <div className="message">
        <span className="message-content white-type first-message">
          ¿Alguna vez te has planteado estas dos preguntas?
        </span>
        <span className="message-content white-type second-message">
          ¿Quién soy?
          <br />
          <br />
          ¿Qué he venido a hacer en esta vida?
        </span>
        <span className="message-content white-type third-message">
          Encontrar y aceptar nuestra propia autenticidad, lo que resuena en
          nuestro interior, es parte de la respuesta.
        </span>
        <span className="message-content white-type fourth-message">
          Diseña una vida afín a tu verdadera naturaleza
        </span>
      </div>
    </div>
  );
}
