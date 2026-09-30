import React, { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BRIEF, CONTACT } from "../data.js";
import Reveal from "./Reveal.jsx";

function Pill({ on, onClick, children }) {
  return (
    <button type="button" aria-pressed={on} onClick={onClick} className={"pill" + (on ? " is-on" : "")}>
      <span className="relative">{children}</span>
    </button>
  );
}

function Field({ id, label, required, error, multiline, ...props }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Tag
        id={id}
        placeholder={label}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={multiline ? 1 : undefined}
        onInput={
          multiline
            ? (e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }
            : undefined
        }
        className={"brief-field" + (error ? " has-error" : "") + (multiline ? " resize-none overflow-hidden" : "")}
        {...props}
      />
      {required && (
        <span className="absolute right-0 top-5 text-[#E0A58F] text-[18px]" aria-hidden="true">
          *
        </span>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-[13.5px] text-[#E0A58F]">
          {error}
        </p>
      )}
    </div>
  );
}

// "Start a project": pick what you need, fill three fields, and it opens your email app
// (or WhatsApp) with the brief already written. Nothing is stored — there's no backend.
export default function Contact() {
  const [services, setServices] = useState([]);
  const [budget, setBudget] = useState("");
  const [form, setForm] = useState({ name: "", reply: "", details: "" });
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const toggleService = (s) => {
    setErrors((er) => ({ ...er, services: undefined }));
    setServices((v) => (v.includes(s) ? v.filter((x) => x !== s) : [...v, s]));
  };

  const validate = () => {
    const er = {};
    if (services.length === 0) er.services = "Pick at least one so we know where to start.";
    if (!form.name.trim()) er.name = "Please add your name.";
    if (!form.reply.trim()) er.reply = "Add an email or phone number so we can reply.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const message = () =>
    [
      `Hi KaazLabs, I'm ${form.name.trim()}.`,
      `I'm interested in: ${services.join(", ")}.`,
      budget && `Budget: ${budget}.`,
      `You can reach me at: ${form.reply.trim()}.`,
      form.details.trim() && `\n${form.details.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Project inquiry — ${services.join(", ")}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="grain bg-espresso py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16 md:mb-24">
          <p className="text-[13px] tracking-[0.08em] text-gold mb-5">Start a project</p>
          <h2 className="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[1.02] text-cream max-w-3xl mx-auto">
            Have a problem worth solving?
          </h2>
        </Reveal>

        <form noValidate onSubmit={sendEmail} className="max-w-[860px]">
          <Reveal>
            <p className="text-[clamp(1.2rem,2vw,1.5rem)] text-cream mb-6">I'm interested in…</p>
            <div className="flex flex-wrap gap-3 md:gap-4" role="group" aria-label="I'm interested in">
              {BRIEF.services.map((s) => (
                <Pill key={s} on={services.includes(s)} onClick={() => toggleService(s)}>
                  {s}
                </Pill>
              ))}
            </div>
            {errors.services && <p className="mt-4 text-[13.5px] text-[#E0A58F]">{errors.services}</p>}
          </Reveal>

          <Reveal className="mt-16 md:mt-20 space-y-10 md:space-y-12">
            <Field
              id="brief-name"
              label="Your name"
              required
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              error={errors.name}
            />
            <Field
              id="brief-reply"
              label="Email or phone"
              required
              autoComplete="email"
              value={form.reply}
              onChange={update("reply")}
              error={errors.reply}
            />
            <Field
              id="brief-details"
              label="Tell us about your project"
              multiline
              value={form.details}
              onChange={update("details")}
            />
          </Reveal>

          <Reveal className="mt-16 md:mt-20">
            <p className="text-[clamp(1.2rem,2vw,1.5rem)] text-cream mb-6">Project budget (USD)</p>
            <div className="flex flex-wrap gap-3 md:gap-4" role="group" aria-label="Project budget">
              {BRIEF.budgets.map((b) => (
                <Pill key={b} on={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                  {b}
                </Pill>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 md:mt-20 flex flex-wrap items-center gap-x-8 gap-y-5">
            <button type="submit" className="pill pill-lg is-cta">
              <span className="relative">Send request</span>
            </button>
            <button
              type="button"
              onClick={sendWhatsApp}
              className="group inline-flex items-center gap-2 text-[15px] text-[#9CC5AE] hover:text-cream transition-colors"
            >
              <MessageCircle size={17} />
              <span className="underline underline-offset-4 decoration-1">or send it on WhatsApp</span>
            </button>
          </Reveal>
          <p className="mt-6 text-[12.5px] text-muted/70 max-w-md">
            Opens your email app or WhatsApp with the message already written — nothing is stored on this site.
          </p>
        </form>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap items-center gap-4">
          <span className="text-[13px] tracking-[0.08em] text-muted mr-2">Prefer to talk directly?</span>
          <a href={`mailto:${CONTACT.email}`} className="pill pill-outline">
            <span className="relative">{CONTACT.email}</span>
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill-outline"
          >
            <span className="relative inline-flex items-center gap-1.5">
              WhatsApp <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
