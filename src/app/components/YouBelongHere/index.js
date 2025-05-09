import Image from "next/image";

export default function YouBelongHere({ frase, src }) {
  return (
    <section id="you-belong-here" className="light-section">
      <h2>
        <div className="word">You</div>
        <div className="word center">Belong</div>
        <div className="word">Here</div>
      </h2>
      <div className="you-belong-here-content">
        <p id="for-who">
          Emprendedores. Líderes. Fundadores. Creativos. Artistas.
        </p>

        <p>{frase}</p>
      </div>
      <Image
        src={{ src }}
        width={600}
        height={300}
        alt="You Belong Here background image"
      />
    </section>
  );
}
