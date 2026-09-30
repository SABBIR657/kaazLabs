import React from "react";
import { ArrowRight, FileCheck2, LifeBuoy, MessagesSquare, ShieldCheck } from "lucide-react";
import { WHY_US } from "../data.js";
import { Link } from "../router.jsx";
import Reveal from "./Reveal.jsx";
import TiltCard from "./TiltCard.jsx";

const ICONS = { quote: FileCheck2, shield: ShieldCheck, chat: MessagesSquare, support: LifeBuoy };

export default function WhyUs() {
  return (
    <section id="why" className="grain bg-espresso2 py-24 md:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Why KaazLabs</p>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream">
              What working with us looks like
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-muted max-w-sm">
            Four things you can hold us to on every project, whatever its size.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US.map((w, i) => {
            const Icon = ICONS[w.icon] || FileCheck2;
            return (
              <Reveal key={w.title} delay={i * 90}>
                <TiltCard className="why-card h-full border border-white/10 bg-espresso/50">
                  <Link to={w.link.href} className="group flex flex-col h-full p-7 lg:p-8 outline-none">
                    <div className="flex items-start justify-between mb-10">
                      <span className="w-12 h-12 flex items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:border-gold group-hover:text-espresso">
                        <Icon
                          size={22}
                          strokeWidth={1.6}
                          className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                        />
                      </span>
                      <span className="font-display text-[15px] text-cream/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-[1.3rem] leading-snug text-cream mb-3 transition-colors group-hover:text-goldSoft">
                      {w.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-muted mb-8">{w.body}</p>
                    <span className="why-link mt-auto inline-flex items-center gap-1.5 text-[13.5px] font-medium text-gold">
                      {w.link.label}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
