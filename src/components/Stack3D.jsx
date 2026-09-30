import React, { useEffect, useRef } from "react";

// Bottom to top: security is the foundation, the interface sits on top.
const LAYERS = [
  { label: "Security", n: "04", color: "#2F4A3C" },
  { label: "Web", n: "01", color: "#C6A15B" },
  { label: "Android", n: "02", color: "#2F4A3C" },
  { label: "UI/UX", n: "03", color: "#C6A15B" },
];

export default function Stack3D() {
  const sceneRef = useRef(null);
  const tiltRef = useRef(null);
  const frame = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const setTilt = (tx, ty) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = tiltRef.current;
      if (!el) return;
      el.style.setProperty("--tx", `${tx}deg`);
      el.style.setProperty("--ty", `${ty}deg`);
    });
  };

  const onMove = (e) => {
    if (!enabled.current) return;
    const r = sceneRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt(x * 20, -y * 14);
  };

  return (
    <div
      ref={sceneRef}
      className="stack-scene"
      onPointerMove={onMove}
      onPointerLeave={() => setTilt(0, 0)}
      aria-hidden="true"
    >
      <div ref={tiltRef} className="stack-tilt">
        <div className="stack-sway">
          <div className="stack-ground" />
          {LAYERS.map((l, i) => (
            <div
              key={l.label}
              className={"stack-layer" + (i === LAYERS.length - 1 ? " is-top" : "")}
              style={{ "--i": i }}
            >
              <div className="stack-face">
                <span className="absolute top-3 right-4 font-display text-[13px] text-gold/80">
                  {l.n}
                </span>
                <span className="absolute bottom-3 left-4 flex items-center gap-2 text-[12px] tracking-[0.08em] text-cream/85">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
