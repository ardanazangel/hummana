"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../Button";

export default function HeroBali() {
  gsap.registerPlugin(ScrollTrigger);

  const triggerRetreats = useRef();
  const imagen = useRef();
  const primera = useRef();
  const segunda = useRef();
  const tercera = useRef();

  useEffect(() => {
    const alturaVentana = window.innerHeight;
    const navbar = document.getElementById("navbar");
    navbar.classList.add("dark-nav");

    const scrollTriggers = [];

    const trigger1 = ScrollTrigger.create({
      trigger: triggerRetreats.current,
      start: `${alturaVentana} top`,
      onEnter: () => {
        navbar.classList.remove("dark-nav");
      },
      onEnterBack: () => {
        navbar.classList.remove("dark-nav");
      },
      onLeave: () => {
        navbar.classList.add("dark-nav");
      },
      onLeaveBack: () => {
        navbar.classList.add("dark-nav");
      },
    });

    scrollTriggers.push(trigger1);

    const imageAnimation = gsap.to(imagen.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: triggerRetreats.current,
        start: "top top",
        end: `${alturaVentana} top`,
        scrub: true,
      },
    });

    scrollTriggers.push(imageAnimation.scrollTrigger);

    const textosTl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRetreats.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    textosTl
      .to(primera.current, {
        opacity: 0,
        filter: "blur(10px)",
      })
      .to(segunda.current, {
        opacity: 1,
        filter: "blur(0px)",
      })
      .to(segunda.current, {
        opacity: 0,
        filter: "blur(10px)",
      })
      .to(tercera.current, {
        opacity: 1,
        filter: "blur(0px)",
      });

    scrollTriggers.push(textosTl.scrollTrigger);

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
      ScrollTrigger.refresh();
      navbar.classList.remove("dark-nav");
    };
  }, []);

  return (
    <section id="hero-retreats" ref={triggerRetreats}>
      <div id="sticky-wrapper">
        <div id="hero-retreats-content">
          <Image
            src={"/assets/banner.webp"}
            width={600}
            height={300}
            alt="Imagen de fondo retreats"
            ref={imagen}
          />
          <div
            id="primera-retreats"
            className="hero-retreats-apartado"
            ref={primera}
          >
            <article>
              <h3>Hummana Bali</h3>
              <h1>The Bali Escape</h1>
              <p>The power of the mind</p>
            </article>
          </div>
          <div
            id="segunda-retreats"
            className="hero-retreats-apartado"
            ref={segunda}
          >
            <article>
              <h2>Boundless</h2>
              <p>
                Estas enseñanzas tienen el poder de aportar un valor más
                profundo a nuestra vida, y de inspirarnos a realizar los cambios
                que nos acercan a la felicidad que anhelamos.
              </p>
            </article>
          </div>
          <div
            id="tercera-retreats"
            className="hero-retreats-apartado"
            ref={tercera}
          >
            <article>
              <h2>RETREAT. GROW. FLOW</h2>
              <h5>
                20 participantes <br /> 1 entorno que supera la imaginación
                <br />7 días en la selva de Bali, Indonesia
                <br /> 1 break para cuidar de tu salud emocional y traer
                equilibrio, claridad y una nueva forma de gestionar tu energía y
                tu vida.
              </h5>
              <Button
                href={"come-play"}
                label={"come play"}
                colorMode={"light"}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
