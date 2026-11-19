# Rebel Rover — Travel Agency Multi-Page Website

Responsive, accessible, and high-performance multi-page website for a travel agency, built from scratch with clean semantic HTML5, modular SCSS, and vanilla JavaScript.

🔗 **[Live Demo on GitHub Pages](https://github.io)**

## 🚀 Google Lighthouse Audit

 Desktop (`100 / 100 / 100 / 100`) | Mobile (`93 / 100 / 100 / 100`) |
| :---: | :---: |
| ![Desktop Lighthouse Score](./lighthouse-desktop.png) | ![Mobile Lighthouse Score](./lighthouse-mobile.png) |

## ✨ Key Features

- **Fluid Responsive Layout (1920px → 320px):** Adaptive typography and spacing using custom SCSS `clamp()` / `adaptiveValue` mixins without layout shifts or horizontal overflow.
- **Interactive Sliders (Swiper.js):** Three custom-configured carousels (*Explore*, *Gallery*, and *Testimonials*) supporting touch gestures, keyboard navigation, mousewheel control, and fractional slide previews.
- **Custom Grid Animations & Micro-Interactions:** Smooth hover transitions, expanding destination cards, and an accessible mobile burger menu.
- **Performance & Accessibility Optimized:**
  - Next-gen **WebP** graphics with responsive `<picture>` / `srcset` and lazy loading.
  - Non-blocking font & CSS loading strategy (`font-display: swap`, async stylesheets).
  - Full WCAG AA color contrast compliance, semantic HTML5 landmarks, and ARIA attributes.

## 🛠 Tech Stack

- **HTML5** (Semantic markup, BEM methodology, ARIA accessibility)
- **SCSS / Sass** (Modular architecture, CSS Grid, Flexbox, fluid `rem` calculations)
- **JavaScript (ES6+)** (Vanilla JS, Swiper.js integration)