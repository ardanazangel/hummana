"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useRef } from "react";

export default function AccomodationsSumba() {
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
          src="/assets/accomodationraw-creative.webp"
          width={600}
          height={300}
          alt="Imagen fondo mentorías"
          ref={image1}
          style={{ zIndex: 3, position: "absolute" }}
        />
        <Image
          src="/assets/accomodationsea-creative.webp"
          width={600}
          height={300}
          alt="Imagen fondo mentorías"
          ref={image2}
          style={{ zIndex: 2, position: "absolute" }}
        />
        <Image
          src="/assets/accomodationcomida-creative.webp"
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
            <h2>Raw luxury accomodation</h2>
            <h5>
              UN PARAÍSO NATURAL DE REJUVENECIMIENTO Y BIENESTAR HOLÍSTICO
            </h5>
            <p>
              Te hospedarás en un Eco Surf & Health Retreat. El diseño del hotel
              donde te hospedarás funciona en total armonía con la Madre
              Naturaleza, refl ejando un profundo respeto por nuestro planeta y
              la máxima consideración por el clima local y la comunidad indígena
              de Sumba.
            </p>
          </article>
        </div>
        <div id="text-2" className="text">
          <article>
            <p>
              Desde aguas azules cristalinas y el aire fresco de la isla hasta
              agradables tardes bajo las estrellas mientras escuchas las olas
              acariciar la orilla desde tu habitación.
              <br />
              <br />
              Te alojarás en bungalows de bambú al aire libre, bellamente
              construidos, y dormirás en amplias y lujosas camas protegidas con
              mosquiteros. Todos los bungalows tienen vista al mar, amplia
              privacidad, duchas exteriores con agua caliente y fría, baños
              secos, iluminación solar y vistas a la espectacular costa.
              Prepárate para disfrutar de atardeceres a cámara lenta.
            </p>
          </article>
        </div>
        <div id="text-3" className="text">
          <article>
            <h3>MENÚ ORGÁNICO Y CONSCIENTE</h3>
            <p>
              El restaurante se encuentra en la zona común central y los
              participantes suelen comer juntos en una mesa de picnic de caoba
              bajo las estrellas. El equipo de increíbles de cocina está
              disponible todo el día para mantenernos con energía para cualquier
              aventura que nos espera. La comida es principalmente vegetariana,
              con abundante marisco de las aguas circundantes. Piensa en
              productos frescos, ligeros y de origen local, con porciones lo
              sufi cientemente grandes como para mantener en forma incluso a los
              atletas más apasionados.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
