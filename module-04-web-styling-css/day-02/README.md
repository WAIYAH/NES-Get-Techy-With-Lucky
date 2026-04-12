# 📅 Day 02 of Module 04 — Typography, Colours & Backgrounds

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Apply fonts from Google Fonts and system font stacks
- Control typography: font-size, font-weight, line-height, letter-spacing, text-align
- Use CSS colour values: named, hex, RGB, HSL, and opacity
- Set background colours, images, gradients, and control their behaviour
- Build a consistent colour scheme for a web page

---

## 📖 Lesson Content

### Typography in CSS

Typography is one of the most important aspects of design. Good typography makes content readable; bad typography drives people away.

#### Font Families

```css
/* System fonts — already installed on the user's computer */
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* A "font stack" — the browser tries each font in order */
h1 {
  font-family: 'Georgia', 'Times New Roman', serif;
}
```

**Font categories:**

| Category | Look | Examples | Best For |
|----------|------|---------|----------|
| `serif` | Has small strokes at letter ends | Georgia, Times New Roman | Formal, traditional, body text |
| `sans-serif` | Clean, no strokes | Arial, Helvetica, Segoe UI | Modern, screens, headings |
| `monospace` | Each character same width | Courier New, Consolas | Code blocks |
| `cursive` | Handwriting-like | Comic Sans, Brush Script | Decorative (use sparingly!) |

#### Using Google Fonts

