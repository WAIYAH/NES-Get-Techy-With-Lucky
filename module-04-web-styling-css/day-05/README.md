# 📅 Day 05 of Module 04 — Responsive Design & Media Queries

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what responsive design is and why it matters
- Use the viewport meta tag correctly
- Write media queries to adapt layouts for different screen sizes
- Apply a mobile-first design approach
- Build a fully responsive web page that works on phones, tablets, and desktops

---

## 📖 Lesson Content

### What Is Responsive Design?

Responsive design means your website **adapts to any screen size** — from a phone to a widescreen monitor. The same HTML, different CSS layouts.

**Over 60% of web traffic** comes from mobile devices. If your site doesn't work on phones, you're ignoring most of your users.

### The Viewport Meta Tag

Every responsive page needs this in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers zoom out to fit the "desktop" version of your site on a tiny screen — making everything unreadably small.

### Media Queries

Media queries let you apply CSS **only when certain conditions are met** (usually screen width):

```css
/* Default styles (applies to all screens) */
.container {
  padding: 1rem;
}

/* Tablet and up (768px+) */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop and up (1024px+) */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Large desktop (1200px+) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

### Common Breakpoints

| Breakpoint | Typical Device | Width |
|-----------|---------------|-------|
| Small | Small phones | `< 576px` |
| Medium | Large phones / small tablets | `≥ 576px` |
| Large | Tablets | `≥ 768px` |
| Extra large | Laptops / desktops | `≥ 1024px` |
| XXL | Large desktops | `≥ 1200px` |

> 💡 Don't design for specific devices — design for your content. Add a breakpoint when your layout starts to look bad.

### Mobile-First Approach

**Mobile-first** means writing your base CSS for the smallest screen, then adding complexity for larger screens with `min-width` queries.

```css
/* Mobile first — base styles */
.nav-links {
  display: none;  /* Hidden on mobile */
}

.hamburger {
  display: block; /* Visible on mobile */
}

/* Tablet+ */
@media (min-width: 768px) {
  .nav-links {
    display: flex;   /* Show links */
  }

  .hamburger {
    display: none;   /* Hide hamburger */
  }
}
```

**Why mobile-first?**
- Forces you to prioritise content
- Mobile CSS is simpler (single column, stacked elements)
- Builds UP in complexity rather than hacking DOWN

### Responsive Typography

```css
/* Fluid font sizes */
html {
  font-size: 14px;
}

@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  html {
    font-size: 18px;
  }
}
```

Because we used `rem` everywhere (Day 02), changing the root font-size scales **everything** proportionally.

#### CSS `clamp()` for Fluid Sizing

```css
h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  /* min: 1.8rem, preferred: 4% of viewport width, max: 3rem */
}
```

`clamp()` creates smooth scaling without breakpoints!

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

This ensures images never overflow their container — they scale down on small screens.

### Responsive Grid + Flexbox

The responsive patterns from Days 03 and 04 are your best friends:

```css
/* Flexbox responsive cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 100%;  /* Full width on mobile */
}

@media (min-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 1.5rem);  /* 2 columns on tablet */
  }
}

@media (min-width: 1024px) {
  .card {
    flex: 1 1 calc(33.333% - 1.5rem);  /* 3 columns on desktop */
  }
}
```

Or use Grid's auto-fit for zero-media-query responsiveness:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Testing Responsive Design

1. **Browser DevTools** — Press `F12` → click the device toggle icon (or `Ctrl + Shift + M`). Select different devices or drag the viewport size.
2. **Resize the browser window** — the quickest sanity check
3. **Real devices** — nothing beats testing on an actual phone

---

## ✅ Step-by-Step Tasks

1. **Add the viewport tag** — Check all your existing HTML files have `<meta name="viewport" ...>`. Add it where missing.

2. **Mobile-first navigation** — Build a navbar that shows a "☰" hamburger icon on mobile and a horizontal link list on desktop (768px+). Hide/show using media queries — no JavaScript needed for now.

3. **Responsive card layout** — Create 6 cards. On mobile: 1 column. On tablet (768px+): 2 columns. On desktop (1024px+): 3 columns. Use either Flexbox or Grid.

4. **Fluid typography** — Use `clamp()` on your `<h1>` and `<p>` elements so they scale smoothly from mobile to desktop. Check the result by resizing.

5. **Full responsive page** — Combine everything: responsive nav, hero section, card grid, and footer. Test it at 375px (phone), 768px (tablet), and 1200px (desktop) using DevTools.

---

## 🧠 Knowledge Check

1. What does "mobile-first" design mean and why is it recommended?
2. What is the difference between `max-width` and `min-width` in media queries?
3. How does `clamp()` work for fluid font sizes?

---

## 💪 Challenge

Build a **complete responsive portfolio page** that includes:

- A responsive navigation bar (hamburger on mobile, links on desktop)
- A hero section with a gradient background, heading, and CTA button
- An "About Me" section with image + text side-by-side on desktop, stacked on mobile
- A "Projects" section with a responsive card grid (auto-fit)
- A contact form that adjusts from full-width to centred with max-width
- A footer with 3 columns on desktop, stacked on mobile
- Fluid typography using `clamp()`
- Test at all 3 breakpoints

This is essentially a preview of your final portfolio from Module 10!

---

## 📚 Resources

- 📖 [MDN — Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) — Comprehensive guide
- 📖 [MDN — Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) — Full reference
- 📖 [CSS Tricks — A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/) — Visual guide
- 📖 [Responsive Design Checker](https://responsivedesignchecker.com/) — Test any URL
- 🎥 [Responsive Web Design Tutorial — Kevin Powell](https://www.youtube.com/watch?v=srvUrASNj0s) — Excellent video guide

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting the viewport meta tag** — Without it, responsive CSS appears to "not work" on mobile devices. Always include it.
2. **Designing desktop-first then trying to cram it into mobile** — It's much harder to simplify a complex layout than to build up from a simple one. Start mobile-first.
3. **Using `px` for everything** — Use `rem` for fonts and `%` or `fr` for widths. Fixed pixel values don't adapt well to different screens.

---

## 🧭 Navigation

← [Previous Day: CSS Grid](../day-04/) | [Next Module: Frontend JavaScript →](../../module-05-frontend-js/)
