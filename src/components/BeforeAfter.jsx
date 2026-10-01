import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronsLeftRight } from "lucide-react";
import { BEFORE_AFTER } from "../data.js";
import { getProject } from "../projects.js";
import { Link } from "../router.jsx";
import { BEFORE_MOCKS } from "./BeforeMocks.jsx";
import { MOCKS } from "./ProjectMocks.jsx";
import Reveal from "./Reveal.jsx";

const clamp = (v) => Math.min(100, Math.max(0, v));
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Drag the handle (or click, or use the arrow keys) to wipe between the "before" spreadsheet
// and the "after" dashboard. The position is written straight to a CSS variable, so dragging
// doesn't re-render the drawings.
export default function BeforeAfter() {
  const [tab, setTab] = useState(0);
  const [touched, setTouched] = useState(false);
  const frameRef = useRef(null);
  const handleRef = useRef(null);
  const pos = useRef(50);
  const dragging = useRef(false);
  const hint = useRef(0);

  const apply = (value) => {
    pos.current = clamp(value);
    frameRef.current?.style.setProperty("--pos", `${pos.current}%`);
    handleRef.current?.setAttribute("aria-valuenow", String(Math.round(pos.current)));
  };

  const stopHint = () => {
    cancelAnimationFrame(hint.current);
    hint.current = 0;
  };

  const interact = () => {
    stopHint();
    if (!touched) setTouched(true);
  };

  // The first time the slider scrolls into view, sweep it once so it's obvious it moves.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || reducedMotion() || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const keys = [50, 74, 28, 50];
        const duration = 2200;
        let start = 0;
        const step = (t) => {
          if (!start) start = t;
          const p = Math.min(1, (t - start) / duration);
          const seg = Math.min(keys.length - 2, Math.floor(p * (keys.length - 1)));
          const local = p * (keys.length - 1) - seg;
          const eased = 0.5 - Math.cos(local * Math.PI) / 2;
          apply(keys[seg] + (keys[seg + 1] - keys[seg]) * eased);
          if (p < 1) hint.current = requestAnimationFrame(step);
        };
        hint.current = requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(frame);
    return () => {
      io.disconnect();
      stopHint();
    };
  }, []);

  const fromPointer = (e) => {
    const r = frameRef.current.getBoundingClientRect();
    apply(((e.clientX - r.left) / r.width) * 100);
  };

  const onPointerDown = (e) => {
    interact();
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    fromPointer(e);
  };

  const onKeyDown = (e) => {
    const moves = { ArrowLeft: -5, ArrowRight: 5, PageDown: -20, PageUp: 20 };
    if (e.key in moves) apply(pos.current + moves[e.key]);
    else if (e.key === "Home") apply(0);
    else if (e.key === "End") apply(100);
    else return;
    e.preventDefault();
    interact();
  };

  const selectTab = (i) => {
    stopHint();
    setTab(i);
    apply(50);
  };

  const item = BEFORE_AFTER[tab];
  const project = getProject(item.project);
  const Before = BEFORE_MOCKS[item.key];
  const After = project && MOCKS[project.cover];

  return (
    <section id="before-after" className="grain bg-espresso py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Before &amp; after</p>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream">
              From spreadsheets and paper to one clear system
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-muted max-w-sm">
            Drag the slider to see what changes when manual work becomes software built for it.
          </p>
        </Reveal>

        <Reveal delay={80} className="mb-8">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Examples">
            {BEFORE_AFTER.map((b, i) => (
              <button
                key={b.key}
                type="button"
                role="tab"
                aria-selected={tab === i}
                onClick={() => selectTab(i)}
                className={"pill pill-tab" + (tab === i ? " is-on" : "")}
              >
                <span className="relative">{b.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="scroll-zoom">
          <div
            ref={frameRef}
            className="compare"
            style={{ "--pos": "50%" }}
            onPointerDown={onPointerDown}
            onPointerMove={(e) => dragging.current && fromPointer(e)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <div className="compare-layer">{After && <After />}</div>
            <div className="compare-layer compare-before">{Before && <Before />}</div>

            <span className="compare-tag left-4">Before</span>
            <span className="compare-tag right-4">After · KaazLabs</span>

            <div className="compare-line" aria-hidden="true" />
            <div
              ref={handleRef}
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={50}
              aria-valuetext="Drag or use arrow keys to compare"
              onKeyDown={onKeyDown}
              className="compare-knob"
            >
              <ChevronsLeftRight size={22} strokeWidth={2} />
              {!touched && <span className="compare-hint">Drag</span>}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <ul key={item.key} className="grid sm:grid-cols-3 gap-6 service-panel">
            {item.changes.map(([before, after]) => (
              <li key={after} className="border-t border-white/10 pt-5">
                <p className="text-[13.5px] text-muted/70 line-through decoration-[#B8503A]/70 mb-2">{before}</p>
                <p className="flex gap-2 text-[15px] leading-snug text-cream">
                  <ArrowRight size={16} className="text-gold mt-[3px] shrink-0" />
                  {after}
                </p>
              </li>
            ))}
          </ul>
          {project && (
            <Link
              to={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-2 self-end text-[14px] font-medium text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors whitespace-nowrap"
            >
              See the case study
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
