"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TransitionLink({ children, href, className }) {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Link
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();

          gsap.to("#total-wrapper", {
            opacity: 0,
            duration: 1,
            filter: "blur(10px)",
            ease: "power2.inOut",
          });

          setTimeout(() => {
            router.push(href);
            gsap.to("#total-wrapper", {
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power2.inOut",
              delay: 0.4,
            });
          }, 1000);
        }}
      >
        {children}
      </Link>
    </>
  );
}
