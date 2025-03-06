import Image from "next/image";
import TransitionLink2 from "./buttons/TransitionLink2";

export default function MentorshipsRetreats() {
  return (
    <section className="mentorships-retreats-section">
      <div className="mentorships-retreats-wrapper">
        <TransitionLink2 href={"mentorship"}>
          <div className="part-wrapper mentorships-wrapper">
            <div className="title-sections-wrapper">
              <h2 className="white-type">Mentorships</h2>
            </div>
            <div className="img">
              <Image
                src="/images/mentorships.webp"
                width={1280}
                height={1920}
                alt="One-on-one mentorship program background image"
                style={{
                  filter: "brightness(.75)",
                }}
              />
              <div className="card">
                <p className="small-title">MENTORSHIPS</p>

                <p className="low-opacity">
                  Una mentoría revolucionaria «one on one» para alcanzar la
                  plenitud en los pilares esenciales de la vida.
                </p>
                <button className="primary-button">COME CREATE</button>
              </div>
            </div>
          </div>
        </TransitionLink2>
        <TransitionLink2 href={"retreat"}>
          <div className="part-wrapper retreats-wrapper">
            <div className="title-sections-wrapper">
              <h2 className="white-type">Retreats</h2>
            </div>
            <div className="img">
              <Image
                src="/images/retreats.jpg"
                width={1280}
                height={1920}
                alt="Group retreats program background image"
                style={{
                  filter: "brightness(.75)",
                }}
              />
              <div className="card">
                <p className="small-title">RETREATS</p>

                <p className="low-opacity">
                  Una mentoría revolucionaria «one on one» para alcanzar la
                  plenitud en los pilares esenciales de la vida.
                </p>
                <button className="primary-button">COME PLAY</button>
              </div>
            </div>
          </div>
        </TransitionLink2>
      </div>
    </section>
  );
}
