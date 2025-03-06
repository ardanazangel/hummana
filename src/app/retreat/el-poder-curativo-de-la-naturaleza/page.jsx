import SecondaryButton from "../../components/buttons/SecondaryButton";
import Footer from "../../components/Footer";
import "../el-poder-curativo-de-la-naturaleza/articles.css";

export default function Page() {
  return (
    <>
      <section className="article__section light-section">
        <div className="video__wrapper"></div>

        <div className="article__content">
          <h2>Hummana y el poder curativo de la naturaleza</h2>
          <h5>
            <br />
            Nuestras vidas aceleradas y digitalizadas hacen que olvidemos el
            poder que la naturaleza tiene para estabilizarnos. El remedio para
            atenuar el estrés diario y para conectarte con tu pulso creativo es
            tan simple como adentrarte en la naturaleza. Los estudios más
            recientes demuestran que pasar tiempo de calidad en entornos
            naturales no solo es un paréntesis de descanso, sino que proporciona
            profundos beneficios mentales, físicos y emocionales. Pero, ¿cuánta
            naturaleza realmente necesitamos?
          </h5>
          <br />
          <br />

          <h3>La dosis ideal, según la ciencia, es 20 / 5 / 3</h3>
          <p>
            <br />
            El método 20-5-3 es un concepto desarrollado por la neurocientífica
            Rachel Hopman, Ph.D. Cada número corresponde al tiempo idóneo para
            estar al aire libre, que va aumentando hasta llegar a un crescendo:
            20 minutos, 5 horas y 3 días.
          </p>
          <span>
            <br />
            <h4>20</h4>
          </span>
          <p>
            minutos al aire libre, tres veces por semana. Basta con un breve
            paseo por el parque para mejorar nuestra cognición, nuestra memoria
            y nuestro bienestar general.
          </p>
          <span>
            <br />

            <h4>5</h4>
          </span>
          <p>
            minutos al aire libre, tres veces por semana. Basta con un breve
            paseo por el parque para mejorar nuestra cognición, nuestra memoria
            y nuestro bienestar general.
          </p>
          <span>
            <br />

            <h4>3</h4>
          </span>
          <p>
            minutos al aire libre, tres veces por semana. Basta con un breve
            paseo por el parque para mejorar nuestra cognición, nuestra memoria
            y nuestro bienestar general.
            <br />
            <br />
          </p>
          <SecondaryButton
            href={"hola"}
            label={"Más información"}
            isBlack={true}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
