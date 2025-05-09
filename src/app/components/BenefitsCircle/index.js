"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

export default function BenefitsCircle() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);

  const trigger = useRef();

  useEffect(() => {
    gsap.to("main", {
      backgroundColor: "#333333",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

    gsap.to("#benefits-circle", {
      backgroundColor: "#dce0de",
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 150%",
        end: "top bottom",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#circle",
      {
        drawSVG: "0%",
      },
      {
        drawSVG: "100%",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "top -50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".circle",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
        stagger: 0.25,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "top -25%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#benefits-circle-text article",
      {
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        delay: 1.5,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "top -25%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="benefits-circle" ref={trigger}>
      <div id="sticky-wrapper">
        <div id="benefits-circle-content">
          <svg
            width="1272"
            height="1272"
            viewBox="0 0 1272 1272"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="636" cy="636" r="635.5" stroke="#dce0de" id="circle" />
          </svg>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>

          <div id="benefits-circle-text">
            <article id="center-text">
              <h2>Qué incluye</h2>
              <p>The wheel of shelf investment</p>
              <a>
                <p>Conoce más</p>
              </a>
            </article>
            <article id="top-text">
              <h4>profundidad</h4>
              <p>Dos meses de desarrollo personal (con opción a extenderlo).</p>
            </article>{" "}
            <article id="left-text">
              <h4>dedicación</h4>
              <p>Cada sesión tiene una duración de 90 minutos.</p>
            </article>{" "}
            <article id="right-text">
              <h4>personalización</h4>
              <p>Ocho sesiones one on one, una vez por semana.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
