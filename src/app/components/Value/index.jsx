import Image from "next/image";
import SecondaryButton from "../buttons/SecondaryButton";
import "../Value/value.css";

export default function Value() {
  return (
    <section className="thevalue-section">
      <div className="img">
        <Image
          width={1920}
          height={1080}
          src={"/images/retreat/thevalue.jpg"}
          alt="The value section background" // Añadido alt
          style={{ filter: "brightness(0.75)" }}
        />
      </div>
      <div className="value-content">
        <div className="value-content-text ">
          <h2 className="white-type">Inversión y métodos de pago</h2>
          <p className="white-type">
            <br />
            Invierte en ti. <br />
            Invierte en tu desarrollo personal.
          </p>
          <h4 className="white-type uppercase">
            <br />
            LA CONVIVENCIA PARA IMPULSAR EL DESARROLLO PERSONAL EN UN ENTORNO
            NATURAL ÚNICO.
          </h4>
          <h3 className="white-type">
            <br />
            Eco Deluxe
          </h3>
          <p className="white-type">
            3800 USD
            <br />
            Habitación compartida
          </p>
          <h3 className="white-type">
            <br /> Eco Standard
          </h3>
          <p className="white-type">
            3650 USD
            <br />
            Habitación compartida
          </p>
          <h4 className="uppercase white-type">
            <br />
            <br />
            Queremos que seas parte de Hummana, a tu ritmo
          </h4>
          <p className="white-type">
            Reserva con 950$ y abona el resto en tres cómodas cuotas
          </p>
        </div>
        <SecondaryButton href={"/#"} label={"Come Play"} isBlack={false} />
        <p className="small-letter center-type tag non-included white-type value-letra-pequeña">
          *La diferencia entre deluxe y standard es el tamaño de la habitación.
          La primera es más grande, con un balcón privado. Todas las
          habitaciones son compartidas y tienen dos camas individuales.
        </p>
      </div>
    </section>
  );
}
