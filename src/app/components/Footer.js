"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "@/app/components/Footer.css";
import LogoDark from "@/app/components/LogoDark";

export default function Footer() {
  const lenisRef = useRef(null); // Referencia de Lenis

  useEffect(() => {
    // Inicializa Lenis (scroll suave)
    const lenis = new Lenis({
      duration: 2.5,
      smooth: true,
      direction: "vertical",
      smoothTouch: true,
      touchMultiplier: 0.5,
    });

    lenisRef.current = lenis;

    // Función de actualización de Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpia Lenis al desmontar el componente
    };
  }, []);

  return (
    <section className="footer-section light-section">
      <div className="footer-grid">
        <div className="footer-info">
          <div className="footer-info-content">
            <div className="logo-wrapper-footer">
              <LogoDark />
            </div>
            <div className="footer-contacto">
              <div className="footer-tag">Contacto</div>
              <ul className="footer-list">
                <li className="footer-contact-item u-text-style-">
                  Bali, Indonesia
                </li>
                <li className="footer-contact-item u-text-style-">
                  +51 965 292 537
                </li>
                <li className="footer-contact-item u-text-style-">
                  hello@lauravelaflorensa.com
                </li>
                <li className="footer-contact-item u-text-style-">
                  @lauravelaflorensa
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img">
          <img src="/images/footer.png" />
        </div>
      </div>
    </section>
  );
}
