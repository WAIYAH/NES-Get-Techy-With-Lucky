# 📅 Day 01 of Module 04 — CSS Basics: Selectors, Properties & the Box Model

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what CSS is and why it's essential for web development
- Apply CSS to HTML using three methods: inline, internal, and external stylesheets
- Use CSS selectors to target HTML elements precisely
- Understand the box model — content, padding, border, and margin
- Style a basic webpage with colours, sizing, and spacing

---

## 📖 Lesson Content

### What Is CSS?

**CSS** stands for **Cascading Style Sheets**. If HTML is the skeleton of a webpage, CSS is the **skin, clothes, and makeup**. It controls how everything looks:

- Colours and backgrounds
- Fonts and text sizes
- Spacing and layout
- Borders and shadows
- Animations and transitions

Without CSS, every website would look like a plain text document from the 1990s.

### Three Ways to Add CSS

#### 1. Inline CSS (directly on the element)

```html
<p style="color: blue; font-size: 18px;">This text is blue.</p>
```

⚠️ **Not recommended** — hard to maintain and clutters your HTML.

#### 2. Internal CSS (in the `<head>` of your HTML)

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
```

✅ **OK for small projects** — keeps styles in one file.

#### 3. External CSS (separate `.css` file) — ✅ BEST PRACTICE

```html
<!-- In your HTML file -->
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
```

```css
/* In css/style.css */
p {
    color: blue;
    font-size: 18px;
}
```

✅ **Always use external CSS** for real projects. It keeps your HTML clean and your styles reusable.

### CSS Syntax

Every CSS rule has the same structure:

```css
selector {
    property: value;
    property: value;
}
```

- **Selector** — what you want to style (e.g., `p`, `h1`, `.my-class`)
- **Property** — what aspect to change (e.g., `color`, `font-size`)
- **Value** — what to change it to (e.g., `blue`, `18px`)

### CSS Selectors

Selectors tell CSS **which elements** to style:

```css
/* Element selector — targets ALL <p> tags */
p {
    color: grey;
}

/* Class selector — targets elements with class="highlight" */
.highlight {
    background-color: yellow;
}

/* ID selector — targets the element with id="main-title" */
#main-title {
    font-size: 32px;
}

/* Descendant selector — targets <a> inside <nav> */
nav a {
    text-decoration: none;
}
```

**Using classes in HTML:**

```html
<p class="highlight">This paragraph is highlighted.</p>
<p>This paragraph is not.</p>
```

> 💡 **Best practice:** Use **classes** for styling (reusable). Use **IDs** sparingly (unique, one per page).

### The Box Model

Every HTML element is a **box**. Understanding the box model is the key to controlling layout:

```
┌─────────────────────────────────────┐
│             MARGIN                  │  ← Space outside the border
│  ┌──────────────────────────────┐   │
│  │          BORDER              │   │  ← The border line
│  │  ┌───────────────────────┐   │   │
│  │  │       PADDING         │   │   │  ← Space inside the border
│  │  │  ┌────────────────┐   │   │   │
│  │  │  │    CONTENT     │   │   │   │  ← Your text, image, etc.
│  │  │  └────────────────┘   │   │   │
│  │  └───────────────────────┘   │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

```css
.box {
    width: 300px;           /* Content width */
    padding: 20px;          /* Space inside the border */
    border: 2px solid black;/* The border itself */
    margin: 10px;           /* Space outside the border */
}
```

**Total width of this box** = 300 + 20 + 20 + 2 + 2 + 10 + 10 = **364px**

> 💡 **Pro tip:** Add `box-sizing: border-box;` to make width include padding and border:

```css
* {
    box-sizing: border-box;
}
```

Now `width: 300px` means the **total box** is 300px (content + padding + border), not just the content.

### Common CSS Properties

| Property | What it does | Example |
|----------|-------------|---------|
| `color` | Text colour | `color: #333;` |
| `background-color` | Background colour | `background-color: #f0f0f0;` |
| `font-size` | Text size | `font-size: 16px;` |
| `font-weight` | Bold / normal | `font-weight: bold;` |
| `width` / `height` | Element dimensions | `width: 100%;` |
| `padding` | Inner spacing | `padding: 20px;` |
| `margin` | Outer spacing | `margin: 10px auto;` |
| `border` | Border line | `border: 1px solid #ccc;` |
| `text-align` | Text alignment | `text-align: center;` |

---

## ✅ Step-by-Step Tasks

1. **Set up your project** — Create a folder called `css-day-01` with `index.html` and `css/style.css` inside.

2. **Link the stylesheet** — In your HTML `<head>`, add: `<link rel="stylesheet" href="css/style.css">`

3. **Add HTML content** — Create a page with:
   - An `<h1>` title
   - 3 paragraphs of text
   - A `<div>` with a class of `card` containing an `<h2>` and a `<p>`

4. **Style with CSS** — In `style.css`, add:
   ```css
   body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 20px;
       background-color: #f5f5f5;
   }

   h1 {
       color: #2c3e50;
       text-align: center;
   }

   .card {
       background-color: white;
       padding: 20px;
       border: 1px solid #ddd;
       border-radius: 8px;
       margin: 20px 0;
   }
   ```

5. **Experiment with the box model** — Open Chrome DevTools (F12), select an element, and look at the box model diagram. Try changing padding and margin values.

6. **Add `box-sizing`** — Add `* { box-sizing: border-box; }` to the top of your CSS and see how it changes element sizing.

---

## 🧠 Knowledge Check

1. What are the three ways to add CSS to an HTML page, and which is the best practice?
2. What is the difference between padding and margin?
3. If an element has `width: 200px`, `padding: 20px`, and `border: 5px solid black`, what is its total width without `box-sizing: border-box`?

---

## 💪 Challenge

Style a "Product Card" that looks professional:

- White background with rounded corners and a subtle shadow
- An `<h3>` product name in dark blue
- A `<p>` description in grey
- A price in bold green
- A button-like `<a>` link at the bottom with a coloured background and white text
- Proper padding inside the card and margin outside

Use only element and class selectors — no inline styles.

---

## 📚 Resources

- 📖 [MDN — CSS First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps) — Comprehensive beginner guide
- 🎥 [CSS Crash Course — Traversy Media](https://www.youtube.com/watch?v=yfoY53QXEnI) — Quick video overview
- 📖 [W3Schools — CSS Tutorial](https://www.w3schools.com/css/) — Interactive examples
- 📖 [The Box Model — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) — Deep dive into the box model
- 🎥 [CSS Box Model Explained — Kevin Powell](https://www.youtube.com/watch?v=rIO5326FgPE) — Visual explanation

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting to link the CSS file** — If your styles aren't showing, check that the `<link>` tag is in the `<head>` and the `href` path is correct. Typos in file paths are the #1 cause of "my CSS isn't working".
2. **Using IDs for everything** — IDs should be unique and used sparingly. Use **classes** for styling — they're reusable and follow best practices. Too many IDs makes your CSS fragile and hard to maintain.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Colours, Typography & Visual Hierarchy →](../day-02/)
