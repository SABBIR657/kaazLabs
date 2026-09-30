import React from "react";
import { TEAM } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Team() {
  return (
    <section id="team" className="grain bg-espresso py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[13px] tracking-[0.08em] text-gold mb-4">
            Who's building it
          </p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream mb-14">
            The team
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {TEAM.map((m, i) => (
            <Reveal key={m.role} delay={i * 90} className="border-t-2 border-gold pt-5">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-100 h-100 mb-4 object-cover border border-white/15  hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <div className="w-20 h-20 mb-5 border border-white/15 flex items-center justify-center font-display text-2xl text-cream">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}

              <p className="font-display text-[16px]  text-cream">{m.name}</p>
              <p className="text-[13.5px] text-muted">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
