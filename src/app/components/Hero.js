"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
import BaliClock from "./RelojBali";

export default function Hero() {
  useEffect(() => {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Crear la timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
        start: "top 0%",
        end: "bottom 100%",
      },
    });

    const scrollerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
        start: "top 0%",
        end: "bottom 100%",
      },
    });

    const scrollerAppearTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
        start: "top top", // Inicia cuando la parte superior de .hero-section alcanza la parte superior del viewport
        end: "15% 0%", // Termina cuando el scroll avanza el equivalente a 100vh
      },
    });

    const scrollerDisappearTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        scrub: true,
        start: "75% 20%", // Inicia cuando la parte superior de .hero-section alcanza la parte superior del viewport
        end: "95% 75%", // Termina cuando el scroll avanza el equivalente a 100vh
      },
    });

    gsap.set('.scroller-wrapper',{opacity:0})

    scrollerAppearTl.fromTo(
      ".scroller-wrapper",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    scrollerDisappearTl.fromTo(
      ".scroller-wrapper",
      {
        opacity: 1,
      },
      {
        opacity: 0,
      }
    );

    scrollerTl.fromTo(
      ".scroller",
      {
        height: "0%",
      },
      {
        height: "100%",
      }
    );

    // Animación de opacidad con timeline
    tl.fromTo(
      ".hero-wrapper",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      }
    );

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
    );

    tl.to(".fourth-message", {
      opacity: 0,
    });

    gsap.to("video", {
      filter: "brightness(.2)",
      scrollTrigger: {
        trigger: ".mentorships-retreats-section",
        scrub: true,
        end: "top 0%",
      },
    });

    gsap.to(".hero-banner-wrapper", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".mentorships-retreats-section",
        scrub: true,
        start: "-80% 50%",
        end: "top 100%",
      },
    });
  }, []);

  return (
    <section id="hero-section">
      <div className="video-wrapper" style={{ background: "#333" }}>
        <video autoPlay loop muted playsInline>
          <source src="/videos/videomar.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-section ">
        <div className="hero-banner-wrapper">
          <ul className="hero-banner-list">
            <li className="nav-element white-type">Laura Vela</li>
            <li className="nav-element white-type banner-center">(Scroll)</li>
            <li className="nav-element white-type">
              <BaliClock />,<span> </span>
              Bali, Indonesia
            </li>
          </ul>
        </div>

        <div className="scroller-wrapper">
          <div className="scroller-tracker-wrapper">
            <div className="scroller-tracker">
              <div className="spacer"></div>
              <div className="scroller-opacity"></div>
              <div className="scroller"></div>
            </div>
          </div>
        </div>
        <div className="hero-wrapper">
          <div className="hero-content-wrapper">
            <div className="logo-wrapper">
              <Logo />
            </div>
            <h1 className="hero-content-text">
              <div className="line">
                <span className="hero-content white-type">Human</span>
                <span className="hero-content white-type">And</span>
                <span className="hero-content white-type">Nature</span>
              </div>
              <div className="line">
                <span className="hero-content white-type">Comming</span>
                <span className="hero-content white-type">Together</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="message">
          <span
            className="message-content white-type first-message"
            style={{ opacity: "0" }}
          >
            ¿Alguna vez te has planteado estas dos preguntas?
          </span>
          <span
            className="message-content white-type second-message"
            style={{ opacity: "0" }}
          >
            ¿Quién soy?
            <br />
            <br />
            ¿Qué he venido a hacer en esta vida?
          </span>
          <span
            className="message-content white-type third-message"
            style={{ opacity: "0" }}
          >
            Encontrar y aceptar nuestra propia autenticidad, lo que resuena en
            nuestro interior, es parte de la respuesta.
          </span>
          <span
            className="message-content white-type fourth-message"
            style={{ opacity: "0" }}
          >
            Diseña una vida afín a tu verdadera naturaleza
          </span>
        </div>
      </div>
    </section>
  );
}
