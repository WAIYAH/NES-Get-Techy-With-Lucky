# Building a Beautiful Professional Portfolio with HTML, CSS & JavaScript

A portfolio is your most powerful career asset. This guide walks you through building one that's visually stunning, technically impressive, and genuinely memorable.

---

## Table of Contents

1. [Why Build Your Own Portfolio?](#why-build-your-own)
2. [Planning & Content Strategy](#planning)
3. [HTML Structure](#html-structure)
4. [CSS Styling & Design](#css-styling)
5. [JavaScript Interactivity](#javascript-interactivity)
6. [Section-by-Section Breakdown](#section-breakdown)
7. [Animations & Visual Effects](#animations)
8. [Responsiveness & Mobile Design](#responsive)
9. [Performance & Accessibility](#performance)
10. [Common Mistakes to Avoid](#mistakes)
11. [Complete Starter Template](#template)
12. [Resources](#resources)

---

## 1. Why Build Your Own Portfolio? {#why-build-your-own}

Using a template builder (like Wix or Squarespace) is fast — but building from scratch is better for developers. Here's why:

- **It IS your portfolio.** Your code quality, design sense, and attention to detail are all on display.
- **Full creative control** — no template constraints or branding you can't remove.
- **Shows real skills** — hiring managers and clients know you built it yourself.
- **Infinite customizability** — you can add anything: 3D effects, WebGL, live APIs, animations.

---

## 2. Planning & Content Strategy {#planning}

Before writing a single line of code, plan what goes into your portfolio.

### Define Your Goal

Ask yourself:
- Who is the audience? (recruiters, clients, collaborators?)
- What action do I want them to take? (hire me, contact me, buy my service?)
- What impression do I want to leave? (creative, reliable, technical, versatile?)

### Must-Have Sections

| Section | Purpose |
|---|---|
| **Hero** | First impression — who you are and what you do |
| **About** | Your story, values, and personality |
| **Projects** | Your best work with context and results |
| **Skills** | Technologies and tools you use |
| **Contact** | How to reach you |

### Nice-to-Have Sections

- Testimonials / recommendations
- Blog or articles
- Resume / CV (downloadable PDF)
- Certifications and badges
- Dark mode toggle
- Language switcher

### Gathering Content Before You Code

- Write your bio (2–3 short paragraphs, authentic tone)
- Select 3–6 projects (quality over quantity)
- For each project, prepare: title, description, problem solved, tech stack, results/impact, screenshots, live URL, and code URL
- Collect social links: GitHub, LinkedIn, Twitter/X, etc.
- Have a professional email address (firstname.lastname@domain.com)
- Prepare a downloadable PDF resume

---

## 3. HTML Structure {#html-structure}

Use **semantic HTML5** throughout. This improves accessibility, SEO, and code readability.

### Document Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Jane Doe – Full-Stack Developer & Designer" />
  <title>Jane Doe | Portfolio</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
</head>
<body>

  <header>...</header>
  <nav>...</nav>

  <main>
    <section id="hero">...</section>
    <section id="about">...</section>
    <section id="projects">...</section>
    <section id="skills">...</section>
    <section id="contact">...</section>
  </main>

  <footer>...</footer>

  <script src="main.js"></script>
</body>
</html>
```

### Key Semantic Tags

```html
<!-- Use these instead of plain divs wherever possible -->
<header>    <!-- Site header / hero area -->
<nav>       <!-- Navigation links -->
<main>      <!-- Primary content -->
<section>   <!-- Distinct content sections -->
<article>   <!-- Self-contained content (project cards, blog posts) -->
<aside>     <!-- Secondary info (sidebar, callouts) -->
<footer>    <!-- Footer content -->
<figure>    <!-- Images with captions -->
<figcaption><!-- Caption for a figure -->
<time>      <!-- Dates/times (use datetime attribute) -->
```

### Project Card HTML

```html
<article class="project-card">
  <figure class="project-image">
    <img src="project-screenshot.png" alt="E-Commerce App screenshot" loading="lazy" />
  </figure>
  <div class="project-content">
    <h3>E-Commerce App</h3>
    <p class="project-description">
      A full-stack store built for a local business, increasing their online sales by 40%.
    </p>
    <ul class="tech-stack">
      <li>React</li>
      <li>Node.js</li>
      <li>MongoDB</li>
    </ul>
    <div class="project-links">
      <a href="#" target="_blank" rel="noopener noreferrer">Live Demo →</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  </div>
</article>
```

---

## 4. CSS Styling & Design {#css-styling}

### CSS Variables — Your Design System

Define your palette, typography, and spacing up front. This makes theming and dark mode trivial.

```css
:root {
  /* Colors */
  --color-primary: #0a66c2;
  --color-accent: #f4a261;
  --color-bg: #ffffff;
  --color-surface: #f8f9fa;
  --color-text: #1a1a2e;
  --color-text-muted: #6b7280;
  --color-border: #e5e7eb;

  /* Typography */
  --font-display: 'Playfair Display', serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 24px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.12);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.16);

  /* Transitions */
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Dark Mode with CSS Variables

```css
[data-theme="dark"] {
  --color-bg: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --color-border: #2a2a2a;
}
```

Toggle in JS with:
```js
document.documentElement.setAttribute('data-theme', 'dark');
```

### Modern Layout with CSS Grid

```css
/* Projects grid — responsive without media queries */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-md);
}

/* Hero with centered content */
.hero {
  display: grid;
  place-items: center;
  min-height: 100vh;
  text-align: center;
}

/* Asymmetric about section */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-lg);
  align-items: start;
}
```

### Typography Rules

```css
/* Scale */
h1 { font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1.1; }
h2 { font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.2; }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.8rem); line-height: 1.3; }
p  { font-size: 1rem; line-height: 1.7; color: var(--color-text-muted); }

/* Display font for headings, body font for prose */
h1, h2, h3 { font-family: var(--font-display); }
body        { font-family: var(--font-body); }
code, pre   { font-family: var(--font-mono); }
```

### Polished Button Styles

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--color-primary);
  color: white;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  filter: brightness(1.1);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}
.btn-outline:hover {
  background: var(--color-primary);
  color: white;
}
```

### Project Card Hover Effect

```css
.project-card {
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: var(--transition);
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.project-image img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}
```

---

## 5. JavaScript Interactivity {#javascript-interactivity}

### Smooth Scrolling Navigation

```js
// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

### Dark Mode Toggle

```js
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Respect system preference on first load
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
```

### Animate Elements on Scroll

```js
// Reveal elements as they scroll into view
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target); // Only animate once
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
```

```css
/* CSS for the reveal animation */
[data-reveal] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger children */
[data-reveal]:nth-child(2) { transition-delay: 0.1s; }
[data-reveal]:nth-child(3) { transition-delay: 0.2s; }
[data-reveal]:nth-child(4) { transition-delay: 0.3s; }
```

### Animated Skill Bars

```html
<div class="skill" data-level="90">
  <span class="skill-name">JavaScript</span>
  <div class="skill-track">
    <div class="skill-fill"></div>
  </div>
</div>
```

```js
const skills = document.querySelectorAll('.skill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      const level = entry.target.dataset.level;
      fill.style.width = level + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skills.forEach(skill => skillObserver.observe(skill));
```

```css
.skill-track {
  height: 8px;
  background: var(--color-border);
  border-radius: 99px;
  overflow: hidden;
}
.skill-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 99px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Contact Form Validation

```js
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate
  if (!name || !email || !message) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Submit (integrate with Formspree, EmailJS, etc.)
  try {
    const res = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      showStatus('Message sent! I\'ll be in touch soon.', 'success');
      contactForm.reset();
    } else {
      showStatus('Something went wrong. Try again.', 'error');
    }
  } catch {
    showStatus('Network error. Please try again.', 'error');
  }
});

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = `form-status form-status--${type}`;
}
```

### Typewriter Hero Effect

```js
const phrases = ['Web Developer', 'UI Designer', 'Problem Solver', 'Open to Work'];
const typeTarget = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = phrases[phraseIndex];
  typeTarget.textContent = current.slice(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 80);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 40);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, isDeleting ? 1000 : 400);
  }
}
type();
```

---

## 6. Section-by-Section Breakdown {#section-breakdown}

### Hero Section

Your hero must immediately communicate: **who you are**, **what you do**, and **what to do next**.

```html
<section id="hero">
  <div class="hero-content">
    <span class="hero-tag">👋 Available for hire</span>
    <h1>Hi, I'm <span class="highlight">Jane Doe</span></h1>
    <h2>I build <span id="typewriter">Web Applications</span></h2>
    <p>Full-stack developer specializing in React and Node.js, turning ideas into fast, accessible, and beautiful products.</p>
    <div class="hero-cta">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-outline">Get in Touch</a>
    </div>
  </div>
  <div class="hero-visual">
    <img src="profile.jpg" alt="Jane Doe" class="profile-photo" />
  </div>
</section>
```

**Tips:**
- Use `clamp()` for fluid font sizes
- Add a subtle animated gradient or particle background
- Keep copy concise — 1 headline, 1 subheadline, 1 paragraph, 2 CTAs

### About Section

Show personality, not just a resume summary.

```html
<section id="about">
  <h2 class="section-title">About Me</h2>
  <div class="about-layout">
    <div class="about-image">
      <img src="about-photo.jpg" alt="Jane working at her desk" />
    </div>
    <div class="about-text">
      <p>I'm a self-taught developer from Nairobi with 4 years of experience building products for startups and agencies. I care deeply about clean code and accessible design.</p>
      <p>When I'm not coding, I'm hiking, writing, or contributing to open source. I believe software should solve real human problems — beautifully.</p>
      <a href="resume.pdf" download class="btn btn-primary">Download Resume ↓</a>
    </div>
  </div>
</section>
```

### Projects Section

This is the core of your portfolio. Put the best project first.

**For each project, communicate:**
1. What it does (1 sentence)
2. The problem it solved
3. Your role and tech stack
4. Impact (users, revenue, time saved, etc.)
5. Links (live + code)

### Skills Section

Don't just list skills — show proficiency and context.

```html
<section id="skills">
  <h2 class="section-title">Skills & Tools</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Frontend</h3>
      <div class="skill" data-level="95">
        <span>HTML & CSS</span>
        <div class="skill-track"><div class="skill-fill"></div></div>
      </div>
      <!-- More skills... -->
    </div>
  </div>
</section>
```

### Contact Section

Make it as easy as possible to reach you.

- Show your email **visibly** (don't hide it behind a form)
- Add social icons with accessible labels
- Use a real form service (Formspree, EmailJS, Netlify Forms)
- State your availability and response time

---

## 7. Animations & Visual Effects {#animations}

### CSS Gradient Hero Background

```css
.hero {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Floating Profile Image

```css
.profile-photo {
  animation: float 6s ease-in-out infinite;
  border-radius: 50%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-16px); }
}
```

### Glowing CTA Button

```css
.btn-primary {
  box-shadow: 0 0 0 0 rgba(10, 102, 194, 0.5);
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(10, 102, 194, 0.5); }
  70%  { box-shadow: 0 0 0 14px rgba(10, 102, 194, 0); }
  100% { box-shadow: 0 0 0 0 rgba(10, 102, 194, 0); }
}
```

### Magnetic Cursor Effect (Advanced)

```js
document.querySelectorAll('.btn, .project-card').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});
```

---

## 8. Responsiveness & Mobile Design {#responsive}

### Mobile-First Approach

Write base styles for mobile, then scale up:

```css
/* Mobile (default) */
.hero { flex-direction: column; text-align: center; }
.about-layout { grid-template-columns: 1fr; }
.nav-links { display: none; }

/* Tablet */
@media (min-width: 768px) {
  .nav-links { display: flex; }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero { flex-direction: row; text-align: left; }
  .about-layout { grid-template-columns: 1fr 2fr; }
}
```

### Hamburger Menu for Mobile

```html
<button class="menu-toggle" id="menu-toggle" aria-label="Open navigation">
  <span></span><span></span><span></span>
</button>
```

```js
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});
```

### Fluid Typography

```css
/* Scales smoothly between 16px (mobile) and 18px (desktop) */
html { font-size: clamp(1rem, 1.5vw, 1.125rem); }

/* Large heading that never breaks layout */
h1 { font-size: clamp(2rem, 5vw + 1rem, 5rem); }
```

---

## 9. Performance & Accessibility {#performance}

### Performance Tips

```html
<!-- Preload critical resources -->
<link rel="preload" href="fonts/display.woff2" as="font" crossorigin />
<link rel="preload" href="hero-bg.jpg" as="image" />

<!-- Lazy load images below the fold -->
<img src="project.jpg" loading="lazy" alt="Project screenshot" />

<!-- Use modern image formats -->
<picture>
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="Profile photo" />
</picture>
```

### Accessibility Essentials

```html
<!-- Always use alt text -->
<img src="..." alt="Descriptive text" />

<!-- Accessible icon buttons -->
<button aria-label="Toggle dark mode">🌙</button>

<!-- Skip navigation for keyboard users -->
<a href="#main" class="skip-link">Skip to content</a>

<!-- Proper heading hierarchy -->
<h1>Name</h1>         <!-- One per page -->
  <h2>Section Title</h2>  <!-- Section headings -->
    <h3>Card Title</h3>   <!-- Card/sub-headings -->

<!-- ARIA for dynamic content -->
<div role="status" aria-live="polite" id="form-status"></div>
```

```css
/* Never remove focus outlines — customize them instead */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
}

/* Skip link — visible on focus */
.skip-link {
  position: absolute;
  transform: translateY(-100%);
}
.skip-link:focus {
  transform: translateY(0);
}
```

### Color Contrast

Always aim for at least **4.5:1** contrast ratio for normal text, and **3:1** for large text. Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## 10. Common Mistakes to Avoid {#mistakes}

| Mistake | Fix |
|---|---|
| Including every project you've ever made | Show only your 3–6 best, with context |
| No descriptions on projects | Explain the problem, solution, and impact |
| Broken links | Audit all links before publishing |
| Unprofessional email | Use firstname@domain.com |
| Non-responsive design | Test on real devices and browsers |
| Wall of text in the About section | Break it into short paragraphs; add a photo |
| No call-to-action | Every section should guide the user somewhere |
| Generic lorem ipsum placeholder text | Replace all placeholder content before launch |
| Slow load times | Compress images, minimize CSS/JS |
| Missing contact information | Show email visibly; don't hide it in forms only |
| Fake or empty testimonials | Leave the section out entirely if you have none |
| No favicon | Add a simple favicon — it's a small but noticed detail |

---

## 11. Complete Starter Template {#template}

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Jane Doe – Full-Stack Developer" />
  <title>Jane Doe | Developer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    /* ─── Variables ─── */
    :root {
      --primary: #0a66c2;
      --accent:  #f4a261;
      --bg:      #ffffff;
      --surface: #f8f9fa;
      --text:    #1a1a2e;
      --muted:   #6b7280;
      --border:  #e5e7eb;
      --font-d:  'Playfair Display', serif;
      --font-b:  'DM Sans', sans-serif;
      --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    [data-theme="dark"] {
      --bg: #0f0f0f; --surface: #1a1a1a; --text: #f1f5f9;
      --muted: #94a3b8; --border: #2a2a2a;
    }

    /* ─── Reset ─── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: clamp(1rem, 1.5vw, 1.1rem); }
    body { font-family: var(--font-b); background: var(--bg); color: var(--text); transition: background var(--transition), color var(--transition); }
    img  { max-width: 100%; display: block; }
    a    { color: inherit; text-decoration: none; }

    /* ─── Typography ─── */
    h1, h2, h3 { font-family: var(--font-d); line-height: 1.15; }
    h1 { font-size: clamp(2.5rem, 6vw, 5rem); }
    h2 { font-size: clamp(1.8rem, 4vw, 3rem); }
    p  { line-height: 1.7; color: var(--muted); }

    /* ─── Layout ─── */
    .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
    section { padding: 6rem 0; }
    .section-title { text-align: center; margin-bottom: 3rem; }
    .section-title::after {
      content: ''; display: block; width: 60px; height: 4px;
      background: var(--accent); border-radius: 2px; margin: 0.75rem auto 0;
    }

    /* ─── Navbar ─── */
    nav {
      position: fixed; top: 0; width: 100%; z-index: 100;
      background: rgba(255,255,255,0.85); backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border); transition: var(--transition);
    }
    [data-theme="dark"] nav { background: rgba(15,15,15,0.85); }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; max-width: 1100px; margin: 0 auto; }
    .nav-logo { font-family: var(--font-d); font-size: 1.4rem; color: var(--primary); }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { font-weight: 500; position: relative; padding-bottom: 2px; }
    .nav-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--primary); transition: width 0.3s; }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
    #theme-toggle { background: none; border: 1px solid var(--border); border-radius: 50px; padding: 0.4rem 0.9rem; cursor: pointer; font-size: 1rem; transition: var(--transition); }
    #theme-toggle:hover { background: var(--surface); }

    /* ─── Hero ─── */
    #hero {
      min-height: 100vh; display: grid; place-items: center;
      background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
      background-size: 200% 200%; animation: bg 12s ease infinite; color: white;
    }
    @keyframes bg { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
    .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1100px; padding: 0 1.5rem; }
    .hero-tag { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 99px; padding: 0.35rem 1rem; font-size: 0.85rem; margin-bottom: 1.25rem; }
    .hero h1 .highlight { color: var(--accent); }
    .hero h2 { font-size: clamp(1.2rem, 3vw, 1.8rem); font-family: var(--font-b); font-weight: 400; margin: 0.75rem 0 1rem; color: rgba(255,255,255,0.8); }
    .hero p { color: rgba(255,255,255,0.65); margin-bottom: 2rem; }
    .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
    .hero-photo { border-radius: 50%; width: 320px; height: 320px; object-fit: cover; border: 4px solid rgba(255,255,255,0.2); box-shadow: 0 20px 60px rgba(0,0,0,0.4); animation: float 6s ease-in-out infinite; justify-self: center; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }

    /* ─── Buttons ─── */
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; border-radius: 99px; font-weight: 600; font-family: var(--font-b); transition: var(--transition); cursor: pointer; border: none; font-size: 1rem; }
    .btn-primary { background: var(--accent); color: white; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(244,162,97,0.4); }
    .btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.4); }
    .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }

    /* ─── About ─── */
    .about-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
    .about-photo { border-radius: 1rem; box-shadow: 0 16px 48px rgba(0,0,0,0.15); }
    .about-text p { margin-bottom: 1.25rem; }

    /* ─── Projects ─── */
    #projects { background: var(--surface); }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
    .project-card { background: var(--bg); border: 1px solid var(--border); border-radius: 1rem; overflow: hidden; transition: var(--transition); }
    .project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); border-color: var(--primary); }
    .project-card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
    .project-body { padding: 1.5rem; }
    .project-body h3 { margin-bottom: 0.5rem; }
    .project-body p { font-size: 0.9rem; margin-bottom: 1rem; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem; list-style: none; }
    .tech-stack li { background: var(--surface); border: 1px solid var(--border); border-radius: 99px; padding: 0.2rem 0.75rem; font-size: 0.78rem; font-weight: 600; color: var(--primary); }
    .project-links { display: flex; gap: 1rem; }
    .project-links a { font-size: 0.9rem; font-weight: 600; color: var(--primary); border-bottom: 1px dashed var(--primary); }
    .project-links a:hover { border-bottom-style: solid; }

    /* ─── Skills ─── */
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3rem; }
    .skill-category h3 { margin-bottom: 1.5rem; }
    .skill { margin-bottom: 1.25rem; }
    .skill-label { display: flex; justify-content: space-between; margin-bottom: 0.4rem; font-size: 0.9rem; font-weight: 500; }
    .skill-track { height: 8px; background: var(--border); border-radius: 99px; overflow: hidden; }
    .skill-fill { height: 100%; width: 0; background: linear-gradient(90deg, var(--primary), var(--accent)); border-radius: 99px; transition: width 1.2s cubic-bezier(0.4,0,0.2,1); }

    /* ─── Contact ─── */
    #contact { background: var(--surface); }
    .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
    .contact-info h3 { margin-bottom: 1rem; }
    .contact-info a { color: var(--primary); font-weight: 500; border-bottom: 1px solid; }
    .social-links { display: flex; gap: 1rem; margin-top: 1.5rem; }
    .social-links a { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border); transition: var(--transition); font-size: 1.2rem; }
    .social-links a:hover { background: var(--primary); color: white; border-color: var(--primary); }
    form { display: grid; gap: 1rem; }
    input, textarea {
      width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border); border-radius: 0.5rem;
      background: var(--bg); color: var(--text); font-family: var(--font-b); font-size: 1rem;
      transition: border-color 0.2s;
    }
    input:focus, textarea:focus { outline: none; border-color: var(--primary); }
    textarea { resize: vertical; min-height: 140px; }
    .form-status { font-size: 0.9rem; font-weight: 500; padding: 0.5rem; border-radius: 0.4rem; }
    .form-status--success { background: #d1fae5; color: #065f46; }
    .form-status--error   { background: #fee2e2; color: #991b1b; }

    /* ─── Footer ─── */
    footer { text-align: center; padding: 2rem; border-top: 1px solid var(--border); font-size: 0.9rem; color: var(--muted); }

    /* ─── Reveal Animation ─── */
    [data-reveal] { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
    [data-reveal].revealed { opacity: 1; transform: translateY(0); }

    /* ─── Responsive ─── */
    @media (max-width: 768px) {
      .hero-inner, .about-layout, .contact-layout { grid-template-columns: 1fr; text-align: center; }
      .hero-photo { order: -1; width: 220px; height: 220px; }
      .hero-cta { justify-content: center; }
      .nav-links { display: none; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav>
    <div class="nav-inner">
      <span class="nav-logo">JD.</span>
      <ul class="nav-links" id="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
    </div>
  </nav>

  <main>

    <!-- Hero -->
    <section id="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <span class="hero-tag">👋 Open to opportunities</span>
          <h1>Hi, I'm <span class="highlight">Jane Doe</span></h1>
          <h2>I build <span id="typewriter">Web Applications</span><span class="cursor">|</span></h2>
          <p>Full-stack developer specializing in React and Node.js. I turn ideas into fast, accessible, and beautiful digital products.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <img src="https://i.pravatar.cc/400?img=47" alt="Jane Doe" class="hero-photo" />
      </div>
    </section>

    <!-- About -->
    <section id="about">
      <div class="container">
        <h2 class="section-title" data-reveal>About Me</h2>
        <div class="about-layout">
          <img src="https://i.pravatar.cc/500?img=47" alt="Jane at her desk" class="about-photo" data-reveal />
          <div class="about-text" data-reveal>
            <p>I'm a full-stack developer based in Nairobi with 4 years of professional experience building web applications for startups and agencies. I care deeply about clean code, accessible design, and shipping work that actually helps people.</p>
            <p>Before going full-time into tech, I studied communication — which gives me an edge in working with clients, writing clear documentation, and designing interfaces that are intuitive for real users.</p>
            <p>When I'm not at my keyboard, I'm hiking, reading science fiction, or mentoring junior developers online.</p>
            <a href="resume.pdf" download class="btn btn-primary" style="margin-top:1.5rem">Download Resume ↓</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects">
      <div class="container">
        <h2 class="section-title" data-reveal>Selected Work</h2>
        <div class="projects-grid">

          <article class="project-card" data-reveal>
            <img src="https://placehold.co/640x360/0a66c2/ffffff?text=Project+1" alt="E-Commerce App" loading="lazy" />
            <div class="project-body">
              <h3>E-Commerce Platform</h3>
              <p>Rebuilt a local retailer's online store, cutting checkout time in half and boosting conversions by 38%.</p>
              <ul class="tech-stack">
                <li>React</li><li>Node.js</li><li>MongoDB</li><li>Stripe</li>
              </ul>
              <div class="project-links">
                <a href="#" target="_blank" rel="noopener">Live Demo →</a>
                <a href="#" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </article>

          <article class="project-card" data-reveal>
            <img src="https://placehold.co/640x360/302b63/ffffff?text=Project+2" alt="Task Manager App" loading="lazy" />
            <div class="project-body">
              <h3>Team Task Manager</h3>
              <p>A real-time collaborative task board for remote teams, with drag-and-drop, notifications, and role-based access.</p>
              <ul class="tech-stack">
                <li>Next.js</li><li>TypeScript</li><li>Socket.io</li><li>PostgreSQL</li>
              </ul>
              <div class="project-links">
                <a href="#" target="_blank" rel="noopener">Live Demo →</a>
                <a href="#" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </article>

          <article class="project-card" data-reveal>
            <img src="https://placehold.co/640x360/24243e/ffffff?text=Project+3" alt="Weather Dashboard" loading="lazy" />
            <div class="project-body">
              <h3>Weather Dashboard</h3>
              <p>A clean, location-aware weather app with 7-day forecasts, hourly charts, and animated sky conditions.</p>
              <ul class="tech-stack">
                <li>Vue.js</li><li>OpenWeatherAPI</li><li>Chart.js</li>
              </ul>
              <div class="project-links">
                <a href="#" target="_blank" rel="noopener">Live Demo →</a>
                <a href="#" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills">
      <div class="container">
        <h2 class="section-title" data-reveal>Skills & Tools</h2>
        <div class="skills-grid">
          <div class="skill-category" data-reveal>
            <h3>Frontend</h3>
            <div class="skill" data-level="95"><div class="skill-label"><span>HTML & CSS</span><span>95%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="90"><div class="skill-label"><span>JavaScript</span><span>90%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="85"><div class="skill-label"><span>React / Next.js</span><span>85%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
          </div>
          <div class="skill-category" data-reveal>
            <h3>Backend</h3>
            <div class="skill" data-level="80"><div class="skill-label"><span>Node.js</span><span>80%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="75"><div class="skill-label"><span>PostgreSQL</span><span>75%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="70"><div class="skill-label"><span>REST APIs</span><span>70%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
          </div>
          <div class="skill-category" data-reveal>
            <h3>Tools</h3>
            <div class="skill" data-level="90"><div class="skill-label"><span>Git & GitHub</span><span>90%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="80"><div class="skill-label"><span>Figma</span><span>80%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
            <div class="skill" data-level="75"><div class="skill-label"><span>Docker</span><span>75%</span></div><div class="skill-track"><div class="skill-fill"></div></div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact">
      <div class="container">
        <h2 class="section-title" data-reveal>Get In Touch</h2>
        <div class="contact-layout">
          <div class="contact-info" data-reveal>
            <h3>Let's work together</h3>
            <p>I'm open to freelance projects, full-time roles, and interesting collaborations. I typically respond within 24 hours.</p>
            <p style="margin-top:1rem">📧 <a href="mailto:jane@example.com">jane@example.com</a></p>
            <p>📍 Nairobi, Kenya (Remote-friendly)</p>
            <div class="social-links">
              <a href="#" aria-label="GitHub">🐙</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div data-reveal>
            <form id="contact-form" novalidate>
              <input type="text" id="name" placeholder="Your Name" required />
              <input type="email" id="email" placeholder="Your Email" required />
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" class="btn btn-primary">Send Message →</button>
              <div id="form-status" class="form-status" role="status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>© 2026 Jane Doe — Built with HTML, CSS & JavaScript ✦ All rights reserved</p>
  </footer>

  <script>
    // ─── Dark Mode ───
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', saved);
    toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      toggle.textContent = next === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('theme', next);
    });

    // ─── Active Nav ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { threshold: 0.4 }).observe = (() => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
            if (a) a.classList.add('active');
          }
        });
      }, { threshold: 0.4 });
      sections.forEach(s => obs.observe(s));
    })();

    // ─── Reveal on Scroll ───
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

    // ─── Skill Bars ───
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelector('.skill-fill').style.width = e.target.dataset.level + '%';
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.skill[data-level]').forEach(s => skillObs.observe(s));

    // ─── Typewriter ───
    const phrases = ['Web Applications', 'REST APIs', 'Beautiful UIs', 'Scalable Products'];
    const tw = document.getElementById('typewriter');
    let pi = 0, ci = 0, del = false;
    (function type() {
      tw.textContent = phrases[pi].slice(0, ci);
      if (!del && ci < phrases[pi].length) { ci++; setTimeout(type, 80); }
      else if (del && ci > 0) { ci--; setTimeout(type, 40); }
      else { del = !del; if (!del) pi = (pi + 1) % phrases.length; setTimeout(type, del ? 1200 : 400); }
    })();

    // ─── Contact Form ───
    document.getElementById('contact-form').addEventListener('submit', async e => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const status = document.getElementById('form-status');
      if (!name || !email || !message) { status.textContent = 'Please fill in all fields.'; status.className = 'form-status form-status--error'; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { status.textContent = 'Please enter a valid email.'; status.className = 'form-status form-status--error'; return; }
      status.textContent = 'Message sent! I\'ll be in touch soon 👋'; status.className = 'form-status form-status--success';
      e.target.reset();
    });
  </script>
