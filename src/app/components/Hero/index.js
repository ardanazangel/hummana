"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "../TransitionLink";
import Image from "next/image";
export default function Hero() {
  const primeraSeccion = useRef();
  const segundaSeccion = useRef();
  const terceraSeccion = useRef();
  const cuartaSeccion = useRef();
  const quintaSeccion = useRef();
  const retreatSeccion = useRef();
  const avisoScroll = useRef();
  const avisoScrollText = useRef();
  const trigger = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const alturaVentana = window.innerHeight;

    gsap.to(avisoScroll.current, {
      opacity: 0.1,
      duration: 1.5,
      repeat: -1, // Repetir infinitamente
      yoyo: true, // Volver al estado original tras cada repetición
      ease: "power1.inOut",
    });

    gsap.to(avisoScrollText.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: `${alturaVentana} center`,
        scrub: true,
      },
    });

    const heroScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    heroScrollTl.to(
      primeraSeccion.current,
      {
        opacity: "0",
        filter: "blur(10px)",
      }
      // "+=1"
    );
    heroScrollTl.to(segundaSeccion.current, {
      opacity: "1",
      filter: "blur(0px)",
    });
    heroScrollTl.to(".linea-1", {
      transform: "scaleX(1)",
    });
    heroScrollTl.to(".linea-2", {
      transform: "scaleX(1)",
    });
    heroScrollTl.to(
      segundaSeccion.current,
      {
        opacity: "0",
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    heroScrollTl.to(terceraSeccion.current, {
      opacity: "1",
      filter: "blur(0px)",
    });
    heroScrollTl.to(
      terceraSeccion.current,
      {
        opacity: "0",
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    heroScrollTl.to(cuartaSeccion.current, {
      opacity: "1",
      filter: "blur(0px)",
    });
    heroScrollTl.to(
      cuartaSeccion.current,
      {
        opacity: "0",
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    heroScrollTl.to(quintaSeccion.current, {
      opacity: "1",
      filter: "blur(0px)",
    });
    heroScrollTl.to(
      quintaSeccion.current,
      {
        opacity: "0",
        filter: "blur(10px)",
      },
      "+=0.5"
    );
    heroScrollTl.to(
      retreatSeccion.current,
      {
        opacity: "1",
        pointerEvents: "all",
        filter: "blur(0px)",
      },
      "-=0.75"
    );
  }, []);

  return (
    <section id="hero" ref={trigger} className="light-section">
      <div id="hero-content">
        <div id="hero-video">
          <iframe
            src="https://player.vimeo.com/video/1052998618?autoplay=1&muted=1&controls=0&loop=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Image
            src={"/assets/images/thumb.webp"}
            width={600}
            height={300}
            alt="Thumb image"
            id="hero-thumb"
          />
        </div>
        <div id="aviso-scroll" ref={avisoScroll}>
          <p ref={avisoScrollText}>Scroll to discover</p>
        </div>
        <div id="primera" className="hero-content-item" ref={primeraSeccion}>
          <img src="./assets/logo-light.svg"></img>
          <h2>
            <div className="line">
              <span>Human</span>
              <span>&</span>
              <span>Nature</span>
            </div>
            <div className="line">
              <span>Coming</span>
              <span>Together</span>
            </div>
          </h2>
        </div>
        <div id="segunda" className="hero-content-item" ref={segundaSeccion}>
          <h3>
            <div className="line">
              <span>Mind</span>
              <div className="linea-division linea-1"></div>
              <span>Body</span>
              <div className="linea-division linea-2"></div>
              <span>Ocean</span>
            </div>
          </h3>
        </div>
        <div id="tercera" className="hero-content-item" ref={terceraSeccion}>
          <h3>
            What makes you <br /> come alive?
          </h3>
        </div>
        <div id="cuarta" className="hero-content-item" ref={cuartaSeccion}>
          <h3>Hummana escapes</h3>
          <p>
            En lo más profundo del ser reside un campo de inmenso poder, paz y
            potencial. Una vez aprendes a elevar tu consciencia puedes conectar
            con este campo de inmensidad siempre que lo necesites.
            <br />
            <br />
            Desde ese instante, la vida adquiere una nueva cualidad: todo
            encuentra su lugar, y la mente se convierte en una maravillosa
            aliada que acompaña
            <br /> Tu camino humano y creativo 
          </p>
        </div>
        <div id="quinta" className="hero-content-item" ref={quintaSeccion}>
          <h3>
            What do you <br /> seek to find?
          </h3>
        </div>
        <section id="retreats" ref={retreatSeccion}>
          <TransitionLink href={"/"}>
            <div id="earth" className="retreat-side">
              <div id="earth-content">
                <h2>Earth</h2>
                <h3>Root</h3>
                <p>Balance Interior</p>
              </div>
            </div>
            <div id="earth-secondary" className="secondary-container">
              <div id="earth-secondary-content">
                <h4>Hummana Bali</h4>
                <h3>The bali escape</h3>
                <p>The power of the mind</p>
              </div>
            </div>
            <Image
              src={"/assets/atardecer.webp"}
              width={1080}
              height={1920}
              alt="Imagen Laura Vela Banner"
            />
          </TransitionLink>
          <TransitionLink id="ocean" className="retreat-side" href={"/"}>
            <div id="ocean" className="retreat-side">
              <div id="ocean-content">
                <h2>Ocean</h2>
                <h3>Flow</h3>
                <p>Creatividad</p>
              </div>
            </div>
            <div id="ocean-secondary" className="secondary-container">
              <div id="ocean-secondary-content">
                <h4>Hummana Sumba</h4>

                <h3>The creative escape</h3>
                <p>The power of the mind</p>
              </div>
            </div>
            <Image
              src={"/assets/atardecer.webp"}
              width={1080}
              height={1920}
              alt="Imagen Laura Vela Banner"
            />
          </TransitionLink>
        </section>
      </div>
    </section>
  );
}
