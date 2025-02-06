"use client";

import "@/app/products.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import PrimaryButton from "./buttons/SecondaryButton";

export default function BannerProducts() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".banner-image",
      {
        y: "-10%",
      },
      {
        y: "0%",
        scrollTrigger: {
          trigger: ".principal-banner-products",
          scrub: "true",
          start:'top top',
          end:'bottom top',
        },
      }
    );
  }, []);

  return (
    <section className="principal-banner-products">
      <div
        className="img"
        style={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Image
          width={1920}
          height={2560}
          alt="method banner imagen"
          src="/images/mentorship/banner3.jpg"
          style={{ transform: "scale(1.1)", filter:'brightness(.8)' ,zIndex: "-1", transformOrigen:'center' }}
          loading="eager"
          className="banner-image"
        />
      </div>
      <div className="first-content">
        <div className="first-content-container">
          <h1>
            <div className="line">
              <span>Hummana</span>
              <span>Retreats</span>
            </div>
          </h1>
          <h3
            className="white-type"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="line">
              <span>Rewire</span>
              <span>Your</span>
              <span>Mind</span>
            </div>
            <div className="line">
              <span>Reshape</span>
              <span>Your</span>
              <span>Life</span>
            </div>
          </h3>
          <p className="white-type center-type">
             Inmersión «one on one» para alcanzar la plenitud en los pilares
            esenciales de la vida.
          </p>
          <PrimaryButton 
          href={"/bro"}
          label={'Come Create'}
          style={{color:'white'}}
          />
        </div>
      </div>
      <div className="first-content">
        <div className="first-content-container">
          <h2 className="white-type center-type">Desarrollate</h2>
          <h4 className="white-type center-type">
            Amplía tu visión, fortalece tus habilidades y desbloquea nuevas
            oportunidades con acompañamiento estratégico que impulsa tu
            crecimiento, incluso mucho después de cada sesión. Sesiones
            personalizadas “One on One” con Laura Vela.
          </h4>
        </div>
      </div>
    </section>
  );
}
