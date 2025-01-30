"use client";

import { useEffect } from "react";
import "./Header.css";

export default function Header() {
  useEffect(() => {
    // Asegúrate de que estamos en el cliente
    if (typeof window === "undefined") return;

    const lightSection = document.querySelector(".light-section");
    const elements = document.querySelectorAll(".darken");

    if (!lightSection) return;

    const handleScroll = () => {
      const rect = lightSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.1 && rect.bottom > 0;

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
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className="white-type nav-element darken">
          <a className="darken" href="/">
            Hummana
          </a>
        </li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <a className="darken" href="/retreats">
              Retreats
            </a>
            <a className="darken" href="/mentorships">
              Mentorships
            </a>
          </div>
        </li>
        <li className="white-type nav-element darken">
          <a className="darken" href="/about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}