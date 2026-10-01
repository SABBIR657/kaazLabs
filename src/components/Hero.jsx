import React from "react";
import Stack3D from "./Stack3D.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative bg-espresso pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div className="hero-copy">
          <Reveal as="p" className="text-[13px] tracking-[0.08em] text-gold mb-6">
            A software studio in Dhaka
          </Reveal>
          <Reveal as="h1" delay={90} className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-cream mb-7">
            Software built like it has to work.
          </Reveal>
          <Reveal as="p" delay={180} className="text-[17px] leading-relaxed text-muted max-w-lg mb-10">
            KaazLabs designs and builds web platforms, Android apps, interfaces,
            and security for businesses that can't afford downtime.
          </Reveal>
          <Reveal delay={270} className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3.5 text-[15px] font-medium bg-gold text-espresso hover:bg-goldSoft transition-colors"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 text-[15px] font-medium border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Start a project
            </a>
          </Reveal>
        </div>

        <div className="hero-visual w-full max-w-[320px] md:max-w-none mx-auto">
          <Stack3D />
        </div>
      </div>
    </section>
  );
}
