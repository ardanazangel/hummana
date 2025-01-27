import styles from "./page.module.css";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MentorshipsRetreats from "./components/MentorshipsRetreats";

export default function Home() {
  return (
    <div id="total-wrapper">
      <section id="hero-section">
        <div className="video-wrapper">
          <video autoPlay loop muted playsInline>
            <source src="/videos/videomar.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
          <Hero />
          <AboutSection />
      </section>
      <MentorshipsRetreats />

    </div>
  );
}
