import "@/app/products.css";
import BannerProducts from "../components/BannerProducts";

export default function Page() {
  return (
    <BannerProducts
      bannerImage={"/images/retreat/banner.png"}
      bannerLink={"/bro"}
      bannerLinkLabel={"Come Play"}
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
        "Aventura, conexión y desarrollo personal en el pulmón de Bali, Indonesia. Entrar abiertos a descubrir algo que estaba dentro de nosotros, y regresar con nuevas capacidades."
      }
      secondTitle={'Adéntrate'}
      secondDescription={'Desconecta de la rutina y sumérgete en la naturaleza. Un retiro espiritual que expande tu creatividad, fortalece tu mente y equilibra tu energía. Siete días de retiro en un entorno mágico en el corazón de Bali, Indonesia.'}
    />
  );
}
