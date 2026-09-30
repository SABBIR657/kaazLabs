import React from "react";
import { Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const mailHref = `mailto:${CONTACT.email}?subject=Project inquiry`;
  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hi KaazLabs, I'd like to talk about a project."
  )}`;

  return (
    <section id="contact" className="grain bg-espresso py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-xl mb-14">
          <h2 className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-[1.08] text-cream mb-5">
            Have a problem worth solving?
          </h2>
          <p className="text-[16px] leading-relaxed text-muted">
            Tell us what's slow, manual, or breaking. We'll tell you how we'd build it. Reach out
            however's easiest for you.
          </p>
        </Reveal>

        <Reveal delay={120} className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          <a
            href={mailHref}
            className="flex items-center gap-4 border border-white/15 px-6 py-5 hover:border-gold transition-colors group"
          >
            <span className="w-11 h-11 flex items-center justify-center bg-white/5 group-hover:bg-gold/10">
              <Mail size={20} className="text-gold" />
            </span>
            <span>
              <span className="block text-[15px] font-medium text-cream">Email us</span>
              <span className="block text-[13.5px] text-muted">{CONTACT.email}</span>
            </span>
          </a>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-white/15 px-6 py-5 hover:border-emerald transition-colors group"
          >
            <span className="w-11 h-11 flex items-center justify-center bg-white/5 group-hover:bg-emerald/20">
              <MessageCircle size={20} className="text-emerald" />
            </span>
            <span>
              <span className="block text-[15px] font-medium text-cream">WhatsApp us</span>
              <span className="block text-[13.5px] text-muted">Chat directly, no forms</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
