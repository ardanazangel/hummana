import Image from "next/image";
import SecondaryButton from "../buttons/SecondaryButton";
import "../Value/value.css";

export default function Value() {
  return (
    <section className="thevalue-section">
      <div className="img">
        <Image
          width={1280}
          height={1920}
          src={"/images/retreat/thevalue.png"}
          alt="The value section background" // Añadido alt
        />
      </div>
      <div className="value-content">
        <div className="value-content-text">
          <h2>The Value</h2>
          <h3>
            <br />
            Eco Deluxe
          </h3>
          <p>
            3800 USD
            <br />
            Habitación compartida
          </p>
          <h3>
            <br /> Eco Deluxe
          </h3>
          <p>
            3800 USD
            <br />
            Habitación compartida
          </p>
          <h4 className="uppercase">
            <br />
            <br />
            Queremos que seas parte de Hummana, a tu ritmo
          </h4>
          <p>Reserva con 950$ y abona el resto en tres cómodas cuotas</p>
        </div>
        <SecondaryButton href={"/#"} label={"Come Play"} isBlack={true} />
        <p className="small-letter center-type tag non-included">
          *La diferencia entre deluxe y standard es el tamaño de la habitación.
          La primera es más grande, con un balcón privado. Todas las
          habitaciones son compartidas y tienen dos camas individuales.
        </p>
      </div>
    </section>
  );
}
