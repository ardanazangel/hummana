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
      {/* <Loader /> */}

      <div id="total-wrapper">
        <Hero />
        <MentorshipsRetreats />
        <Values />
        <Footer />
      </div>
    </>
  );
}
