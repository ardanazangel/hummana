import styles from "./page.module.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MentorshipsRetreats from "./components/MentorshipsRetreats";
import Values from "./components/Values";

export default function Home() {
  return (
    <>
      <div id="total-wrapper">
        <Hero />
        <MentorshipsRetreats />
        <Values />
        <Footer />
      </div>
    </>
  );
}
