"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import HorizontalScrollTextBlock from "./HorizontalScrollTextBlock";
import { Linear } from "gsap";

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const content = contentRef.current;

    if (container && content) {
      const contentWidth = content.scrollWidth; // Ancho total del contenido
      const viewportWidth = container.clientWidth; // Ancho de la pantalla
      const scrollDistance = contentWidth - viewportWidth; // Distancia total a desplazar

      gsap.fromTo(
        content,
        {
          x: 0,
        },
        {
          x: '-300vw', // Se mueve la cantidad exacta necesaria
          ease:'linear',
          scrollTrigger: {
            trigger: container,
            start: "top 0%",
            end: "bottom bottom", // El end dinámico basado en la distancia
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".linea",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 10,
          ease:'linear',
          scrollTrigger: {
            trigger: ".horizontal-scroll",
            start: "top 75%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section ref={containerRef} className="horizontal-scroll">
      <div className="horizontal-scroll-tracker">
        <div ref={contentRef} className="horizontal-scroll-content">
          {/* 
          <div className="steps banner-principal">
           <div className="the-method-principal-info-wrapper">
              <div className="horizontal-banner-content">
                <h2 className="white-type center-type">The Method</h2>
                <h3 className="white-type center-type">8 Steps to Welness</h3>
                <p className="white-type center-type">
                  Con HUMMANA the method aprenderás un método que te permitirá
                  conocer, en ocho pasos, cómo afrontar cualquier situación de
                  manera asertiva.  <br /> Esta metodología integral materializa
                  la esencia de HUMMANA mentorships.
                </p>
              </div>
            </div>

            <div className="img">
              <Image
                width={2560}
                height={1920}
                alt="method banner imagen"
                src="/images/mentorship/banner-themethod.png"
                style={{
                  zIndex: "-1",
                  position: "absolute",
                  filter: "brightness(.85)",
                }}
              />
            </div>
          </div>
            */}


          <div
            style={{ display: "flex", position: "relative" }}
            className="horizontal-scrolltracker-container"
          >
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea"></div>
            </div>

            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/breathwork.png"}
            />

            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/meditation.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/movement.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/self-knowledge.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/self-talk.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/meditate.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
