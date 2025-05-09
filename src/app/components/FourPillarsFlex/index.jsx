import Image from "next/image";

export default function FourPillarsFlex() {
  return (
    <section id="four-pillars-flex__section">
      <div id="four-pillars-flex__title-wrapper">
        <h2>los 4 pilares de la conciencia</h2>
        <p>
          HUMMANA mentorship es un proceso de desarrollo personal para
          sincronizar y elevar los 4 pilares de la felicidad.
        </p>
      </div>
      <div id="four-pillars-flex__content">
        <div className="four-pillars-flex__module">
          <Image
            width={300}
            height={600}
            src={"/assets/images/mentorship/four-pillars/relationships.webp"}
            alt="Relationships background image"
          />
          <div className="four-pillars-flex__module__content">
            <h3>Relaciones</h3>
            <h5>La llave de la intimidad</h5>
            <p className="module-description">
              Crear espacios de intimidad requiere escucha y reaprendizaje. Las
              relaciones a menudo reflejan conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <Image
            width={300}
            height={600}
            src={"/assets/images/mentorship/four-pillars/career.webp"}
            alt="Career background image"
          />
          <div className="four-pillars-flex__module__content">
            <h3>Carrera profesional</h3>
            <h5>
              DESARROLLA UNA CARRERA <br />
              AFÍN A TU ESENCIA
            </h5>
            <p className="module-description">
              Te sumergirás en un método de autoconocimiento de ocho pasos para
              descubrir y avivar tus talentos profesionales. Consolidarán tu
              confianza, tu autodeterminación y tu mentalidad para alcanzar tus
              metas y tus aspiraciones.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <Image
            width={300}
            height={600}
            src={"/assets/images/mentorship/four-pillars/wealth.webp"}
            alt="Wealth background image"
          />
          <div className="four-pillars-flex__module__content">
            <h3>Riqueza</h3>
            <h5>Conecta riqueza y consciencia</h5>
            <p className="module-description">
              El dinero es una herramienta de la consciencia. La manera en que
              te relacionas con él refleja tus creencias, valores y
              experiencias. Al profundizar y desarrollar tu estado de
              consciencia lograrás una relación más amable, consciente y
              creativa con el dinero.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <Image
            width={300}
            height={600}
            src={"/assets/images/mentorship/four-pillars/health.webp"}
            alt="Health background image"
          />
          <div className="four-pillars-flex__module__content">
            <h3>Salud</h3>
            <h5>FORTALECE TU MENTE PARA UNA VIDA CREATIVA Y CONSCIENTE</h5>

            <p className="module-description">
              «Practice foundation» es un concepto que se refiere a una serie de
              hábitos, rutinas y prácticas que fomentan la salud física, mental
              y emocional. Aprenderás a aplicar técnicas diarias para
              transformar el estrés y la ansiedad alcanzando la estabilidad y la
              armonía interior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
