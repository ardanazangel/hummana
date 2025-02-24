import "../BelongHere/belonghere.css";

export default function YouBelongHere({ src, description }) {
  return (
    <section
      className="youbelonghere-section"
      style={{ backgroundImage: `url(${src})` }}
    >
      <h2 className="white-type">Community</h2>

      <div className="youbelonghere-title">
        <h3>
          <div className="line white-type">
            <span>You</span>
            <span className="center-align">Belong</span>
            <span>Here</span>
          </div>
        </h3>
      </div>
      <div className="youbelonghere-description">
        <p className="white-type center-type">{description}</p>
      </div>
    </section>
  );
}
