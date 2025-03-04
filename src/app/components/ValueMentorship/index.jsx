import Image from "next/image";
import SecondaryButton from "../buttons/SecondaryButton";
import "../Value/value.css";

export default function ValueMentorship() {
  return (
    <section className="thevalue-section">
      <div className="img">
        <Image
          width={1080}
          height={720}
          src={"/images/mentorship/value-mentorship.jpg"}
          alt="The value mentorship section background" // Añadido alt
          style={{ filter: "brightness(0.7)" }}
        />
      </div>
      <div className="value-content">
        <div className="value-content-text ">
          <h2 className="white-type">What's included</h2>
          <h4 className="white-type uppercase">
            <br />
            The wheel of <br />
            self investment
          </h4>
          <h3 className="white-type">
            <br />
            Profundidad
          </h3>
          <p className="white-type">
            Dos meses de desarrollo personal (con opción a extenderlo).
          </p>
          <h3 className="white-type">
            <br /> Personalización
          </h3>
          <p className="white-type">
            Ocho sesiones one on one, una vez por semana.
          </p>
          <h3 className="white-type">
            <br /> Dedicación
          </h3>
          <p className="white-type">
            Cada sesión tiene una duración de 90 minutos.
          </p>
        </div>
        <SecondaryButton
          href={"/#"}
          label={"Da el primer paso"}
          isBlack={false}
        />
      </div>
    </section>
  );
}
