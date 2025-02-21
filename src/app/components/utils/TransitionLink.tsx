"use client";

import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Si el enlace es el mismo que la ruta actual, no hacemos nada
    if (href === pathname) {
      return;
    }

    // Animación de salida
    gsap.to(".transition-wrapper", {
      opacity: 0,
      duration: 0.7,
      filter:'blur(10px)',
      ease:'power1.inOut'
    });

    await sleep(500);

    // Realizamos la navegación
    router.push(href);

    await sleep(700);

    // Animación de entrada
    gsap.to(".transition-wrapper", {
      opacity: 1,
      duration: 0.7,
      filter:'blur(0px)',
      ease:'power3.outOut'



    });
  };

  return (
    <Link href={href} {...props} onClick={handleTransition} scroll={true}>
      {children}
    </Link>
  );
};
