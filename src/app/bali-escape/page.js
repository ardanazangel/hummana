import Testimonials from "../components/Testimonials";
import Accomodations from "../components/Accomodations";
import Actividades from "../components/Actividades";
import Button from "../components/Button";
import Image from "next/image";
import FAQs from "../components/FAQ";
import faqBaliEscape from "../components/FAQ/faqBaliEscape.json";
import HeroRetreats from "../components/HeroBali";
import testimonialsBali from "../components/Testimonials/testimonialsBali.json";
import Footer from "../components/Footer";

export default function BaliEscape() {
  return (
    <main>
      <HeroRetreats />
      <Actividades />
      <section id="you-belong-here" className="light-section">
        <div className="you-belong-here-content">
          <p id="for-who">
            EEmprendedores. Amantes del mar. Buscadores. Profesionales. Almas
            curiosas y aventureras.
          </p>
          <h2>
            <div className="word">You</div>
            <div className="word center">Belong</div>
            <div className="word">Here</div>
          </h2>
          <p>
            Si estás buscando 1 break para cuidar de tu salud emocional y traer
            equilibrio, claridad y una nueva forma de gestionar tu energía y tu
            vida.
          </p>
        </div>
        <Image
          src={"/assets/youbelonghere-bali.webp"}
          width={600}
          height={300}
          alt="You Belong Here background image"
        />
      </section>
      <Accomodations />
      <Testimonials id={1079741691} testimonialsJson={testimonialsBali} />
      <section id="incluido">
        <div id="incluido-texto">
          <article>
            <h2>Hummana Incluye</h2>
            <ul>
              <li>
                <p>
                  Alojamiento premium en hotel eco-luxury durante 7 días / 6
                  noches.
                </p>
              </li>
              <li>
                <p>
                  Comidas nutritivas y equilibradas preparadas por nuestros
                  chefs ayurvédicos: incluye tres comidas al día.
                  <br />
                  <span>
                    *Conversa con nosotros sobre tus necesidades dietéticas.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Programa de desarrollo personal dirigido por Laura Vela y un
                  equipo de maestros especializados en wellness, medicina
                  holística y mindfulness.
                </p>
              </li>
              <li>
                <p>
                  Todas las actividades, excursiones, acceso a templos y
                  aventuras.
                </p>
              </li>
              <li>
                <p>Ceremonia de bienvenida y ceremonia de cierre.</p>
              </li>
              <li>
                <p>Transporte durante todo el retiro.</p>
              </li>
              <li>
                <p>Acceso y entrenamiento de baño de hielo.</p>
              </li>
              <li>
                <p>Un masaje corporal detox balinés.</p>
              </li>
              <li>
                <p>
                  Trabajo de breathwork con la fundadora de HUMMANA, Laura Vela.
                </p>
              </li>
              <li>
                <p>Prácticas de yoga y meditación diarias.</p>
              </li>
              <li>
                <p>
                  Cena especial 5 estrellas en uno de los restaurantes más
                  emblemáticos de la isla.
                </p>
              </li>
              <li>
                <p>
                  Cena especial 5 estrellas en uno de los restaurantes más
                  emblemáticos de la isla.
                </p>
              </li>
            </ul>
            <h5>No incluido en hummana</h5>
            <p>
              Vuelo internacional a Bali.
              <br />
              <span>
                *El aeropuerto de destino es DPS Denpasar, Bali Ngurah Rai
                International Airport.
              </span>
            </p>
          </article>
        </div>
        <div id="incluido-imagen">
          <Image
            src={"/assets/incluido-bali.webp"}
            width={600}
            height={300}
            alt="You Belong Here background image"
          />
        </div>
      </section>
      <section id="metodos-pago" className="light-section">
        <article>
          <h2>inversión y métodos de pago</h2>
          <h5>Invierte en ti, en tu desarrollo personal</h5>
          <h3>El valor</h3>
          <p>Escoge el tipo de habitación que quieres</p>
          <h4>habitación compartida eco deluxe</h4>
          <p>3800 USD (dólares americanos).</p>
          <h4>habitación compartida eco standard</h4>
          <p>3650 USD (dólares americanos).</p>
          <p>
            <span>
              <br />
              <br />
              La diferencia entre deluxe y standard es el tamaño de la
              habitación. La primera es más grande, con un balcón privado. Todas
              las habitaciones son compartidas y tienen dos camas individuales.
              <br />
              <br />
            </span>
          </p>
          <h3>Plan de cuotas</h3>
          <p>
            En el momento que realizas tu reserva, alguien de nuestro equipo se
            pone en contacto contigo para personalizar el plan de cuotas a tu
            medida.
          </p>
          <p>
            <span>
              *Los abonos se realizan a través de transferencia bancaria.
            </span>
          </p>
          <Button
            href={"come create"}
            label={"come create"}
            colorMode={"light"}
          />
        </article>
        <Image
          src={"/assets/metodospago-bali.webp"}
          width={600}
          height={300}
          alt="You Belong Here background image"
        />
      </section>
      <FAQs json={faqBaliEscape} />
      <Footer fraseFooter={"A place to evolve. A place to inspire."} />
    </main>
  );
}
