# Portfolio-Project

Personal portfolio web app built with React + Vite (JSX), Tailwind CSS, and Three.js (via React Three Fiber/Drei). Includes animated sections, interactive 3D elements, and responsive layout.

## Tech Stack
- React (JSX)
- Vite
- Tailwind CSS (v4)
- Framer Motion
- Three.js via React Three Fiber + Drei
- PostCSS + Autoprefixer

## Features
- Hero section with background image and animated elements
- About / Experience / Tech / Projects / Contact sections
- Smooth scroll-to-section navigation
- 3D canvases (Computers, Earth, Stars, Tech balls)
- Responsive layout (desktop + mobile)

## Project Structure
```
src/
  assets/            Images and icons
  components/        UI sections and canvas components
  components/canvas/ 3D canvases (R3F)
  constants/         Content data (projects, experiences, nav links)
  hoc/               Section wrapper (animation + anchors)
  styles.js          Shared Tailwind class strings
  utils/             Framer Motion variants
```

## Setup
```bash
npm install
```

## Development
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Key Files
- `src/App.jsx` - App layout and section order
- `src/components/Navbar.jsx` - Navigation + active section logic
- `src/components/Hero.jsx` - Hero content and visuals
- `src/components/About.jsx` - Intro + service cards
- `src/components/Experience.jsx` - Timeline
- `src/components/Tech.jsx` - Tech balls
- `src/components/Works.jsx` - Projects
- `src/components/Contact.jsx` - Contact form + 3D Earth
- `src/constants/index.js` - All text/content data
- `src/assets/index.js` - Asset exports
- `tailwind.config.js` - Custom colors + hero background

## Notes
- Hero background is controlled via `tailwind.config.js` (`hero-pattern`).
- Section anchors are handled by `SectionWrapper`.
- 3D animations use R3F/Drei canvases and may impact performance on low-end devices.

## Attribution
This project was initially built as a reference from another GitHub repo, then heavily customized with my own code and assets. I reworked and optimized many parts, updated dependencies to newer versions, and used it as a strong hands-on introduction to Tailwind CSS and Three.js, while expanding my overall knowledge.
