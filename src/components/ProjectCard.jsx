import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "../router.jsx";
import ProjectCover from "./ProjectCover.jsx";

export function StatusBadge({ status }) {
  return status === "built" ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11.5px] tracking-[0.04em] bg-emerald/40 text-[#9CC5AE]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#9CC5AE]" />
      Built &amp; shipped
    </span>
  ) : (
    <span className="inline-flex items-center px-2.5 py-1 text-[11.5px] tracking-[0.04em] border border-gold/40 text-gold">
      Concept study
    </span>
  );
}

export default function ProjectCard({ project, wide = false }) {
  const p = project;
  return (
    <Link
      to={`/projects/${p.slug}`}
      className={
        "project-card group block outline-none " +
        (wide ? "md:grid md:grid-cols-[1.35fr_1fr] md:gap-12 md:items-center" : "")
      }
    >
      <ProjectCover project={p} />
      <div className={wide ? "pt-7 md:pt-0" : "pt-7"}>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={p.status} />
          <span className="text-[12.5px] text-muted">{p.services.join(" · ")}</span>
        </div>
        <h3
          className={
            "font-display text-cream mt-4 mb-3 transition-colors group-hover:text-goldSoft " +
            (wide ? "text-[clamp(1.7rem,3vw,2.3rem)] leading-[1.1]" : "text-[1.55rem] leading-[1.15]")
          }
        >
          {p.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-muted max-w-xl">{p.summary}</p>
        <span className="inline-flex items-center gap-1.5 mt-6 text-[14px] font-medium text-gold">
          View case study
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
