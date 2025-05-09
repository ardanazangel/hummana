"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useRef } from "react";

export default function Accomodations() {
  gsap.registerPlugin(ScrollTrigger);
  const trigger = useRef();
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();

  useEffect(() => {
    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    imageTl.to(image1.current, {
      opacity: 0,
      filter: "blur(10px)",
    });

    imageTl.to(image2.current, {
      opacity: 0,
      filter: "blur(10px)",
    });
  }, []);

  return (
    <section id="accomodation" ref={trigger}>
      <div id="accomodation-img">
        <Image
          src="/assets/images/retreat/accomodation/luxury-accomodation.webp"
          width={600}
          height={300}
          alt="Imagen fondo mentorías"
          ref={image1}
          style={{ zIndex: 3, position: "absolute" }}
        />
        <Image
          src="/assets/images/retreat/accomodation/hotel-ecoluxury.webp"
          width={600}
          height={300}
          alt="Imagen fondo mentorías"
          ref={image2}
          style={{ zIndex: 2, position: "absolute" }}
        />
        <Image
          src="/assets/images/retreat/accomodation/alimentacion-organica.webp"
          width={600}
          height={300}
          alt="Imagen fondo mentorías"
          ref={image3}
          style={{ zIndex: 1, position: "absolute" }}
        />
      </div>
      <div id="accomodation-text">
        <div id="text-1" className="text">
          <article>
            <h2>HUMMANA LUXURY ACCOMMODATION</h2>
            <p>
              Elegimos el mayor paraíso de Indonesia para que esta experiencia
              sea excepcional de principio a fin. Hospédate en habitaciones
              ecológicas de lujo, disfruta de una gastronomía orgánica y
              sumérgete en este viaje con personas afines a ti.
            </p>
          </article>
        </div>
        <div id="text-2" className="text">
          <article>
            <h3>ALOJAMIENTO ECO-LUXURY</h3>
            <p>
              Un lugar que supera la imaginación, diseñado con total respeto
              hacia el medio ambiente, hacia el clima y hacia su gente local.
              <br />
              <br />
              En tu habitación inmersa en plena selva balinesa y rodeada de
              arrozales, sentirás la vitalidad y la serenidad que solo la
              naturaleza sabe dar.
            </p>
          </article>
        </div>
        <div id="text-3" className="text">
          <article>
            <h3>ALIMENTACIÓN CONSCIENTE Y ORGÁNICA</h3>
            <p>
              El alimento como medicina y como placer. La cocina de nuestro chef
              se basa en una dieta viva y consciente. Cada ingrediente que
              disfrutarás es orgánico y fresco. El menú está diseñado, desde el
              desayuno hasta la cena, para que notes el efecto de una
              alimentación desinflamatoria y nutritiva.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
