# ✅ Module 09 · Day 03 — Solutions
# CI/CD Pipelines — GitHub Actions

---

## Exercise 1: Create a Testable Project

### math.js
```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, subtract, multiply };
```

### math.test.js
```javascript
const { add, subtract, multiply } = require("./math");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts 10 - 4 to equal 6", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("multiplies 3 * 7 to equal 21", () => {
  expect(multiply(3, 7)).toBe(21);
});

test("adds negative numbers", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("multiplies by zero", () => {
  expect(multiply(5, 0)).toBe(0);
});
```

---

## Exercise 2: GitHub Actions Workflow

### .github/workflows/ci.yml
```yaml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

---

## Exercise 3: Failing Test

### Intentionally failing test
```javascript
// This will FAIL — wrong expected value
test("adds 2 + 2 to equal 5", () => {
  expect(add(2, 2)).toBe(5); // Should be 4
});
```

### Fixed version
```javascript
test("adds 2 + 2 to equal 4", () => {
  expect(add(2, 2)).toBe(4);
});
```

---

## Exercise 4: Workflow with Lint Step

### Updated .github/workflows/ci.yml
```yaml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install

      - name: Run linter
        run: npx eslint . --ext .js

      - name: Run tests
        run: npm test
```

---

## Exercise 5: Status Badge

### README.md
```markdown
# CI Practice Project

![CI Pipeline](https://github.com/USERNAME/ci-practice/actions/workflows/ci.yml/badge.svg)

A simple Node.js project with automated testing via GitHub Actions.

## Setup
\`\`\`bash
npm install
npm test
\`\`\`
```

Replace `USERNAME` with your actual GitHub username and `ci-practice` with your repo name.