</body>
</html>
```

---

## 12. Resources {#resources}

### Fonts
- [Google Fonts](https://fonts.google.com) — Free web fonts
- [Font Pair](https://www.fontpair.co) — Font pairing suggestions

### Color Tools
- [Coolors](https://coolors.co) — Palette generator
- [Realtime Colors](https://www.realtimecolors.com) — Preview palettes live
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Icons & Illustrations
- [Lucide Icons](https://lucide.dev) — Clean SVG icon set
- [Heroicons](https://heroicons.com) — Tailwind-style icons
- [Undraw](https://undraw.co) — Free open-source illustrations

### Hosting (Free)
- [Vercel](https://vercel.com) — Best for Next.js / React
- [Netlify](https://netlify.com) — Great for static sites + forms
- [GitHub Pages](https://pages.github.com) — Simple, free, reliable

### Form Handling
- [Formspree](https://formspree.io) — Contact forms without a backend
- [EmailJS](https://www.emailjs.com) — Send emails directly from JS

### Inspiration
- [Awwwards Portfolios](https://www.awwwards.com/websites/portfolio/)
- [Brittany Chiang's Portfolio](https://brittanychiang.com) — Widely cited example
- [Dracula Theme](https://draculatheme.com) — Dark-mode color inspiration

### Docs
- [MDN Web Docs](https://developer.mozilla.org) — The definitive reference
- [CSS Tricks](https://css-tricks.com) — Guides, snippets, and flexbox/grid references
- [JavaScript.info](https://javascript.info) — Modern JS tutorials

---

*Good luck building something memorable. Your portfolio is never truly finished — keep updating it as you grow.*