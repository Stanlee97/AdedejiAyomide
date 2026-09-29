# Adedeji Ayomide’s portfolio

A responsive, single-page React + Vite portfolio with Tailwind CSS, Framer Motion and lazy-loaded GSAP / ScrollTrigger. Dark and light themes, project filtering, accessible project dialogs, animated skill cards, and reduced-motion support are included.

## Run locally

Install Node.js 20.19+ or 22.12+, then run:

```sh
npm install
npm run dev
```

## Customize

- `src/data.js`: edit projects, skill groups, and contact details. Projects marked `featured: true` appear in the initial selection in array order. Set `url` to add a “View project” link; all projects retain a detail view. The remaining projects follow when “Explore all projects” is selected.
- `src/components/`: edit the individual Hero, About, Skills, Projects, Certifications, Availability and Contact components.
- `src/App.jsx`: page composition, theme persistence and scroll animation setup.
- `src/styles.css`: colors, responsive layout, CSS illustrations and motion.
- `index.html`: title and search description.

Project previews are illustrative interface concepts, not screenshots of client software. Skill lines are decorative reveals, not claimed proficiency scores. No backend, analytics, or contact form service is required.

## Build and deploy

```sh
npm run build
npm run preview
```

The static output is `dist`. On Vercel, import this directory and select the Vite preset (build: `npm run build`, output: `dist`). Netlify reads the included `netlify.toml`. Deployment requires your hosting account; no secrets or environment variables are needed.

Google Fonts is an optional external request; the page falls back to local sans-serif and serif fonts if unavailable.
