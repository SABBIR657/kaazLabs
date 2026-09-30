import React from "react";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../projects.js";
import { Link } from "../router.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="grain bg-espresso py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Portfolio</p>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream mb-4">
              What we've shipped, and what we'd build next
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              Some of this is live today. Some is a worked-out approach to a problem we haven't
              been hired to solve yet — proof of how we'd think about it.
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 self-start md:self-auto text-[14px] font-medium text-cream border-b border-cream/30 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            View all {PROJECTS.length} projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i === 0 ? 0 : (i - 1) * 110} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
