import React from "react";

const NODES = [
  {
    cx: 160,
    cy: 80,
    color: "#C6A15B",
    label: "Web",
    anchor: "middle",
    dy: -14,
  },
  {
    cx: 238,
    cy: 160,
    color: "#2F4A3C",
    label: "Android",
    anchor: "start",
    dx: 14,
  },
  {
    cx: 160,
    cy: 240,
    color: "#C6A15B",
    label: "UI/UX",
    anchor: "middle",
    dy: 24,
  },
  {
    cx: 82,
    cy: 160,
    color: "#2F4A3C",
    label: "Security",
    anchor: "end",
    dx: -14,
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative bg-espresso pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <p className="text-[13px] tracking-[0.08em] text-gold mb-6">
            A software studio in Dhaka
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-cream mb-7">
            Software built like it has to work.
          </h1>
          <p className="text-[17px] leading-relaxed text-muted max-w-lg mb-10">
            KaazLabs designs and builds web platforms, Android apps, interfaces,
            and security for businesses that can't afford downtime.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3.5 text-[15px] font-medium bg-gold text-espresso hover:bg-goldSoft transition-colors"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 text-[15px] font-medium border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <svg viewBox="0 0 320 320" className="w-full">
            {/* rotating rings */}
            <g className="spin-slow" style={{ transformOrigin: "160px 160px" }}>
              <circle
                cx="160"
                cy="160"
                r="118"
                fill="none"
                stroke="#3A2E22"
                strokeWidth="1"
              />
              <circle
                cx="160"
                cy="160"
                r="80"
                fill="none"
                stroke="#3A2E22"
                strokeWidth="1.4"
                strokeDasharray="2 8"
              />
            </g>

            {/* static diamond connecting the 4 services */}
            <path
              d="M160 80 L238 160 L160 240 L82 160 Z"
              fill="none"
              stroke="#C6A15B"
              strokeWidth="1.2"
              className="draw-line"
            />

            {NODES.map((n) => (
              <g key={n.label}>
                <circle cx={n.cx} cy={n.cy} r="5" fill={n.color} />
                <text
                  x={n.cx + (n.dx || 0)}
                  y={n.cy + (n.dy || 0)}
                  textAnchor={n.anchor}
                  fontFamily="Manrope, sans-serif"
                  fontSize="12"
                  fill="#B9AFA0"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
