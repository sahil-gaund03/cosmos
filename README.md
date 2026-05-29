# NEXUS COSMOS — Space Intelligence Operating System

[![Build Status](https://img.shields.io/badge/Build-Passing-success?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Framework: Next.js 16](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![WebGL: Three.js](https://img.shields.io/badge/WebGL-Three.js-lightgrey?style=flat-square&logo=three.js)](https://threejs.org/)

NEXUS COSMOS is a high-fidelity, interactive space command and telemetry dashboard. It aggregates real-time data from NASA Open APIs, live satellite tracking systems, and solar intelligence networks, combining WebGL 3D views with Gemini AI reasoning to present an immersive astronomical dashboard.

---

## 🛰️ Core Features

1. **ISS Real-Time Tracking**: Locates the International Space Station on a live map interface with live speeds, altitude parameters, and telemetry nodes.
2. **3D Planetary Explorer**: Interactive WebGL solar system using physics parameters for orbital mechanics, complete with atmospheric dossiers and textures.
3. **NASA Media Library**: High-fidelity search and zoom functionality with pan and full-screen viewports of deep space discoveries.
4. **AI Space Assistant**: A Gemini-powered chat companion to query celestial telemetry, astronomy trivia, and physical phenomena.
5. **Space Weather Tracker**: Real-time solar winds speed, geomagnetic Kp-index charts, solar flares warnings, and aurora forecast models.
6. **Launch Intelligence**: Integrated lists tracking historic and upcoming space launches from global space organizations (NASA, SpaceX, ISRO).

---

## 🛠️ Technology Stack

- **Core Framework**: React 19, Next.js 16 (App Router, Turbopack)
- **3D Graphics & Telemetry**: Three.js / WebGL, HTML5 Canvas
- **Animations & Interaction**: Framer Motion (micro-interactions & page transitions)
- **Styling & Theme**: CSS Variable tokens, TailwindCSS, Glassmorphism
- **AI Processing**: Google Gemini API Integration

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahil-gaund03/cosmos.git
   cd cosmos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your local environment variables. Create a `.env.local` file in the root directory:
   ```env
   # Google Gemini API key for the AI Space Assistant
   GEMINI_API_KEY=your_gemini_api_key_here

   # NASA Open API Key (defaults to DEMO_KEY if not provided)
   NASA_API_KEY=your_nasa_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the portal.

---

## 🌍 Production Deployment

### Building the Application

Ensure the application compiles clean without typescript or linter warnings:
```bash
npm run build
```

To run the production bundle locally:
```bash
npm run start
```

### Vercel Deployment

Deploy directly by connecting the GitHub repository to [Vercel](https://vercel.com/):
1. Import the repository in Vercel.
2. Define `GEMINI_API_KEY` and `NASA_API_KEY` in the project's Environment Variables settings.
3. Deploy! Next.js edge proxies and API endpoints are auto-configured for Edge deployment.

---

## ⚖️ Legal & Attributions

- **Code License**: Open-source MIT License. See [LICENSE](./LICENSE) for details.
- **Data & Imagery**: Space photography, astronomical data streams, and planetary telemetry are provided courtesy of the National Aeronautics and Space Administration (NASA). Works created by NASA are generally in the public domain.
