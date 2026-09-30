import React, { useEffect, useState } from "react";
import { PROJECTS, SERVICE_FILTERS } from "../projects.js";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Contact from "../components/Contact.jsx";

export default function ProjectsPage() {
  // /projects?service=Android opens with that filter applied (used by the Services section).
  const [filter, setFilterState] = useState(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    return SERVICE_FILTERS.includes(s) ? s : "All";
  });
  const setFilter = (f) => {
    setFilterState(f);
    const query = f === "All" ? "" : `?service=${encodeURIComponent(f)}`;
    window.history.replaceState(window.history.state, "", `/projects${query}`);
  };

  useEffect(() => {
    document.title = "Projects — KaazLabs";
  }, []);

  const filters = ["All", ...SERVICE_FILTERS.filter((s) => PROJECTS.some((p) => p.services.includes(s)))];
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.services.includes(filter));
  const builtCount = PROJECTS.filter((p) => p.status === "built").length;

  return (
    <>
      <section className="grain bg-espresso pt-32 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="max-w-2xl mb-12">
            <p className="text-[13px] tracking-[0.08em] text-gold mb-5">Projects</p>
            <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-cream mb-6">
              Work, start to finish.
            </h1>
            <p className="text-[17px] leading-relaxed text-muted">
              {builtCount} built and shipped, {PROJECTS.length - builtCount} worked-out concept
              {PROJECTS.length - builtCount === 1 ? "" : "s"}. Each one walks through the problem, how we
              approached it, and what we'd build.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-wrap items-center gap-3 mb-16 border-b border-white/10 pb-8">
            {filters.map((f) => {
              const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.services.includes(f)).length;
              const on = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={on}
                  className={
                    "px-4 py-2 text-[14px] font-medium transition-colors " +
                    (on ? "bg-gold text-espresso" : "border border-cream/20 text-cream/75 hover:border-gold hover:text-gold")
                  }
                >
                  {f}
                  <span className={"ml-2 text-[12px] " + (on ? "text-espresso/60" : "text-cream/40")}>{count}</span>
                </button>
              );
            })}
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {shown.map((p, i) => (
              <Reveal key={`${filter}-${p.slug}`} delay={(i % 2) * 110}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}
