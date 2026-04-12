# JavaScript Beginner Notes

## Introduction
JavaScript is a versatile, high-level programming language primarily used for adding interactivity and dynamic behavior to web pages. It runs in the browser and is a core technology of the web, alongside HTML and CSS.

---

## Why Learn JavaScript?
- Makes web pages interactive
- Used for both frontend and backend (Node.js)
- Huge community and lots of resources
- In-demand skill for web development

---

## How JavaScript Works
- Runs in the browser (Chrome, Firefox, etc.)
- Can also run on servers (Node.js)
- Interacts with HTML and CSS to update web pages dynamically

---

## Basic Syntax

### 1. Variables
Variables store data. Use `let`, `const`, or (less commonly) `var`.

```js
let name = "Lucky"; // can change later
const pi = 3.14;     // cannot change
```

### 2. Data Types
- String: `"Hello"`
- Number: `42, 3.14`
- Boolean: `true, false`
- Array: `[1, 2, 3]`
- Object: `{ name: "Lucky", age: 20 }`
- Null: `null`
- Undefined: `undefined`

### 3. Operators
- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Assignment: `=`, `+=`, `-=`, etc.
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical: `&&`, `||`, `!`

---

## Control Structures

### 1. If-Else
```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### 2. Switch
```js
switch(day) {
  case "Monday":
    console.log("Start of week");
    break;
  default:
    console.log("Another day");
}
```

### 3. Loops
- **For Loop**
```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
- **While Loop**
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## Functions
Functions are reusable blocks of code.
```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Lucky"));
```

Arrow function (ES6):
```js
const add = (a, b) => a + b;
```

---

## Arrays
```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
fruits.push("orange"); // add to end
```

---

## Objects
```js
let person = {
  name: "Lucky",
  age: 20
};
console.log(person.name);
```

---

## DOM Manipulation
JavaScript can change HTML and CSS on the page.
```js
document.getElementById("demo").innerText = "Hello, World!";
```

---

## Events
Respond to user actions (clicks, typing, etc.)
```js
document.getElementById("btn").onclick = function() {
  alert("Button clicked!");
};
```

---

## Best Practices
- Use `const` and `let` (avoid `var`)
- Write readable code (indentation, comments)
- Use meaningful variable names
- Test your code often

---

## Resources
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [W3Schools JavaScript](https://www.w3schools.com/js/)

---

Happy coding!