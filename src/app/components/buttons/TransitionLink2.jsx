"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

export default function TransitionLink2({ href, children }) {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const pageAnimation = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          opacity: 0,
          filter: "blur(10px)",
        },
      ],
      {
        duration: 600,
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
        easing: "cubic-bezier(0.79, 0.14, 0.15, 0.86)",
      }
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
        },
      ],
      {
        duration: 600,
        delay: 600,
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
        easing: "cubic-bezier(0.79, 0.14, 0.15, 0.86)",
      }
    );
    lenis.scrollTo(0, { inmediate: true, duration: 0 });
  };
  return (
    <a
      className="darken"
      href={href}
      scroll={"0"}
      onClick={(e) => {
        e.preventDefault();
        // Ensure the href is treated as an absolute path
        const absoluteHref = new URL(href, window.location.origin).pathname;
        router.push(absoluteHref, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      {children}
    </a>
  );
}
