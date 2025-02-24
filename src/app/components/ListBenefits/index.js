"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../ListBenefits/listbenefits.css";
import Image from "next/image";

export default function ListBenefits() {
  const [activeIndex, setActiveIndex] = useState(null);
  const descriptionRefs = useRef([]);

  const benefits = [
    {
      title: "Alimentación Equilibrada",
      description: (
        <>
          <p>
            <br />
            Comidas nutritivas y equilibradas preparadas por nuestros chefs
            ayurvédicos: incluye tres comidas al día.
          </p>

          <p className="tag">
            *Conversa con nosotros sobre tus necesidades dietéticas.
          </p>
        </>
      ),
    },
    {
      title: "Alojamiento",
      description: (
        <p>
          <br />
          Alojamiento premium en hotel eco-luxury durante 7 días / 6 noches.
        </p>
      ),
    },
    {
      title: "Desarrollo personal",
      description: (
        <p>
          <br />
          Programa de desarrollo personal dirigido por Laura Vela y un equipo de
          maestros especializados en wellness, medicina holística y mindfulness.
        </p>
      ),
    },
    {
      title: "Actividades",
      description: (
        <p>
          <br />
          Acceso a todas las actividades, excursiones, acceso a templos y
          aventuras.
        </p>
      ),
    },
    {
      title: "Ceremonias",
      description: (
        <p>
          <br />
          Ceremonia de bienvenida y ceremonia de cierre.
        </p>
      ),
    },
    {
      title: "Baño de hielo",
      description: (
        <p>
          <br />
          Acceso y entrenamiento de baño de hielo.
        </p>
      ),
    },
    {
      title: "Transporte",
      description: (
        <p>
          <br />
          Transporte durante todo el retiro.
        </p>
      ),
    },
    {
      title: "Masaje Balinés",
      description: (
        <p>
          <br />
          Un masaje corporal detox balinés.
        </p>
      ),
    },
    {
      title: "Breathwork",
      description: (
        <p>
          <br />
          Trabajo de breathwork con la fundadora de HUMMANA, Laura Vela.
        </p>
      ),
    },
    {
      title: "Yoga y meditación",
      description: (
        <p>
          <br />
          Prácticas de yoga y meditación diarias.
        </p>
      ),
    },
    {
      title: "Cena degustación",
      description: (
        <p>
          <br />
          Cena especial 5 estrellas en uno de los restaurantes más emblemáticos
          de la isla.
        </p>
      ),
    },
    {
      title: "Premium Wellnes Spa",
      description: (
        <p>
          <br />
          Acceso exclusivo a Premium Wellness Spa, considerado como uno de los
          mejores de Bali.
        </p>
      ),
    },
    {
      title: "Diferentes áreas",
      description: (
        <p>
          <br />
          Entrarás en un proceso de exploración y crecimiento personal en el que
          serás guiado durante ocho semanas. Para aquellos que buscan apoyo
          altamente personalizado, HUMMANA ofrece una mentoría «one on one».
        </p>
      ),
    },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      closeDescription(index, () => setActiveIndex(null));
    } else {
      if (activeIndex !== null) {
        closeDescription(activeIndex, () => setActiveIndex(index));
      } else {
        setActiveIndex(index);
      }
    }
  };

  const closeDescription = (index, callback) => {
    const element = descriptionRefs.current[index];
    if (element) {
      gsap.to(element, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        onComplete: callback,
      });
    } else {
      callback();
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const element = descriptionRefs.current[activeIndex];
      if (element) {
        gsap.fromTo(
          element,
          { height: "0em", opacity: 0 },
          { height: "8em", opacity: 1, duration: 0.2 }
        );
      }
    }
  }, [activeIndex]);

  return (
    <section className="benefitslist-wrapper">
      <div className="list-wrapper">
        <div className="list-content">
          <p className="uppercase">Incluido en Hummana</p>
          <ul className="list">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <h3
                  className={`list-item uppercase ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {benefit.title}
                  <div className="plus-sign">+</div>
                </h3>

                <div
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  className="description"
                  style={{
                    height: activeIndex === index ? "auto" : "0em",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  {activeIndex === index && benefit.description}
                </div>
              </li>
            ))}
          </ul>
          <p className="tag non-included">
            *HUMMANA no incluye el vuelo internacional a Bali, el traslado del
            aeropuerto al hotel, ni el visado de turismo a Bali
          </p>
        </div>
      </div>
      <div className="img" style={{ height: "65vw" }}>
        <Image
          width={720}
          height={1280}
          src={"/images/mentorship/tailoringyourmentorship.png"}
          alt="tailoring your mentorship image"
        />
      </div>
    </section>
  );
}
