<div align="center">

<!-- BANNER -->
<img src="https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/hero-earth.png" alt="NEXUS COSMOS Banner" width="100%" style="border-radius:12px;margin-bottom:12px;" />

<br/>

# ✦ NEXUS COSMOS

### *AI-Powered Space Intelligence Operating System*

> *The universe, decoded.*

<br/>

<!-- BADGES -->
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![NASA API](https://img.shields.io/badge/NASA_API-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)](https://api.nasa.gov/)

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Deploy Status](https://img.shields.io/badge/Deploy-Live-success?style=flat-square&logo=vercel)](https://nexus-cosmos.vercel.app)
[![Visitors](https://visitor-badge.laobi.icu/badge?page_id=sahil-gaund03.cosmos)](https://github.com/sahil-gaund03/cosmos)
![GitHub Stars](https://img.shields.io/github/stars/sahil-gaund03/cosmos?style=flat-square&color=gold)
![GitHub Forks](https://img.shields.io/github/forks/sahil-gaund03/cosmos?style=flat-square&color=blue)

<br/>

**[🚀 Live Demo](https://nexus-cosmos.vercel.app)** &nbsp;·&nbsp; **[📸 Screenshots](#-screenshots--gallery)** &nbsp;·&nbsp; **[📖 Docs](#-installation)** &nbsp;·&nbsp; **[🤝 Contribute](#-contributing)**

</div>

---

<br/>

## 🌌 What is NEXUS COSMOS?

**NEXUS COSMOS** is a production-grade, full-stack space intelligence platform built for those who look up and want answers. It fuses real-time NASA data streams, Gemini AI, and immersive 3D graphics into a single cinematic interface — a command center for the cosmos.

This is not a demo. It is not a toy. It is a fully operational system that tracks the International Space Station in real time, renders the solar system in 3D, retrieves live NASA imagery and space weather data, and deploys a Gemini-powered AI astronomy assistant — all under one cohesive, futuristic UI.

Built with the modern web stack at its absolute frontier: **Next.js 16**, **React 19**, **Three.js**, and **Framer Motion** — NEXUS COSMOS pushes what a browser-based space experience can be.

> *"We chose to go to the Moon not because it was easy, but because it was hard."*  
> — John F. Kennedy

NEXUS COSMOS exists for the same reason. Not because building this was easy — but because the universe deserves a platform worthy of its scale.

<br/>

---

## 🎬 Live Preview

<div align="center">

| 🌍 Hero Experience | 🤖 AI Assistant | 🪐 Solar System |
|:-:|:-:|:-:|
| [![Hero](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/hero-earth.png)](https://nexus-cosmos.vercel.app) | [![AI](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/iss-hologram.png)](https://nexus-cosmos.vercel.app/ai-assistant) | [![Solar](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/jupiter-view.png)](https://nexus-cosmos.vercel.app/solar-system) |

| 🛰️ ISS Tracker | 🌠 NASA Gallery | 🌌 Deep Space |
|:-:|:-:|:-:|
| [![ISS](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/iss-hologram.png)](https://nexus-cosmos.vercel.app/iss-tracker) | [![Gallery](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/carina-nebula.png)](https://nexus-cosmos.vercel.app/nasa-gallery) | [![Space](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/andromeda-galaxy.png)](https://nexus-cosmos.vercel.app/nasa-gallery) |

<br/>

**▶ [Watch the full feature demo video →](https://youtu.be/your-demo-video)**

</div>

<br/>

---

## ⚡ Feature Showcase

<details open>
<summary><strong>🤖 AI Astronomy Assistant</strong></summary>

- Powered by **Google Gemini** (`@google/genai`)
- Context-aware conversation about astronomy, missions, and space science
- Streamed Markdown responses with `react-markdown` + `remark-gfm`
- JWT-secured API layer with `jose` and input validation via `zod`
- Custom system prompt tuned to deep-space expertise

</details>

<details>
<summary><strong>🪐 Interactive 3D Solar System</strong></summary>

- Full `Three.js` scene via `@react-three/fiber` and `@react-three/drei`
- Real planetary textures for all 8 planets + the Sun and Saturn's rings
- Post-processing bloom and cinematic lens effects via `@react-three/postprocessing`
- Per-planet dossier HUD with orbital data and geological facts
- Smooth orbital animations with accurate relative period ratios

</details>

<details>
<summary><strong>🛰️ Real-Time ISS Tracker</strong></summary>

- Live ISS position, altitude, and orbital velocity telemetry
- Interactive map via `Leaflet` + `react-leaflet` with satellite tile layer
- Radar HUD overlay and telemetry console with animated readouts
- Real-time display of orbital stats: 27,600 km/h · 420 km altitude · 92.9 min period

</details>

<details>
<summary><strong>🌠 NASA Media Gallery</strong></summary>

- APOD (Astronomy Picture of the Day) hero display
- Full searchable gallery with HUD-style filters
- Full-screen image lightbox with metadata overlay
- Pulls from NASA's official media and image APIs

</details>

<details>
<summary><strong>🚀 Launch Intelligence</strong></summary>

- Upcoming and past launch tracking for SpaceX, NASA, ISRO, and more
- Launch countdown timers per mission
- Rocket specifications and launch pad map via Leaflet
- Data provided by open launch API services

</details>

<details>
<summary><strong>🌩️ Space Weather Dashboard</strong></summary>

- Solar flare event cards with classification (X/M/C class)
- Geomagnetic storm indices and aurora forecast data
- Real-time NOAA/NASA space weather feeds
- Cinematic animated HUD layout

</details>

<details>
<summary><strong>👩‍🚀 Astronaut Intelligence</strong></summary>

- Current ISS crew manifest and mission details
- Mission histories, spacewalk statistics, and flight records
- Rich astronaut profile cards

</details>

<details>
<summary><strong>📅 Space Timeline</strong></summary>

- Cinematic scroll-through of humanity's greatest space milestones
- From Sputnik to Artemis — interactive event cards with media
- Animated `RevealOnScroll` component throughout

</details>

<details>
<summary><strong>🎨 UI/UX & Design System</strong></summary>

- Custom **glass-morphism** UI components (`GlassPanel`, `Badge`, `Button`, `TelemetryCard`)
- NASA-inspired HUD aesthetics with Tailwind CSS 4
- Smooth page transitions and micro-animations via Framer Motion 12
- Dynamic `Starfield` background effect across all pages
- Fully responsive — mobile-optimized navigation with custom `MobileMenu`
- Consistent design language across 9 distinct platform modules

</details>

<br/>

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | `^16.2.6` | React framework · App Router · Turbopack |
| [React](https://reactjs.org/) | `^19.2.4` | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | `^5` | Type safety across the entire codebase |

### 3D / Graphics

| Technology | Version | Purpose |
|---|---|---|
| [Three.js](https://threejs.org/) | `^0.184.0` | 3D rendering engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | `^9.6.1` | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | `^10.7.7` | Three.js helpers (OrbitControls, loaders, etc.) |
| [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing) | `^3.0.4` | Bloom, glitch, and lens effects |

### APIs & Data

| Technology | Purpose |
|---|---|
| [Gemini API (`@google/genai`)](https://deepmind.google/technologies/gemini/) | AI astronomy assistant (v2.7.0) |
| [NASA APIs](https://api.nasa.gov/) | APOD, imagery, space weather |
| Open Launch API | Rocket launch tracking |
| Open Notify / Where the ISS At | ISS real-time telemetry |

### Styling & Animation

| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | `^4` | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | `^12.40.0` | Declarative animations |
| [clsx](https://github.com/lukeed/clsx) | `^2.1.1` | Conditional class merging |

### Maps & Markdown

| Technology | Version | Purpose |
|---|---|---|
| [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) | `^1.9.4` / `^5.0.0` | ISS and launch pad mapping |
| [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) | `^10.1.0` | AI response rendering |

### Security

| Technology | Version | Purpose |
|---|---|---|
| [jose](https://github.com/panva/jose) | `^6.2.3` | JWT authentication for AI API route |
| [zod](https://zod.dev/) | `^4.4.3` | Runtime input validation |

</div>

<br/>

---

## 🗂️ Project Architecture

```
nexus-cosmos/
│
├── public/
│   ├── images/                    # Planet and nebula reference images
│   │   ├── hero-earth.png
│   │   ├── mars-surface.png
│   │   ├── jupiter-view.png
│   │   └── ...                    # 14 deep-space images
│   └── textures/
│       └── planets/               # Three.js UV texture maps
│           ├── earth.jpg, earthClouds.jpg
│           ├── sun.jpg, mars.jpg, jupiter.jpg
│           └── ...                # All 8 planets + atmosphere
│
├── scripts/
│   └── download_textures.js       # Texture asset pipeline
│
└── src/
    ├── app/                        # Next.js App Router
    │   ├── page.tsx                # Home — cinematic landing
    │   ├── layout.tsx              # Root layout + Starfield
    │   ├── ai-assistant/page.tsx   # Gemini chat interface
    │   ├── solar-system/page.tsx   # 3D Three.js explorer
    │   ├── iss-tracker/page.tsx    # Real-time ISS map
    │   ├── nasa-gallery/page.tsx   # APOD + search gallery
    │   ├── launches/page.tsx       # Launch intelligence
    │   ├── space-weather/page.tsx  # Solar flare dashboard
    │   ├── astronauts/page.tsx     # Crew tracker
    │   ├── timeline/page.tsx       # Space history timeline
    │   └── api/
    │       ├── chat/route.ts       # Gemini AI proxy (JWT-secured)
    │       └── auth/login/route.ts # Auth token issuance
    │
    ├── components/
    │   ├── ai/
    │   │   └── AIChatConsole.tsx       # Full AI chat UI (streaming)
    │   ├── effects/
    │   │   ├── Starfield.tsx           # Animated star background
    │   │   └── RevealOnScroll.tsx      # Intersection Observer reveals
    │   ├── gallery/
    │   │   ├── APODHero.tsx            # Astronomy Picture of the Day
    │   │   ├── GalleryGrid.tsx         # Masonry image grid
    │   │   ├── GalleryHUD.tsx          # NASA gallery HUD overlay
    │   │   ├── GallerySearch.tsx       # Search bar component
    │   │   └── ImageLightbox.tsx       # Full-screen lightbox
    │   ├── home/
    │   │   ├── HeroSection.tsx         # Cinematic hero
    │   │   ├── FeatureOverview.tsx     # Platform features overview
    │   │   ├── AIAssistantPreview.tsx  # AI section teaser
    │   │   ├── ISSPreviewSection.tsx   # ISS teaser cards
    │   │   ├── NASAGalleryPreview.tsx  # Gallery teaser
    │   │   └── TelemetryPreview.tsx    # Platform stats
    │   ├── launches/
    │   │   ├── LaunchCountdown.tsx     # Countdown timer
    │   │   ├── LaunchList.tsx          # Mission list
    │   │   ├── LaunchPadMap.tsx        # Leaflet launch map
    │   │   ├── LaunchesHUD.tsx         # Dashboard HUD
    │   │   └── RocketSpecs.tsx         # Rocket data cards
    │   ├── layout/
    │   │   ├── Navbar.tsx              # Main navigation
    │   │   ├── MobileMenu.tsx          # Mobile drawer
    │   │   └── Footer.tsx              # Site footer
    │   ├── solar/
    │   │   ├── SolarSystemCanvas.tsx   # Three.js scene root
    │   │   ├── SolarHUD.tsx            # Info overlay
    │   │   └── PlanetDossier.tsx       # Per-planet data panel
    │   ├── tracking/
    │   │   ├── ISSMap.tsx              # Leaflet tracking map
    │   │   ├── ISSTrackingHUD.tsx      # Telemetry overlay
    │   │   ├── TelemetryConsole.tsx    # Readout console
    │   │   └── RadarHUDOverlay.tsx     # Radar sweep animation
    │   ├── ui/                         # Reusable design system
    │   │   ├── Badge.tsx
    │   │   ├── Button.tsx
    │   │   ├── FeatureCard.tsx
    │   │   ├── GlassPanel.tsx
    │   │   ├── TelemetryCard.tsx
    │   │   └── SectionContainer.tsx
    │   └── weather/
    │       └── FlareEventCard.tsx      # Solar flare cards
    │
    ├── lib/
    │   ├── constants.ts                # Site config, nav links, telemetry data
    │   ├── motion.ts                   # Framer Motion variants
    │   ├── utils.ts                    # Shared utilities
    │   ├── security/
    │   │   ├── jwt.ts                  # Token sign/verify
    │   │   └── validation.ts           # Zod schemas
    │   └── services/                   # Data layer
    │       ├── nasaService.ts          # NASA API client
    │       ├── solarService.ts         # Solar system data
    │       ├── launchService.ts        # Launch data
    │       ├── astronautService.ts     # Astronaut/crew data
    │       ├── spaceWeatherService.ts  # NOAA/NASA weather
    │       └── timelineService.ts      # Historical timeline
    │
    └── middleware.ts                   # Edge auth middleware
```

<br/>

---

## 🚀 Installation

### Prerequisites

- **Node.js** `≥ 18.17`
- **npm** `≥ 9` or **pnpm** / **yarn**
- A **NASA API key** (free at [api.nasa.gov](https://api.nasa.gov))
- A **Gemini API key** (free at [aistudio.google.com](https://aistudio.google.com))

---

### 1. Clone the repository

```bash
git clone https://github.com/sahil-gaund03/cosmos.git
cd nexus-cosmos
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your keys (see [Environment Variables](#-environment-variables) below).

### 4. Download planet textures *(optional — included in `public/textures/`)*

```bash
node scripts/download_textures.js
```

### 5. Start the development server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** — and launch.

### 6. Build for production

```bash
npm run build
npm start
```

<br/>

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root. **Never commit this file.**

```env
# .env.example — copy to .env.local and fill in your values

# ─────────────────────────────────────────
# AI — Google Gemini
# Get your key at: https://aistudio.google.com
# ─────────────────────────────────────────
GEMINI_API_KEY=

# ─────────────────────────────────────────
# NASA APIs
# Get your key at: https://api.nasa.gov
# Demo key available: DEMO_KEY (rate-limited)
# ─────────────────────────────────────────
NASA_API_KEY=

# ─────────────────────────────────────────
# Auth — JWT Secret
# Generate a strong secret: openssl rand -base64 32
# ─────────────────────────────────────────
JWT_SECRET=

# ─────────────────────────────────────────
# (Optional) API Auth Password
# Used by the login route to issue JWT tokens
# ─────────────────────────────────────────
API_PASSWORD=
```

> **Security note:** All API keys are consumed **server-side only** via Next.js API routes and middleware. Keys are never shipped to the browser. The Gemini chat endpoint is JWT-protected. Never expose `.env.local` or commit it to version control — it is already listed in `.gitignore`.

<br/>

---

## 📸 Screenshots & Gallery

<div align="center">

**🌍 Cinematic Hero**
> *Full-viewport Earth backdrop with real-time ISS telemetry cards*

[![Hero Page](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/hero-earth.png)](https://nexus-cosmos.vercel.app)

---

**🌌 Carina Nebula — NASA Deep Space**
> *High-res NASA imagery streamed directly into the gallery*

[![Carina Nebula](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/carina-nebula.png)](https://nexus-cosmos.vercel.app/nasa-gallery)

---

**🪐 Solar System — Jupiter**
> *Interactive Three.js solar system with per-planet dossier overlay*

[![Jupiter View](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/jupiter-view.png)](https://nexus-cosmos.vercel.app/solar-system)

---

**🔴 Mars Surface**
> *Planetary surface imagery and exploration data*

[![Mars Surface](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/mars-surface.png)](https://nexus-cosmos.vercel.app/solar-system)

---

**🌌 Andromeda Galaxy**
> *Explore our galactic neighbors through the NASA gallery*

[![Andromeda Galaxy](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/andromeda-galaxy.png)](https://nexus-cosmos.vercel.app/nasa-gallery)

---

**🛰️ ISS Hologram Visualization**
> *Futuristic ISS model used across the tracking interface*

[![ISS Hologram](https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/iss-hologram.png)](https://nexus-cosmos.vercel.app/iss-tracker)

</div>

<br/>

---

## ⚙️ Performance & Optimization

| Technique | Implementation |
|---|---|
| **Turbopack** | `next dev --turbopack` for sub-second HMR in development |
| **Lazy loading** | Dynamic imports for Three.js canvas components (no SSR penalty) |
| **Texture pipeline** | Dedicated `download_textures.js` script for optimized planet assets |
| **JWT edge middleware** | Auth runs at the Edge — zero cold-start latency on API routes |
| **Framer Motion** | Hardware-accelerated CSS transforms only (`will-change`, `transform`) |
| **Zod validation** | Schema-level request validation before any service call |
| **React 19** | Concurrent rendering + native transitions for butter-smooth UI |
| **TypeScript strict** | Full type coverage eliminates entire classes of runtime errors |
| **Tailwind CSS 4** | Zero-runtime utility styles — no CSS-in-JS overhead |

<br/>

---

## 🗺️ Future Roadmap

- [ ] **🌐 Real-time 3D ISS orbit** — render the live ISS position directly on the Three.js solar system globe
- [ ] **🎙️ Voice-enabled AI** — speak your astronomy questions directly to the Gemini assistant
- [ ] **🥽 WebXR / VR exploration** — immersive solar system walkthrough in browser-based VR
- [ ] **📡 Deep space object catalog** — browse thousands of exoplanets, nebulae, and star clusters
- [ ] **🌑 Eclipse & transit predictor** — calculate and visualize upcoming celestial events
- [ ] **🚀 Mission builder** — design and simulate custom interplanetary trajectories
- [ ] **🌍 Multi-language support** — internationalization for a global astronomy community
- [ ] **📊 Personal space dashboard** — save favorite objects, set launch alerts, track missions
- [ ] **⚡ PWA support** — offline access and home-screen install

<br/>

---

## 🤝 Contributing

Contributions are what make open-source extraordinary. All contributions are welcome and deeply appreciated.

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes (use conventional commits)
git commit -m "feat: add real-time ISS 3D orbit overlay"

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

**Guidelines:**
- Follow the existing code style (TypeScript strict, Tailwind utilities)
- Add or update types for any new data structures
- Test on both desktop and mobile viewports
- Keep components focused and composable
- NASA-inspired — keep the aesthetic consistent

For major changes, please open an issue first to discuss what you'd like to change.

<br/>

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full terms.

```
MIT License — Copyright (c) 2026 Sahil Gaund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

<br/>

---

## 👨‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/sahil-gaund03" alt="Sahil Gaund" width="100" style="border-radius:50%;border:2px solid #4f8ef7" />

### Sahil Gaund

*Full-Stack Engineer · Space Enthusiast · Open-Source Builder*

[![GitHub](https://img.shields.io/badge/GitHub-sahil--gaund03-181717?style=for-the-badge&logo=github)](https://github.com/sahil-gaund03)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sahilgaund-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/sahil-gaund03)
[![Portfolio](https://img.shields.io/badge/Portfolio-sahilgaund.dev-FF5733?style=for-the-badge&logo=vercel)](https://sahilgaund.dev)
[![Twitter / X](https://img.shields.io/badge/Twitter-@sahilgaund-000000?style=for-the-badge&logo=x)](https://x.com/sahilgaund)

</div>

<br/>

---

<div align="center">

<img src="https://raw.githubusercontent.com/sahil-gaund03/cosmos/main/public/images/nebula-preview.png" alt="Nebula" width="60%" style="border-radius:8px;opacity:0.9" />

<br/><br/>

### ✦ NEXUS COSMOS

**`ALL SYSTEMS NOMINAL.`**

*Built for explorers of the universe.*

<br/>

[![Star this repo](https://img.shields.io/github/stars/sahil-gaund03/cosmos?style=social)](https://github.com/sahil-gaund03/cosmos)

<br/>

*© 2026 Sahil Gaund · MIT License*

</div>
