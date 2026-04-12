# 📅 Day 04 of Module 03 — Semantic HTML & Accessibility

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what semantic HTML is and why it matters
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Structure a web page using semantic layout instead of `<div>` soup
- Understand web accessibility basics and why they matter
- Apply ARIA attributes and accessibility best practices

---

## 📖 Lesson Content

### What Is Semantic HTML?

**Semantic** means "relating to meaning". Semantic HTML uses elements that **describe their content** rather than just styling it.

| Non-Semantic (❌) | Semantic (✅) | Why It's Better |
|-------------------|-------------|----------------|
| `<div class="header">` | `<header>` | Browser and screen readers know it's a header |
| `<div class="navigation">` | `<nav>` | Assistive tech can jump to navigation |
| `<div class="main-content">` | `<main>` | Search engines understand page structure |
| `<div class="footer">` | `<footer>` | Clearer code for every developer |

### Why Semantic HTML Matters

1. **Accessibility** — Screen readers use semantic elements to help visually impaired users navigate. A `<nav>` is announced as "navigation", a `<main>` is skipped to directly.
2. **SEO** — Search engines rank pages higher when they can understand the content structure.
3. **Maintainability** — Other developers (and future you) can read the code faster.
4. **Standards** — It's the correct way to build web pages according to W3C standards.

### Semantic Layout Elements

```
┌──────────────────────────────────────┐
│              <header>                │
│  Logo, site title, navigation       │
├──────────────────────────────────────┤
│              <nav>                   │
│  Main navigation links              │
├────────────────────────┬─────────────┤
│                        │             │
│       <main>           │  <aside>    │
│                        │  Sidebar    │
│  ┌──────────────┐      │             │
│  │  <article>   │      │             │
│  │  Blog post   │      │             │
│  └──────────────┘      │             │
│                        │             │
│  ┌──────────────┐      │             │
│  │  <section>   │      │             │
│  │  Comments    │      │             │
│  └──────────────┘      │             │
│                        │             │
├────────────────────────┴─────────────┤
│              <footer>                │
│  Copyright, links, contact info     │
└──────────────────────────────────────┘
```

#### `<header>`
The introductory content — logo, navigation, search bar.

```html
<header>
  <h1>Get Techy with Lucky</h1>
  <p>Learn to code from scratch</p>
</header>
```

#### `<nav>`
Navigation links — main menu, sidebar links, breadcrumbs.

```html
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

#### `<main>`
The primary content of the page. There should only be **one `<main>`** per page.

```html
<main>
  <h2>Welcome to Module 03</h2>
  <p>Today we learn about semantic HTML...</p>
</main>
```

#### `<section>`
A thematic grouping of content, typically with a heading.

```html
<section>
  <h2>Our Courses</h2>
  <p>We offer 10 progressive modules...</p>
</section>
```

#### `<article>`
Self-contained content that could stand alone — a blog post, a news story, a product card.

```html
<article>
  <h2>Understanding the Internet</h2>
  <p>Published on June 2, 2025 by Lucky</p>
  <p>The internet is a global network of computers...</p>
</article>
```

#### `<aside>`
Content related to but separate from the main content — sidebars, callout boxes, related links.

```html
<aside>
  <h3>Did You Know?</h3>
  <p>Over 90% of websites use HTML as their foundation.</p>
</aside>
```

#### `<footer>`
Closing content — copyright, contact, social links.

```html
<footer>
  <p>&copy; 2025 Get Techy with Lucky. All rights reserved.</p>
  <nav>
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms of Service</a>
  </nav>
</footer>
```

### Full Semantic Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Semantic Page</title>
</head>
<body>

  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>I'm a student at Get Techy with Lucky learning web development.</p>
    </section>

    <section id="projects">
      <h2>My Projects</h2>
      <article>
        <h3>Project 1: Personal Website</h3>
        <p>My first HTML page built from scratch.</p>
      </article>
      <article>
        <h3>Project 2: Resource Library</h3>
        <p>A collection of learning links organised by topic.</p>
      </article>
    </section>

    <aside>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="https://developer.mozilla.org">MDN Web Docs</a></li>
        <li><a href="https://www.w3schools.com">W3Schools</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 My Portfolio. Built with HTML.</p>
  </footer>

</body>
</html>
```

### Web Accessibility Basics

**Accessibility (a11y)** means making your website usable by everyone, including people with disabilities. Over **1 billion people** worldwide have some form of disability.

#### Key Accessibility Practices

