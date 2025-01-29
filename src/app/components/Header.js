"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Header.css";

export default function Header() {
  useEffect(() => {
    // Asegúrate de que estamos en el cliente
    if (typeof window === "undefined") return;

    // Registramos el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Verificar si la sección con la clase .light-section existe
    const lightSection = document.querySelector(".light-section");

    // Si no existe, no configuramos ScrollTrigger
    if (!lightSection) return;

    // Configuramos ScrollTrigger para detectar el scroll sobre .light-section
    ScrollTrigger.create({
      trigger: ".light-section", // Sección que debe activar el cambio
      start: "top 5%", // Empieza cuando el top de la sección alcanza el top de la ventana
      end: "bottom 100%", // Termina cuando el bottom de la sección sale del top de la ventana
      onEnter: () => {
        // Cambia el color suavemente cuando entra en vista
        const elements = document.querySelectorAll(".darken");
        elements.forEach((element) => {
          gsap.to(element, {
            color: "var(--dark-color)", // Color de destino
            duration: 0.5, // Duración de la animación
            ease: "power2.out", // Easing para la animación
          });
        });
      },
      onLeaveBack: () => {
        // Restablece el color suavemente cuando sale de la vista
        const elements = document.querySelectorAll(".darken");
        elements.forEach((element) => {
          gsap.to(element, {
            color: "", // Color por defecto
            duration: 0.5, // Duración de la animación
            ease: "power2.out", // Easing para la animación
          });
        });
      },
    });

    // Limpiar el ScrollTrigger al desmontar el componente
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className="white-type nav-element darken">
          <a className="darken" href="/">
            Hummana
          </a>
        </li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <a className="darken" href="/retreats">
              Retreats
            </a>
            <a className="darken" href="/mentorships">
              Mentorships
            </a>
          </div>
        </li>
        <li className="white-type nav-element darken">
          <a className="darken" href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
