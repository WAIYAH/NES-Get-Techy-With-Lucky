# 📅 Day 03 of Module 09 — CI/CD Pipelines — Automated Testing & Deployment

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what CI/CD is and why it's essential for professional development
- Create a GitHub Actions workflow file from scratch
- Set up automated tests that run on every push or pull request
- Configure automatic deployment to a hosting platform
- Read and debug workflow logs in the GitHub Actions tab

---

## 📖 Lesson Content

### What Is CI/CD?

| Term | Stands For | What It Does |
|------|-----------|-------------|
| **CI** | Continuous Integration | Automatically runs tests and checks every time code is pushed |
| **CD** | Continuous Deployment/Delivery | Automatically deploys passing code to a live server |

Without CI/CD, teams manually test and deploy — leading to bugs slipping through, "it works on my machine" problems, and deployment anxiety. CI/CD automates the boring, error-prone parts.

### The CI/CD Pipeline

```
Developer pushes code
        ↓
GitHub detects the push
        ↓
GitHub Actions runs your workflow
        ↓
Step 1: Install dependencies
Step 2: Run linter (code style)
Step 3: Run tests
Step 4: Build the project
        ↓
All steps pass? → Auto-deploy ✅
Any step fails? → Stop & notify ❌
```

### GitHub Actions — The Basics

GitHub Actions uses **workflow files** stored in `.github/workflows/`. Each workflow is a YAML file that defines when to run and what to do.

#### Your First Workflow

Create `.github/workflows/ci.yml`:

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

#### Breaking It Down

| Section | Purpose |
|---------|---------|
| `name` | Name shown in the Actions tab |
| `on` | Triggers — when the workflow runs |
| `jobs` | Groups of steps that run in parallel or sequence |
| `runs-on` | The OS for the runner (ubuntu-latest, windows-latest, macos-latest) |
| `steps` | Individual commands or actions |
| `uses` | A pre-built action from the GitHub marketplace |
| `run` | A shell command |

### Adding a Linting Step

```yaml
      - name: Run linter
        run: npx eslint . --ext .js,.jsx
```

### Adding a Build Step

```yaml
      - name: Build project
        run: npm run build
```

### Environment Variables in Workflows

```yaml
    env:
      NODE_ENV: test
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

Set secrets in **Settings → Secrets and variables → Actions** on GitHub.

### Multi-Job Workflows

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm install
      - run: npm test

  deploy:
    needs: test            # Only runs if "test" passes
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'   # Only on main branch
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Render
        env:
          RENDER_API_KEY: ${{ secrets.RENDER_API_KEY }}
        run: |
          curl -X POST "${{ secrets.RENDER_DEPLOY_HOOK }}"
```

### Auto-Deploy to Netlify

```yaml
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm install
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v3
        with:
          publish-dir: ./dist
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Reading Workflow Logs

When a workflow runs, you can see the output:

1. Go to your repo → **Actions** tab
2. Click on the workflow run
3. Click on a job to see the step-by-step log
4. Green ✅ = passed, Red ❌ = failed
5. Click a failed step to see the error message

### Common Triggers

```yaml
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: "0 0 * * 1"   # Every Monday at midnight
  workflow_dispatch:        # Manual trigger button
```

---

## ✅ Step-by-Step Tasks

1. **Create a test project** — Set up a simple Node.js project with at least 2 unit tests using `jest` or Node's built-in test runner. Make sure `npm test` passes locally.

2. **Write a CI workflow** — Create `.github/workflows/ci.yml` that runs on push and pull_request. It should install dependencies and run tests.

3. **Push and watch** — Push to GitHub. Go to the Actions tab and watch the workflow run. Read the logs and verify all steps pass.

4. **Add a failing test** — Write a test that intentionally fails. Push, watch it fail in Actions, then fix the test and push again. See the pipeline go green.

5. **Add auto-deploy** — Add a deploy job that only runs on `main` after tests pass. Use Netlify, Vercel, or Render deploy hooks.

---

## 🧠 Knowledge Check

1. What is the difference between Continuous Integration and Continuous Deployment?
2. What file path do GitHub Actions workflow files need to be in?
3. What does `needs: test` do in a multi-job workflow?

---

## 💪 Challenge

Build a **full CI/CD pipeline** for a portfolio site:

- On every push to `main`: run linter, run tests, build the project, deploy to Netlify
- On pull requests: run linter and tests only (no deploy)
- Add a status badge to your README: `![CI](https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg)`
- Store all secrets (Netlify token, site ID) as GitHub secrets — not in the code

---

## 📚 Resources

- 📖 [GitHub Actions — Official Docs](https://docs.github.com/en/actions) — Comprehensive guide
- 📖 [GitHub Actions — Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) — YAML reference
- 🎥 [GitHub Actions Tutorial — Fireship](https://www.youtube.com/watch?v=cP0I9w2coGU) — 100 seconds overview
- 📖 [GitHub Marketplace — Actions](https://github.com/marketplace?type=actions) — Pre-built actions
- 📖 [Introduction to CI/CD — GitLab](https://about.gitlab.com/topics/ci-cd/) — Concepts guide

---

## 🐛 Common Mistakes to Avoid

1. **Committing secrets directly in workflow files** — Use GitHub Secrets (`${{ secrets.MY_SECRET }}`), never paste real keys into the YAML file. The YAML is public in your repo.
2. **Not specifying Node version** — Different Node versions can cause tests to pass locally but fail in CI. Always pin a version with `actions/setup-node`.
3. **Ignoring failing tests** — It's tempting to skip or comment out failing tests. CI only works if you trust it. Fix the code, don't disable the test.

---

## 🧭 Navigation

← [Previous Day: Environment Variables & Secrets](../day-02/) | [Next Day: Developer Workflow — Agile & Code Reviews →](../day-04/)
