# 📅 Day 02 of Module 05 — Functions, Loops & Conditionals

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Write reusable functions using declaration, expression, and arrow syntax
- Use `if`, `else if`, `else`, and ternary operators for decision-making
- Loop through data using `for`, `while`, and `for...of` loops
- Combine functions, conditionals, and loops to solve real problems
- Understand scope — where variables can and can't be accessed

---

## 📖 Lesson Content

### Functions — Reusable Blocks of Code

A function is a block of code that does a specific job. You write it once, then **call** it whenever you need it.

#### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}! Welcome to Get Techy with Lucky.`;
}

console.log(greet("Alice"));  // "Hello, Alice! Welcome to Get Techy with Lucky."
console.log(greet("Brian"));  // "Hello, Brian! Welcome to Get Techy with Lucky."
```

#### Function Expression

```javascript
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3));  // 8
```

#### Arrow Function (Modern)

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 7));  // 28

// With a body block (for multiple lines)
const describePerson = (name, age) => {
  const status = age >= 18 ? "adult" : "minor";
  return `${name} is ${age} years old and is a ${status}.`;
};
```

#### Default Parameters

```javascript
function greet(name = "Friend") {
  return `Hello, ${name}!`;
}

console.log(greet());        // "Hello, Friend!"
console.log(greet("Lucky")); // "Hello, Lucky!"
```

### Conditionals — Making Decisions

#### if / else if / else

```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A — Excellent!");
} else if (score >= 80) {
  console.log("Grade: B — Great job!");
} else if (score >= 70) {
  console.log("Grade: C — Good effort");
} else if (score >= 60) {
  console.log("Grade: D — Needs improvement");
} else {
  console.log("Grade: F — Please see the instructor");
}
```

#### Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `===` | Strict equality | `5 === 5` → true |
| `!==` | Strict inequality | `5 !== "5"` → true |
| `>` | Greater than | `10 > 5` → true |
| `<` | Less than | `3 < 7` → true |
| `>=` | Greater than or equal | `5 >= 5` → true |
| `<=` | Less than or equal | `4 <= 3` → false |

> ⚠️ Always use `===` (strict) instead of `==` (loose). Loose equality does type coercion and can cause bugs: `"5" == 5` is `true`, but `"5" === 5` is `false`.

#### Logical Operators

```javascript
const age = 25;
const hasID = true;

// AND — both must be true
if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

// OR — at least one must be true
if (age < 13 || age > 65) {
  console.log("Discounted ticket");
}

// NOT — inverts the value
if (!hasID) {
  console.log("Please show your ID");
}
```

#### Ternary Operator

A one-line if/else:

```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```

#### Switch Statement

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday — time to work!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend — time to rest!");
    break;
  default:
    console.log("Invalid day");
}
```

### Loops — Repeating Actions

#### for Loop

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Count: 1, Count: 2, Count: 3, Count: 4, Count: 5
```

#### while Loop

```javascript
let count = 1;
while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;
}
```

#### for...of Loop (Best for Arrays)

```javascript
const languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

for (const lang of languages) {
  console.log(`I'm learning ${lang}`);
}
```

#### Looping Through Arrays with Index

```javascript
const students = ["Alice", "Brian", "Catherine"];

for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}. ${students[i]}`);
}
// 1. Alice
// 2. Brian
// 3. Catherine
```

#### break and continue

```javascript
// break — stop the loop entirely
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);  // 1, 2, 3, 4
}

// continue — skip this iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);  // 1, 2, 4, 5
}
```

### Scope

Variables have different levels of visibility:

```javascript
const globalVar = "I'm everywhere";

function myFunction() {
  const localVar = "I'm only inside this function";
  console.log(globalVar);  // ✅ Works
  console.log(localVar);   // ✅ Works
}

console.log(globalVar);  // ✅ Works
console.log(localVar);   // ❌ Error! Not defined here
```

**`let` and `const`** are block-scoped (limited to `{ }`):

```javascript
if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // ❌ Error
console.log(y); // ❌ Error
```

---

## ✅ Step-by-Step Tasks

1. **Write 3 functions** — Create: `calculateArea(length, width)` → returns area, `isEven(number)` → returns true/false, `fahrenheitToCelsius(f)` → returns °C. Test each one.

2. **Grade calculator** — Write a function `getGrade(score)` that takes a number 0-100 and returns a letter grade (A, B, C, D, F) using if/else.

3. **Loop a list** — Create an array of 5 countries. Use a `for...of` loop to print each country. Then use a `for` loop with index to print them numbered.

4. **FizzBuzz** — Loop from 1 to 30. If divisible by 3, print "Fizz". If divisible by 5, print "Buzz". If both, print "FizzBuzz". Otherwise, print the number.

5. **Combine everything** — Create a function `analyseScores(scores)` that takes an array of numbers. It should return an object with: `highest`, `lowest`, `average`, and `passing` (count of scores ≥ 50).

---

## 🧠 Knowledge Check

1. What is the difference between `===` and `==` in JavaScript?
2. When would you use a `while` loop instead of a `for` loop?
3. What does "block scope" mean for `let` and `const`?

---

## 💪 Challenge

Build a **"Student Report Card Generator"**:

- Create an array of student objects: `{ name, scores: [math, english, science] }`
- Write functions to: calculate average score per student, assign a letter grade, find the top performer
- Loop through all students and print a formatted report card
- Include a summary: class average, highest scorer, number of students who passed (average ≥ 50)

---

## 📚 Resources

- 📖 [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) — Complete guide
- 📖 [MDN — Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) — All loop types
- 📖 [JavaScript.info — Conditionals](https://javascript.info/ifelse) — Clear examples
- 📖 [Eloquent JavaScript — Functions](https://eloquentjavascript.net/03_functions.html) — Free book chapter
- 🎥 [JavaScript Functions — Programming with Mosh](https://www.youtube.com/watch?v=N8ap4k_1QEQ) — Video tutorial

---

## 🐛 Common Mistakes to Avoid

1. **Using `==` instead of `===`** — Loose equality can produce unexpected results. `"0" == false` is `true`. Always use strict equality.
2. **Infinite loops** — Forgetting to update the counter in a `while` loop creates an infinite loop that crashes your browser. Always ensure there's a way for the condition to become `false`.
3. **Forgetting `return` in functions** — Without `return`, a function returns `undefined`. If you expect a value back, you must explicitly return it.

---

## 🧭 Navigation

← [Previous Day: Variables, Data Types & Operators](../day-01/) | [Next Day: The DOM — Manipulating Web Pages →](../day-03/)
