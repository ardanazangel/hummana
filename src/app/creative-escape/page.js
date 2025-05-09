import HeroSumba from "../components/HeroSumba";
import AccomodationsSumba from "../components/AccomodationsSumba";
import Image from "next/image";
import Button from "../components/Button";
import faqSumba from "../components/FAQ/faqSumba.json";
import FAQs from "../components/FAQ";
import Footer from "../components/Footer";

export default function CreativeEscape() {
  return (
    <main>
      <HeroSumba />
      <section id="creative-speakers">
        <div id="speakers-title">
          <article>
            <h2>Creative speakers</h2>
            <h5>
              LA VERDADERA RIQUEZA EMPIEZA CON NUTRIR LA RELACIÓN QUE TIENES
              CONTIGO MISMO
            </h5>
            <p>
              Nuestros creative speakers te muestran el camino hacia una forma
              de vida creativa más consciente.{" "}
            </p>
          </article>
        </div>

        <div id="creative-speakers-content">
          <div className="speaker-card">
            <img src="https://silverkris.singaporeair.com/wp-content/uploads/2020/05/1-Lauren-Hill-portrait-by-Nathan-Oldfield.jpg" />
            <article>
              <h4>Lauren L. Hill</h4>
              <p>
                <span>
                  Escritora, directora, Embajadora de Surf de Patagonia y
                  fundadora de The Waterpeople Podcast
                </span>
              </p>
              <p>
                Cómo encontrar tu voz auténtica y atravesar los bloqueos
                creativos.
              </p>
            </article>
          </div>
          <div className="speaker-card">
            <img src="https://www.euphoriazine.com/wp-content/uploads/2021/11/Ziggy-Alberts_Photographer-JannekeStorm-EMBARGOED-28-OCTOBER-2021-scaled-e1636558481106.jpg" />
            <article>
              <h4>Ziggy Alberts</h4>
              <p>
                <span>Músico y compositor</span>
              </p>
              <p>
                Cómo mantener una mentalidad saludable como artista exitoso en
                el mundo actual.
              </p>
            </article>
          </div>
          <div className="speaker-card">
            <img src="https://images.contactout.com/profiles/90ad0a6e8b861c9b9282c34473e00c96" />
            <article>
              <h4>RAPHAELE REPONTY</h4>
              <p>
                <span>Fundadora de Abysse</span>
              </p>
              <p>
                Cómo crear y escalar una marca de moda consciente y aterrizar
                tus ideas creativas.
              </p>
            </article>
          </div>
          <div className="speaker-card">
            <img src="null" />
            <article>
              <h4>CHRISTIAN SEA</h4>
              <p>
                <span>Fundador de Ngung Kalla</span>
              </p>
              <p>
                Cómo construir y hacer crecer un retiro ecológico de surf y
                bienestar, honrando los valores de la tierra.
              </p>
            </article>
          </div>
          <div className="speaker-card">
            <img src="https://media.surfersjournal.com/wp-content/uploads/2021/04/10132409/TorrenMartyn_PhotoOrd-53.jpg" />
            <article>
              <h4>CHRISTIAN SEA</h4>
              <p>
                <span>Storyteller & Filmmaker</span>
              </p>
              <p>
                Una mirada colectiva a las aventuras de viaje consciente, a
                través de los ojos de un cineasta y escritor pionero.
              </p>
            </article>
          </div>
          <div className="speaker-card">
            <img src="https://shapersclub.com/wp-content/uploads/2023/04/joel-fitzgerald-surfboards.jpg" />
            <article>
              <h4>Joel fitzgerald</h4>
              <p>
                <span>Atleta profesional & Shaper</span>
              </p>
              <p>
                Surfeando las olas de la vida y navegando el camino hacia el
                éxito.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="sintonizar">
        <div id="sintonizar-content">
          <article>
            <h2>8 PASOS PARA SINTONIZAR CON TU FLOW CREATIVO</h2>
            <ol>
              <li>
                <h4>1. Cree antes de crear</h4>
                <p>
                  Todo comienza en la mente. El arte no nace del talento, sino
                  de la creencia profunda de que lo que llevas dentro merece ser
                  expresado.
                </p>
              </li>
              <li>
                <h4>2. Haz espacio para lo que no sabes.</h4>
                <p>
                  No necesitas tener todas las respuestas. La verdadera
                  creatividad surge cuando dejas de controlar y comienzas a
                  escuchar.
                </p>
              </li>{" "}
              <li>
                <h4>3. Sintoniza con lo invisible.</h4>
                <p>
                  Observa más allá de lo evidente. Aquello que nadie nota es, a
                  menudo, la semilla de algo completamente nuevo.
                </p>
              </li>{" "}
              <li>
                <h4>4. Libérate del resultado.</h4>
                <p>
                  Crea por el acto de crear, no por lo que el mundo espera de
                  ti. Lo auténtico no busca aprobación.
                </p>
              </li>
              <li>
                <h4>5. Acoge tus errores.</h4>
                <p>
                  Los errores no bloquean el camino, son el camino. A veces, una
                  imperfección contiene más verdad que cualquier plan perfecto.
                </p>
              </li>{" "}
              <li>
                <h4>6. Recuerda que el instrumento eres tú.</h4>
                <p>
                  No importa si usas un pincel, una cámara o tus palabras. El
                  verdadero canal de creación eres tú mismo, cuando estás en
                  sintonía con tu energía interior.
                </p>
              </li>{" "}
              <li>
                <h4>7. Honra cada etapa.</h4>
                <p>
                  Tu obra no es un destino. Es un reflejo del momento en que fue
                  creada. Documenta. Agradece. Suelta.
                </p>
              </li>{" "}
              <li>
                <h4>8. Vuelve siempre al presente.</h4>
                <p>
                  La creatividad es una práctica. No es lo que haces una vez, es
                  lo que eliges encarnar una y otra vez, aquí y ahora.
                </p>
              </li>
            </ol>
          </article>
        </div>
        <div id="sintonizar-img">
          <Image
            src={"/assets/sintoniza-creative.webp"}
            width={300}
            height={600}
            alt="Imagen sintonizar con tu flow"
          />
        </div>
      </section>
      <section id="you-belong-here" className="light-section">
        <div className="you-belong-here-content">
          <p id="for-who">
            Artistas. Creativos. Seekers. Emprendedores. Líderes. Profesionales.
            Change makers. Amantes del océano.
          </p>
          <h2>
            <div className="word">You</div>
            <div className="word center">Belong</div>
            <div className="word">Here</div>
          </h2>
          <p>
            Un break para aliviar tu creatividad y <br />
            entrar en tu flow creativo.
          </p>
        </div>
        <Image
          src={"/"}
          width={600}
          height={300}
          alt="You Belong Here background image"
          style={{ background: "#333" }}
        />
      </section>
      <section id="incluido" className="sumba-content">
        <div id="incluido-texto">
          <article>
            <h2>
              The Creative Escape, <br /> ¿Que incluye?
            </h2>
            <ul>
              <li>
                <p>
                  Alojamiento eco surf & health retreat
                  <br />
                  <span>
                    Te alojarás durante 7 días / 6 noches en habitaciones
                    premium compartidas, dentro de uno de los paraísos más
                    salvajes de Indonesia.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Menú consciente y orgánico <br />
                  <span>
                    *La cocina esta preparada para adecuarse a todo tipo de
                    dietas.
                  </span>
                </p>
              </li>
              <li>
                <p>Transporte durante el retiro</p>
              </li>
              <li>
                <p>Meditación y mindfulness diario</p>
              </li>
              <li>
                <p>Yoga diario</p>
              </li>
              <li>
                <p>
                  Programa de Mindset Coaching y liderazgo consciente dirigido
                  por Laura Vela
                </p>
              </li>
              <li>
                <p>Nervous system reset foundation</p>
              </li>
              <li>
                <p>
                  Creativity as a way of being
                  <br />
                  <span>Workshop</span>
                </p>
              </li>
              <li>
                <p>
                  Sustainable Living <br />
                  <span>Workshop</span>
                </p>
              </li>
              <li>
                <p>
                  The art of creating with intention <br />
                  <span>Workshop</span>
                </p>
              </li>
              <li>
                <p>
                  The art of surfing the waves of creativity & life
                  <br />
                  <span>Workshop</span>
                </p>
              </li>
              <li>
                <p>
                  Storytelling & Creative visuals
                  <br />
                  <span>Workshop</span>
                </p>
              </li>
              <li>
                <p>
                  Inmersión en una aldea local
                  <br />
                  <span>Experiencia en la aldea de Waru Wora</span>
                </p>
              </li>
              <li>
                <p>
                  Aventura en Océano
                  <br />
                  <span>Clases de surf</span>
                </p>
              </li>
              <li>
                <p>Foil Board</p>
              </li>
              <li>
                <p>
                  Aventura en Cascada
                  <br />
                  <span>
                    Trekking a cascada en un entorno que supera la imaginación.
                  </span>
                </p>
              </li>
              <li>
                <p>Aventura en Mountain Bike</p>
              </li>
              <li>
                <p>Aventura en Snorkel</p>
              </li>
              <li>
                <p>Aventura de pesca</p>
              </li>
              <li>
                <p>
                  Encuentro con animales
                  <br />
                  <span>Ruta a caballlo.</span>
                </p>
              </li>
              <li>
                <p>
                  Breathwork
                  <br />
                  <span>
                    Trabajo de breathwork con la fundadora de Hummana, Laura
                    Vela.
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Donación a The Sumba Foundation
                  <br />
                  <span>
                    Contribuirás al bienestar de niños en situación vulnerable
                    en la isla de Sumba.{" "}
                    <a href="https://sumbafoundation.org/" target="_blank">
                      https://sumbafoundation.org/
                    </a>
                  </span>
                </p>
              </li>
            </ul>
            <h5>No incluido en hummana</h5>
            <p>
              Vuelo internacional a Bali.
              <br />
              <span>
                Para llegar a Sumba, primero has de volar a Bali. El aeropuerto
                de Bali es Denpasar, Bali Ngurah Rai International Airport
                (DPS). Desde Bali podrás tomar un vuelo a la isla de Sumba,
                Aeropuerto de Tambolaka (TMC). *Hay vuelos diarios de Bali a
                Sumba.
              </span>
            </p>
          </article>
        </div>
        <div id="incluido-imagen">
          <Image
            src={"/assets/included-creative.webp"}
            width={600}
            height={300}
            alt="You Belong Here background image"
          />
        </div>
      </section>
      <AccomodationsSumba />
      <section id="metodos-pago" className="light-section">
        <article>
          <h2>Inversión y métodos de pago</h2>
          <h3>El valor</h3>
          <h4>habitación compartida eco deluxe</h4>
          <p>5500 USD (dólares americanos).</p>
          <h4>*Precio Early Bird</h4>
          <p>
            4.800 USD (dólares americanos). <br />
            Con descuento de 10% solo hasta el 16 de junio.
          </p>
          <h3>Plan de cuotas</h3>
          <h4>Se parte de Hummana, a tu ritmo</h4>
          <p>Reserva con $1000 USD y abona el resto en cómodas cuotas.</p>

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
          src={"/"}
          width={600}
          height={300}
          alt="Imagen de fondo métodos de pago"
          style={{ background: "#333" }}
        />
      </section>
      <FAQs json={faqSumba} />
      <Footer
        fraseFooter={"The ability to look deeply is the root of creativity."}
      />
    </main>
  );
}
