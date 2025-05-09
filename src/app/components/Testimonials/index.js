"use client";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Testimonials({ id, testimonialsJson }) {
  const videoSide = useRef(null);
  const isPlaying = useRef(false);
  const playerRef = useRef(null);
  const trigger = useRef();
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTestimonials(testimonialsJson);
  }, []);

  useEffect(() => {
    let player;

    if (videoSide.current) {
      player = new Player("video-side", {
        id: `${id}`,
        width: 640,
        controls: false,
        loop: false,
      });

      player.setVolume(0);
      playerRef.current = player;
      const playVideoContent = document.getElementById("play-button-content");
      const videoThumbnail = document.getElementById("overlay-play");

      const handleClick = async () => {
        await player.ready();
        if (isPlaying.current) {
          await player.pause();
          player.setVolume(0);
          playVideoContent.innerHTML = "Play";
          videoThumbnail.classList.remove("video-active");

          isPlaying.current = false;
        } else {
          await player.play();
          player.setVolume(1);
          playVideoContent.innerHTML = "Pause";
          isPlaying.current = true;
          videoThumbnail.classList.add("video-active");
        }
      };

      ScrollTrigger.create({
        trigger: trigger.current,
        start: "top bottom",
        end: "bottom top",
        onLeave: () => {
          player.pause();
        },
        onLeaveBack: () => {
          player.pause();
        },
      });

      videoSide.current.addEventListener("click", handleClick);

      return () => {
        videoSide.current?.removeEventListener("click", handleClick);
      };
    }
  }, [id]);

  useEffect(() => {
    let animationFrameId;
    const targetPosition = { x: 0, y: 0 };
    const currentPosition = { x: 0, y: 0 };
    const lerp = (start, end, t) => start * (1 - t) + end * t;
    const speed = 0.075;

    const handleMouseMove = (e) => {
      const rect = videoSide.current.getBoundingClientRect();
      targetPosition.x = e.clientX - rect.left - 25;
      targetPosition.y = e.clientY - rect.top - 25;
    };

    const animate = () => {
      currentPosition.x = lerp(currentPosition.x, targetPosition.x, speed);
      currentPosition.y = lerp(currentPosition.y, targetPosition.y, speed);

      const button = document.getElementById("play-button");
      if (button) {
        button.style.transform = `translate(${currentPosition.x}px, ${currentPosition.y}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if (videoSide.current) {
      videoSide.current.addEventListener("mousemove", handleMouseMove);
      animate();
    }

    return () => {
      videoSide.current?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Define the animation functions outside useEffect
  const animateTestimonialTransition = (callback) => {
    const textElements = document.querySelectorAll("#nombre, #pais, #mensaje");
    gsap.to(textElements, {
      opacity: 0,
      duration: 0.5,
      filter: "blur(10px)",
      onComplete: () => {
        callback();
        gsap.to(textElements, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
        });
      },
    });
  };

  const nextTestimonial = () => {
    animateTestimonialTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
      );
    });
  };

  const previousTestimonial = () => {
    animateTestimonialTransition(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
      );
    });
  };

  // Set up the auto-rotation interval with reset capability
  useEffect(() => {
    if (testimonials.length <= 1) return;

    // Store interval ID in a ref so we can access it from click handlers
    const intervalId = setInterval(nextTestimonial, 5000);

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => clearInterval(intervalId);
  }, [testimonials, currentIndex]); // Add currentIndex as dependency to reset timer on index change

  const currentTestimonial = testimonials[currentIndex] || {};

  return (
    <section id="testimonials" ref={trigger}>
      <div id="video-side" ref={videoSide}>
        <div id="controls">
          <div id="play-button">
            <h5 id="play-button-content">Play</h5>
          </div>
        </div>
        <div id="overlay-play">
          <h4 id="play-content">
            Listen the <br />
            testimonials
          </h4>
          <Image
            src={"/assets/testimonialsBali.webp"}
            width={300}
            height={600}
            alt="Testimonials thumbnail"
          />
        </div>
      </div>
      <div id="testimonials-text">
        <div id="testimonials-text-content">
          <h2>Testimonials</h2>
          <h3 id="nombre">{currentTestimonial.nombre || "Nombre Persona"}</h3>
          <h4 id="pais">{currentTestimonial.pais || "Pais"}</h4>
          <p id="mensaje">
            {currentTestimonial.mensaje || "Mensaje por defecto"}
          </p>
        </div>
        <div id="text-controlls">
          <h5 className="text-control" onClick={previousTestimonial}>
            Anterior
          </h5>
          <h5 className="text-control" onClick={nextTestimonial}>
            Siguiente
          </h5>
        </div>
      </div>
    </section>
  );
}
