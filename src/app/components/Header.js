"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";
import { TransitionLink } from "./utils/TransitionLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink2 from "./buttons/TransitionLink2";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);

  useEffect(() => {
    const lightSections = document.querySelectorAll(".light-section");
    const elements = document.querySelectorAll(".darken");
    const ctx = gsap.context(() => {
      lightSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 10%",
          end: "bottom top",
          onEnter: () => {
            gsap.to(elements, {
              color: "var(--dark-color)",
              duration: 0.3,
            });
          },
          onLeave: () => {
            gsap.to(elements, {
              color: "var(--light-color)",
              duration: 0.3,
            });
          },
          onEnterBack: () => {
            gsap.to(elements, {
              color: "var(--dark-color)",
              duration: 0.3,
            });
          },
          onLeaveBack: () => {
            gsap.to(elements, {
              color: "var(--light-color)",
              duration: 0.3,
            });
          },
        });
      });
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, [pathname]);

  return (
    <nav
      className="navbar "
      ref={headerRef}
      style={{ viewTransitionName: "navbar" }}
    >
      <ul>
        <li className="white-type nav-element darken">
          <TransitionLink2 href={"/"}>Hummana</TransitionLink2>
        </li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper darken">
            <TransitionLink2 href={"retreat"}>Retreat</TransitionLink2>
            <TransitionLink2 href={"mentorship"}>Mentorship</TransitionLink2>
          </div>
        </li>
        <li className="white-type nav-element darken">
          <TransitionLink2 href={"about"}>About</TransitionLink2>
        </li>
      </ul>
    </nav>
  );
}
