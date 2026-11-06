<div align="center">

# 🌸 Glowing Flower

**An enchanting, blooming floral nightscape powered by React, Vite, and pure CSS3 animations.**

[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Pure_Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 🌙 Overview

**Glowing Flower** is an artistic web experience depicting glowing flowers blossoming in the dark under a radiant moon. Originally designed as an interactive romantic visual presentation (*"Blossoming Flowers at Magical Night"*), the project has been fully restructured into a clean, modern **React 19 + Vite** architecture with componentized elements, synchronized lifecycle management, and zero loss in visual fidelity.

---

## ✨ Features

- **Choreographed Blooming Sequences:** Over 50 synchronized CSS keyframes driving stem growth, unfolding petals, swaying foliage, and ambient lighting.
- **3D Perspective & Depth:** Utilizes CSS `perspective: 1000px`, dynamic 3D leaf rotations, and layered foreground/background z-indexing.
- **Synchronized Lifecycle Loading:** Initial pause state managed via React hooks to guarantee all blooming effects start simultaneously.
- **Modular Component Architecture:** Cleanly decomposed into reusable components (`<Flower />`, `<GrowingGrass />`, `<LongGrass />`).
- **Zero Heavy Dependencies:** 100% vector-free, image-free, and framework-light—all shapes, gradients, and glows are rendered purely through CSS.
- **Blazing Fast Development:** Bundled and served with Vite for instantaneous Hot Module Replacement (HMR).

---

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite 6](https://vitejs.dev/)
- **Styling:** Modern CSS3 (Keyframes, Radial Gradients, CSS Custom Properties, Flexbox)
- **Deployment Ready:** Vercel / Netlify / GitHub Pages

---

## 📁 Project Structure

```
glowing-flower/
├── .gitignore              # Ignored files (node_modules, dist)
├── index.html              # HTML entry point with initial pause class
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build & server configuration
├── README.md               # Project documentation
└── src/
    ├── main.jsx            # Application root mount
    ├── App.jsx             # Scene orchestrator & animation timer hook
    ├── index.css           # 1,000+ lines of pure CSS animation engine
    └── components/
        ├── Flower.jsx      # Individual flower with stems, petals & light particles
        ├── GrowingGrass.jsx# Foreground grass blades and ambient overlay
        └── LongGrass.jsx   # Ambient background grass clusters with delay timing
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TakPrince/glowing-flower.git
   cd glowing-flower
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the scene in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the local Vite dev server on port 3000 with HMR |
| `npm run build` | Compiles production assets into `dist/` |
| `npm run preview` | Locally serves the production build |

---

## 🌐 Deployment

### Deploy to Vercel (1-Click)
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel will automatically detect the **Vite** preset. Click **Deploy**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
