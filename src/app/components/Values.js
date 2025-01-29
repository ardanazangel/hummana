"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/app/components/Values.css";

export default function Values() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".values-section",
        scrub: true,
        start: "top 0%",
        end: "bottom 100%",
      },
    });

    const titlesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".values-section",
        scrub: true,
        start: "-0% 0%",
        end: "bottom 100%",
      },
    });

    titlesTl.fromTo(
      ".central-titles-tracker",
      {
        y: "-0%",
      },
      {
        y: "-25%",
      }
    );

    titlesTl.to(".central-titles-tracker", {
      y: "-50%",
    });

    titlesTl.to(".central-titles-tracker", {
      y: "-75%",
    });

    imageTl.fromTo(
      ".central-image-tracker",
      {
        y: "-0%",
      },
      {
        y: "-25%",
      }
    );

    imageTl.to(".central-image-tracker", {
      y: "-50%",
    });

    imageTl.to(".central-image-tracker", {
      y: "-75%",
    });
  }, []);
  return (
    <section className="values-section">
      <div className="section-central-tracker">
        <div className="central-titles-wrapper">
          <div className="central-titles-tracker">
            <h2 className="white-type value-title">
              <span className="value-title-span">Practice</span>
              <span className="value-title-span">Purpose</span>
            </h2>
            <h2 className="white-type value-title">
              <span className="value-title-span">Be willing</span>
              <span className="value-title-span">To evolve</span>
            </h2>
            <h2 className="white-type value-title">
              <span className="value-title-span">Find</span>
              <span className="value-title-span">Your</span>

              <span className="value-title-span">Truth</span>
            </h2>
            <h2 className="white-type value-title">
              <span className="value-title-span">Be</span>
              <span className="value-title-span">Real</span>
            </h2>
          </div>
        </div>
        <div className="central-image-wrapper">
          <div className="central-image-tracker">
            <div className="img">
              <img src="/images/carousel/practice-purpose-1.png" />
            </div>
            <div className="img">
              <img src="/images/carousel/bewilling-toevolve-1.png" />
            </div>
            <div className="img">
              <img src="/images/carousel/practice-purpose-1.png" />
            </div>
            <div className="img">
              <img src="/images/carousel/practice-purpose-1.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="background-images">
        <div className="value-wrapper value-1">
          <div className="img">
            <img src="/images/carousel/practice-purpose-2.png" />
          </div>
        </div>
        <div className="value-wrapper value-2">
          <div className="img">
            <img src="/images/carousel/bewilling-toevolve-2.png" />
          </div>
        </div>
        <div className="value-wrapper value-3">
          <div className="img">
            <img src="/images/carousel/practice-purpose-2.png" />
          </div>
        </div>
        <div className="value-wrapper value-4">
          <div className="img">
            <img src="/images/carousel/practice-purpose-2.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
