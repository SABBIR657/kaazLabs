import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BUILT_WORK, CONCEPT_WORK } from "../data.js";

export default function Work() {
  const [tab, setTab] = useState("built");

  return (
    <section id="work" className="grain bg-espresso py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-10">
          <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Portfolio</p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream mb-4">
            What we've shipped, and what we'd build next
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            Some of this is live today. Some is a worked-out approach to a problem we haven't
            been hired to solve yet — proof of how we'd think about it.
          </p>
        </div>

        <div className="flex gap-3 mb-12">
          {[
            ["built", "Built"],
            ["concept", "Concept"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={
                "px-5 py-2 text-[14px] font-medium transition-colors " +
                (tab === key ? "bg-gold text-espresso" : "border border-cream/25 text-cream/70")
              }
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "built" ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {BUILT_WORK.map((b) => (
              <div key={b.name} className="border border-white/10 p-8">
                <span className="text-[12.5px] text-gold">{b.tag}</span>
                <h3 className="font-display text-xl text-cream mt-2 mb-3">{b.name}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{b.body}</p>
              </div>
            ))}
            <div className="border border-dashed border-white/15 p-8 flex flex-col justify-center">
              <ArrowUpRight size={20} className="text-gold mb-3" />
              <h3 className="font-display text-xl text-cream mb-2">Your project could be here</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">
                We're early — this space fills up with client work as we take it on.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-6">
            {CONCEPT_WORK.map((c) => (
              <div key={c.name} className="border border-white/10 p-7">
                <h3 className="font-display text-lg text-cream mb-5">{c.name}</h3>
                <p className="text-[12.5px] text-gold/80 mb-1">Problem</p>
                <p className="text-[14px] leading-relaxed text-muted mb-4">{c.problem}</p>
                <p className="text-[12.5px] text-gold/80 mb-1">Approach</p>
                <p className="text-[14px] leading-relaxed text-muted">{c.solution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
