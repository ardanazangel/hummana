"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MentorshipsRetreats from "./components/MentorshipsRetreats";
import Values from "./components/Values";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <>
      <div id="total-wrapper">
        <Hero />
        <MentorshipsRetreats />
        <Values />
        <Footer
          fraseFooter={
            <h4 className="center-type">
              The quality of your mind <br />
              determines the quality of your life.
            </h4>
          }
        />
      </div>
    </>
  );
}
