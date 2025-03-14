import "../products.css";
import BannerProducts from "../components/BannerProducts";
import ModuloTexto from "../components/ModuloTexto";
import ActividadesRetreat from "../components/ActividadesRetreat";
import Testimonials from "../components/Testimonials";
import YouBelongHere from "../components/BelongHere";
import Value from "../components/Value";
import ListBenefits from "../components/ListBenefits";
import Accomodation from "../components/Accomodation";
import Footer from "../components/Footer";

export default function Page() {
  const testimonialsData = [
    {
      nombre: "María Camila Hincapíe",
      texto:
        "Hoy me siento feliz y agradecida de haber tomado la decisión de regalarme este viaje. Este retiro me llenó de calma, me permitió escuchar mi voz interior y liberar mi corazón para poder disfrutar de mi esencia y sentir sin culpa, soltando el miedo a no pertenecer y la necesidad de controlarlo todo. Me enseñó que la paciencia es una gran virtud, que vale la pena sembrar con la convicción de que todo pasa y todo llega justo cuando tiene que pasar. Silenció mi mente y despertó mi brújula.",
      pais: "Colombia",
      imagen: "/images/people/maria-camila-hincapie.webp",
    },
    {
      nombre: "Florencia Calvo",
      texto:
        "Este retiro en Bali fue un puente para confiar nuevamente en los milagros. Me mostró que ser yo, fiel a mi interior, valores y espíritu, es lo más sagrado que tengo. Me enseñó que siempre hay tiempo para cumplir los sueños del corazón, aunque algunos se hayan trabado en algún tiempo. Laura es una maestra de los susurros. Laura tiene algo especial, como una llama de luz que te lleva, te guía hacia sus maestros y hacia el corazón más profundo de Bali.",
      pais: "Argentina",
      imagen: "/images/people/florencia-calvo.webp",
    },
    {
      nombre: "María Mercedes",
      texto:
        "Laura y Bali llegaron a mi vida en un momento de mucho dolor. Estaba sin trabajo, con una relación de pareja casi al final, sabiendo del cáncer de mi mamá y yo en Crisis existencial total. Llegar a Bali fue muy especial desde el primer momento era todo perfecto al punto que ni lo creía. Fue una semana de muchas experiencias, de charlas, de aprendizaje y de mucha introspección. Bali me cambió por completo la vida. A mi regreso las cosas con mi esposo mejoraron, recibimos una oferta de trabajo muy interesante y ahora vivimos felices en una isla de sueño, mi mamá se curó de su cáncer y mi relación conmigo misma es la mejor que haya podido pensar. Al cambiar mi interior, mi exterior también se transformó. Gracias infinitas, Laura.",
      pais: "Estados Unidos",
      imagen: "/images/people/maria-mercedes.webp",
    },
  ];
  return (
    <>
      <BannerProducts
        bannerImage={"/images/retreat/banner.webp"}
        bannerLink={"/#"}
        bannerLink2={"/retreat/el-poder-curativo-de-la-naturaleza"}
        bannerLinkLabel={"Come Play"}
        bannerLinkLabel2={"Play More"}
        title={"Retreat"}
        subtitleLine1={
          <>
            <span>Human</span>
            <span>Grounded</span>
            <span>In</span>
            <span>Nature</span>
          </>
        }
        titleDescription={
          <>
            <h3 className="white-type uppercase">A transformative journey</h3>
            <p className="white-type center-type">
              Fortalece la mente, mueve el cuerpo, conecta con el corazón.
            </p>
            <h4 className="white-type uppercase">
              <br />
              HUMMANA es más que un retiro.
              <br />
            </h4>
            <p className="white-type center-type">
               Es aventura, conexión y desarrollo personal en el pulmón de Bali,
              Indonesia. 
              <br />
              Es entrar abiertos a descubrir algo que estaba dentro de nosotros,
              y regresar con nuevas capacidades.
            </p>
          </>
        }
        secondTitle={"Adéntrate"}
        secondDescription={
          <p className="white-type">
            En una experiencia donde la naturaleza cobra vida propia. HUMMANA se
            encuentra en el pulmón de la isla de Bali, Indonesia. Un oasis de
            paz y de tranquilidad donde disfrutarás la belleza de la selva, las
            playas majestuosas y los atardeceres impactantes.
            <br />
            <br />7 días en un entorno salvaje para hacer un reset y elevar tu
            mente, tu cuerpo y tu espíritu.
          </p>
        }
      />
      <div className="light-section">
        <ModuloTexto />
      </div>
      <ActividadesRetreat />

      <YouBelongHere
        src={"/images/retreat/youbelonghere.webp"}
        description={
          <>
            Este retiro es para <br />
            <strong>
              LÍDERES, EMPRENDEDORES, VISIONARIOS, CHANGE MAKERS, CREATIVOS,
              AMANTES DEL OCÉANO
            </strong>
            <br />
            <br />
            Que quieren impulsar su proyecto personal o laboral.
            <br />
            Que buscan ampliar su creatividad y su bienestar.
            <br />
            Que desean conectar con personas conscientes y afines en valores y
            estilos de vida.
          </>
        }
      />
      <div className="light-section">
        <Accomodation />
        <Testimonials
          testimonials={testimonialsData}
          testimonialImg={
            "/images/retreat/activities/ritual-de-los-cuatro-elementos.webp"
          }
          vimeoId={"1058963501"}
        />
        <ListBenefits />
        <section className="benefits__section">
          <h2>The Benefits</h2>
          <div className="benefits__wrapper">
            <div className="benefits__module">
              <h3>
                Resiliencia <br />
                para la mente
              </h3>
              <p>
                Desarrolla una mentalidad sólida para navegar los desafíos de la
                vida.
              </p>
              <p className="tag">
                *El 90% de los participantes afirman sentirse más resilientes
                después del retiro.
              </p>
            </div>
            <div className="benefits__module">
              <h3>
                determinación <br />
                para el cuerpo
              </h3>
              <p>
                Aprende prácticas de bienestar para vivir una vida limpia y
                mantener un cuerpo fuerte y sano.
              </p>
              <p className="tag">
                *El 95% de los participantes afirman sentirse con más vitalidad
                después del retiro.
              </p>
            </div>
            <div className="benefits__module">
              <h3>
                Confianza <br />
                para el espíritu
              </h3>
              <p>
                Aviva la chispa de aquello que te mueve por dentro y vive en
                coherencia con ello.
              </p>
              <p className="tag">
                *El 88% de los participantes aseguran terminar el retiro tomando
                decisiones más acordes con su persona.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Value />
      <Footer
        fraseFooter={
          <h4 className="center-type">
            A place to evolve. A place to inspire.
          </h4>
        }
      />
    </>
  );
}
