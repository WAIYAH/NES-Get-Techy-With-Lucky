# 📅 Day 04 of Module 05 — Events & Interactivity

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Add event listeners to HTML elements
- Handle common events: click, input, submit, keydown, mouseover
- Use the event object to access event details
- Build interactive features: dark mode toggle, form validation, character counter
- Understand event bubbling and event delegation

---

## 📖 Lesson Content

### What Are Events?

Events are **things that happen** on a web page: a user clicks a button, types in a field, scrolls down, hovers over an image, submits a form. JavaScript lets you **react** to these events.

### Adding Event Listeners

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// Arrow function version
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

### Common Event Types

| Event | Triggers When |
|-------|--------------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseover` | Mouse enters an element |
| `mouseout` | Mouse leaves an element |
| `keydown` | A key is pressed |
| `keyup` | A key is released |
| `input` | Value of an input changes |
| `change` | Input value changes AND loses focus |
| `submit` | A form is submitted |
| `focus` | An input gains focus |
| `blur` | An input loses focus |
| `scroll` | The page or element is scrolled |
| `load` | The page finishes loading |

### The Event Object

Every event handler receives an **event object** with details about what happened:

```javascript
document.addEventListener("click", (event) => {
  console.log(event.type);     // "click"
  console.log(event.target);   // The element that was clicked
  console.log(event.clientX);  // X coordinate of the click
  console.log(event.clientY);  // Y coordinate of the click
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);      // "Enter", "a", "Escape", etc.
  console.log(event.code);     // "KeyA", "Enter", etc.
});
```

### Practical Examples

#### Toggle Dark Mode

```html
<button id="theme-toggle">Toggle Dark Mode</button>
```

```javascript
const toggleBtn = document.querySelector("#theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
```

```css
.dark-mode {
  background-color: #1a1a2e;
  color: #e0e0e0;
}
```

#### Character Counter

```html
<textarea id="message" maxlength="200"></textarea>
<p><span id="char-count">0</span> / 200 characters</p>
```

```javascript
const textarea = document.querySelector("#message");
const counter = document.querySelector("#char-count");

textarea.addEventListener("input", () => {
  counter.textContent = textarea.value.length;
});
```

#### Form Validation on Submit

```javascript
const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();  // Stop the form from submitting to a server

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  console.log("Form is valid! Submitting...");
});
```

> 💡 `event.preventDefault()` stops the default browser behaviour — critical for form handling and link interception.

### Event Bubbling

When you click a button inside a div inside a section, the click event "bubbles up" through all parent elements:

```
button (clicked) → div → section → body → html → document
```

```javascript
document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.querySelector(".child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Clicking the child logs BOTH:
// "Child clicked"
// "Parent clicked"
```

#### Stopping Bubbling

```javascript
child.addEventListener("click", (event) => {
  event.stopPropagation();  // Stop the event from reaching parents
  console.log("Only child handles this");
});
```

### Event Delegation

Instead of adding listeners to many elements, add ONE to the parent:

```javascript
const list = document.querySelector("#todo-list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
```

This is more efficient and works for dynamically added elements too!

---

## ✅ Step-by-Step Tasks

1. **Click counter** — Add a button and a counter display. Each click increments the counter.

2. **Dark mode toggle** — Add a toggle button that switches between light and dark themes using `classList.toggle`.

3. **Character counter** — Add a textarea with a live character count that updates on every keystroke.

4. **Form validation** — Build a form with name, email, and password. Validate on submit: name required, email must contain `@`, password ≥ 8 characters. Show error messages in the DOM (not alerts).

5. **Interactive list** — Build a to-do list where: typing in an input and pressing Enter adds a new item, clicking an item toggles "completed" styling, and a delete button removes items.

---

## 🧠 Knowledge Check

1. What does `event.preventDefault()` do and when would you use it?
2. What is event bubbling and how do you stop it?
3. What is event delegation and why is it more efficient?

---

## 💪 Challenge

Build an **"Interactive Quiz App"**:

- Display 5 multiple-choice questions (stored as an array of objects)
- Each question has 4 options
- Clicking an option highlights it (green for correct, red for wrong)
- A "Next" button moves to the next question
- Show a score at the end: "You got X out of 5 correct!"
- Add a "Restart" button to play again

---

## 📚 Resources

- 📖 [MDN — Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) — Official guide
- 📖 [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — API reference
- 📖 [JavaScript.info — Events](https://javascript.info/events) — Detailed walkthrough
- 🎥 [JS Events — Web Dev Simplified](https://www.youtube.com/watch?v=XF1_MlZ5l6M) — Video tutorial
- 📖 [Event Reference — MDN](https://developer.mozilla.org/en-US/docs/Web/Events) — Full list of events

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting `event.preventDefault()` on forms** — Without it, the page reloads when the form is submitted, wiping out your JavaScript state. Always prevent default on forms you handle with JS.
2. **Adding event listeners inside loops without closure** — Using `var` (not `let`) in a loop and attaching listeners creates a common bug where all listeners share the same variable. Use `let`, `const`, or `forEach`.
3. **Adding too many individual listeners** — If you have 100 list items, don't add 100 click listeners. Use event delegation on the parent instead.

---

## 🧭 Navigation

← [Previous Day: The DOM — Manipulating Web Pages](../day-03/) | [Next Day: Fetch API — Getting Data from the Internet →](../day-05/)
