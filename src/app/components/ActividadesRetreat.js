"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import activityDescriptions from "./activityDescriptions.json"; // Importa el archivo JSON

export default function ActividadesRetreat() {
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
    if (!imageRefs.current[activity]) return;

    gsap.to(".activity-image", {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(imageRefs.current[activity], {
      opacity: 1,
      duration: 0.5,
    });

    setActiveActivity(activity);
    setActivityText(activityDescriptions[activity]);
  };

  return (
    <section className="retreat-activities-wrapper">
      <div className="img-activity-wrapper">
        {Object.values(experiences).map((activities) =>
          activities.map((activity) => (
            <div
              key={activity}
              ref={(el) => (imageRefs.current[activity] = el)}
              className={`activity-image ${
                activity === activeActivity ? "active" : ""
              }`}
              style={{
                background: "#333",
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: activity === activeActivity ? 1 : 0,
                willChange: "opacity",
              }}
            >
              <Image
                src={`/images/retreat/activities/${activity
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

            <div className="skills-unlocked__wrapper">
              <h4 className="white-type uppercase">Skill unlocked:</h4>
              <h5
                className="white-type uppercase"
                style={{ paddingTop: ".5vw" }}
              >
                {activityText[1]}
              </h5>
            </div>
          </div>
        )}
      </div>

      <div className="activities-list-wrapper">
        <h2 className="white-type">Experiences</h2>
        <h5
          className="center-type white-type"
          style={{ marginBottom: "2vw", width: "75%" }}
        >
          HUMMANA es un viaje de desarrollo personal que te impulsará para
          llevar a cabo tu visión personal a través de la conexión MENTE-
          CUERPO- ESPÍRITU.
        </h5>
        {Object.entries(experiences).map(([category, activities]) => (
          <div key={category}>
            <p
              className="activitie center-type white-type"
              style={{ paddingBottom: "1rem" }}
            >
              {category} EXPERIENCE
            </p>
            <ul className="activities-list">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className={`activities-item ${
                    activeActivity === activity ? "active" : ""
                  }`}
                  onMouseEnter={() => handleImageChange(activity)}
                >
                  <h3 className="activitie white-type center-type">
                    {activity}
                  </h3>
                  <div className="activities__mobile-descriptions">
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
    </section>
  );
}
