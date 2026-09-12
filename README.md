# KaazLabs site

React + Vite + Tailwind. No backend required for this version — everything is static content
in `src/data.js`.

## Setup

```
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Where to edit things

- **All content** (services, portfolio, team, reviews, mission/vision, email, WhatsApp number)
  → `src/data.js`. Change the strings there; nothing else needs to change.
- **Layout/design of a section** → the matching file in `src/components/`.
- **Colors, fonts** → `tailwind.config.js` (the `espresso`, `ivory`, `gold`, `emerald`, `cream`,
  `muted`, `ink` tokens) and the two font names in `index.html`.

## Before you deploy

- Set your real WhatsApp number in `CONTACT.whatsapp` in `src/data.js` (international format,
  digits only, e.g. `8801XXXXXXXXX`).
- Set your real email in `CONTACT.email`.
- Replace the placeholder team names/roles and the sample reviews — don't ship those live.
- Swap "KaazLabs" for your real company name (search the project for it — it appears in
  `Navbar.jsx`, `Footer.jsx`, `index.html`, and `data.js`).

## Build for production

```
npm run build
```

Outputs a static `dist/` folder — deploy it anywhere static (Vercel, Netlify, GitHub Pages),
same as you'd deploy the frontend half of a MERN app.

## When you'll actually need the "MERN" part

This site is pure front end. You'll want an Express + MongoDB backend once you add:
- A contact form that stores/emails submissions (instead of just mailto/WhatsApp links)
- An admin panel so non-developers on your team can edit services/team/reviews without a
  code change and redeploy
- Real, dynamically-loaded client testimonials or case studies

Until then, keep it static — it's faster, cheaper to host, and one less thing to maintain.
