import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FAQS } from "../data.js";
import { Link } from "../router.jsx";
import Reveal from "./Reveal.jsx";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-ivory py-24 md:py-28 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-24">
        <Reveal className="md:sticky md:top-28 self-start">
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-4">FAQ</p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink mb-5">
            Questions, answered
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink/70 max-w-sm mb-7">
            The things clients usually ask before we start. Anything else, just ask.
          </p>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink border-b border-ink/30 pb-1 hover:text-emerald hover:border-emerald transition-colors"
          >
            Ask us directly
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal delay={100} className="border-t border-ink/15">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className="border-b border-ink/15">
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(on ? -1 : i)}
                    className="group w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={
                        "font-display text-[1.25rem] leading-snug transition-colors " +
                        (on ? "text-ink" : "text-ink/75 group-hover:text-ink")
                      }
                    >
                      {f.q}
                    </span>
                    <span className={"faq-icon" + (on ? " is-open" : "")} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  className={"accordion" + (on ? " is-open" : "")}
                  {...(!on && { inert: "" })}
                >
                  <div className="accordion-inner">
                    <p className="pb-7 pr-12 text-[15.5px] leading-relaxed text-ink/70 max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