[Google Fonts](https://fonts.google.com/) offers 1,500+ free fonts:

**Step 1:** Go to [fonts.google.com](https://fonts.google.com/) and pick a font
**Step 2:** Add the `<link>` to your HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**Step 3:** Use it in CSS:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

> 💡 **Pro tip:** Use 1-2 fonts maximum. One for headings, one for body text. Too many fonts looks messy.

#### Typography Properties

```css
p {
  font-size: 16px;           /* Size of the text */
  font-weight: 400;          /* Thickness: 100=thin, 400=normal, 700=bold */
  font-style: italic;        /* normal, italic, oblique */
  line-height: 1.6;          /* Space between lines (1.6 = 160% of font size) */
  letter-spacing: 0.5px;     /* Space between letters */
  word-spacing: 2px;         /* Space between words */
  text-align: center;        /* left, center, right, justify */
  text-transform: uppercase; /* uppercase, lowercase, capitalize */
  text-decoration: none;     /* none, underline, line-through */
}
```

#### Font Size Units

| Unit | Type | Example | Good For |
|------|------|---------|----------|
| `px` | Absolute | `16px` | Precise control |
| `em` | Relative to parent | `1.5em` | Scalable components |
| `rem` | Relative to root | `1rem` | Consistent scaling (recommended) |
| `%` | Relative to parent | `120%` | Proportional sizing |

```css
html {
  font-size: 16px;  /* Base size */
}

h1 { font-size: 2.5rem; }   /* 40px */
h2 { font-size: 2rem; }     /* 32px */
h3 { font-size: 1.5rem; }   /* 24px */
p  { font-size: 1rem; }     /* 16px */
small { font-size: 0.875rem; } /* 14px */
```

### CSS Colours

#### Colour Value Formats

```css
/* Named colours (147 built-in) */
color: red;
color: dodgerblue;
color: coral;

/* Hexadecimal (most common) */
color: #ff0000;       /* Red */
color: #3498db;       /* Blue */
color: #333;          /* Dark grey (shorthand for #333333) */

/* RGB — Red, Green, Blue (0-255) */
color: rgb(52, 152, 219);

/* RGBA — RGB with Alpha (opacity: 0-1) */
color: rgba(52, 152, 219, 0.5);   /* 50% transparent */

/* HSL — Hue (0-360), Saturation (%), Lightness (%) */
color: hsl(204, 70%, 53%);

/* HSLA — HSL with Alpha */
color: hsla(204, 70%, 53%, 0.8);
```

#### Building a Colour Scheme

A good colour scheme typically has:

| Role | Purpose | Example |
|------|---------|---------|
| **Primary** | Main brand colour, CTAs | `#3498db` (blue) |
| **Secondary** | Supporting colour | `#2ecc71` (green) |
| **Accent** | Highlights, alerts | `#e74c3c` (red) |
| **Dark** | Text, headers | `#2c3e50` (dark blue-grey) |
| **Light** | Backgrounds | `#ecf0f1` (light grey) |
| **White** | Clean space | `#ffffff` |

> 💡 **Tool:** Use [coolors.co](https://coolors.co/) to generate colour schemes instantly.

#### CSS Custom Properties (Variables)

```css
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --dark: #2c3e50;
  --light: #ecf0f1;
  --white: #ffffff;
}

h1 {
  color: var(--primary);
}

body {
  background-color: var(--light);
  color: var(--dark);
}
```

Using variables means you change a colour in ONE place and it updates everywhere.

### Backgrounds

```css
/* Solid colour */
body {
  background-color: #f5f5f5;
}

/* Image */
.hero {
  background-image: url('images/hero-bg.jpg');
  background-size: cover;       /* Fill the entire element */
  background-position: center;  /* Centre the image */
  background-repeat: no-repeat; /* Don't tile the image */
}

/* Gradient */
.header {
  background: linear-gradient(135deg, #3498db, #2ecc71);
}

/* Radial gradient */
.circle-bg {
  background: radial-gradient(circle, #3498db, #2c3e50);
}
```

#### Background Shorthand

```css
.hero {
  background: url('hero.jpg') center/cover no-repeat #333;
  /*          image            position/size repeat   fallback-colour */
}
```

---

## ✅ Step-by-Step Tasks

1. **Add Google Fonts** — Choose two fonts from Google Fonts: one for headings (e.g., Poppins) and one for body text (e.g., Inter). Add them to an HTML page.

2. **Build a type scale** — Create a CSS file with a clear type scale: set `html { font-size: 16px; }` then define `h1` through `h6` and `p` sizes using `rem`. Add `line-height: 1.6` to body.

3. **Create a colour scheme** — Define 5 CSS custom properties (`:root`) for a colour scheme. Apply primary to headings, dark to body text, light to background.

4. **Gradient hero section** — Create a `<header>` with a linear gradient background, white text, and centred content. Try at least 3 different gradient angles/colours.

5. **Typography showcase** — Build a page that demonstrates: 3 different font sizes, bold and italic text, uppercase and lowercase transforms, letter spacing, and a monospace code block.

---

## 🧠 Knowledge Check

1. What is the difference between `em` and `rem` units?
2. How do CSS custom properties (variables) make maintaining a colour scheme easier?
3. What does `background-size: cover` do?

---

## 💪 Challenge

Design a **"Brand Style Guide"** page that shows:

- Your brand's colour palette — 5 colour swatches with hex codes, each in a coloured box
- Typography samples — heading and body fonts at different weights and sizes
- A gradient collection — 3 different gradient backgrounds
- A "Do's and Don'ts" section contrasting good and bad typography choices
- CSS variables for everything — change one variable, the whole page updates

---

## 📚 Resources

- 📖 [Google Fonts](https://fonts.google.com/) — Free web fonts
- 📖 [Coolors.co](https://coolors.co/) — Colour scheme generator
- 📖 [MDN — CSS Colours](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) — Full colour reference
- 📖 [Type Scale](https://typescale.com/) — Visual type scale calculator
- 📖 [CSS Gradient Generator](https://cssgradient.io/) — Build gradients visually

---

## 🐛 Common Mistakes to Avoid

1. **Using too many fonts** — Stick to 2 fonts maximum. One for headings, one for body. More than that looks unprofessional.
2. **Poor colour contrast** — Light grey text on a white background is unreadable. Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify your colour combinations.
3. **Not defining a fallback font** — Always include a generic family at the end of your font stack: `font-family: 'Inter', sans-serif;`. If the custom font fails to load, the browser uses the fallback.

---

## 🧭 Navigation

← [Previous Day: CSS Selectors, Properties & the Box Model](../day-01/) | [Next Day: Flexbox →](../day-03/)
