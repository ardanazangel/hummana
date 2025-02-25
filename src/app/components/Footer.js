import "../components/Footer.css";
import LogoDark from "../components/LogoDark";
import "../components/Footer.css";
import Link from "next/link";
import { TransitionLink } from "./utils/TransitionLink";

export default function Footer({ fraseFooter }) {
  return (
    <section className="footer-section light-section">
      <div className="frase-diferente__footer uppercase">{fraseFooter}</div>
      <div className="footer-info-content">
        <div className="logo-wrapper-footer">
          <LogoDark />
          <ul className="footer-menu">
            <li>
              <TransitionLink href={"/hello"}>
                <h3>Retreat</h3>
              </TransitionLink>
            </li>
            <li className="middle-element">
              <TransitionLink href={"/hello"}>
                <h3>About</h3>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink href={"/hello"}>
                <h3>Mentorship</h3>
              </TransitionLink>
            </li>
          </ul>
        </div>
        <div className="footer-contacto">
          <ul className="footer-list">
            <li className="footer-contact-item u-text-style-">
              <Link href={"#"}>
                <p>Bali, Indonesia</p>
              </Link>
            </li>
            <li className="footer-contact-item u-text-style-">
              <Link href={"#"}>
                <p>+51 965 292 537</p>
              </Link>
            </li>
            <li className="footer-contact-item u-text-style-">
              <Link href={"emailto:hello@lauravelaflorensa.com"}>
                <p>hello@lauravelaflorensa.com</p>
              </Link>
            </li>
            <li className="footer-contact-item u-text-style-">
              <Link
                href={"https://www.instagram.com/lauravelaflorensa/"}
                target="_blank"
              >
                <p>@lauravelaflorensa</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
