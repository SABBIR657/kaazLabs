// Edit everything in this file to update the site's content.
// Nothing here is fetched from a backend — it's plain data, which is
// enough until you add a CMS or admin panel later.
// Portfolio projects and their case-study pages live in projects.js.

export const CONTACT = {
  email: "hello@kaazlabs.com",
  // WhatsApp number in international format, no + or spaces, e.g. 8801XXXXXXXXX
  whatsapp: "8801XXXXXXXXX",
};

export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Mission", href: "/#mission" },
  { label: "Team", href: "/#team" },
  { label: "Reviews", href: "/#reviews" },
];

export const SERVICES = [
  {
    title: "Web solutions",
    body: "Business websites, e-commerce storefronts, admin dashboards, inventory and ERP systems, booking platforms, school and institution management systems, and custom web apps — built on the MERN stack.",
    filter: "Web",
    deliverables: ["Business websites", "E-commerce", "Admin dashboards", "ERP & inventory", "Booking platforms", "Custom web apps"],
  },
  {
    title: "Android apps",
    body: "Native and cross-platform Android apps for service businesses, e-commerce, and internal operations — from first prototype through to a Play Store release.",
    filter: "Android",
    deliverables: ["Native Android apps", "Cross-platform apps", "Internal tools", "Play Store release"],
  },
  {
    title: "UI/UX design",
    body: "Interfaces designed around how people actually work: research, wireframes, prototypes, and design systems that still hold up once a product grows.",
    filter: "UI/UX",
    deliverables: ["User research", "Wireframes", "Clickable prototypes", "Design systems"],
  },
  {
    title: "Cybersecurity",
    body: "Security audits, vulnerability testing, and hardening for web apps and infrastructure — built in from day one, not bolted on after something breaks.",
    filter: "Security",
    deliverables: ["Security audits", "Vulnerability testing", "Hardening", "Secure code review"],
  },
];

// "Why KaazLabs" cards. These are promises to clients — keep them true to how you work.
// icon: one of "quote", "shield", "chat", "support". link: where the card goes when clicked.
export const WHY_US = [
  {
    icon: "quote",
    title: "Clear quote before we start",
    body: "You get a written scope, timeline, and price before any work begins, so you know exactly what you're paying for.",
    link: { label: "See how we work", href: "/#process" },
  },
  {
    icon: "shield",
    title: "Security built in",
    body: "Security specialists are part of the team, so every project is built and reviewed securely from day one — not patched later.",
    link: { label: "Our security work", href: "/projects?service=Security" },
  },
  {
    icon: "chat",
    title: "Talk to the people building it",
    body: "No account managers in between. You speak directly with the designers and developers doing the work.",
    link: { label: "Say hello", href: "/#contact" },
  },
  {
    icon: "support",
    title: "Support after launch",
    body: "We stay on after go-live to fix issues, keep things updated and secure, and build what comes next.",
    link: { label: "Read the FAQ", href: "/#faq" },
  },
];

// "Before & after" slider. Each tab links to a project in projects.js (by slug) and uses
// that project's drawn preview as the "after" side. changes: [before, after] pairs.
export const BEFORE_AFTER = [
  {
    key: "inventory",
    label: "Inventory",
    project: "inventory-erp",
    changes: [
      ["Stock counted by hand every Friday", "Live stock levels on one screen"],
      ["Running out with no warning", "Reorder alerts before it happens"],
      ["No idea who changed what", "Every change logged, with a name"],
    ],
  },
  {
    key: "rent",
    label: "Rent & tenants",
    project: "property-management",
    changes: [
      ["Chasing rent by phone", "Automatic reminders and paid / due status"],
      ["Repairs lost in call logs", "Tickets with owner, priority, and status"],
      ["Lease dates in a filing cabinet", "Renewal alerts before leases expire"],
    ],
  },
  {
    key: "school",
    label: "School",
    project: "school-operations",
    changes: [
      ["Paper registers and re-typed sheets", "Attendance in seconds, from a phone"],
      ["Unpaid fees found at term end", "Fee status per class, with reminders"],
      ["Parents hear about absences late", "Same-day alerts to parents"],
    ],
  },
];

