import styles from "./page.module.css";
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
      </div>
    </>
  );
}
