import Image from "next/image";
import "../OneOnOne/oneonone.css";
import SecondaryButton from "../buttons/SecondaryButton";

export default function OneOnOne() {
  return (
    <section className="one-on-one__section">
      <div className="one-on-one__content-wrapper">
        <div className="one-on-one__content">
          <h2>One On One work</h2>
          <h3>With Laura vela</h3>
          <p>
            Consultora y mentora de alto rendimiento, oradora motivacional y
            emprendedora social. Dirige retiros, cursos y formaciones en
            desarrollo personal en distintas partes del mundo.
          </p>
          <SecondaryButton href={"/about"} label={"Conoce Más"} />
        </div>
      </div>
      <div className="img">
        <Image
          width={1920}
          height={1080}
          src={"/images/mentorship/laura-vela.png"}
          alt="One on one mentorships with Laura Vela"
        />
      </div>
    </section>
  );
}
