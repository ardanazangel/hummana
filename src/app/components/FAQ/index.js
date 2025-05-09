"use client";

import { useRef } from "react";

export default function FAQs({ json }) {
  const contenido = useRef();

  const handleClick = (e) => {
    const contenedor = e.currentTarget;
    const respuesta = contenedor.querySelector(".respuesta");

    const isActive = contenedor.classList.contains("active");

    // Quitamos todas las clases "active"
    document.querySelectorAll(".contenedor-pregunta").forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelectorAll(".respuesta").forEach((el) => {
      el.classList.remove("active");
    });

    // Si no estaba activo, lo activamos
    if (!isActive) {
      contenedor.classList.add("active");
      if (respuesta) respuesta.classList.add("active");
    }
  };

  return (
    <section id="faqs">
      <h2>Preguntas frecuentes</h2>
      <ul>
        {json.map((item, index) => (
          <li key={index}>
            <div className="contenedor-pregunta" onClick={handleClick}>
              <h4>
                <span className="numerito">{item.numero}</span>
                <span className="pregunta">
                  {item.pregunta}
                  <span className="respuesta" ref={contenido}>
                    <br />
                    {item.respuesta}
                  </span>
                </span>
                <span>+</span>
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
