import HorizontalScroll from "../components/HorizontalScroll";
import "../products.css";
import BannerProducts from "../components/BannerProducts";
import YouBelongHere from "../components/BelongHere";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonials";

export default function Page() {
  const testimonialsData = [
    {
      nombre: "María Camila Hincapíe",
      texto:
        "Hoy me siento feliz y agradecida de haber tomado la decisión de regalarme este viaje. Este retiro me llenó de calma, me permitió escuchar mi voz interior y liberar mi corazón para poder disfrutar de mi esencia y sentir sin culpa, soltando el miedo a no pertenecer y la necesidad de controlarlo todo. Me enseñó que la paciencia es una gran virtud, que vale la pena sembrar con la convicción de que todo pasa y todo llega justo cuando tiene que pasar. Silenció mi mente y despertó mi brújula.",
      pais: "Colombia",
      imagen: "/images/people/maria-camila-hincapie.jpg",
    },
    {
      nombre: "Florencia Calvo",
      texto:
        "Este retiro en Bali fue un puente para confiar nuevamente en los milagros. Me mostró que ser yo, fiel a mi interior, valores y espíritu, es lo más sagrado que tengo. Me enseñó que siempre hay tiempo para cumplir los sueños del corazón, aunque algunos se hayan trabado en algún tiempo. Laura es una maestra de los susurros. Laura tiene algo especial, como una llama de luz que te lleva, te guía hacia sus maestros y hacia el corazón más profundo de Bali.",
      pais: "Argentina",
      imagen: "/images/people/florencia-calvo.jpg",
    },
    {
      nombre: "María Mercedes",
      texto:
        "Laura y Bali llegaron a mi vida en un momento de mucho dolor. Estaba sin trabajo, con una relación de pareja casi al final, sabiendo del cáncer de mi mamá y yo en Crisis existencial total. Llegar a Bali fue muy especial desde el primer momento era todo perfecto al punto que ni lo creía. Fue una semana de muchas experiencias, de charlas, de aprendizaje y de mucha introspección. Bali me cambió por completo la vida. A mi regreso las cosas con mi esposo mejoraron, recibimos una oferta de trabajo muy interesante y ahora vivimos felices en una isla de sueño, mi mamá se curó de su cáncer y mi relación conmigo misma es la mejor que haya podido pensar. Al cambiar mi interior, mi exterior también se transformó. Gracias infinitas, Laura.",
      pais: "Estados Unidos",
      imagen: "/images/people/maria-mercedes.jpg",
    },
  ];
  return (
    <>
      <BannerProducts
        bannerImage={"/images/mentorship/banner4.jpg"}
        bannerLink={"/hello"}
        bannerLink2={"/broski"}
        bannerLinkLabel2={"Come Create"}
        bannerLinkLabel={"Come Create"}
        title={"Mentorship"}
        subtitleLine1={
          <>
            <span>Rewire</span>
            <span className="middle-element">Your</span>
            <span>Mind</span>
          </>
        }
        subtitleLine2={
          <>
            <span>Reshape</span>
            <span className="middle-element">Your</span>
            <span>Life</span>
          </>
        }
        titleDescription={
          <h3 className="white-type center-type">
            Inmersión «one on one» para alcanzar la plenitud en los pilares
            esenciales de la vida.
          </h3>
        }
        secondTitle={"Desarrollate"}
        secondDescription={
          <p className="white-type">
            "Amplía tu visión, fortalece tus habilidades y desbloquea nuevas
            oportunidades con acompañamiento estratégico que impulsa tu
            crecimiento, incluso mucho después de cada sesión. Sesiones
            personalizadas “One on One” con Laura Vela."
          </p>
        }
      />
      <section className="text-module__section">
        <div className="one-module__wrapper">
          <div className="one-module__content">
            <h2>Being Reshaped</h2>
            <h3>The past</h3>
            <p>
              La adversidad es una oportunidad porque nos obliga a ir más
              profundo, nos empuja a despertar y a hacernos preguntas
              significativas. A través de HUMMANA mentorship vas a impulsar tu
              resiliencia y vas a desarrollar tu capacidad de respuesta ante el
              cambio
            </p>
          </div>
          <div className="action-plan__content">
            <h4>Action plan</h4>
            <p>CLARIDAD / ADAPTABILIDAD / RESPUESTA AL CAMBIO</p>
          </div>
        </div>
        <div className="one-module__wrapper">
          <div className="one-module__content">
            <h2>Being Rewired</h2>
            <h3>The future</h3>
            <p>
              Para convertir una visión en una realidad es necesario desarrollar
              una mentalidad específica (growth mindset). Un visionario es aquel
              capaz de ver más allá del presente, de imaginar un futuro mejor y
              más brillante. A través de HUMMANA mentorship aprenderás a
              implementar un mindset de crecimiento, a superar el burnout y a
              cultivar un lenguaje alineado con tus metas y con tus objetivos.
            </p>
          </div>
          <div className="action-plan__content">
            <h4>Action plan</h4>
            <p>MOTIVACIÓN / DIÁLOGO INTERNO / CREACIÓN</p>
          </div>
        </div>
        <div className="one-module__wrapper">
          <div className="one-module__content">
            <h2>Being Reshaped</h2>
            <h3>The past</h3>
            <p>
              La mayoría de personas viven entre dos planos imaginarios: el
              pasado, que no pueden cambiar o el futuro, que no pueden predecir.
              A través de HUMMANA mentorship agudizarás la escucha y la
              reflexión sobre tu presente. Además, cultivarás la claridad y el
              discernimiento necesarios para tu crecimiento y evolución
              espiritual.
            </p>
          </div>
          <div className="action-plan__content">
            <h4>Action plan</h4>
            <p>ALINEACIÓN / INTEGRACIÓN / DISCERNIMIENTO</p>
          </div>
        </div>
      </section>
      <HorizontalScroll />
      <YouBelongHere
        src={"/images/mentorship/youbelonghere.png"}
        description={
          <>
            Líderes, CEO'S, empresarios, creativos, ejecutivos, artistas,
            emprendedores que están en la búsqueda de un significado mayor para
            su vida y para su carrera profesional.
            <br />
            <br />
            HUMMANA mentorship es un proceso de desarrollo personal
            revolucionario a nivel intelectual, emocional y espiritual.
          </>
        }
      />
      <Testimonial testimonials={testimonialsData} />
      <Footer
        fraseFooter={
          <h4 className="center-type">Master your mind, Change your life.</h4>
        }
      />
    </>
  );
}
