import "../Benefits/benefits.css";

export default function Benefits() {
  return (
    <section className="benefits-mentorship__section">
      <h2>The Benefits</h2>
      <p className="uppercase">Spirit Body Mind </p>
      <div className="benefits-mentorship__content-wrapper">
        <div className="benefits-mentorship__module">
          <h3>
            <br />
            Spirit
          </h3>
          <p>
            Descubre una profunda conexión con la vida
            <br /> Aumenta el autoconocimiento
            <br /> Aviva la plenitud
            <br /> Cultiva el mindfulness
            <br /> Desarrolla una mayor consciencia
            <br /> Enriquece la relación contigo mismo
          </p>
          <h4>
            {" "}
            <br />
            Spirit - Body
          </h4>
          <p>
            Fortalece la confianza en ti mismo <br />
            Aumenta la vitalidad y la claridad
          </p>
        </div>
        <div className="benefits-mentorship__module">
          <h3>
            <br />
            Body
          </h3>
          <p>
            Crea equilibrio, fuerza y flexibilidad
            <br /> Impulsa elecciones conscientes de estilo de vida
            <br /> Reduce el burnout
            <br />
            Libera el estrés
            <br /> Regula el sistema nervioso
            <br /> Proporciona bienestar físico, mental y emocional
          </p>
          <h4>
            <br />
            Body - Mind
          </h4>
          <p>
            Reduce el estrés y la ansiedad <br />
            Mejora la calidad del sueño
          </p>
        </div>
        <div className="benefits-mentorship__module">
          <h3>
            <br />
            Mind
          </h3>
          <p>
            Aumenta la concentración y la productividad
            <br /> Cultiva una mentalidad de crecimiento growth mindset
            <br /> Aumenta la motivación
            <br /> Refuerza la claridad mental
            <br />
            Desarrolla una mayor consciencia
          </p>
          <h4>
            {" "}
            <br />
            Spirit - Mind
          </h4>
          <p>
            Fortalece la confianza en ti mismo <br />
            Aumenta la vitalidad y la claridad
          </p>
        </div>
      </div>
    </section>
  );
}
