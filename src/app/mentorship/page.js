import HorizontalScroll from "../components/HorizontalScroll";
import "../products.css";
import BannerProducts from "../components/BannerProducts";
import ModuloTexto from "../components/ModuloTexto";
import YouBelongHere from "../components/BelongHere";
import ListBenefits from "../components/ListBenefits";
export default function Page() {
  return (
    <>
      <BannerProducts
        bannerImage={"/images/mentorship/banner4.jpg"}
        bannerLink={"/hello"}
        bannerLinkLabel={"Come Create"}
        title={"Mentorship"}
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
          "Inmersión «one on one» para alcanzar la plenitud en los pilares esenciales de la vida."
        }
        secondTitle={"Desarrollate"}
        secondDescription={
          "Amplía tu visión, fortalece tus habilidades y desbloquea nuevas oportunidades con acompañamiento estratégico que impulsa tu crecimiento, incluso mucho después de cada sesión. Sesiones personalizadas “One on One” con Laura Vela."
        }
      />
      <ModuloTexto
        titulo1={"Being Reshaped"}
        subt1={"The past"}
        desc1={
          <>
            La adversidad es una oportunidad porque nos obliga a ir más
            profundo, nos empuja a despertar y a hacernos preguntas
            significativas.
            <br />
            <br />A través de HUMMANA mentorship vas a impulsar tu resiliencia y
            vas a desarrollar tu capacidad de respuesta ante el cambio
          </>
        }
        titulo2={"Being in full power"}
        subt2={"The present"}
        desc2={
          <>
            La mayoría de personas viven entre dos planos imaginarios: el
            pasado, que no pueden cambiar o el futuro, que no pueden predecir.
            <br />
            <br />A través de HUMMANA mentorship agudizarás la escucha y la
            reflexión sobre tu presente. Además, cultivarás la claridad y el
            discernimiento necesarios para tu crecimiento y evolución
            espiritual.
          </>
        }
        titulo3={"Being rewired"}
        subt3={"The future"}
        desc3={
          <>
            Para convertir una visión en una realidad es necesario desarrollar
            una mentalidad específica (growth mindset). Un visionario es aquel
            capaz de ver más allá del presente, de imaginar un futuro mejor y
            más brillante. 
            <br />
            <br />A través de HUMMANA mentorship aprenderás a implementar un
            mindset de crecimiento, a superar el burnout y a cultivar un
            lenguaje alineado con tus metas y con tus objetivos. 
          </>
        }
      />
      <HorizontalScroll />
      <YouBelongHere
        src={"/images/mentorship/youbelonghere.png"}
        description={
          <>
            Líderes, CEO’S, empresarios, creativos, ejecutivos, artistas,
            emprendedoresque están en la búsqueda de un significado mayor para
            su vida y para su carrera profesional.
            <br />
            <br />
            HUMMANA mentorship es un proceso de desarrollo personal
            revolucionario a nivel intelectual, emocional y espiritual.
          </>
        }
      />
      <ListBenefits />
    </>
  );
}
