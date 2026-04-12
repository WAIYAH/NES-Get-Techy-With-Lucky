# 📅 Day 03 of Module 05 — The DOM — Manipulating Web Pages with JavaScript

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what the DOM is and how browsers build it from HTML
- Select HTML elements using `getElementById`, `querySelector`, and `querySelectorAll`
- Change text content, HTML content, styles, and attributes with JavaScript
- Create, append, and remove elements dynamically
- Understand the relationship between HTML, CSS, and JavaScript in a web page

---

## 📖 Lesson Content

### What Is the DOM?

The **Document Object Model** (DOM) is the browser's representation of your HTML page as a **tree of objects**. JavaScript can access and modify this tree — that's how web pages become interactive.

```
Document
 └── html
      ├── head
      │    ├── title
      │    └── meta
      └── body
           ├── header
           │    └── h1 ("My Website")
           ├── main
           │    ├── p ("Welcome!")
           │    └── button ("Click Me")
           └── footer
```

When JavaScript changes the DOM, the browser **instantly re-renders** the page.

### Selecting Elements

#### By ID

```javascript
const heading = document.getElementById("main-title");
console.log(heading.textContent);
```

#### By CSS Selector (Recommended)

```javascript
// Select ONE element (first match)
const btn = document.querySelector(".cta-button");
const firstParagraph = document.querySelector("main p");

// Select ALL matching elements (returns a NodeList)
const allCards = document.querySelectorAll(".card");
```

#### Other Selection Methods

```javascript
const nav = document.getElementsByClassName("nav-link");   // HTMLCollection
const paragraphs = document.getElementsByTagName("p");      // HTMLCollection
```

> 💡 **Use `querySelector` and `querySelectorAll`** — they accept any CSS selector and are the modern standard.

### Changing Content

```javascript
const title = document.querySelector("h1");

// Change text only
title.textContent = "Welcome to My Site!";

// Change HTML inside an element
title.innerHTML = "Welcome to <em>My Site</em>!";
```

> ⚠️ **Security warning:** Never use `innerHTML` with user-provided data. It can execute malicious scripts (Cross-Site Scripting / XSS). Use `textContent` for user input.

### Changing Styles

```javascript
const box = document.querySelector(".box");

box.style.backgroundColor = "#3498db";
box.style.color = "white";
box.style.padding = "2rem";
box.style.borderRadius = "10px";
```

**Better approach — toggle CSS classes:**

```javascript
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark-mode");
box.classList.contains("active");  // true/false
```

### Changing Attributes

```javascript
const link = document.querySelector("a");
const image = document.querySelector("img");

link.setAttribute("href", "https://github.com");
link.getAttribute("href");  // "https://github.com"

image.src = "new-photo.jpg";
image.alt = "Updated photo description";
```

### Creating Elements

```javascript
// Create a new element
const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "I was created with JavaScript!";

// Add it to the page
const container = document.querySelector(".cards");
container.appendChild(newCard);

// Insert before another element
const firstCard = container.firstElementChild;
container.insertBefore(newCard, firstCard);
```

### Removing Elements

```javascript
const elementToRemove = document.querySelector(".old-card");
elementToRemove.remove();
```

### Building a Dynamic List

```javascript
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const list = document.querySelector("#fruit-list");

fruits.forEach(fruit => {
  const li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
});
```

### Traversing the DOM

```javascript
const item = document.querySelector(".current");

item.parentElement;           // The parent
item.children;                // Direct children (HTMLCollection)
item.firstElementChild;       // First child element
item.lastElementChild;        // Last child element
item.nextElementSibling;      // Next sibling
item.previousElementSibling;  // Previous sibling
```

---

## ✅ Step-by-Step Tasks

1. **Select and log** — Create an HTML page with a heading, 3 paragraphs, and a list. Use `querySelector` to select the heading and log its text. Use `querySelectorAll` to select all paragraphs and log how many there are.

2. **Change content** — Use JavaScript to change the heading text, set the first paragraph's content to something new, and change the colour of the second paragraph.

3. **Toggle a class** — Add a button to your page. When you open the console and run a command, toggle a class `highlight` on the heading (you'll add click events tomorrow).

4. **Build a list dynamically** — Create an array of 5 programming languages. Use a loop to create `<li>` elements and append them to an empty `<ul>` on the page.

5. **Create a card** — Use only JavaScript (no HTML) to create a `<div>` with a class `card`, add an `<h3>` and a `<p>` inside it, and append it to the page body.

---

## 🧠 Knowledge Check

1. What is the DOM and why is it important for JavaScript?
2. What is the difference between `textContent` and `innerHTML`?
3. Why should you use `classList.toggle()` instead of directly changing `style` properties?

---

## 💪 Challenge

Build a **"Dynamic Profile Card Generator"**:

- Start with a completely empty `<body>` (no HTML inside it)
- Use JavaScript to create: a container `<div>`, a profile image (placeholder), a name heading, a job title paragraph, a skills list, and a "Contact Me" button
- Apply classes and let CSS handle styling
- The entire page should be built with JavaScript DOM manipulation

---

## 📚 Resources

- 📖 [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) — Official guide
- 📖 [MDN — querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — Selection reference
- 📖 [JavaScript.info — DOM Nodes](https://javascript.info/dom-nodes) — Clear visual guide
- 🎥 [JavaScript DOM Manipulation — Traversy Media](https://www.youtube.com/watch?v=y17RuWkWdn8) — Video tutorial
- 📖 [DOM Manipulation Cheat Sheet](https://devhints.io/js-dom) — Quick reference

---

## 🐛 Common Mistakes to Avoid

1. **Running JavaScript before the DOM loads** — If your `<script>` tag is in the `<head>`, the elements don't exist yet. Place your script at the bottom of `<body>` or use `defer` attribute.
2. **Using `innerHTML` with user input** — This is a security vulnerability (XSS). Always sanitise input or use `textContent` for user-provided data.
3. **Selecting elements that don't exist** — `querySelector` returns `null` if no element matches. Check for `null` before using the result to avoid "Cannot read property of null" errors.

---

## 🧭 Navigation

← [Previous Day: Functions, Loops & Conditionals](../day-02/) | [Next Day: Events & Interactivity →](../day-04/)