export const PROCESS = [
  {
    title: "Discover",
    body: "We learn how your business actually runs — what's slow, manual, or breaking, and what a good result looks like. You get a clear scope, timeline, and quote before any work starts.",
    outputs: ["Discovery call", "Scope & quote", "Timeline"],
  },
  {
    title: "Design",
    body: "Wireframes first, then a clickable prototype you can try before a line of code is written — so changes are cheap and nothing is a surprise.",
    outputs: ["Wireframes", "Clickable prototype", "Design system"],
  },
  {
    title: "Build",
    body: "We build in short cycles and show you working software along the way, not just at the end, so you can see progress and steer it.",
    outputs: ["Regular demos", "Staging link", "Progress updates"],
  },
  {
    title: "Secure & test",
    body: "Every release is tested across devices and reviewed for security — access control, data handling, and common vulnerabilities — before it reaches your users.",
    outputs: ["Security review", "Device testing", "Bug fixing"],
  },
  {
    title: "Launch & support",
    body: "We deploy, hand over access and documentation, and stay on to fix issues, keep things updated, and build what comes next.",
    outputs: ["Deployment", "Handover & training", "Ongoing support"],
  },
];

// Draft answers — check each one matches how you actually work before going live.
export const FAQS = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope — a business website and a custom ERP are very different projects. After a short call we send a clear quote with a breakdown of what's included, so you know the cost before anything starts.",
  },
  {
    q: "How long will it take?",
    a: "Smaller websites usually take a few weeks; web and Android apps take longer, depending on features. You'll get a timeline with milestones in the quote, and regular demos so you can see progress.",
  },
  {
    q: "Do I own the code and designs?",
    a: "Yes. Once the project is paid for, the source code, designs, and all accounts are handed over to you.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We fix issues, keep things updated and secure, and can keep building new features as your business grows.",
  },
  {
    q: "Can you work on an existing website or app?",
    a: "Yes — we can audit what you have, fix and improve it, redesign it, or migrate it to something easier to maintain.",
  },
  {
    q: "How do we stay in touch during the project?",
    a: "Whichever suits you — WhatsApp, email, or calls. You'll get regular updates and a staging link to try the work as it's built.",
  },
];

// Options in the "Start a project" form. Budget ranges are placeholders — set your own.
export const BRIEF = {
  services: [
    "Website design",
    "Web development",
    "E-commerce",
    "Dashboard / ERP",
    "Android app",
    "UI/UX design",
    "Security audit",
    "Something else",
  ],
  budgets: ["Under 1k", "1–5k", "5–15k", "15–30k", "30k+", "Not sure yet"],
};

export const TEAM = [
  { name: "Sabbir Rahman", role: "Founder & CEO", photo: "/src/public/Sabbir-Rahman.png" },
  { name: "Sakib Mia", role: "Co-Founder, Full Stack Lead", photo:"" },
  { name: "Teammate name", role: "UI/UX Designer", photo:"" },
  { name: "Teammate name", role: "Security Engineer", photo:"" },
];

export const REVIEWS = [
  {
    quote: "Sample review — replace with a real client quote once you have one.",
    name: "Client name",
    org: "Business / organization",
  },
  {
    quote: "Sample review — replace with a real client quote once you have one.",
    name: "Client name",
    org: "Business / organization",
  },
  {
    quote: "Sample review — replace with a real client quote once you have one.",
    name: "Client name",
    org: "Business / organization",
  },
];

export const MISSION =
  "Give growing businesses the same quality of software only large companies could once afford — built fast, built right, and built to last.";

export const VISION =
  "A future where no local business is held back by outdated systems, or by software they can't understand or trust.";
