import Hero from "./components/Hero";
import Button from "./components/Button";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="mentorship" className="light-section">
        <div id="mentorship-content">
          <article>
            <p>FORTALECE TU MENTE CON LAURA VELA</p>
            <h2>HUMMANA MENTORSHIP</h2>
            <p>
              Trabajo interior «uno a uno» para despertar tu potencial natural
              <br />
              Diseña una vida afín a tu verdadera naturaleza
            </p>
            <Button
              label={"Come Create"}
              href={"mentorship"}
              colorMode={"light"}
            ></Button>
            <Image
              src={"/assets/atardecer.webp"}
              width={600}
              height={300}
              alt="Imagen fondo mentorías"
            />
          </article>
        </div>
      </section>
      <Footer
        fraseFooter={
          "The quality of your mind determines the quality of your life."
        }
      />
    </main>
  );
}
