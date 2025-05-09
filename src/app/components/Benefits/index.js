"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

export default function Benefits() {
  const trigger = useRef();
  const benefit1 = useRef();
  const benefit2 = useRef();
  const benefit3 = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const textTotal = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const alturaVentana = window.innerHeight;

    gsap.fromTo(
      textTotal.current,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top 25%",
          end: "top top",
          scrub: true,
        },
      }
    );

    const benefitTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: `${alturaVentana} center`,
        end: "bottom bottom",
        scrub: true,
      },
    });

    benefitTl.to(
      benefit1.current,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    benefitTl.to(benefit2.current, {
      opacity: 1,
      filter: "blur(0px)",
    });
    benefitTl.to(
      benefit2.current,
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    benefitTl.to(benefit3.current, {
      opacity: 1,
      filter: "blur(0px)",
    });
    benefitTl.to(
      "#benefits-content",
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      "+=0.5"
    );
  }, []);

  return (
    <section id="benefits" ref={trigger}>
      <div id="benefits-images">
        <div className="benefit-image image-1" ref={image1}>
          <Image
            src={"/assets/atardecer.webp"}
            width={300}
            height={600}
            alt="Image benefit"
          />
        </div>
        <div className="benefit-image image-2" ref={image2}>
          <Image
            src={"/assets/atardecer.webp"}
            width={300}
            height={600}
            alt="Image benefit"
          />
        </div>
        <div className="benefit-image image-3" ref={image3}>
          <Image
            src={"/assets/atardecer.webp"}
            width={300}
            height={600}
            alt="Image benefit"
          />
        </div>
      </div>

      <div id="benefits-content" ref={textTotal}>
        <h2>Benefits</h2>
        <div className="benefit benefit-1" ref={benefit1}>
          <article>
            <h3>Mente</h3>
            <p>
              Fortalece la mente para pasar a la acción Favorece la creatividad
              <br />
              Refuerza la claridad mental
              <br />
              Desarrolla la regulación emocional
              <br />
              Cultiva una mentalidad de crecimiento
            </p>
          </article>
        </div>
        <div className="benefit benefit-2" ref={benefit2}>
          <article>
            <br />
            <h3> Cuerpo</h3>
            <p>
              Elimina el burnout y la ansiedad
              <br />
              Impulsa elecciones conscientes
              <br />
              Regula el sistema nervioso
              <br />
              Mejora la calidad del sueño
              <br />
              Proporciona bienestar físico y emocional
            </p>
          </article>
        </div>
        <div className="benefit benefit-3" ref={benefit3}>
          <article>
            <h3>
              <br />
              Espíritu
            </h3>
            <p>
              Eleva el estado de consciencia
              <br />
              Facilita una profunda conexión con la vida
              <br />
              DFortalece la confianza en tus capacidades
              <br />
              Cultiva el sentido de dirección
              <br />
              Proporciona vitalidad y claridad mental
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
