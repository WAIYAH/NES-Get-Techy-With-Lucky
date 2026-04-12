# 📝 Module 09 · Day 03 — Exercises (Starter)
# CI/CD Pipelines — GitHub Actions

---

## Exercise 1: Create a Testable Project

Set up a Node.js project with unit tests that can run in CI.

### Steps:

1. Create a project:
   ```bash
   mkdir ci-practice && cd ci-practice
   npm init -y
   npm install --save-dev jest
   ```

2. Add this to `package.json` scripts:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

3. Create `math.js`:
   ```javascript
   // TODO: Export functions for add, subtract, multiply
   ```

4. Create `math.test.js`:
   ```javascript
   // TODO: Write at least 3 tests using jest
   // Example: test("adds 2 + 3 to equal 5", () => { ... })
   ```

5. Run `npm test` locally and verify all tests pass

---

## Exercise 2: Write a GitHub Actions Workflow

Create a CI workflow that runs on every push.

### Steps:

1. Create the file `.github/workflows/ci.yml`:
   ```yaml
   # TODO: Define a workflow that:
   # - Runs on push to main and pull_request to main
   # - Uses ubuntu-latest
   # - Checks out code
   # - Sets up Node.js 20
   # - Installs dependencies
   # - Runs tests
   ```

2. Push to GitHub and check the Actions tab

---

## Exercise 3: Handle a Failing Test

### Steps:

1. Add a test that intentionally fails:
   ```javascript
   // TODO: Write a test with a wrong expected value
   ```

2. Push and observe the pipeline fail in GitHub Actions

3. Fix the test, push again, and watch it pass

---

## Exercise 4: Add a Lint Step

### Steps:

1. Install ESLint:
   ```bash
   npm install --save-dev eslint
   npx eslint --init
   ```

2. Add a lint script to `package.json`:
   ```json
   "scripts": {
     "test": "jest",
     "lint": "eslint ."
   }
   ```

3. Update your workflow to run lint BEFORE tests:
   ```yaml
   # TODO: Add a lint step before the test step
   ```

---

## Exercise 5: Add a Status Badge

### Steps:

1. Get the badge URL from GitHub Actions:
   ```
   https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg
   ```

2. Add it to your README.md:
   ```markdown
   # TODO: Add the badge at the top of README
   ```
