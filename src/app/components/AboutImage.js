"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/about-principal.webp",
  "/images/footer.webp",
  "/images/mentorships.webp",
  "/images/retreats.webp",
  "/images/surf.webp",
  "/images/about-principal.webp",
  "/images/footer.webp",
  "/images/mentorships.webp",
  "/images/retreats.webp",
  "/images/surf.webp",
  "/images/about-principal.webp",
  "/images/footer.webp",
  "/images/mentorships.webp",
  "/images/retreats.webp",
  "/images/surf.webp",
];

export default function AboutImage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const imageElements = containerRef.current.children;

    // Asegurar que la primera imagen siempre sea visible
    for (let i = 0; i < imageElements.length; i++) {
      imageElements[i].style.opacity = i === 0 ? "1" : "0";
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.clientHeight;

      // Calcular el inicio y final del efecto
      const start = containerTop - windowHeight;
      const end = containerTop + containerHeight;

      if (scrollPosition < start || scrollPosition > end) return;

      const relativeScroll = scrollPosition - start;
      const progress = relativeScroll / (end - start);
      const index = Math.min(
        Math.max(0, Math.floor(progress * images.length)),
        images.length - 1
      );

      for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].style.opacity = i === index ? "1" : "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="changing-img"
      style={{
        aspectRatio: "3/4",
        position: "relative",
        marginBottom: "clamp(3rem, 2.286rem + 1.905vw, 4rem)",
      }}
    >
      {images.map((src, index) => (
        <Image
          width={300}
          height={600}
          key={index}
          src={src}
          alt="Overlay Image"
          style={{
            position: "absolute",
            width: "100%",
            background: "red",
            transform: "translateX(-50%)",
          }}
        />
      ))}
    </div>
  );
}
