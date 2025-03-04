import Image from "next/image";

export default function FourPillarsModule({
  title,
  subtitle,
  content,
  skill,
  source,
}) {
  return (
    <div className="four-pillars__module">
      <div className="img">
        <Image
          width={1280}
          height={1920}
          src={`/images/mentorship/four-pillars/${source}.png`}
          alt="health pillar background"
          style={{ filter: "brightness(.8)" }}
        />
      </div>
      <div className="four-pillars__title">
        <h3>{title}</h3>
      </div>
      <div className="four-pillars__content">
        <p>{subtitle}</p>
        <p>
          <br />
          {content}
        </p>
        <h4 className="uppercase">
          <br />
          Skill Unlocked
        </h4>

        <p className="uppercase">{skill}</p>
      </div>
    </div>
  );
}
