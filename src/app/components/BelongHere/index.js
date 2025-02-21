import "../BelongHere/belonghere.css";
import Image from "next/image";

export default function YouBelongHere({ src, description }) {
  return (
    <section
      className="youbelonghere-section"
      style={{ backgroundImage: `url(${src})` }}
    >
      <h3 className="white-type tag">Community</h3>

      <div className="youbelonghere-title">
        <h2>
          <div className="line white-type">
            <span>You</span>
            <span className="center-align">Belong</span>
            <span>Here</span>
          </div>
        </h2>
      </div>
      <div className="youbelonghere-description">
        <p className="white-type center-type">{description}</p>
      </div>
    </section>
  );
}
