"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import HorizontalScrollTextBlock from "./HorizontalScrollTextBlock";
import Image from "next/image";

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      content,
      { x: 0 },
      {
        x: () => `-${content.scrollWidth - window.innerWidth}px`, // Calcula el desplazamiento dinámico
        ease: "none", // Transición más suave
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom", // Ajusta el end dinámicamente
          scrub: true,
        },
      }
    );

    const lineaTl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        // Debe estar aquí dentro
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    const imagesTl = gsap.timeline({
      ease: "none",
      scrollTrigger: {
        // Debe estar aquí dentro
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    lineaTl.fromTo(
      ".linea-1",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );

    lineaTl.fromTo(
      ".linea-2",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );
    lineaTl.fromTo(
      ".linea-3",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );
    lineaTl.fromTo(
      ".linea-4",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );
    lineaTl.fromTo(
      ".linea-5",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );
    lineaTl.fromTo(
      ".linea-6",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );
    lineaTl.fromTo(
      ".linea-7",
      { scaleX: 0, transformOrigin: "left center" }, // Ajustamos el origen para que crezca desde la izquierda
      { scaleX: 1 }
    );

    imagesTl.fromTo(".image-1", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-2", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-3", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-4", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-5", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-6", { opacity: 1 }, { opacity: 0 });
    imagesTl.fromTo(".image-7", { opacity: 1 }, { opacity: 0 });
  }, []);

  return (
    <section ref={containerRef} className="horizontal-scroll">
      <div className="image-fixed-wrapper" style={{ filter: "brightness(.7)" }}>
        <Image
          src="/images/mentorship/eight-steps/01.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-1" }}
          className="horizontal-scroll-images image-1"
          alt="breathwork background image"
        />
        <Image
          src="/images/mentorship/eight-steps/02.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-2" }}
          className="horizontal-scroll-images image-2"
          alt="meditation background image"
        />
        <Image
          src="/images/mentorship/eight-steps/03.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-3" }}
          className="horizontal-scroll-images image-3"
          alt="movement background image"
        />
        <Image
          src="/images/mentorship/eight-steps/04.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-4" }}
          className="horizontal-scroll-images image-4"
          alt="mindset background image"
        />
        <Image
          src="/images/mentorship/eight-steps/05.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-5" }}
          className="horizontal-scroll-images image-5"
          alt="self-knowledge background image"
        />
        <Image
          src="/images/mentorship/eight-steps/06.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-6" }}
          className="horizontal-scroll-images image-6"
          alt="self-talk background image"
        />
        <Image
          src="/images/mentorship/eight-steps/07.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-7" }}
          className="horizontal-scroll-images image-7"
          alt="mindfulness background image"
        />
        <Image
          src="/images/mentorship/eight-steps/08.png"
          width={1280}
          height={1920}
          style={{ position: "absolute", zIndex: "-8" }}
          className="horizontal-scroll-images image-8"
          alt="the creative plan background image"
        />
      </div>
      <div className="horizontal-scroll-tracker">
        <div ref={contentRef} className="horizontal-scroll-content">
          <div
            style={{ display: "flex", position: "relative", gap: "4vw" }}
            className="horizontal-scrolltracker-container"
          >
            <HorizontalScrollTextBlock />

            <HorizontalScrollTextBlock
              number={"1"}
              title={"Breathwork"}
              subtitle={
                "RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS AFECTA NUESTRO SISTEMA NERVIOSO E INMUNOLÓGICO."
              }
              source={"/images/mentorship/meditation.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-1"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"2"}
              title={"Meditation"}
              subtitle={
                "MEDITAR ES MIRAR NUESTRO INTERIOR PARA DARLE LUGAR Y ESPACIO A LO QUE LATE EN NOSOTROS."
              }
              source={"/images/mentorship/movement.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-2"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"3"}
              title={"Movement"}
              subtitle={
                "EL MOVIMIENTO ES FUNDAMENTAL PARA TU SALUD, TU LONGEVIDAD Y TU CALIDAD DE VIDA."
              }
              source={"/images/mentorship/self-knowledge.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-3"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"4"}
              title={"Mindset"}
              subtitle={
                "EL CAMBIO COMIENZA CUANDO LA RESPUESTA ANTE LO QUE NOS SUCEDE SE BASA EN UNA VERSIÓN ACTUALIZADA DE NOSOTROS MISMOS."
              }
              source={"/images/mentorship/self-talk.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-4"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"5"}
              title={"Self-Knowledge"}
              subtitle={
                "SI NO VIVIMOS SINTONIZADOS CON NUESTRA ESENCIA, TODO LO DEMÁS SE DESEQUILIBRA."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-5"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"6"}
              title={"Self-talk"}
              subtitle={
                "TENEMOS ENTRE 60 MIL Y 70 MIL PENSAMIENTOS AL DÍA, EL 80% SON NEGATIVOS."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-6"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"7"}
              title={"Mindfulness"}
              subtitle={
                "PODEMOS ENTRENAR NUESTRO CEREBRO PARA CAMBIAR REACCIONES IMPULSIVAS POR RESPUESTAS ADECUADAS."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <div className="horizontal-scrolltracker-wrapper">
              <div className="linea linea-7"></div>
            </div>
            <HorizontalScrollTextBlock
              number={"8"}
              title={"The Creative Plan"}
              subtitle={
                "AL PONERLE FECHA A UN PROYECTO, SE CONVIERTE EN UNA META. UNA META, DIVIDIDA EN PASOS, SE CONVIERTE EN UN PLAN. Y UN PLAN, RESPALDADO POR ACCIONES, SE CONVIERTE EN UNA REALIDAD."
              }
              source={"/images/mentorship/meditate.png"}
            />
            <HorizontalScrollTextBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
