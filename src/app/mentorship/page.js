import HorizontalScroll from "../components/HorizontalScroll";
import "@/app/products.css";
import BannerProducts from "../components/BannerProducts";

export default function Page() {
  return (
    <>
      <BannerProducts
        bannerImage={"/images/mentorship/banner4.jpg"}
        bannerLink={"/bro"}
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
        secondTitle={'Desarrollate'}
        secondDescription={'Amplía tu visión, fortalece tus habilidades y desbloquea nuevas oportunidades con acompañamiento estratégico que impulsa tu crecimiento, incluso mucho después de cada sesión. Sesiones personalizadas “One on One” con Laura Vela.'}
      />
      <HorizontalScroll />
    </>
  );
}
