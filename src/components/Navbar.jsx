import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-espresso/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg text-cream tracking-wide">
          Kaaz<span className="text-gold">Labs</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[14px] text-cream/80">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block text-[14px] font-medium border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-espresso transition-colors"
        >
          Start a project
        </a>

        <button
          className="md:hidden text-cream p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-espresso px-6 py-6 flex flex-col gap-5 text-cream/90 text-[15px]">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block text-center border border-gold text-gold px-4 py-2"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
}
