import React, { useEffect } from "react";
import { Link } from "../router.jsx";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — KaazLabs";
  }, []);

  return (
    <section className="grain bg-espresso min-h-[80vh] pt-44 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[13px] tracking-[0.08em] text-gold mb-5">404</p>
        <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] text-cream mb-6">
          This page doesn't exist.
        </h1>
        <p className="text-[17px] text-muted mb-10">It may have moved, or the link may be mistyped.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="px-6 py-3.5 text-[15px] font-medium bg-gold text-espresso hover:bg-goldSoft transition-colors">
            Back to home
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3.5 text-[15px] font-medium border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors"
          >
            See our projects
          </Link>
        </div>
      </div>
    </section>
  );
}
