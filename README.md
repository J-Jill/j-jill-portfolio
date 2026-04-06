# Jillian Ramirez — Portfolio

> Frontend Developer portfolio built with React, TypeScript and Vite. Deployed at [jillianram-dev.com](https://jillianram-dev.com)

---

## Overview

Personal portfolio SPA (Single Page Application) designed to communicate technical decisions as clearly as it communicates visual ones. Every architectural choice in this project was made deliberately and can be justified — that standard is reflected in this document.

The design is editorial dark: large typography, marquee animations, custom cursor with lag interpolation, and a scroll reveal system built without animation libraries.

---

## Stack

| Technology | Version | Role | Why this, not alternatives |
|---|---|---|---|
| **React** | 18.x | UI library | Component model fits a section-based SPA. |
| **TypeScript** | 5.x | Type safety | All data contracts are explicit. Catches interface mismatches at compile time, not runtime. |
| **Vite** | 5.x | Bundler + dev server | CRA is abandoned. Vite uses native ESModules in dev — HMR under 100ms. |
| **CSS Modules** | native | Scoped styles | No dependencies. Real CSS. Unique class names auto-generated per component. No collision between `.title` in Nav and `.title` in Hero. |
| **Vercel** | — | Deploy + hosting | Native Vite detection, automatic deploy on push, free custom domain + HTTPS. |

### Deliberately excluded

| Technology | Why not used |
|---|---|
| **Next.js** | SSR solves a problem this project doesn't have. A portfolio is a static SPA — adding a Node server would be over-engineering with no benefit. |
| **React Router** | Single page with anchor scroll. React Router adds ~50kb and client-side routing for a problem that doesn't exist here. |
| **Redux** | State is minimal: active language (EN/ES). Context API with `useState` handles this in 30 lines. Redux Toolkit would add boilerplate with zero benefit. |
| **Tailwind CSS** | The design uses highly custom values (`clamp()` typography, unique spacing). Tailwind would require extensive `tailwind.config.js` customization and produce 15+ utility classes per element, obscuring structure. |
| **Styled Components** | Adds 12kb to the bundle. Dynamic CSS-in-JS is useful for complex component libraries — unnecessary for a portfolio. |
| **GSAP / Framer Motion** | All animations (stagger entrance, scroll reveal, marquee) are CSS-only. Animation libraries would add 30–90kb for effects achievable with `@keyframes` and `IntersectionObserver`. |

---

## Architecture

This project uses a simplified version of **Feature-Sliced Design** — code organized by responsibility, not by file type.

```
src/
├── components/          # Reusable, project-agnostic UI pieces
│   ├── Cursor/          # Custom cursor with lag interpolation
│   └── ProjectCard/     # Project card used in Work section
├── sections/            # Full page sections — know about this portfolio
│   ├── Nav/
│   ├── Hero/
│   ├── Marquee/
│   ├── Work/
│   ├── StandOut/
│   ├── RightFit/
│   ├── Testimonials/
│   ├── Stack/
│   ├── Contact/
│   └── Footer/
├── hooks/               # Reusable stateful logic
│   ├── useLang.tsx      # Context API — EN/ES language switch
│   ├── useScrollReveal.ts  # IntersectionObserver scroll animations
│   └── useScrolled.ts   # Nav background on scroll
├── data/                # Content separated from UI
│   ├── projects.ts
│   ├── testimonials.ts
│   ├── stack.ts
│   ├── standout.ts
│   └── fit.ts
├── styles/
│   └── tokens.css       # CSS custom properties — single source of design truth
├── types/
│   └── index.ts         # All TypeScript interfaces in one place
├── App.tsx              # Composes sections — no logic, no styles
└── main.tsx             # Entry point — imports tokens.css once
```

### Key architectural decisions

**Data separated from UI.** All content lives in `src/data/` as typed TypeScript arrays. Adding a new project means editing `projects.ts` — `Work.tsx` never changes. This is the single source of truth principle applied to content.

**Components vs Sections.** A `component` is reusable and knows nothing about this portfolio. A `section` is specific to this page and imports from `data/`. They never mix responsibilities.

**CSS custom properties as design tokens.** All colors, font families, and type scale values are defined once in `tokens.css` and referenced everywhere via `var(--text-display)`. Changing the color scheme means editing one file.

**`clamp()` for responsive typography.** `clamp(88px, 19vw, 240px)` means: minimum 88px on mobile, scales with viewport width, caps at 240px on large screens. Zero media queries for typography.

---

## State management

```
Local UI state     →  useState        (input values, open/closed states)
Shared UI state    →  Context API     (active language EN/ES)
Server state       →  React Query     (ready for future data fetching)
URL state          →  anchor links    (section navigation)
```

The language context (`useLang`) follows the four-step Context pattern:

1. Define the type (`LangContextType`)
2. Create the context (`createContext`)
3. Build the Provider (`LangProvider`)
4. Export a consuming hook (`useLang`) that throws a descriptive error if used outside the Provider

---

## Custom hooks

| Hook | Purpose | Why a hook |
|---|---|---|
| `useLang` | EN/ES language context | Consumed by every section. Encapsulates Context access and error handling. |
| `useScrollReveal` | `IntersectionObserver` scroll animations | Used by 9 sections. Extracting to a hook means the observer logic is written once and tested once. |
| `useScrolled` | Detects scroll past 80px for Nav background | Keeps Nav.tsx describing UI only. Scroll logic belongs in a hook, not in a component. |

---

## Animations

All animations are CSS-only or vanilla JavaScript. No animation library is used.

| Effect | Implementation | Why no library |
|---|---|---|
| Hero title stagger | CSS `@keyframes` + `animation-delay` per line | Three delays on three elements. A library would add 30kb for this. |
| Scroll reveal | `IntersectionObserver` adds `.visible` class | More efficient than scroll events — fires only when element crosses threshold, not on every pixel. |
| Marquee loop | CSS `@keyframes` + content duplicated in JS | Content is doubled so `-50%` translate creates a seamless loop. Pauses on hover via `animation-play-state`. |
| Cursor lag | `requestAnimationFrame` + linear interpolation | `rx += (target - rx) * 0.1` — the ring moves 10% of the remaining distance each frame, creating organic lag. |
| Nav backdrop | CSS `backdrop-filter: blur()` + class toggle | Triggered by `useScrolled` hook. GPU-accelerated by the browser. |

---

## i18n (EN/ES)

Language switching is implemented without third-party libraries. A `LangProvider` wraps the app and exposes a `t(en, es)` helper function:

```tsx
// In any component:
const { t } = useLang()
<p>{t('I build interfaces', 'Construyo interfaces')}</p>
```

**Why not `react-i18next`?** The project has two languages and no pluralization, date formatting or dynamic loading needs. A 30-line Context implementation outperforms a 50kb library when the problem is this contained.

---

## CSS architecture

**CSS Modules** are used for all component styles. Each module generates scoped class names (e.g. `Hero_title__xK2p1`) that never collide across components.

**Naming convention:** camelCase inside modules (`styles.heroTitle`) — kebab-case is invalid as a JS property without bracket notation.

**Global styles:** Only `tokens.css` is global, imported once in `main.tsx`. It contains CSS custom properties, the reset, body styles, and the `.reveal` / `.visible` animation classes used across sections.

**Linux case-sensitivity:** CSS module filenames use PascalCase (`Hero.module.css`) to match component names. This matters because macOS is case-insensitive but the Vercel build server (Linux) is not. Mismatched casing causes build failures in CI that don't appear locally.

---

## Performance

- **Bundle size:** ~215kb JS (gzipped: ~68kb), ~22kb CSS (gzipped: ~4.7kb)
- **Zero runtime animation dependencies**
- **Fonts:** Google Fonts loaded via `<link rel="preconnect">` in `index.html` — not imported through JS bundle
- **`will-change: left, top`** only on the cursor elements — hints the browser to promote them to their own compositor layer

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Type check + production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

**Before every push:**
```bash
npm run lint && npm run build
```

If the build passes locally, it passes on Vercel. Never push without a passing local build.

---

## Deployment

Deployed on **Vercel** with automatic deployments on push to `main`.

---

## Project structure philosophy

> Each file has one reason to exist and one reason to change.

- `projects.ts` changes when a project is added
- `ProjectCard.tsx` changes when the card design changes
- `Work.tsx` changes when the section layout changes

They never change for the same reason. That's the single responsibility principle applied at file level.

---

## Author

**Jillian Ramirez** — Frontend Developer  
[jillianram-dev.com](https://jillianram-dev.com) · [LinkedIn](https://linkedin.com/in/jillian-ram) · [GitHub](https://github.com/J-Jill)
