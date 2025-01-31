"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Detecta cambios de página
import "./Header.css";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Obtiene la URL actual

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lightSection = document.querySelector(".light-section");
    const elements = document.querySelectorAll(".darken");

    if (!lightSection) return;

    const handleScroll = () => {
      const rect = lightSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.04 && rect.bottom > 0.03;

      elements.forEach((element) => {
        element.style.transition = "color 0.5s ease-in-out";
        element.style.color = isVisible ? "var(--dark-color)" : "";
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav className="navbar">
      <ul>
        <li className="white-type nav-element darken">
          <Link className="darken" href="/" scroll={true}>
            Hummana
          </Link>
        </li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <Link className="darken" href="/retreats" scroll={true}>
              Retreats
            </Link>
            <Link className="darken" href="/mentorships" scroll={true}>
              Mentorships
            </Link>
          </div>
        </li>
        <li className="white-type nav-element darken">
          <Link className="darken" href="/about" scroll={true}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
