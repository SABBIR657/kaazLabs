import React from "react";
import { SERVICES } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mb-14">
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-4">What we build</p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink">
            Four disciplines, one team
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="border-t border-ink/15 pt-6">
              <span className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl text-ink mt-3 mb-3">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/70 max-w-md">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
