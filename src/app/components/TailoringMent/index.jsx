import "../TailoringMent/tailoring-ment.css";
import Image from "next/image";

export default function TailoringMent() {
  return (
    <section className="tailoring__section">
      <div className="tailoring__content-wrapper">
        <div className="tailoring__content">
          <h2 className="uppercase">Your mentorship</h2>
          <div className="tailoring__content-module">
            <p>
              <span className="big-number">1</span>
            </p>
            <h5>
              ENTRARÁS EN UN PROCESO DE EXPLORACIÓN Y CRECIMIENTO PERSONAL EN EL
              QUE SERÁS GUIADO DURANTE OCHO SEMANAS.
            </h5>
            <p>
              Para aquellos que buscan apoyo altamente personalizado, HUMMANA
              ofrece una mentoría «one on one».
            </p>
          </div>
          <div className="tailoring__content-module">
            <p>
              <span className="big-number">2</span>
            </p>
            <h5>
              DESARROLLARÁS ACCIONES EN PROFUNDIDAD, EXPANSIVAS Y SOSTENIBLES.
            </h5>
            <p>
              Para aquellos que buscan apoyo altamente personalizado, HUMMANA
              ofrece una mentoría «one on one».
            </p>
          </div>
          <div className="tailoring__content-module">
            <p>
              <span className="big-number">3</span>
            </p>
            <h5>TRABAJARÁS EN LÍNEA CON LAURA VELA.</h5>
            <p>
              Para aquellos que buscan apoyo altamente personalizado, HUMMANA
              ofrece una mentoría «one on one».
            </p>
          </div>
          <div className="tailoring__content-module">
            <p>
              <span className="big-number">4</span>
            </p>
            <h5>EXPLORARÁS DIFERENTES ÁREAS.</h5>
            <p>
              Para aquellos que buscan apoyo altamente personalizado, HUMMANA
              ofrece una mentoría «one on one».
            </p>
          </div>
        </div>
      </div>
      <div className="tailoring__img">
        <div className="img">
          <Image
            width={1280}
            height={1920}
            src={"/images/mentorship/tailoring.png"}
            alt="Tailoring your mentorship image"
          />
        </div>
      </div>
    </section>
  );
}
