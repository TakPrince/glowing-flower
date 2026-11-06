# Glowing Flower (React + Vite)

A glowing, blossoming floral night scene built with React, Vite, and pure CSS animations.

## Project Structure

```
├── index.html              # HTML entrypoint
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite build configuration
├── .gitignore              # Git ignore rules
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Main scene container & animation lifecycle
    ├── index.css           # Full CSS animation & styling engine
    └── components/
        ├── Flower.jsx      # Reusable flower component (stems, leaves, lights)
        ├── GrowingGrass.jsx# Animated foreground grass
        └── LongGrass.jsx   # Ambient background long grass with delay choreography
```

## Available Scripts

### Development Server
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates production-ready bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally.
