import Image from "next/image";

export default function HorizontalScrollTextBlock({
    number,
    title,
    subtitle,
    text,
    className = "",
    source = "",
  }) {
    return (
      <div style={{position:'relative'}}>
      <div className={`steps steps-texto ${className}`}>
        <div className="steps-texto-content">
          <h4 className="center-type white-type">{number}</h4>
          <h3 className="center-type white-type">{title}</h3>
          <p className="center-type white-type">{subtitle}</p>
          <p className="center-type white-type">{text}</p>
        </div>
        <div
            className="img"
            style={{
              position:'absolute',
              background:'red',
              zIndex:'-1'
            }}
          >
            <Image
              width={1920}
              height={2560}
              alt="eight steps photos"
              src={source}
            />
          </div>
      </div>
      </div>
    );
  }
  