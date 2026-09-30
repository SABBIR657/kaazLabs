import React, { useEffect, useRef, useState } from "react";
import { PROCESS } from "../data.js";
import Reveal from "./Reveal.jsx";

const num = (i) => String(i + 1).padStart(2, "0");

// A timeline whose gold line fills as you scroll, lighting up each step as it reaches mid-screen.
export default function Process() {
  const listRef = useRef(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.55;
      const r = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - r.top) / r.height));
      list.style.setProperty("--progress", progress.toFixed(4));
      let current = -1;
      list.querySelectorAll("[data-step]").forEach((el, i) => {
        if (el.getBoundingClientRect().top < line) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shown = Math.max(active, 0);

  return (
    <section id="process" className="bg-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24">
        <Reveal className="md:sticky md:top-28 self-start">
          <p className="text-[13px] tracking-[0.08em] text-emerald mb-4">How we work</p>
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-ink mb-5">
            From first call to launch — and after
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink/70 max-w-md">
            The same five steps on every project, so you always know what's happening and what comes next.
          </p>
          <div className="hidden md:block mt-12" aria-hidden="true">
            <div className="flex items-baseline gap-3">
              <span key={shown} className="process-counter font-display text-7xl leading-none text-gold">
                {num(shown)}
              </span>
              <span className="text-[15px] text-ink/40">/ {String(PROCESS.length).padStart(2, "0")}</span>
            </div>
            <p key={`t${shown}`} className="process-counter font-display text-xl text-ink mt-3">
              {PROCESS[shown].title}
            </p>
          </div>
        </Reveal>

        <ol ref={listRef} className="process-list">
          <span className="process-rail" aria-hidden="true">
            <span className="process-fill" />
          </span>
          {PROCESS.map((s, i) => (
            <li key={s.title} data-step className={"process-step" + (i <= active ? " is-active" : "")}>
              <span className="process-dot" aria-hidden="true" />
              <p className="text-[13px] tracking-[0.08em] text-emerald mb-2">Step {num(i)}</p>
              <h3 className="font-display text-[1.7rem] leading-tight text-ink mb-3">{s.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-ink/70 max-w-lg mb-5">{s.body}</p>
              <ul className="flex flex-wrap gap-2">
                {s.outputs.map((o) => (
                  <li key={o} className="px-3 py-1 text-[12.5px] border border-ink/15 text-ink/70">
                    {o}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
