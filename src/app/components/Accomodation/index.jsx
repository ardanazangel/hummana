"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "../Accomodation/accomodation.css";
gsap.registerPlugin(ScrollTrigger);

export default function Accomodation() {
  useEffect(() => {
    const tlAccomodation = gsap.timeline({
      scrollTrigger: {
        trigger: ".accomodation-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tlAccomodation.to(".img1", {
      opacity: 0,
      filter: "blur(5px)",
    });
    tlAccomodation.to(".img2", {
      opacity: 0,
      filter: "blur(5px)",
    });
    tlAccomodation.to(".img3", {
      opacity: 1,
    });
  }, []);
  return (
    <section className="accomodation-section">
      <div className="accomodation-content">
        <div className="accomodation-section">
          <div className="accomodation-text-wrapper">
            <div className="accomodation-text first">
              <h2>Luxury accomodation</h2>
              <p>
                Elegimos el mayor paraíso de Indonesia para que esta aventura de
                desarrollo personal y autoconocimiento sea excepcional de
                principio a fin. Hospédate en habitaciones ecológicas de lujo,
                disfruta de una gastronomía orgánica y sumérgete en este viaje
                con personas afines a ti.
              </p>
            </div>
            <div className="accomodation-text first">
              <h3>Hotel Eco Luxury</h3>
              <p>
                Un lugar que supera la imaginación, diseñado con total respeto
                hacia el medio ambiente, hacia el clima y hacia su gente local.
                Estarás en plena selva balinesa aprendiendo de su ritmo y de su
                respiración. En tu habitación, rodeada de arrozales, sentirás la
                vitalidad y la serenidad que solo la naturaleza sabe dar.
              </p>
            </div>
            <div className="accomodation-text first">
              <h3>Alimentación orgánica</h3>
              <p>
                El alimento como medicina y como placer. La cocina de nuestro
                chef se basa en la dieta ayurvédica. Cada ingrediente que
                disfrutarás es orgánico y fresco. La dieta está diseñada, desde
                el desayuno hasta la cena, para que notes el efecto de una
                alimentación consciente, desinflamatoria y nutritiva: un estado
                de ánimo sin alteraciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="accomodation-scroller-img">
        <div className="img">
          <Image
            width={720}
            height={1280}
            src={"/images/retreat/accomodation/luxury-accomodation.webp"}
            alt="luxury accomodation images"
            style={{ position: "absolute" }}
            className="img1"
          />
          <Image
            width={720}
            height={1280}
            src={"/images/retreat/accomodation/hotel-ecoluxury.webp"}
            alt="luxury accomodation images"
            style={{ position: "absolute" }}
            className="img2"
          />
          <Image
            width={720}
            height={1280}
            src={"/images/retreat/accomodation/alimentacion-organica.webp"}
            alt="luxury accomodation images"
            style={{ position: "absolute" }}
            className="img3"
          />
        </div>
      </div>
    </section>
  );
}
