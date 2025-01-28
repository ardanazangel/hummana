'use client'

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Header.css";

export default function Header() {
  useEffect(() => {
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
        // Cambia el color cuando entra en vista
        const elements = document.querySelectorAll(".darken");
        elements.forEach(element => {
          element.style.color = "var(--dark-color)";
        });
      },
      onLeaveBack: () => {
        // Restablece el color cuando sale de la vista
        const elements = document.querySelectorAll(".darken");
        elements.forEach(element => {
          element.style.color = "";
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
        <li className="white-type nav-element darken">Hummana</li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <a className="darken">Retreats</a>
            <a className="darken">Mentorships</a>
          </div>
        </li>
        <li className="white-type nav-element darken">About</li>
      </ul>
    </nav>
  );
}
