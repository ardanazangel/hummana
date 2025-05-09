import Testimonials from "../components/Testimonials";
import Rueda from "../components/Rueda";
import Image from "next/image";
import Button from "../components/Button";
import FourPillarsFlex from "../components/FourPillarsFlex";
import Benefits from "../components/Benefits";
import BenefitsCircle from "../components/BenefitsCircle";
import MentorshipHero from "../components/MentorshipHero";
import testimonialsMentorship from "../components/Testimonials/testimonialsMentorship.json";
import Footer from "../components/Footer";

export default function Mentorship() {
  return (
    <>
      <main>
        <MentorshipHero />
        <Rueda />
        <FourPillarsFlex />
        <section id="metodo">
          <div id="metodo-title">
            <article>
              <h2>8 STEP PRACTICE FOUNDATION</h2>
              <h3>El método Hummana</h3>
              <p>
                Una metodología viva para despertar tu consciencia y activar tu
                potencial creativo. Acompañamiento uno a uno para guiarte, paso
                a paso, en tu proceso de desarrollo personal.
              </p>
            </article>
          </div>
          <div id="metodo-content">
            <ul>
              <li>
                <h4>BREATHWORK</h4>
                <h5>Respirar para volver a ti</h5>
                <p>
                  RESPIRAMOS 20 MIL VECES AL DÍA Y LA FORMA EN QUE LO HACEMOS
                  AFECTA NUESTRO SISTEMA NERVIOSO.
                  <br />
                  El breathwork desbloquea estados mentales estancados, regula
                  el sistema nervioso y nos devuelve al presente.
                </p>
              </li>
              <li>
                <h4>MEDITACIÓN</h4>
                <h5>Meditar para estar con «lo que es»</h5>
                <p>
                  LA MEDITACIÓN ES INCREÍBLEMENTE SIMPLE, Y, PARADÓJICAMENTE,
                  PUEDE LLEVAR AÑOS DARSE CUENTA DE ESTO.
                  <br />
                  Simplemente significa «no hacer». No tiene que ver con
                  controlar los pensamientos, observar la respiración o sentirse
                  mejor. Es aprender a estar con «lo que es».
                </p>
              </li>
              <li>
                <h4>Movimiento</h4>
                <h5>Mover tu cuerpo para habitar el momento </h5>
                <p>
                  EL MOVIMIENTO CONSCIENTE ES UNA FORMA DE MEDITACIÓN EN ACCIÓN.
                  <br />
                  Nos movemos al ritmo del momento presente, completamente
                  conscientes en lo que está sucediendo. Es tu ancla para
                  cultivar presencia.
                </p>
              </li>
              <li>
                <h4>Mindset</h4>
                <h5>Saber responder al cambio </h5>
                <p>
                  VIVIMOS EN UNA SOCIEDAD QUE NOS INCITA A REACCIONAR.
                  <br />
                  Es crucial educar nuestra forma de responder ante la vida,
                  especialmente en momentos de cambio.
                </p>
              </li>
              <li>
                <h4>AUTOCONOCIMIENTO</h4>
                <h5>Vivir en sintonía con tu esencia</h5>
                <p>
                  SI NO VIVIMOS SINTONIZADOS CON NUESTRA ESENCIA, TODO LO DEMÁS
                  SE DESEQUILIBRA.
                  <br />
                  El diseño de una vida afín a tu verdadera naturaleza comienza
                  con una comprensión clara de tus valores y de ti mismo.
                </p>
              </li>
              <li>
                <h4>DIÁLOGO INTERNO </h4>
                <h5>Trabajar la positividad y autenticidad </h5>
                <p>
                  TENEMOS 70 MIL PENSAMIENTOS AL DÍA, EL 80% SON NEGATIVOS.
                  <br />
                  La neurociencia afirma que tenemos diferentes tipos de
                  diálogos internos con funciones diferentes. Trabajar cada uno
                  de ellos, nos ayuda a eliminar la negatividad y diseñar una
                  vida que respalde tu verdadera naturaleza.
                </p>
              </li>
              <li>
                <h4>MINDFULNESS </h4>
                <h5>Responder en lugar de reaccionar</h5>
                <p>
                  PODEMOS ENTRENAR NUESTRO CEREBRO PARA CAMBIAR REACCIONES
                  IMPULSIVAS POR RESPUESTAS ADECUADAS
                  <br />
                  El mindfulness entrena tu atención. Te ayuda a responder en
                  lugar de reaccionar, regulando cuerpo, mente y emociones desde
                  el aquí y ahora.
                </p>
              </li>
              <li>
                <h4>EL PLAN CREATIVO</h4>
                <h5>Una visión clara necesita un plan</h5>
                <p>
                  AL PONERLE FECHA A UN PROYECTO, SE CONVIERTE EN UNA META. UNA
                  META, DIVIDIDA EN PASOS, SE CONVIERTE EN UN PLAN. Y UN PLAN,
                  RESPALDADO POR ACCIONES, SE CONVIERTE EN UNA REALIDAD.
                  <br />
                  Es tan importante tener una visión clara de lo que quieres
                  para tu vida, como dar los pasos adecuados para lograrlo.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section id="you-belong-here" className="light-section">
          <div className="you-belong-here-content">
            <p id="for-who">
              Emprendedores. Líderes. Fundadores. Creativos. Artistas.
            </p>
            <h2>
              <div className="word">You</div>
              <div className="word center">Belong</div>
              <div className="word">Here</div>
            </h2>
            <p>
              Emprendedores. Líderes. Fundadores. Creativos. Artistas.
              Profesionales. Buscadores. Almas curiosas y aventureras. Todos
              aquellos que están listos para vivir, crear y liderar desde un
              lugar más consciente. <br />
              <br />
              HUMMANA Mentorship fusiona neurociencia, atención plena y
              prácticas de alto rendimiento para guiarte hacia una forma de vida
              más alineada, creativa y presente.
            </p>
          </div>
          <Image
            src={"/assets/atardecer.webp"}
            width={600}
            height={300}
            alt="You Belong Here background image"
          />
        </section>
        <Testimonials
          id={1079741691}
          testimonialsJson={testimonialsMentorship}
        />
        <section id="caracteristicas">
          <div id="caracteristicas-content">
            <article>
              <h2>Tu propia mentorship</h2>
              <h3>
                8 semanas en una mentoría “one on one” altamente personalizada
              </h3>
              <ul>
                <li>
                  <h4>ENTRARÁS EN UN PROCESO DE MINDSET COACHING</h4>
                </li>
                <li>
                  <h4>DESARROLLARÁS ACCIONES EXPANSIVAS Y SOSTENIBLES</h4>
                </li>
                <li>
                  <h4>TRABAJARÁS EN LÍNEA CON LAURA VELA</h4>
                </li>
                <li>
                  <h4>EXPLORARÁS DIFERENTES ÁREAS</h4>
                  <p>
                    Relaciones, Creatividad, Carrera profesional, Liderazgo,
                    Estrés, Conciencia
                  </p>
                </li>
              </ul>
            </article>
          </div>
          <div id="caracteristicas-image">
            <Image
              src={"/assets/atardecer.webp"}
              width={1080}
              height={1920}
              alt="Imagen Laura Vela Banner"
            />
          </div>
        </section>
        <section id="one-on-one">
          <Image
            src={"/assets/laura-vela-one-on-one.webp"}
            width={600}
            height={300}
            alt="Imagen de Laura Vela"
          />
          <div id="one-on-one-content">
            <h2>One on one</h2>
            <h3>Work with Laura Vela</h3>
            <p>
              Consultora y mentora de alto rendimiento, oradora motivacional y
              emprendedora social. Dirige retiros, cursos y formaciones en
              desarrollo personal en distintas partes del mundo.
            </p>
            <Button href={""} label={"come create"} colorMode={"light"} />
          </div>
        </section>
        <Benefits />
        <BenefitsCircle />
      </main>
      <Footer
        fraseFooter={
          "Design a life attuned to your true nature and not against it."
        }
      />
    </>
  );
}
