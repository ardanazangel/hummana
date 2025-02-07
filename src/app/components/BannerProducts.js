"use client";

import "@/app/products.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import PrimaryButton from "./buttons/SecondaryButton";

export default function BannerProducts({
  bannerImage,
  bannerLink,
  bannerLinkLabel,
  title,
  titleDescription,
  subtitleLine1,
  subtitleLine2,
  secondTitle,
  secondDescription,
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".banner-image",
      {
        y: "0%",
      },
      {
        y: "30%",
        scrollTrigger: {
          trigger: ".principal-banner-products",
          scrub: "true",
          start: "top top",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <section className="principal-banner-products">
      <div
        className="img"
        style={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Image
          width={1920}
          height={2560}
          alt="method banner imagen"
          src={bannerImage}
          style={{
            transform: "scale(1.)",
            filter: "brightness(.8)",
            zIndex: "-1",
            transformOrigen: "center",
          }}
          loading="eager"
          className="banner-image"
        />
      </div>
      <div className="first-content">
        <div className="first-content-container">
          <h1>
            <div className="line">
              <span>Hummana</span>
              <span>{title}</span>
            </div>
          </h1>
          <h3
            className="white-type"
            style={{
              display: "flex",
              flexDirection: "column",
              width:'100%'
            }}
          >
            <div className="line">{subtitleLine1}</div>
            <div className="line">{subtitleLine2}</div>
          </h3>
          <p className="white-type center-type">{titleDescription}</p>
          <PrimaryButton
            href={bannerLink}
            label={bannerLinkLabel}
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div className="first-content">
        <div className="first-content-container">
          <h2 className="white-type center-type">{secondTitle}</h2>
          <h4 className="white-type center-type">{secondDescription}</h4>
        </div>
      </div>
    </section>
  );
}
