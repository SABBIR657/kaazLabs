import React from "react";
import { Quote } from "lucide-react";
import { REVIEWS } from "../data.js";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[13px] tracking-[0.08em] text-emerald mb-4">Client reviews</p>
        <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink mb-14">
          What people say
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div key={i}>
              <Quote size={18} className="text-gold mb-5" strokeWidth={1.6} />
              <p className="text-[15px] leading-relaxed text-ink/75 italic mb-6">{r.quote}</p>
              <p className="text-[14px] font-medium text-ink">{r.name}</p>
              <p className="text-[13px] text-ink/50">{r.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
