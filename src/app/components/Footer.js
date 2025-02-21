"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
{/*import "@/src/app/components/Footer.css";*/}
import LogoDark from "../components/LogoDark";
import Image from "next/image";
import '../components/Footer.css'
import Link from "next/link";

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
              <ul className="footer-list">
                <li className="footer-contact-item u-text-style-">
                <Link href={'#'}><p>Bali, Indonesia</p></Link>

                </li>
                <li className="footer-contact-item u-text-style-">
                  <Link href={'#'}><p>+51 965 292 537</p></Link>

                </li>
                <li className="footer-contact-item u-text-style-">
                  <Link href={'#'}><p>hello@lauravelaflorensa.com</p></Link>
                </li>
                <li className="footer-contact-item u-text-style-">
                  <Link href={'#'}><p>@lauravelaflorensa</p></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
