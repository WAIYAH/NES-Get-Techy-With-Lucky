# NEXUS ICT — ICT Consultant Portfolio

> **Portfolio Three** — A clean, professional, light-themed portfolio for a fictional ICT consultant named **NEXUS ICT**.

![Status](https://img.shields.io/badge/status-complete-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-semantic-orange) ![CSS3](https://img.shields.io/badge/CSS3-custom%20properties-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-CDN-06B6D4) ![JavaScript](https://img.shields.io/badge/JS-vanilla-yellow)

---

## Overview

A single-page portfolio website for **NEXUS ICT**, an ICT consultant specialising in cloud architecture, cybersecurity, digital transformation, and IT infrastructure modernisation. The design is clean, corporate-professional with a light theme, sky-blue primary color, and tech-forward aesthetic.

**Tagline:** *"Strategy. Security. Scale."*

---

## Design Contrast with Other Portfolios

| Aspect | Portfolio Two (GRAFINEX) | Portfolio Three (NEXUS ICT) |
|---|---|---|
| Theme | Dark (black bg, neon purple) | Light (white/slate bg, sky blue) |
| Personality | Bold, artistic, creative | Clean, corporate, trustworthy |
| Hero | Gradient + particles | Animated grid + terminal card |
| Typography | Inter only | Plus Jakarta Sans + Inter + JetBrains Mono |
| Unique Feature | Skill progress bars | Typing effect, tech marquee, process steps |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic, accessible structure |
| Tailwind CSS (CDN) | Utility-first responsive styling |
| CSS3 | Custom properties, animations, marquee, grid background |
| Vanilla JavaScript | Interactivity — typing effect, counters, carousel, filtering |
| Google Fonts | Plus Jakarta Sans, Inter, JetBrains Mono |

---

## Sections

1. **Hero** — Dark section with animated grid background, glowing orbs, typing effect cycling through specialties, and terminal-style visual card
2. **Tech Stack Marquee** — Auto-scrolling horizontal strip of technology badges
3. **About** — Bio, certifications (pill badges), animated stat counters (10+ Years, 80+ Clients, 200+ Projects, 99% Satisfaction)
4. **Services** — 6 service cards: Cloud, Cybersecurity, Infrastructure, Data/BI, Digital Transformation, IT Training
5. **Case Studies** — 6 project cards with category filter (Cloud / Security / Infrastructure / Data) and hover overlay
6. **Process** — 4-step methodology: Discover → Strategise → Implement → Optimise
7. **Testimonials** — 3-slide auto-rotating carousel with star ratings
8. **Contact** — Validated form (name, email, service, message) + email, phone, location + social links
9. **Footer** — Dark footer with copyright and nav links

---

## JavaScript Features

- Typing effect in hero (cycles through specialties)
- Smooth scrolling for all anchor links
- Mobile hamburger menu toggle
- Scroll-triggered reveal animations (up, left, right) via IntersectionObserver
- Animated stat counters on scroll
- Case study category filter (show/hide with transition)
- Testimonial auto-carousel with dot navigation and pause-on-hover
- Active nav link highlighting based on scroll position
- Contact form validation with per-field error messages
- Back-to-top button (appears after 300px)
- Header shadow on scroll

---

## Folder Structure

```
Portfolio Three/
├── index.html      # Complete single-page portfolio
├── style.css       # Custom CSS — grid bg, marquee, animations, variables
├── script.js       # All JavaScript functionality
└── README.md       # This file
```

---

## How to Run

1. Open `index.html` in any modern browser.
2. No build step, server, or installation required.
3. Tailwind CSS loads from CDN — internet connection needed on first load.

---

## Credits

- **Design & Code:** Built as part of the *Get Techy with Lucky* curriculum
- **Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Icons:** Inline SVGs (Heroicons style)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

---

*© 2025 NEXUS ICT — Portfolio Three*
