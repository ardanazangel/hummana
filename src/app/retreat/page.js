import "../products.css";
import BannerProducts from "../components/BannerProducts";
import ModuloTexto from "../components/ModuloTexto";
import ActividadesRetreat from "../components/ActividadesRetreat";
import Testimonials from "../components/Testimonials";
import YouBelongHere from "../components/BelongHere";
import Image from "next/image";
import Value from "../components/Value";
import ListBenefits from "../components/ListBenefits";

export default function Page() {
  const testimonialsData = [
    {
      nombre: "María Camila Hincapíe",
      texto:
        "Hoy me siento feliz y agradecida de haber tomado la decisión de regalarme este viaje. Este retiro me llenó de calma, me permitió escuchar mi voz interior y liberar mi corazón para poder disfrutar de mi esencia y sentir sin culpa, soltando el miedo a no pertenecer y la necesidad de controlarlo todo. Me enseñó que la paciencia es una gran virtud, que vale la pena sembrar con la convicción de que todo pasa y todo llega justo cuando tiene que pasar. Silenció mi mente y despertó mi brújula.",
      pais: "Colombia",
      imagen: "",
    },
    {
      nombre: "Ana López",
      texto: "Un servicio excepcional, muy contenta con los resultados.",
      pais: "Marketing Manager",
      imagen: "",
    },
    {
      nombre: "Carlos García",
      texto: "Increíble atención al cliente. Volveré a comprar.",
      pais: "Freelancer",
      imagen: "",
    },
  ];
  return (
    <>
      <BannerProducts
        bannerImage={"/images/retreat/banner.png"}
        bannerLink={"/bro"}
        bannerLink2={"/broski"}
        bannerLinkLabel={"Come Play"}
        bannerLinkLabel2={"Play More"}
        title={"Retreat"}
        subtitleLine1={
          <>
            <span>Rewire</span>
            <span>Your</span>
            <span>Mind</span>
          </>
        }
        subtitleLine2={
          <>
            <span>Reshape</span>
            <span>Your</span>
            <span>Life</span>
          </>
        }
        titleDescription={
          <>
            <p className="white-type">
              <br />
              A transformative journey <br />
              Fortalece la mente, mueve el cuerpo, conecta con el corazón.
            </p>
            <p className="white-type">
              <br />
              HUMMANA es más que un retiro. Es aventura, conexión y desarrollo
              personal en el pulmón de Bali, Indonesia. 
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
        src={"/images/retreat/youbelonghere.png"}
        description={
          <>
            Líderes, CEO'S, empresarios, creativos, ejecutivos, artistas,
            emprendedoresque están en la búsqueda de un significado mayor para
            su vida y para su carrera profesional.
            <br />
            <br />
            HUMMANA mentorship es un proceso de desarrollo personal
            revolucionario a nivel intelectual, emocional y espiritual.
          </>
        }
      />
      <div className="light-section">
        <section className="accomodation-section">
          <div className="accomodation-content">
            <div className="accomodation-section">
              <div className="accomodation-text-wrapper">
                <div className="accomodation-text first">
                  <h2>Luxury accomodation</h2>
                  <p>
                    Elegimos el mayor paraíso de Indonesia para que esta
                    aventura de desarrollo personal y autoconocimiento sea
                    excepcional de principio a fin. Hospédate en habitaciones
                    ecológicas de lujo, disfruta de una gastronomía orgánica y
                    sumérgete en este viaje con personas afines a ti.
                  </p>
                </div>
                <div className="accomodation-text first">
                  <h3>Hotel Eco Luxury</h3>
                  <p>
                    Un lugar que supera la imaginación, diseñado con total
                    respeto hacia el medio ambiente, hacia el clima y hacia su
                    gente local. Estarás en plena selva balinesa aprendiendo de
                    su ritmo y de su respiración. En tu habitación, rodeada de
                    arrozales, sentirás la vitalidad y la serenidad que solo la
                    naturaleza sabe dar.
                  </p>
                </div>
                <div className="accomodation-text first">
                  <h3>Alimentación orgánica</h3>
                  <p>
                    El alimento como medicina y como placer. La cocina de
                    nuestro chef se basa en la dieta ayurvédica. Cada
                    ingrediente que disfrutarás es orgánico y fresco. La dieta
                    está diseñada, desde el desayuno hasta la cena, para que
                    notes el efecto de una alimentación consciente,
                    desinflamatoria y nutritiva: un estado de ánimo sin
                    alteraciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accomodation-scroller-img">
            <div className="img">
              <Image
                width={1280}
                height={1920}
                src={"/images/footer.png"}
                alt="luxury accomodation images"
              />
            </div>
          </div>
        </section>
        <Testimonials testimonials={testimonialsData} />
        <ListBenefits />
        <Value />
      </div>
    </>
  );
}
