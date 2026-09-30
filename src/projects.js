// Every project on the site — the home page, /projects, and each /projects/<slug> page — reads from here.
//
// status:   "built" for shipped work, "concept" for a worked-out approach we haven't been hired for yet.
// services: any of "Web", "Android", "UI/UX", "Security" — these drive the filters on /projects.
// cover:    which built-in interface preview to draw ("study", "inventory", "property", "school").
//           To use a real screenshot instead, add  image: someImport  (import it at the top of this file
//           from src/assets/, around 1600px wide) and it replaces the drawn preview.
// accent:   "gold" or "emerald" — the glow behind the preview.
// featured: shown in the Portfolio section on the home page (first one is shown large).
// links:    leave a value empty ("") to hide that button.

export const PROJECTS = [
  {
    slug: "studytrack",
    title: "StudyTrack",
    status: "built",
    featured: true,
    tagline: "One place to plan, focus, and remember what you study.",
    summary:
      "A study and habit platform combining session logging, activity tracking, spaced-repetition flashcards, a Pomodoro timer, and a social leaderboard.",
    platform: "Web app, responsive",
    services: ["Web", "UI/UX"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    cover: "study",
    accent: "gold",
    links: { live: "", source: "" },
    overview:
      "StudyTrack is a study and habit platform we designed and built end to end. It brings together the tools students usually juggle across separate apps — a focus timer, flashcards, and progress tracking — and adds a social layer that makes consistency visible.",
    challenge:
      "Serious students end up with a timer app, a flashcard app, and a spreadsheet to track their hours. None of them talk to each other, so there's no single picture of how much work is actually getting done — and nothing that rewards showing up day after day.",
    approach: [
      "We made the study session the core unit. Every Pomodoro, flashcard review, and logged activity feeds one timeline, so progress is recorded as a side effect of studying rather than by hand.",
      "Flashcards use spaced repetition: each card is rescheduled based on how well it was recalled, so review time goes where it's needed most.",
      "A weekly leaderboard turns logged hours into light, friendly competition between classmates — enough to motivate, without turning study into a game.",
    ],
    features: [
      { title: "Session logging", body: "Every focus session is saved with subject, duration, and notes, building a history automatically." },
      { title: "Activity tracking", body: "Daily and weekly views show where time actually went, with streaks that reward consistency." },
      { title: "Spaced-repetition flashcards", body: "Cards resurface right before they'd be forgotten, based on how each review went." },
      { title: "Pomodoro timer", body: "A built-in focus timer with breaks, wired straight into session logging." },
      { title: "Social leaderboard", body: "Friends and classmates see each other's weekly hours, turning accountability into motivation." },
    ],
    outcomeTitle: "Where it stands",
    outcome:
      "StudyTrack is built and shipped as a full MERN application — taken from first sketch to production by one team, covering product design, interface, API, and database.",
  },
  {
    slug: "inventory-erp",
    title: "Inventory & ERP for small manufacturers",
    status: "concept",
    featured: true,
    tagline: "Real-time stock visibility, with reorders that trigger themselves.",
    summary:
      "A real-time inventory dashboard with automated reorder alerts and role-based staff access, replacing manual stock tracking.",
    platform: "Web dashboard",
    services: ["Web", "UI/UX", "Security"],
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    cover: "inventory",
    accent: "emerald",
    links: { live: "", source: "" },
    overview:
      "A worked-out approach to a problem we see in almost every small manufacturer: stock lives in notebooks, spreadsheets, and people's heads. This concept replaces that with one live system the whole floor can trust.",
    challenge:
      "Manual stock tracking leads to shortages on some materials and overstock on others. Nobody has a clear, current view of what's on the shelf, what's been ordered, or who changed what — so problems surface only when production stops.",
    approach: [
      "Start with a single live stock ledger. Every receipt, issue to production, and adjustment is a recorded movement, so the dashboard always reflects reality and every number can be traced.",
      "Each item gets a reorder point based on how fast it's actually used. When stock crosses it, the system raises an alert — and can draft the purchase order — before anyone runs out.",
      "Access is role-based from day one: floor staff record movements, managers approve orders, owners see costs. Every change lands in an audit trail.",
    ],
    features: [
      { title: "Live stock dashboard", body: "Current quantities, value, and movement across every item and location, updated in real time." },
      { title: "Automated reorder alerts", body: "Reorder points per item, with alerts and draft purchase orders when stock runs low." },
      { title: "Role-based access", body: "Staff, managers, and owners each see and do only what their role needs." },
      { title: "Supplier & purchase records", body: "Suppliers, lead times, and order history in one place, linked to the items they supply." },
      { title: "Audit trail", body: "Every stock change is logged with who made it and when, so discrepancies can be traced." },
    ],
    outcomeTitle: "What it would change",
    outcome:
      "Fewer production stops from missing materials, less cash tied up in overstock, and one source of truth that staff and owners can both rely on.",
  },
  {
    slug: "property-management",
    title: "Property & tenant management",
    status: "concept",
    featured: true,
    tagline: "Rent, leases, and repairs — out of spreadsheets and phone calls.",
    summary:
      "A single portal for rent collection, digital lease records, and maintenance ticketing, with an Android app for tenants.",
    platform: "Web portal + Android tenant app",
    services: ["Web", "Android"],
    stack: ["React", "Node.js", "MongoDB", "Kotlin"],
    cover: "property",
    accent: "gold",
    links: { live: "", source: "" },
    overview:
      "A concept for landlords and property managers running anywhere from one building to dozens of units, bringing every tenant, lease, payment, and repair request into one place.",
    challenge:
      "Landlords track rent, maintenance requests, and tenant records across spreadsheets and phone calls. Payments get missed, repair requests get lost, and lease details live in a filing cabinet.",
    approach: [
      "One portal for owners and managers: every building, unit, tenant, and lease in a single structured record, with rent status visible at a glance.",
      "An Android app for tenants to pay rent, see receipts, and raise maintenance requests with photos — so nothing depends on someone answering the phone.",
      "Maintenance becomes a ticket with a status, a priority, and a history, so owners can see what's open and how long it's taken.",
    ],
    features: [
      { title: "Rent collection & reminders", body: "Monthly rent tracked per unit, with automatic reminders and a clear paid / due / overdue status." },
      { title: "Digital lease records", body: "Lease terms, documents, and renewal dates stored per tenant, with alerts before they expire." },
      { title: "Maintenance ticketing", body: "Tenants report issues with photos; managers assign, track, and close them." },
      { title: "Tenant Android app", body: "Payments, receipts, notices, and requests in the tenant's pocket." },
      { title: "Owner reports", body: "Occupancy, collection rate, and maintenance costs per building, every month." },
    ],
    outcomeTitle: "What it would change",
    outcome:
      "Rent collected on time with less chasing, repairs that don't fall through the cracks, and a portfolio an owner can understand in one screen.",
  },
  {
    slug: "school-operations",
    title: "School operations",
    status: "concept",
    featured: false,
    tagline: "Admissions, attendance, fees, and parents — in one system.",
    summary:
      "One system for enrollment, attendance, fee collection, and parent communication, replacing paper and disconnected tools.",
    platform: "Web admin + Android parent app",
    services: ["Web", "Android", "UI/UX"],
    stack: ["React", "Node.js", "MongoDB", "Kotlin"],
    cover: "school",
    accent: "emerald",
    links: { live: "", source: "" },
    overview:
      "A concept for schools and institutions that still run their daily operations on registers, receipt books, and phone trees.",
    challenge:
      "Admissions, attendance, and fees are handled on paper or across disconnected tools. Administrators re-enter the same data repeatedly, and parents only hear about problems when it's too late.",
    approach: [
      "Each student has one record from admission onward, so enrollment, attendance, fees, and results all connect instead of living in separate registers.",
      "Teachers take attendance in seconds from a phone or tablet; absences are flagged to parents the same day.",
      "Fees are tracked per student with receipts and reminders, and administrators see collection status per class at a glance.",
    ],
    features: [
      { title: "Online admissions", body: "Application forms, document uploads, and enrollment status tracked from first inquiry." },
      { title: "Daily attendance", body: "Quick class-by-class attendance with same-day absence alerts to parents." },
      { title: "Fee collection & receipts", body: "Fee schedules per class, payment records, receipts, and automatic reminders." },
      { title: "Parent communication", body: "Notices, messages, and a child's attendance and fees in a parent Android app." },
      { title: "Reports", body: "Attendance trends, fee collection, and enrollment numbers for administrators." },
    ],
    outcomeTitle: "What it would change",
    outcome:
      "Less time lost to paperwork, fees collected more reliably, and parents who know what's happening before they have to ask.",
  },
];

export const SERVICE_FILTERS = ["Web", "Android", "UI/UX", "Security"];

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);
