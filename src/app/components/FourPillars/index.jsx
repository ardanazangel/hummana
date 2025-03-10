import "../FourPillars/four-pillars.css";
import FourPillarsModule from "./FourPillarsModule";

export default function FourPillars() {
  return (
    <section id="four-pillars__section">
      <div className="four-pillars__title-content">
        <div>
          <h2>THE 4 PILLARS OF EMPOWERMENT </h2>
          <p>
            La felicidad humana depende de cuatro pilares: las relaciones, el
            trabajo, la salud y la riqueza. HUMMANA mentorship es una mentoría
            de autoconocimiento y crecimiento personal para sincronizar y elevar
            estos cuatro ámbitos.
          </p>
        </div>
      </div>
      <div className="four-pillars__wrapper">
        <div className="four-pillars__module module-1">
          <div>
            <h3>Relationships</h3>
            <p>
              Crear espacios de intimidad requiere escucha y re-aprendizaje, ya
              que las relaciones reflejan a menudo conflictos internos propios.
              Afrontarlos de manera no reactiva le da paso a nuestro crecimiento
              personal.
            </p>
          </div>
        </div>
        <div className="four-pillars__module module-2">
          <div>
            <h3>Career</h3>
            <p>
              Tu carrera solo puede ser exitosa si es afín a tu verdadera
              naturaleza.
            </p>
          </div>
        </div>
        <div className="four-pillars__module module-3">
          <div>
            <h3>Wealth</h3>
            <p>
              El dinero es una herramienta de la consciencia. La manera en que
              te relacionas con él, refleja tus creencias, valores y
              experiencias.
            </p>
          </div>
        </div>
        <div className="four-pillars__module module-4">
          <div>
            <h3>Health</h3>
            <p>
              «Practice foundation» es un concepto que se refiere a una serie de
              hábitos, rutinas y enfoques que fomentan la salud física, mental y
              emocional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
