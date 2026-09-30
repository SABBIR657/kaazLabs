import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { PROJECTS, getProject } from "../projects.js";
import { Link } from "../router.jsx";
import Reveal from "../components/Reveal.jsx";
import TiltCard from "../components/TiltCard.jsx";
import ProjectCover from "../components/ProjectCover.jsx";
import { StatusBadge } from "../components/ProjectCard.jsx";
import Contact from "../components/Contact.jsx";
import NotFound from "./NotFound.jsx";

function Block({ label, children }) {
  return (
    <Reveal className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 border-t border-ink/15 pt-8">
      <p className="text-[13px] tracking-[0.08em] text-emerald">{label}</p>
      <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-ink/80">{children}</div>
    </Reveal>
  );
}

export default function ProjectDetail({ slug }) {
  const p = getProject(slug);

  useEffect(() => {
    if (p) document.title = `${p.title} — KaazLabs`;
  }, [p]);

  if (!p) return <NotFound />;

  const index = PROJECTS.indexOf(p);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const approach = Array.isArray(p.approach) ? p.approach : [p.approach];
  const meta = [
    ["Type", p.status === "built" ? "Built & shipped" : "Concept study"],
    ["Services", p.services.join(", ")],
    ["Platform", p.platform],
    ...(p.year ? [["Year", p.year]] : []),
    ...(p.client ? [["Client", p.client]] : []),
  ];
  const hasLinks = p.links?.live || p.links?.source;

  return (
    <>
      <section className="grain bg-espresso pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-[14px] text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            All projects
          </Link>

          <Reveal className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <StatusBadge status={p.status} />
              <span className="text-[12.5px] text-muted">{p.stack.join(" · ")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.3rem,5.2vw,3.9rem)] leading-[1.05] text-cream mb-6">
              {p.title}
            </h1>
            <p className="text-[18px] leading-relaxed text-muted">{p.tagline}</p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-white/10 pt-8"
          >
            {meta.map(([k, v]) => (
              <div key={k}>
                <p className="text-[12px] tracking-[0.08em] text-gold/80 mb-1.5">{k}</p>
                <p className="text-[14.5px] text-cream">{v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={180} className="mt-14 project-card is-hero">
            <ProjectCover project={p} className="cover-lg" />
          </Reveal>

          {p.status === "concept" && (
            <p className="mt-6 text-[13.5px] text-muted/80 max-w-2xl">
              This is a concept study — a worked-out approach to a real problem, not a client engagement. It
              shows how we'd scope and build it.
            </p>
          )}
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <Block label="Overview">
            <p>{p.overview}</p>
          </Block>
          <Block label="The challenge">
            <p>{p.challenge}</p>
          </Block>
          <Block label="Our approach">
            {approach.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Block>
        </div>
      </section>

      <section className="grain bg-espresso py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Key features</p>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.1] text-cream mb-14">
              What it does
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <TiltCard className="h-full border border-white/10 p-7">
                  <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg text-cream mt-3 mb-2">{f.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-muted">{f.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <Block label="Tech stack">
            <div className="flex flex-wrap gap-2.5">
              {p.stack.map((t) => (
                <span key={t} className="px-3.5 py-1.5 text-[14px] border border-ink/20 text-ink">
                  {t}
                </span>
              ))}
            </div>
          </Block>
          {p.outcome && (
            <Block label={p.outcomeTitle || "Outcome"}>
              <p className="font-display text-[1.45rem] leading-snug text-ink">{p.outcome}</p>
            </Block>
          )}
          {hasLinks && (
            <Block label="See it">
              <div className="flex flex-wrap gap-4">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium bg-ink text-cream hover:bg-emerald transition-colors"
                  >
                    Visit live site <ExternalLink size={16} />
                  </a>
                )}
                {p.links.source && (
                  <a
                    href={p.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-[15px] font-medium border border-ink/30 text-ink hover:border-ink transition-colors"
                  >
                    View source <Github size={16} />
                  </a>
                )}
              </div>
            </Block>
          )}
        </div>
      </section>

      {next !== p && (
        <section className="grain bg-espresso2 py-20 md:py-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              to={`/projects/${next.slug}`}
              className="project-card group grid md:grid-cols-[1fr_0.9fr] gap-10 items-center"
            >
              <div>
                <p className="text-[13px] tracking-[0.08em] text-gold mb-4">Next project</p>
                <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.08] text-cream mb-4 transition-colors group-hover:text-goldSoft">
                  {next.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-muted max-w-md mb-6">{next.tagline}</p>
                <span className="inline-flex items-center gap-2 text-[14px] font-medium text-gold">
                  Read the case study
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <ProjectCover project={next} />
            </Link>
          </div>
        </section>
      )}

      <Contact />
    </>
  );
}
