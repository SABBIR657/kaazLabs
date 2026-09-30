import React, { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Projects from "../components/Projects.jsx";
import Process from "../components/Process.jsx";
import Mission from "../components/Mission.jsx";
import Team from "../components/Team.jsx";
import Reviews from "../components/Reviews.jsx";
import BeforeAfter from "../components/BeforeAfter.jsx";
import FAQ from "../components/FAQ.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "KaazLabs — Web, Android, UI/UX & Security";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <Mission />
      <Team />
      <Reviews />
      <BeforeAfter />
      <FAQ />
      <Contact />
    </>
  );
}
