import React, { useEffect, useRef } from "react";

// Text whose words light up one by one as it scrolls through the screen.
export default function ScrubText({ text, className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    const spans = el.querySelectorAll("[data-word]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => s.classList.add("is-lit"));
      return;
    }
    let frame = 0;
    let lit = -1;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the text's top reaches 85% down the screen, finishes as its bottom passes 45%.
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.4)));
      const count = Math.round(progress * spans.length);
      if (count === lit) return;
      spans.forEach((s, i) => s.classList.toggle("is-lit", i < count));
      lit = count;
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
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-word className="scrub-word">
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
