'use client';

import "./globals.css";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const lenisRef = useRef(null); // Referencia de Lenis

  useEffect(() => {
    // Inicializa Lenis (scroll suave)
    const lenis = new Lenis({
      duration: 1.5,
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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

