import "../about/about.css";
import Image from "next/image";
import AboutImage from "../components/AboutImage";
import Footer from "../components/Footer";
import LeerMas from "../components/LeerMas";
import TransitionLink from "../components/TransitionLink";

export default function About() {
  const textoLauraVela = `Ha trabajado con algunas de las empresas líderes del mundo, celebridades, creativos, CEO´s, atletas de alto rendimiento y emprendedores, a través de sus programas de fortalecimiento de mentalidad, meditación y atención plena. 
  Actualmente es la fundadora de un programa de meditación y mindfulness, en el que trabaja con técnicas para reducir el estrés y aumentar la autoestima en más de 400 mujeres y 600 niños. Es consultora y mentora de alto rendimiento, oradora motivacional y emprendedora social. Dirige retiros, procesos de desarrollo personal y cursos de formación en distintas partes del mundo. 
  Durante los últimos diez años, Laura se ha formado en Nueva York y California con Dr. Joe Dispenza, Marianne Williamson, Deepak Chopra, Caroline Myss y Jon Kabatt-Zinn. Es experta en potenciar capacidades humanas, especialmente en momentos de desafío, incertidumbre y cambio. 
  Laura es, practicante de meditación (maestra certificada), profesora certificada de Vinyasa Yoga, profesora certificada de Breathwork and Nervous System Foundation, máster en Life Coach internacional calificada por Coaching Alliance, experta en atención plena y fundadora y directora del programa de meditación y mindfulness One World en Kenia, África.`;

  return (
    <main id="about-main">
      <section id="about-hero">
        <div className="page-title-wrapper">
          <Image
            src={"/assets/laura-vela-rocas.webp"}
            width={600}
            height={300}
            alt="imagen laura vela about"
          />
          <h1>
            UN VIAJE DE AFUERA <br />
            HACIA DENTRO
          </h1>
          <h2>Laura Vela</h2>
        </div>
      </section>
      <div className="light-section">
        <section className="about-content-wrapper ">
          <div className="about-two-columns about-first-block">
            <div className="about-mini-title__wrapper">
              <h3 className="black-type about-mini-title">(About)</h3>
            </div>
            <div className="first-info">
              <article>
                <h2>El punto más alto de una carrera a veces es tocar fondo</h2>
                <h5>
                  Trabajó para firmas de moda como Prada, Chanel y Vogue. Con 23
                  años, se convirtió en la diseñadora más joven en exhibir sus
                  diseños en la Semana de la Moda de Nueva York.
                </h5>
                <p>
                  A los 24, fundó su primera empresa, Laura Vela, una marca de
                  bolsos por la que fue reconocida como «joven emprendedora
                  destacada con impacto empresarial» por The New York Times, El
                  País, Vogue, Elle, Vanity Fair, Marie Claire.
                </p>
              </article>
            </div>
          </div>

          <div id="second-info-container">
            <div
              className="second-info"
              style={{ background: "rgb(208 215 226)" }}
            >
              <article>
                <h2>LA FELICIDAD ES EL DETONANTE PARA REINVENTARTE</h2>
                <h5>
                  Tras poner fin a la etapa de Nueva York, Laura viajó a África.
                  En Kenia implementó un plan de microcréditos para mejorar la
                  economía de las clases más desfavorecidas.
                </h5>
                <p>
                  En 2019, recibió el reconocimiento de la organización One
                  Young World para representar a España en la cumbre mundial de
                  jóvenes líderes con impacto social.  
                  <br />
                  <br />
                  Actualmente es la fundadora de un programa de meditación y
                  mindfulness, en el que trabaja con técnicas para reducir el
                  estrés y aumentar la autoestima en más de 400 mujeres y 600
                  niños.  
                  <br />
                  <br />
                  Durante los últimos diez años, Laura se ha formado en Nueva
                  York y California con mentores y maestros espirituales como
                  Dr. Joe Dispenza, Marianne Williamson, Deepak Chopra, Wayne
                  Dyer, Caroline Myss y Jon Kabatt-Zinn.  
                </p>
              </article>
            </div>
            <div className="second-info-img">
              <Image
                src="/assets/images/surf.webp"
                width={1920}
                height={1080}
                alt="Laura Vela surfing"
              />
            </div>
          </div>

          <div id="third-info">
            <article>
              <AboutImage />
              <h2>Laura vela</h2>
              <LeerMas text={textoLauraVela} maxLength={225} />
            </article>
          </div>
        </section>
      </div>
      <section id="retreats">
        <TransitionLink href={"/"}>
          <div id="earth" className="retreat-side">
            <div id="earth-content">
              <h2>Earth</h2>
              <h3>Root</h3>
              <p>Balance Interior</p>
            </div>
          </div>
          <div id="earth-secondary" className="secondary-container">
            <div id="earth-secondary-content">
              <h4>Hummana Bali</h4>
              <h3>The bali escape</h3>
              <p>The power of the mind</p>
            </div>
          </div>
          <Image
            src={"/assets/atardecer.webp"}
            width={1080}
            height={1920}
            alt="Imagen Laura Vela Banner"
          />
        </TransitionLink>
        <TransitionLink id="ocean" className="retreat-side" href={"/"}>
          <div id="ocean" className="retreat-side">
            <div id="ocean-content">
              <h2>Ocean</h2>
              <h3>Flow</h3>
              <p>Creatividad</p>
            </div>
          </div>
          <div id="ocean-secondary" className="secondary-container">
            <div id="ocean-secondary-content">
              <h4>Hummana Sumba</h4>

              <h3>The creative escape</h3>
              <p>The power of the mind</p>
            </div>
          </div>
          <Image
            src={"/assets/atardecer.webp"}
            width={1080}
            height={1920}
            alt="Imagen Laura Vela Banner"
          />
        </TransitionLink>
      </section>
      <Footer
        fraseFooter={"Sometimes disenganging, is the best way to engage."}
      />
    </main>
  );
}
