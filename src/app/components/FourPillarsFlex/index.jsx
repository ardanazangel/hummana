import "./fourpillarsflex.css";
import Image from "next/image";

export default function FourPillarsFlex() {
  return (
    <section id="four-pillars-flex__section">
      <div id="four-pillars-flex__title-wrapper">
        <h2>THE 4 PILLARS OF EMPOWERMENT</h2>
        <p>
          La felicidad humana depende de cuatro pilares: las relaciones, el
          trabajo, la salud y la riqueza. HUMMANA mentorship es una mentoría de
          autoconocimiento y crecimiento personal para sincronizar y elevar
          estos cuatro ámbitos.
        </p>
      </div>
      <div id="four-pillars-flex__content">
        <div className="four-pillars-flex__module">
          <div id="four-pillars-flex__module__img" className="img">
            <Image
              width={1280 / 2}
              height={1920 / 2}
              src={"/images/mentorship/four-pillars/relationships.webp"}
              alt="Relationships background image"
            />
          </div>
          <div className="four-pillars-flex__module__content">
            <h3>Relaciones</h3>
            <p className="module-description">
              Crear espacios de intimidad requiere escucha y re-aprendizaje, ya
              que las relaciones reflejan a menudo conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <div id="four-pillars-flex__module__img" className="img">
            <Image
              width={1280 / 2}
              height={1920 / 2}
              src={"/images/mentorship/four-pillars/career.webp"}
              alt="Career background image"
            />
          </div>
          <div className="four-pillars-flex__module__content">
            <h3>Career</h3>
            <p className="module-description">
              Crear espacios de intimidad requiere escucha y re-aprendizaje, ya
              que las relaciones reflejan a menudo conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <div id="four-pillars-flex__module__img" className="img">
            <Image
              width={1280 / 2}
              height={1920 / 2}
              src={"/images/mentorship/four-pillars/wealth.webp"}
              alt="Wealth background image"
            />
          </div>
          <div className="four-pillars-flex__module__content">
            <h3>Wealth</h3>
            <p className="module-description">
              Crear espacios de intimidad requiere escucha y re-aprendizaje, ya
              que las relaciones reflejan a menudo conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
        <div className="four-pillars-flex__module">
          <div id="four-pillars-flex__module__img" className="img">
            <Image
              width={1280 / 2}
              height={1920 / 2}
              src={"/images/mentorship/four-pillars/health.webp"}
              alt="Health background image"
            />
          </div>
          <div className="four-pillars-flex__module__content">
            <h3>Health</h3>
            <p className="module-description">
              Crear espacios de intimidad requiere escucha y re-aprendizaje, ya
              que las relaciones reflejan a menudo conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
