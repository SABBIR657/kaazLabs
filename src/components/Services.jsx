import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Globe, PenTool, ShieldCheck, Smartphone } from "lucide-react";
import { SERVICES } from "../data.js";
import { PROJECTS } from "../projects.js";
import { Link } from "../router.jsx";
import Reveal from "./Reveal.jsx";

const ICONS = { Web: Globe, Android: Smartphone, "UI/UX": PenTool, Security: ShieldCheck };
const num = (i) => String(i + 1).padStart(2, "0");

function ServiceDetail({ service, index }) {
  const Icon = ICONS[service.filter] || Globe;
  const related = PROJECTS.filter((p) => p.services.includes(service.filter)).length;
  return (
    <div className="service-panel">
      <div className="flex items-start justify-between mb-8">
        <span className="w-12 h-12 flex items-center justify-center bg-emerald text-cream">
          <Icon size={22} strokeWidth={1.6} />
        </span>
        <span className="font-display text-5xl leading-none text-gold/35">{num(index)}</span>
      </div>
      <h3 className="font-display text-2xl text-ink mb-3">{service.title}</h3>
      <p className="text-[15.5px] leading-relaxed text-ink/75 mb-8">{service.body}</p>
      <p className="text-[12px] tracking-[0.08em] text-emerald mb-4">What we deliver</p>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-9">
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-2 text-[14px] text-ink/80">
            <Check size={15} className="text-gold mt-[3px] shrink-0" />
            {d}
          </li>
        ))}
      </ul>
      {related > 0 && (
        <Link
          to={`/projects?service=${encodeURIComponent(service.filter)}`}
          className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink border-b border-ink/30 pb-1 hover:text-emerald hover:border-emerald transition-colors"
        >
          See {related} related project{related === 1 ? "" : "s"}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      )}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mb-14">
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-4">What we build</p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink">
            Four disciplines, one team
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal as="ul" className="border-t border-ink/15">
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title} className="border-b border-ink/15">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-expanded={on}
                    className="group w-full flex items-center gap-5 py-6 md:py-7 text-left"
                  >
                    <span
                      className={"font-display text-lg transition-colors " + (on ? "text-gold" : "text-ink/30")}
                    >
                      {num(i)}
                    </span>
                    <span
                      className={
                        "font-display text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight transition-all duration-300 " +
                        (on ? "text-ink translate-x-2" : "text-ink/45 group-hover:text-ink/75")
                      }
                    >
                      {s.title}
                    </span>
                    <ArrowRight
                      size={20}
                      className={
                        "ml-auto shrink-0 transition-all duration-300 " +
                        (on ? "opacity-100 text-gold translate-x-0" : "opacity-0 -translate-x-2")
                      }
                    />
                  </button>

                  {/* Phones: the details open inline under the tapped service. */}
                  <div className={"md:hidden accordion" + (on ? " is-open" : "")} {...(!on && { inert: "" })}>
                    <div className="accordion-inner">
                      <div className="pb-9 pt-1">
                        <ServiceDetail service={s} index={i} />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </Reveal>

          {/* Larger screens: one panel beside the list that follows the hovered service. */}
          <Reveal delay={120} className="hidden md:block sticky top-28">
            <div className="bg-cream border border-ink/10 p-9 lg:p-10 min-h-[430px]">
              <ServiceDetail key={active} service={SERVICES[active]} index={active} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
