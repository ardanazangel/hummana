"use client";

import Image from "next/image";
import Button from "../Button";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

export default function MentorshipHero() {
  const trigger = useRef();
  const image = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(image.current, {
      y: "-10%",
      scrollTrigger: {
        trigger: trigger.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <section id="mentorship-hero" ref={trigger}>
      <Image
        src={"/assets/images/mentorship/banner4.webp"}
        width={300}
        height={600}
        alt="Imagen Laura Vela Banner"
        ref={image}
      />
      <div id="mentorship-hero-primera">
        <div className="hero-content">
          <h1>Hummana Mentorship</h1>
          <p>Diseña una vida afín a tu verdadera naturaleza</p>
          <Button href={""} label={"come create"} colorMode={"light"} />
        </div>
      </div>
      <div id="mentorship-hero-segunda">
        <article>
          <p>
            HUMMANA Mentorship es un punto de inflexión para reconocer dónde has
            estado, dónde estás y dónde quieres estar.
          </p>
        </article>
      </div>
      <div id="mentorship-hero-tercera">
        <article>
          <h2>Amplía tu vision</h2>
          <p>
            Sesiones personalizadas «one on one» con Laura Vela. Expande tu
            visión, aviva tu consciencia y entra en tu flow creativo con una
            guía y acompañamiento que impulsa tu crecimiento.
          </p>
          <Button href={""} label={"come create"} colorMode={"light"} />
        </article>
      </div>
    </section>
  );
}
