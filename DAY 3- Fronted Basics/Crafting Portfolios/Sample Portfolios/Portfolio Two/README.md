# GRAFINEX — Graphic Designer Portfolio

> **Portfolio Two** — A bold, dark-themed portfolio for a fictional graphic designer named **GRAFINEX**.

![Status](https://img.shields.io/badge/status-complete-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-semantic-orange) ![CSS3](https://img.shields.io/badge/CSS3-custom%20properties-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CDN-06B6D4) ![JavaScript](https://img.shields.io/badge/JS-vanilla-yellow)

---

## Overview

A single-page portfolio website for **GRAFINEX**, a graphic designer & visual storyteller. The design features a dark aesthetic with electric purple accents, animated sections, and a fully responsive layout.

**Tagline:** *"Designing the impossible. Delivering the unforgettable."*

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic, accessible page structure |
| Tailwind CSS (CDN) | Utility-first responsive styling — no build step |
| CSS3 | Custom properties, animations, gradients, scroll effects |
| Vanilla JavaScript | Interactivity — no frameworks or libraries |
| Google Fonts (Inter) | Typography |

---

## Sections

1. **Hero** — Full-screen animated gradient with particle effect, text reveal, and CTAs
2. **About** — Bio, animated skill progress bars, stat counters (IntersectionObserver)
3. **Services** — 6 service cards with hover lift effect and SVG icons
4. **Portfolio** — 6 project cards with category filter (JS), hover overlays
5. **Testimonials** — Auto-rotating carousel with pause-on-hover
6. **Contact** — Validated form (name, email, project type, message) + social links
7. **Footer** — Copyright + back-to-top button

---

## Features

- Smooth scrolling navigation
- Mobile hamburger menu
- Portfolio filtering by category (Branding / UI-UX / Print / Motion)
- Animated stat counters on scroll
- Scroll-triggered fade-in animations (IntersectionObserver)
- Skill bar animations
- Active nav link highlighting
- Testimonial auto-carousel with dot navigation
- Contact form validation with per-field error messages
- Back-to-top button (appears after 300px scroll)
- Custom scrollbar styling
- CSS particle animation in hero

---

## Folder Structure

```
Portfolio Two/
├── index.html      # Main HTML — all sections in one page
├── style.css       # Custom CSS — animations, variables, scrollbar
├── script.js       # All JavaScript functionality
└── README.md       # This file
```

---

## How to Run

1. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
2. No build step, server, or installation required.
3. Tailwind CSS loads from CDN — an internet connection is needed on first load.

---

## Credits

- **Design & Code:** Built as part of the *Get Techy with Lucky* curriculum
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- **Icons:** Inline SVGs (Heroicons style)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

---

*© 2025 GRAFINEX — Portfolio Two*
