import Image from "next/image";


export default function MentorshipsRetreats() {
  return (
    <section className="mentorships-retreats-section">
      <div className="mentorships-retreats-wrapper">
        <div className="part-wrapper mentorships-wrapper">
          <div className="title-sections-wrapper">
            <h2 className="white-type">Mentorships</h2>
          </div>
          <div className="img">
            <Image 
            src="/images/mentorships.png" 
            width={1920}
            height={2560}
            alt="mentorships cover selector"
            />
            <div className="card">
              <p className="">MENTORSHIPS</p>

              <p className="low-opacity">
                Una mentoría revolucionaria «one on one» para alcanzar la
                plenitud en los pilares esenciales de la vida.
              </p>
              <button className="primary-button">COME CREATE</button>
            </div>
          </div>
        </div>
        <div className="part-wrapper retreats-wrapper">
        <div className="title-sections-wrapper">
            <h2 className="white-type">Retreats</h2>
          </div>
          <div className="img">
            <Image
            src="/images/retreats.png" 
            width={1920}
            height={2560}
            alt="retreats cover selector"
            />
            <div className="card">
              <p className="">RETREATS</p>

              <p className="low-opacity">
                Una mentoría revolucionaria «one on one» para alcanzar la
                plenitud en los pilares esenciales de la vida.
              </p>
              <button className="primary-button">COME PLAY</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
