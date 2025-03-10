"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import LogoDark from "../LogoDark";
import "./loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/" && !sessionStorage.getItem("visited")) {
      setLoading(true);

      gsap.fromTo(
        ".loader__logo-wrapper",
        { opacity: 0, filter: "blur(5px)" }, // Starting state
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        } // Ending state with yoyo effect
      );

      gsap.to(".loader", {
        opacity: 0,
        filter: "blur(5px)",
        duration: 1,
        delay: 2, // Tiempo total del loader antes de desaparecer
        ease: "cubic-bezier(0.77, 0, 0.175, 1)",
        onComplete: () => setLoading(false),
      });

      sessionStorage.setItem("visited", "true");
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <div className="loader" style={{ background: "var(--light-color)" }}>
      <div className="loader__logo-wrapper" style={{ opacity: "0" }}>
        <LogoDark />
      </div>
    </div>
  ) : null;
}
