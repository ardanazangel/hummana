"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import activityDescriptions from "./activityDescriptions.json"; // Importa el archivo JSON

export default function Actividades() {
  const experiences = {
    MIND: [
      "Yoga",
      "Sesiones de Coaching",
      "Breathwork y Meditación",
      "Liderazgo consciente",
      "Baño de hielo",
    ],
    BODY: [
      "Ascensión al volcán",
      "Surf survival y aventura",
      "Workout & Mindfulness",
      "Inmersión de surf",
    ],
    SOUL: [
      "Ritual de los cuatro elementos",
      "Soundhealing",
      "Soulful surf coaching",
      "Kirtan & Cacao Ceremony",
      "Body art & Sound Journey",
      "Ritual de purificación",
    ],
  };

  const imageRefs = useRef({});
  const textRef = useRef(null);
  // Determine initial state based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;
  const [activeActivity, setActiveActivity] = useState(
    isMobile ? false : experiences.MIND[0]
  );
  const [activityText, setActivityText] = useState(
    isMobile ? null : activityDescriptions[experiences.MIND[0]]
  );

  const handleImageChange = (activity) => {
    const images = document.querySelectorAll(".activity-image");

    images.forEach((img) => {
      img.classList.remove("active");
    });

    const target = imageRefs.current[activity];
    if (target) {
      target.classList.add("active");
    }

    setActiveActivity(activity);
    setActivityText(activityDescriptions[activity]);
  };

  return (
    <section id="actividades">
      <div id="actividades-imgs">
        {Object.values(experiences).map((activities) =>
          activities.map((activity) => (
            <div
              key={activity}
              ref={(el) => (imageRefs.current[activity] = el)}
              className={`activity-image ${
                activity === activeActivity ? "active" : ""
              }`}
            >
              <Image
                src={`/assets/activities/${activity
                  .toLowerCase()
                  .replace(/ /g, "-")}.webp`}
                width={600}
                height={600}
                alt={activity}
                style={{ filter: "brightness(.80)" }}
                priority
              />
            </div>
          ))
        )}

        {activityText && (
          <div className="activity-overlay" ref={textRef}>
            {Object.entries(experiences).map(
              ([category, activities]) =>
                activities.includes(activeActivity) && (
                  <div key={category}>
                    <h3 className="white-type uppercase">
                      {category} Experience
                    </h3>
                  </div>
                )
            )}
            <p className="white-type">{activityText[0]}</p>
            <p className="white-type">{activityText[2]}</p>

            <div className="skills-unlocked">
              <h4 className="white-type uppercase">Skill unlocked:</h4>
              <h5>{activityText[1]}</h5>
            </div>
          </div>
        )}
      </div>

      <div id="lista-actividades">
        <div id="lista-actividades-content">
          <h2 className="white-type">Experiences</h2>
          <p>
            HUMMANA es un viaje de desarrollo personal que te impulsará para
            llevar a cabo tu visión personal a través de la conexión MENTE-
            CUERPO- ESPÍRITU.
          </p>
          {Object.entries(experiences).map(([category, activities]) => (
            <div key={category}>
              <h5>{category} EXPERIENCE</h5>
              <ul className="activities-list">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    className={`activities-item ${
                      activeActivity === activity ? "active" : ""
                    }`}
                    onMouseEnter={() => handleImageChange(activity)}
                  >
                    <h3 className="activitie">{activity}</h3>
                    <div className="actividades-mobile">
                      <p className="white-type center-type">
                        {activityDescriptions[activity][0]}
                      </p>
                      <h4 className="white-type uppercase">Skill unlocked</h4>
                      <p className="white-type center-type">
                        {activityDescriptions[activity][1]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
