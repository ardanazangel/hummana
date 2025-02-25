"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./Header.css";
import { TransitionLink } from "./utils/TransitionLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          start: "top top",
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
    <nav className="navbar" ref={headerRef}>
      <ul>
        <li className="white-type nav-element darken">
          <TransitionLink className="darken" href="/" scroll={true}>
            Hummana
            <div className="underline"></div>
          </TransitionLink>
        </li>
        <li className="white-type nav-element center">
          <div className="inner-pages-wrapper">
            <TransitionLink className="darken" href="/retreat" scroll={true}>
              Retreat
            </TransitionLink>
            <TransitionLink className="darken" href="/mentorship" scroll={true}>
              Mentorship
            </TransitionLink>
          </div>
        </li>
        <li className="white-type nav-element darken">
          <TransitionLink className="darken" href="/about" scroll={true}>
            About
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
}
