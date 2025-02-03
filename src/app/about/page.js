import MentorshipsRetreats from "../components/MentorshipsRetreats";
import "@/app/about/about.css";
import ReadMore from "../components/ReadMore";
import AboutImage from "../components/AboutImage";
import Image from "next/image";

export default function About() {
  const secondBlockExtra = `\n\n Ha trabajado con algunas de las empresas líderes del mundo, con directores ejecutivos, médicos, abogados, creativos, celebridades, atletas de alto rendimiento y emprendedores, a través de sus programas de fortalecimiento de mentalidad, meditación y atención plena. Es consultora y mentora de alto rendimiento, oradora motivacional y emprendedora social. Dirige retiros, talleres y cursos de formación en distintas partes del mundo. `;

  const thirdBlockExtra = ` 
Laura es, también, practicante de meditación (maestra certificada), profesora certificada de Vinyasa Yoga, profesora certificada de Breathwork and Nervous System Foundation, máster en Life Coach internacional calificada por Coaching Alliance, experta en atención plena y fundadora y directora del programa de meditación y mindfulness One World en Kenia, África.  `;
  return (
    <>
      <section className="about-principal about-principal-three-columns">
        <div className="page-title-wrapper">
          <h1 style={{ width: "100%" }}>
            <div className="line">
              <span className="hero-content white-type">Un</span>
              <span className="hero-content white-type">Viaje</span>
              <span className="hero-content white-type">De</span>
            </div>
            <div className="line">
              <span className="hero-content white-type">Fuera</span>
              <span className="hero-content white-type">Hacia</span>
              <span className="hero-content white-type">Dentro</span>
            </div>
          </h1>
          <p className="white-type">Laura Vela</p>
        </div>
      </section>
      <section className="about-content-wrapper light-section">
        <div className="about-two-columns about-first-block">
          <div className="about-inner-six-columns">
            <h2 className="black-type about-mini-title">(About)</h2>
          </div>
          <div className="about-inner-three-columns ">
            <div className="title-with-paragraph fill-two-columns">
              <h2 className="black-type">
                El punto más alto de una carrera a veces es tocar fondo
              </h2>
              <p className="black-type">
                Con 23 años, se convirtió en la diseñadora más joven en exhibir
                sus diseños en la Semana de la Moda de Nueva York. Trabajó para
                firmas de moda como Prada, Chanel y Vogue. A los 24, fundó su
                primera empresa, Laura Vela, una marca de bolsos por la que fue
                reconocida como «joven emprendedora destacada con impacto
                empresarial» por The New York Times, El País, Vogue, Elle,
                Vanity Fair, Marie Claire. En el punto más alto de su carrera,
                tocó fondo. Lo explica en sus palabras: «Mi vida parecía un
                sueño, pero a nivel personal no encontré la plenitud. Me
                arrodillé, me miré con honestidad y me di cuenta de que, a pesar
                de haber logrado lo que nuestra sociedad considera deseable, no
                estaba conectada con mi esencia. Había dejado de ser feliz». 
              </p>
            </div>
          </div>
        </div>

        <div className="about-two-columns about-second-block">
          <div className="about-inner-six-columns">
            <div className="title-with-paragraph fill-four-center-columns second-block-content">
              <h2 className="black-type">
                LA FELICIDAD ES EL DETONANTE PARA REINVENTARTE
              </h2>
              <div className="text-block-long">
                <p className="black-type">
                  Tras poner fin a la etapa de Nueva York, Laura viajó a África
                  con el deseo de contribuir con acciones sociales. En Kenia
                  implementó un plan de microcréditos para mejorar la economía
                  de las clases más desfavorecidas. 
                  <br />
                  <br />
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
                <ReadMore text={secondBlockExtra} maxLength={16} />
              </div>
            </div>
          </div>
          <div className="img">
            <Image 
            src="/images/surf.png" 
            width={1920}
            height={1080}
            style={{ background: "red" }} 
            alt="Laura Vela surfeando"
            />
          </div>
        </div>

        <div className="about-principal-three-columns about-third-block">
          <div className="fill-center-column">
            {/*          <div className="img about-mini-image">
            <img />
          </div>*/}
            <div
              className="title-with-paragraph third-block-content"
              style={{ textAlign: "center" }}
            >
              <AboutImage />
              <h2 className="black-type">
                crear para creer: el inicio de hummana
              </h2>
              <div className="text-block-long">
                <p className="black-type">
                  Su enfoque se resume en una frase: aquello que crees en tu
                  interior es lo que creas en tu vida. Creer para crear. Es
                  experta en potenciar capacidades humanas, especialmente en
                  momentos de desafío, incertidumbre y cambio. Sus mentorías
                  personalizadas, formaciones, programas y retiros se basan en
                  fortalecer la mente para pasar a la acción.
                  <br />
                  <br />
                  Ha creado HUMMANA, un proyecto para reconectar al ser humano
                  (Human) con su fuerza vital (Mana). Tiene la experiencia y el
                  don de guiar a personas para potenciar el rendimiento
                  profesional y el balance personal. Dirige y mentoriza procesos
                  para diseñar una vida afín a la verdadera naturaleza de cada
                  individuo.  
                </p>
                <ReadMore text={thirdBlockExtra} maxLength={16} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MentorshipsRetreats />
    </>
  );
}
