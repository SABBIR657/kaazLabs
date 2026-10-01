import React from "react";
import { MISSION, VISION } from "../data.js";
import Reveal from "./Reveal.jsx";
import ScrubText from "./ScrubText.jsx";

export default function Mission() {
  return (
    <section id="mission" className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-5">Mission</p>
          <ScrubText text={MISSION} className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-snug" />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-5">Vision</p>
          <ScrubText text={VISION} className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-snug" />
        </Reveal>
      </div>
    </section>
  );
}
