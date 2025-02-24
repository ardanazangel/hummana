"use client";

import { useState, useEffect, useRef } from "react";
import "../Testimonials/testimonials.css";
import Image from "next/image";
import gsap from "gsap";

export default function Testimonial({ testimonials = [] }) {
  const [index, setIndex] = useState(0);
  const testimonialRef = useRef(null); // Referencia para la animación

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, [index, testimonials.length]);

  const changeTestimonial = (newIndex) => {
    gsap.to(".testimonials-text-content", {
      opacity: 0,
      duration: 0.5,
      filter: "blur(2px)",
      onComplete: () => {
        setIndex(newIndex);
        gsap.to(".testimonials-text-content", {
          opacity: 1,
          duration: 0.5,
          filter: "blur(0px)",
        });
      },
    });
  };

  const nextTestimonial = () => {
    changeTestimonial((index + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    changeTestimonial((index - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return <p>No hay testimonios disponibles.</p>;
  }

  return (
    <section className="testimonials-total-wrapper">
      <div className="testimonial-video">
        <iframe
          src="https://player.vimeo.com/video/1058963501?autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Testimonial video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            minWidth: "100%", // Proporción 9:16 en base a la altura
            minHeight: "100%", // Proporción 9:16 en base al ancho
            filter: "brightness(0.75)",
            pointerEvents: "none",
            aspectRatio: 1,
          }}
        />
      </div>
      <div className="testimonial-content-wrapper">
        <h2>Testimonials</h2>
        <div className="testimonial-content" ref={testimonialRef}>
          <div className="img testimonial-img">
            <Image src="/hola" width={256} height={256} />
          </div>
          <div className="testimonials-text-content">
            <h3>{testimonials[index].nombre}</h3>
            <h4 className="uppercase">{testimonials[index].pais}</h4>
            <p style={{ minHeight: "15vw" }}>"{testimonials[index].texto}"</p>
          </div>

          <div className="testimonials-buttons uppercase">
            <button onClick={prevTestimonial} className="testimonials-button">
              <p>Anterior</p>
            </button>
            <button onClick={nextTestimonial}>
              <p>Siguiente</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
