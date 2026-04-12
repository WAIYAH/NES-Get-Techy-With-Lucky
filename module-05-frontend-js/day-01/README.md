# 📅 Day 01 of Module 05 — JS Syntax, Variables, Data Types & Operators

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what JavaScript is and why it's essential for web development
- Use `let` and `const` to declare variables and understand when to use each
- Work with JavaScript's core data types: strings, numbers, booleans, null, and undefined
- Perform arithmetic, comparison, and logical operations
- Write and run JavaScript in the browser console and in an external `.js` file

---

## 📖 Lesson Content

### What Is JavaScript?

**JavaScript (JS)** is the programming language of the web. While HTML creates structure and CSS adds style, JavaScript makes pages **interactive and dynamic**.

JavaScript can:
- Show/hide content when a button is clicked
- Validate form inputs before submission
- Fetch data from a server (like weather or news)
- Create animations and visual effects
- Build entire applications (React, Node.js, etc.)

> 💡 JavaScript runs in the browser — no installation needed. Every modern browser has a built-in JS engine.

### Running JavaScript

**Method 1: Browser Console**

1. Open Chrome
2. Press `F12` or `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
3. Click the **Console** tab
4. Type `alert("Hello World!")` and press Enter

**Method 2: External JS File (best practice)**

```html
<!-- In your HTML file, just before </body> -->
<script src="js/script.js"></script>
```

```js
// In js/script.js
console.log("Hello from JavaScript!");
```

### Variables: `let` and `const`

Variables are **containers that store data**. Think of them as labeled boxes.

```js
let age = 25;          // Can be changed later
const name = "Lucky";  // Cannot be changed — it's constant
```

**When to use which:**

| Keyword | Can change? | Use when... |
|---------|------------|-------------|
| `const` | ❌ No | The value will never change (most of the time) |
| `let` | ✅ Yes | The value needs to change later |

> ⚠️ **Never use `var`** — it's the old way. It has confusing scoping rules. Always use `let` or `const`.

```js
let score = 0;
score = 10;  // ✅ This works — let allows reassignment

const pi = 3.14159;
pi = 3;  // ❌ ERROR — const cannot be reassigned
```

### Data Types

JavaScript has several built-in data types:

```js
// String — text wrapped in quotes
const greeting = "Hello, world!";
const city = 'Nairobi';

// Number — any numeric value (no quotes!)
const age = 25;
const price = 19.99;

// Boolean — true or false
const isStudent = true;
const hasJob = false;

// Null — intentionally empty
const middleName = null;

// Undefined — declared but no value assigned
let futureValue;
console.log(futureValue); // undefined
```

**How to check a data type:**

```js
console.log(typeof "Hello");   // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof null);      // "object" (this is a known JS quirk!)
console.log(typeof undefined); // "undefined"
```

### Operators

#### Arithmetic Operators

```js
let a = 10;
let b = 3;

console.log(a + b);   // 13  — Addition
console.log(a - b);   // 7   — Subtraction
console.log(a * b);   // 30  — Multiplication
console.log(a / b);   // 3.33 — Division
console.log(a % b);   // 1   — Modulo (remainder)
console.log(a ** b);  // 1000 — Exponent (10³)
```

#### String Concatenation

```js
const firstName = "Lucky";
const lastName = "Developer";

// Old way — concatenation
console.log("Hello, " + firstName + " " + lastName);

// Modern way — template literals (use backticks!)
console.log(`Hello, ${firstName} ${lastName}`);
```

> 💡 **Always use template literals** (backticks `` ` ` ``) when mixing text and variables. They're cleaner and easier to read.

#### Comparison Operators

```js
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 9);   // false

// Equality
console.log(10 == "10");   // true  — loose equality (converts types)
console.log(10 === "10");  // false — strict equality (checks type too)
```

> ⚠️ **Always use `===` (strict equality)**, never `==`. Loose equality causes unexpected bugs.

#### Logical Operators

```js
const age = 20;
const hasID = true;

// AND — both must be true
console.log(age >= 18 && hasID);  // true

// OR — at least one must be true
console.log(age >= 21 || hasID);  // true

// NOT — flips true to false
console.log(!hasID);  // false
```

---

## ✅ Step-by-Step Tasks

1. **Open the browser console** — Press `F12` → Console. Type `console.log("I'm learning JavaScript!")` and press Enter.

2. **Create your project** — Set up a folder called `js-day-01` with `index.html` and `js/script.js`. Link the JS file in your HTML.

3. **Declare variables** — In `script.js`, create:
   ```js
   const myName = "Your Name";
   const myAge = 25;
   const isLearningJS = true;

   console.log(`My name is ${myName}, I am ${myAge} years old.`);
   console.log(`Am I learning JavaScript? ${isLearningJS}`);
   ```

4. **Practice arithmetic** — Create two number variables and log the result of adding, subtracting, multiplying, and dividing them.

5. **Explore typeof** — Use `typeof` to check the type of a string, a number, `true`, `null`, and `undefined`. Log each result.

6. **Comparison practice** — Write 5 comparison expressions using `===`, `>`, `<`, `>=`, `<=` and log whether each is `true` or `false`.

---

## 🧠 Knowledge Check

1. What is the difference between `let` and `const`?
2. What is the output of `typeof null` and why is it surprising?
3. Why should you use `===` instead of `==` in JavaScript?

---

## 💪 Challenge

Build a **simple calculator** in JavaScript:

1. Create variables for two numbers
2. Calculate and log the sum, difference, product, quotient, and remainder
3. Use template literals to display the results like: `"10 + 3 = 13"`
4. Bonus: Add a variable for the user's name and greet them with their results

Example output:
```
Hello, Lucky! Here are your calculations:
10 + 3 = 13
10 - 3 = 7
10 × 3 = 30
10 ÷ 3 = 3.3333333333333335
10 % 3 = 1
```

---

## 📚 Resources

- 📖 [MDN — JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) — The definitive guide
- 🎥 [JavaScript Crash Course — Traversy Media](https://www.youtube.com/watch?v=hdI2bqOjy3c) — Comprehensive video
- 📖 [javascript.info — Variables](https://javascript.info/variables) — Clear, detailed explanations
- 📖 [W3Schools — JS Variables](https://www.w3schools.com/js/js_variables.asp) — Interactive examples
- 🎥 [freeCodeCamp — JavaScript Full Course](https://www.youtube.com/watch?v=PkZNo7MFNFg) — Free complete course

---

## 🐛 Common Mistakes to Avoid

1. **Using `var` instead of `let`/`const`** — `var` has function-level scoping which causes unexpected behaviour. Modern JavaScript uses `let` and `const`. Start with `const` for everything; switch to `let` only if you need to reassign.
2. **Forgetting that strings need quotes** — `Hello` without quotes causes an error. `"Hello"` or `'Hello'` is correct. Numbers don't need quotes: `42` not `"42"`.
3. **Mixing up `=` and `===`** — A single `=` assigns a value. Triple `===` compares values. Writing `if (x = 5)` instead of `if (x === 5)` is a classic bug.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Functions, Conditionals & Loops →](../day-02/)
