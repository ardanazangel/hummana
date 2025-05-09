import Link from "next/link";
import TransitionLink from "../TransitionLink";

export default function Footer({ fraseFooter }) {
  return (
    <section className="footer-section light-section">
      <div className="footer-info-content">
        <div className="logo-wrapper-footer">
          <img src="/assets/logo-dark.svg" />
          <h3>{fraseFooter || "Frase de ejemplo"}</h3>
        </div>
        <div id="footer-links">
          <a className="nav-item">Instagram</a>
          <a className="nav-item">Telefono</a>
          <a className="nav-item">Correo</a>
          <a className="nav-item">Bali, Indonesia</a>
        </div>
      </div>
    </section>
  );
}
