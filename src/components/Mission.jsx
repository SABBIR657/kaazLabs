import React from "react";
import { MISSION, VISION } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Mission() {
  return (
    <section id="mission" className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-5">Mission</p>
          <p className="font-display text-[1.6rem] leading-snug text-ink">{MISSION}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-5">Vision</p>
          <p className="font-display text-[1.6rem] leading-snug text-ink">{VISION}</p>
        </Reveal>
      </div>
    </section>
  );
}
