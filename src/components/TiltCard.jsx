import React, { useEffect, useRef } from "react";

// Tilts toward the cursor on mouse/trackpad devices; static everywhere else.
export default function TiltCard({ className = "", max = 6, children }) {
  const ref = useRef(null);
  const frame = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onMove = (e) => {
    if (!enabled.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--rx", `${-y * max}deg`);
      el.style.setProperty("--ry", `${x * max}deg`);
      el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    if (!ref.current) return;
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </div>
  );
}
