import React, { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";
import Mission from "../components/Mission.jsx";
import Team from "../components/Team.jsx";
import Reviews from "../components/Reviews.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  useEffect(() => {
    document.title = "KaazLabs — Web, Android, UI/UX & Security";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Mission />
      <Team />
      <Reviews />
      <Contact />
    </>
  );
}
