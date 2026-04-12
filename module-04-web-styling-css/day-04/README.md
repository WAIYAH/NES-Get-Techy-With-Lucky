# 📅 Day 04 of Module 04 — CSS Grid

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain the difference between Flexbox (1D) and Grid (2D)
- Create a grid container with rows and columns
- Place items in specific grid areas using line numbers and named areas
- Use `fr` units, `repeat()`, `minmax()`, and `auto-fit` / `auto-fill`
- Build complex page layouts with CSS Grid

---

## 📖 Lesson Content

### What Is CSS Grid?

CSS Grid is a **two-dimensional** layout system. While Flexbox handles one direction (row or column), Grid handles **both rows and columns** simultaneously.

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | 1D (row OR column) | 2D (rows AND columns) |
| Best for | Navigation, card rows, centering | Full page layouts, dashboards |
| Item placement | Sequential | Precise (any row/column) |

### Creating a Grid

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;  /* 3 columns */
  grid-template-rows: auto 1fr auto;        /* 3 rows */
  gap: 1rem;
}
```

This creates:
```
┌──────────┬────────────────────┬──────────┐
│  200px   │     flexible       │  200px   │
│  sidebar │     main           │  sidebar │
├──────────┴────────────────────┴──────────┤
```

### The `fr` Unit

`fr` stands for **fraction**. It divides available space proportionally:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* Column 1: 25%, Column 2: 50%, Column 3: 25% */
}
```

### Useful Functions

#### `repeat()`

```css
/* Instead of writing: 1fr 1fr 1fr 1fr */
grid-template-columns: repeat(4, 1fr);

/* Mix repeat with fixed sizes */
grid-template-columns: 200px repeat(3, 1fr);
```

#### `minmax()`

```css
/* Column is at least 250px, but can grow to fill available space */
grid-template-columns: repeat(3, minmax(250px, 1fr));
```

#### `auto-fit` and `auto-fill`

```css
/* Automatically create as many 250px columns as fit */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

This is **responsive without media queries**! As the screen gets smaller, columns automatically drop to new rows.

### Placing Items

#### By Line Numbers

Grid lines are numbered starting from 1:

```
Column lines:  1    2    3    4
               │    │    │    │
Row lines: 1 ──┼────┼────┼────┤
           2 ──┼────┼────┼────┤
           3 ──┼────┼────┼────┤
```

```css
.header {
  grid-column: 1 / 4;  /* Span from line 1 to line 4 (all 3 columns) */
  grid-row: 1 / 2;
}

.sidebar {
  grid-column: 1 / 2;  /* First column only */
  grid-row: 2 / 3;
}

.main {
  grid-column: 2 / 4;  /* Columns 2 and 3 */
  grid-row: 2 / 3;
}
```

#### Span Shorthand

```css
.header {
  grid-column: span 3;  /* Span 3 columns from current position */
}
```

### Named Grid Areas

The most readable way to create layouts:

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 1rem;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

```
┌─────────────────────────────┐
│          header              │
├──────────┬──────────────────┤
│          │                   │
│ sidebar  │      main         │
│          │                   │
├──────────┴──────────────────┤
│          footer              │
└─────────────────────────────┘
```

> 💡 Use `.` for empty cells: `"header header" ". main" "footer footer"`

### Grid Alignment

```css
.container {
  /* Align all items within their cells */
  justify-items: center;   /* Horizontal alignment */
  align-items: center;     /* Vertical alignment */

  /* Align the entire grid within the container */
  justify-content: center;
  align-content: center;
}

/* Single item override */
.special {
  justify-self: end;
  align-self: start;
}
```

### Common Grid Layouts

#### Dashboard Layout

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "nav header"
    "nav main";
  min-height: 100vh;
}
```

#### Photo Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

#### Magazine Layout

```css
.magazine {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

---

## ✅ Step-by-Step Tasks

1. **Basic grid** — Create a container with 6 boxes. Set `display: grid` with `grid-template-columns: repeat(3, 1fr)` and `gap: 1rem`. Give each box a background colour and padding.

2. **Named areas layout** — Build a page layout using `grid-template-areas`: header (full width), sidebar + main content, footer (full width).

3. **Responsive card grid** — Create 8 cards using `repeat(auto-fit, minmax(250px, 1fr))`. Resize the browser — cards should rearrange automatically.

4. **Magazine layout** — Create a 4-column grid where the first item spans 2 columns and 2 rows (a "featured" article). Fill the rest with normal-sized items.

5. **Grid vs Flexbox** — Build the same card layout using both Grid and Flexbox. Compare the code — which is simpler? When would you choose each?

---

## 🧠 Knowledge Check

1. What is the difference between `fr` unit and percentage (`%`)?
2. How does `repeat(auto-fit, minmax(250px, 1fr))` create a responsive grid?
3. What is the advantage of `grid-template-areas` over grid line numbers?

---

## 💪 Challenge

Build a **"Dashboard"** page layout:

- Sidebar on the left (fixed 250px)
- Top bar across the rest (60px height)
- Main content area with a 3-column card grid
- Stats bar at the bottom of the main area
- Use named grid areas for the overall layout
- Use `auto-fit` for the card grid inside main
- Make it look professional with colours, borders, and padding
- Add real content: charts placeholders, stats numbers, navigation links

---

## 📚 Resources

- 📖 [CSS Tricks — Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) — The definitive visual reference
- 🎮 [Grid Garden](https://cssgridgarden.com/) — Learn Grid through a game
- 📖 [MDN — CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) — Official docs
- 🎥 [CSS Grid in 20 Minutes — Traversy Media](https://www.youtube.com/watch?v=0xMQfnTU6oo) — Video tutorial
- 📖 [Grid by Example](https://gridbyexample.com/) — Patterns and examples

---

## 🐛 Common Mistakes to Avoid

1. **Using Grid for simple 1D layouts** — If your items only go in one direction (a row of buttons, a list of links), Flexbox is simpler. Use Grid when you need both rows AND columns.
2. **Forgetting `gap` and using margins instead** — `gap` is Grid's built-in spacing. It doesn't cause the double-margin issues that occur at edges.
3. **Making grid items too rigid** — Use `minmax()` and `auto-fit` instead of fixed pixel widths. Your grid will be responsive without needing media queries.

---

## 🧭 Navigation

← [Previous Day: Flexbox](../day-03/) | [Next Day: Responsive Design & Media Queries →](../day-05/)
