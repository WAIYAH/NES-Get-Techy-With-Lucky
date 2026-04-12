# 📅 Day 03 of Module 04 — Flexbox Layout

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what Flexbox is and when to use it
- Set up a flex container and understand the main axis vs cross axis
- Align and distribute items using justify-content and align-items
- Control item sizing with flex-grow, flex-shrink, and flex-basis
- Build common layouts: navigation bars, card grids, centred content

---

## 📖 Lesson Content

### What Is Flexbox?

Flexbox (Flexible Box Layout) is a CSS layout system designed to **distribute space** and **align items** in a container — even when you don't know the size of the items.

Before Flexbox, developers used floats and complicated positioning hacks. Flexbox makes layout actually logical.

### Setting Up Flexbox

```css
.container {
  display: flex;
}
```

That's it. One line. Now all **direct children** of `.container` become flex items.

### Main Axis vs Cross Axis

Flexbox works along two axes:

```
Main Axis (row - default) →

┌─────────────────────────────────┐
│  [Item 1]  [Item 2]  [Item 3]  │  ↕ Cross Axis
└─────────────────────────────────┘
```

| Property | Controls | Default |
|----------|----------|---------|
| `flex-direction` | Direction of main axis | `row` (left to right) |
| | | `column` (top to bottom) |
| | | `row-reverse`, `column-reverse` |

```css
.container {
  display: flex;
  flex-direction: row;     /* Items in a horizontal line */
}

.container-vertical {
  display: flex;
  flex-direction: column;  /* Items stacked vertically */
}
```

### Justify Content (Main Axis)

Controls how items are distributed along the **main axis**:

```css
.container {
  display: flex;
  justify-content: flex-start;     /* Default — pack to start */
}
```

```
flex-start:      [1][2][3]___________
flex-end:        ___________[1][2][3]
center:          _____[1][2][3]_____
space-between:   [1]_______[2]______[3]
space-around:    __[1]____[2]____[3]__
space-evenly:    ___[1]___[2]___[3]___
```

### Align Items (Cross Axis)

Controls alignment along the **cross axis**:

```css
.container {
  display: flex;
  align-items: center;  /* Vertically centre items */
}
```

```
stretch (default):   Each item fills full height
flex-start:          Items at the top
flex-end:            Items at the bottom
center:              Items vertically centred
baseline:            Items aligned by text baseline
```

### Flex Wrap

By default, flex items all squeeze onto one line. Use `flex-wrap` to let them wrap:

```css
.container {
  display: flex;
  flex-wrap: wrap;  /* Items wrap to new lines */
}
```

### The Gap Property

```css
.container {
  display: flex;
  gap: 20px;         /* Space between ALL items */
  row-gap: 20px;     /* Space between rows */
  column-gap: 10px;  /* Space between columns */
}
```

> 💡 `gap` replaced the old method of using margins on individual items. Much cleaner!

### Flex Item Properties

These go on the **children** (not the container):

```css
.item {
  flex-grow: 1;    /* How much this item grows relative to others */
  flex-shrink: 1;  /* How much it shrinks when space is tight */
  flex-basis: 200px; /* Starting size before growing/shrinking */
}

/* Shorthand */
.item {
  flex: 1;         /* grow: 1, shrink: 1, basis: 0% */
  flex: 0 0 200px; /* Don't grow, don't shrink, stay at 200px */
}
```

#### `align-self`

Override the container's `align-items` for a single item:

```css
.special-item {
  align-self: flex-end;  /* This item goes to the bottom */
}
```

#### `order`

Change the visual order without changing HTML:

```css
.first-visually {
  order: -1;  /* Moves to the front */
}
```

### Common Flexbox Patterns

#### Centring Everything

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

This centres content **both vertically and horizontally**. The holy grail of CSS centering.

#### Navigation Bar

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}
```

#### Card Grid

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px;  /* Grow, shrink, min-width 300px */
}
```

#### Footer with Columns

```css
footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-column {
  flex: 1 1 200px;
}
```

---

## ✅ Step-by-Step Tasks

1. **Basic flex container** — Create a container with 5 coloured boxes. Apply `display: flex` and experiment with every `justify-content` value. Screenshot each one.

2. **Build a navbar** — Create a navigation bar with a logo on the left and links on the right using `justify-content: space-between`.

3. **Card layout** — Create 6 cards with `flex-wrap: wrap` and `flex: 1 1 300px`. Resize the browser to see cards wrap responsively.

4. **Perfect centering** — Create a full-screen hero section. Centre a heading and paragraph both vertically and horizontally using flexbox.

5. **Holy Grail layout** — Build a page with: header (full width), sidebar (200px, no grow), main content (grows to fill), footer (full width). Use `flex-direction: column` for the page and `flex-direction: row` for the middle section.

---

## 🧠 Knowledge Check

1. What is the difference between `justify-content` and `align-items`?
2. What does `flex: 1` mean as a shorthand?
3. How do you make a container's items wrap to the next line?

---

## 💪 Challenge

Build a **"Team Page"** layout using only Flexbox:

- A centred page heading
- A row of 4 team member cards that wrap on smaller screens
- Each card contains: a placeholder image, name, role, and a short bio
- Cards have equal height regardless of content length (`align-items: stretch`)
- A footer with 3 evenly spaced columns
- Add `gap` for spacing — no margins on individual items

---

## 📚 Resources

- 📖 [CSS Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — The definitive visual reference
- 🎮 [Flexbox Froggy](https://flexboxfroggy.com/) — Learn Flexbox through a game
- 🎮 [Flexbox Defense](http://www.flexboxdefense.com/) — Tower defense game using Flexbox
- 📖 [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) — Official documentation
- 🎥 [Flexbox in 20 Minutes — Traversy Media](https://www.youtube.com/watch?v=JJSoEo8JSnc) — Quick video tutorial

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting `flex-wrap: wrap`** — Without it, items squeeze onto one line and overflow the container. Always add `wrap` for responsive layouts.
2. **Using Flexbox for 2D layouts** — Flexbox is designed for 1D layouts (row OR column). For 2D layouts (rows AND columns), use CSS Grid (tomorrow's lesson!).
3. **Setting widths instead of flex-basis** — When using Flexbox, prefer `flex-basis` over `width`. It works better with the flex algorithm.

---

## 🧭 Navigation

← [Previous Day: Typography, Colours & Backgrounds](../day-02/) | [Next Day: CSS Grid →](../day-04/)
