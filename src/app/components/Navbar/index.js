"use client";

import TransitionLink from "../TransitionLink";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const retreatLink = useRef();
  const retreatLinksContainer = useRef();

  gsap.registerPlugin(ScrollTrigger);
  const pathname = usePathname();

  const initScrollTriggers = () => {
    const navbar = document.getElementById("navbar");
    const lightSections = document.querySelectorAll(".light-section");

    // lightSections.forEach((lightSection) => {
    //   ScrollTrigger.create({
    //     trigger: lightSection,
    //     start: `top top`,
    //     id: "light-section",
    //     onEnter: () => {
    //       navbar.classList.remove("dark-nav");
    //     },
    //     onEnterBack: () => {
    //       navbar.classList.remove("dark-nav");
    //     },
    //     onLeave: () => {
    //       navbar.classList.add("dark-nav");
    //     },
    //     onLeaveBack: () => {
    //       navbar.classList.add("dark-nav");
    //     },
    //   });
    // });
  };

  const clearScrollTriggers = () => {
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill();
    });
    ScrollTrigger.refresh();
  };

  useEffect(() => {
    initScrollTriggers();

    gsap.set(retreatLinksContainer.current, {
      display: "none",
    });

    setTimeout(() => {
      retreatLink.current.addEventListener("mouseover", () => {
        gsap.set(retreatLinksContainer.current, {
          display: "",
        });
        gsap.to(retreatLinksContainer.current, {
          duration: 0.4,
          opacity: 1,
        });
      });
    }, 100);

    retreatLinksContainer.current.addEventListener("mouseleave", () => {
      gsap.to(retreatLinksContainer.current, {
        duration: 0.4,
        opacity: 0,
        onComplete: () => {
          gsap.set(retreatLinksContainer.current, {
            display: "none",
          });
        },
      });
    });

    return () => {
      clearScrollTriggers();
    };
  }, []);

  // Detectar cambios de ruta
  useEffect(() => {
    clearScrollTriggers();
    initScrollTriggers();
  }, [pathname]);

  return (
    <nav id="navbar">
      <ul>
        <li>
          <TransitionLink href={"/"} className="nav-item">
            Hummana
          </TransitionLink>
        </li>
        <li id="nav-centro">
          <div className="nav-item centro izquierda">
            <div ref={retreatLink}>Retreats</div>
            <div id="retreats-links-container" ref={retreatLinksContainer}>
              <TransitionLink href={"/bali-escape"} className="inner-retreat">
                The bali escape
              </TransitionLink>
              <TransitionLink
                href={"/creative-escape"}
                className="inner-retreat"
              >
                The creative escape
              </TransitionLink>
            </div>
          </div>
          <TransitionLink
            href={"/mentorship"}
            className="nav-item centro derecha"
          >
            Mentorship
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href={"/about"} className="nav-item">
            About
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
}