1. **Use semantic HTML** — this is the single biggest thing you can do
2. **Add alt text to images** — descriptive for informative images, empty (`alt=""`) for decorative
3. **Use proper heading hierarchy** — `<h1>` → `<h2>` → `<h3>`, don't skip levels
4. **Ensure keyboard navigation** — everything should work without a mouse
5. **Use sufficient colour contrast** — light text on light backgrounds is unreadable
6. **Add labels to form fields** — every input needs a `<label>`

#### ARIA Attributes

ARIA (Accessible Rich Internet Applications) adds extra information for assistive technologies:

```html
<!-- Tell screen readers this is a navigation landmark -->
<nav aria-label="Main Navigation">
  ...
</nav>

<!-- Indicate current page in navigation -->
<a href="index.html" aria-current="page">Home</a>

<!-- Describe an element more fully -->
<button aria-label="Close dialog">✕</button>

<!-- Link a description to an element -->
<input type="email" aria-describedby="email-help">
<span id="email-help">We'll never share your email.</span>
```

> 💡 **Rule of thumb:** Use native HTML elements first. Only add ARIA when HTML doesn't provide what you need. "No ARIA is better than bad ARIA."

#### Testing Accessibility

- **Keyboard test** — Tab through your entire page. Can you reach everything? Can you see which element is focused?
- **Screen reader test** — Try NVDA (Windows, free) or VoiceOver (Mac, built-in)
- **Lighthouse** — Chrome DevTools → Lighthouse tab → Run accessibility audit
- **WAVE** — [wave.webaim.org](https://wave.webaim.org/) — paste any URL to check

---

## ✅ Step-by-Step Tasks

1. **Convert a non-semantic page** — Take one of your earlier pages (from Day 01 or 02) and replace all generic `<div>` containers with semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`.

2. **Build a blog layout** — Create `blog.html` with: a `<header>` (site name + nav), a `<main>` containing two `<article>` elements (title, date, content), an `<aside>` (sidebar with links), and a `<footer>`.

3. **Accessibility audit** — Open one of your pages in Chrome. Press F12 → Lighthouse → Generate report → Accessibility. Note your score and fix any issues.

4. **Keyboard navigation test** — Open your blog page. Put your mouse away. Navigate the entire page using only Tab, Shift+Tab, and Enter. Can you reach every link and interact with every element?

5. **Add ARIA attributes** — Add `aria-label` to your `<nav>` element. Add `aria-current="page"` to the active navigation link. Add `aria-describedby` to a form input.

---

## 🧠 Knowledge Check

1. What is the difference between `<section>` and `<article>`?
2. Name three benefits of using semantic HTML.
3. What is ARIA and when should you use it?

---

## 💪 Challenge

Build a complete **"Tech News"** website (`tech-news.html`) using ONLY semantic HTML:

- `<header>` with site title, tagline, and a `<nav>` with 5 links
- `<main>` containing:
  - A featured `<article>` — full blog post with heading, date, author, 3 paragraphs
  - A `<section>` with 3 more article previews (title + short summary)
- An `<aside>` sidebar with:
  - A "Popular Articles" list
  - An email subscription form
- A `<footer>` with copyright, privacy policy link, and social media links
- Full accessibility: all images have alt text, all forms have labels, proper heading hierarchy, keyboard navigable

Run a Lighthouse accessibility audit — aim for a score of 90+.

---

## 📚 Resources

- 📖 [MDN — HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) — Complete list of all HTML elements
- 📖 [MDN — Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) — Comprehensive accessibility guide
- 📖 [W3C WAI — Introduction to Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/) — Official standards
- 📖 [The A11Y Project](https://www.a11yproject.com/) — Practical accessibility tips and checklist
- 📖 [WebAIM — WAVE Tool](https://wave.webaim.org/) — Free accessibility evaluation tool

---

## 🐛 Common Mistakes to Avoid

1. **Using `<div>` for everything** — If there's a semantic element that describes the content, use it. Save `<div>` for pure layout containers that have no semantic meaning.
2. **Skipping heading levels** — Going from `<h1>` directly to `<h4>` breaks the document outline and confuses screen readers. Always go in order.
3. **Adding ARIA to elements that already have semantics** — `<button aria-role="button">` is redundant. The `<button>` element already has the button role. "No ARIA is better than bad ARIA."

---

## 🧭 Navigation

← [Previous Day: Tables & Forms](../day-03/) | [Next Module: Web Styling — CSS →](../../module-04-web-styling-css/)
