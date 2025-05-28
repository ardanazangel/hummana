"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../Button";

export default function HeroSumba() {
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
            src={"/assets/hero-creative.webp"}
            width={1920}
            height={1080}
            alt="Imagen de fondo retreats"
            ref={imagen}
          />
          <div
            id="primera-retreats"
            className="hero-retreats-apartado"
            ref={primera}
          >
            <article>
              <h3>Hummana Sumba</h3>
              <h1>The Creative Escape</h1>
              <p>The power to flow</p>
            </article>
          </div>
          <div
            id="segunda-retreats"
            className="hero-retreats-apartado"
            ref={segunda}
          >
            <article>
              <h2>THE SOURCE OF CREATIVITY</h2>
              <p>
                If you are open and stay tuned to what’s happening the answers
                will be revealed.
              </p>
            </article>
          </div>
          <div
            id="tercera-retreats"
            className="hero-retreats-apartado"
            ref={tercera}
          >
            <article>
              <h2>CREATE. CONNECT. FLOW.</h2>
              <h5>
                15 participantes.
                <br /> 7 días en el pulmón de Indonesia.
                <br />1 respiro para avivar tu creatividad y entrar en tu flow
                creativo.
                <br />
                <br />
                Sumba, Indonesia 2025
                <br />
                16, 22 de Noviembre
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
