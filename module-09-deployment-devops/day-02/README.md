# 📅 Day 02 of Module 09 — Environment Variables, Secrets & .env Files

⏱ **Estimated Time:** 1.5–2 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain why API keys and secrets must never be hard-coded or committed
- Create and read `.env` files using the `dotenv` package in Node.js
- Access environment variables in frontend builds (Vite, CRA)
- Configure `.gitignore` to exclude sensitive files
- Use platform-level environment variables on Netlify, Vercel, and Render

---

## 📖 Lesson Content

### Why Secrets Matter

Every application eventually needs private data — API keys, database passwords, OAuth tokens, or payment credentials. If these are committed to a public (or even private) repository, they can be:

- **Stolen by bots** — Automated scanners crawl GitHub for exposed keys within seconds of a push
- **Abused for cost** — A leaked cloud key can rack up thousands in charges overnight
- **Used for data breaches** — Database credentials give attackers full access to user data

> 🔑 **Rule #1:** Never hard-code secrets. Never commit secrets. Ever.

### What Are Environment Variables?

Environment variables are key-value pairs that live **outside your code**, typically set in the operating system or a config file. Your application reads them at runtime.

```
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/mydb
API_KEY=sk_live_abc123xyz
PORT=3000
```

### Using .env Files in Node.js

#### Step 1 — Install dotenv

```bash
npm install dotenv
```

#### Step 2 — Create a .env file

```
# .env — NEVER commit this file
PORT=3000
DATABASE_URL=mongodb+srv://admin:secretpass@cluster0.abc.mongodb.net/myapp
API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

#### Step 3 — Load in your code

```javascript
require("dotenv").config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

console.log(`Server starting on port ${port}`);
// Never log actual secrets in production!
```

#### Step 4 — Add .env to .gitignore

```gitignore
# .gitignore
.env
.env.local
.env.production
node_modules/
```

### Create a .env.example File

Share the structure (not the values) so other developers know which variables are needed:

```
# .env.example — Commit this file
PORT=3000
DATABASE_URL=your_mongodb_connection_string
API_KEY=your_api_key_here
```

### Environment Variables in Frontend Projects

Frontend frameworks handle environment variables differently. Variables are injected at **build time**, not runtime.

#### Vite

```
# .env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=MyApp
```

```javascript
// Access in code (must start with VITE_)
const apiUrl = import.meta.env.VITE_API_URL;
```

#### Create React App

```
# .env
REACT_APP_API_URL=https://api.example.com
```

```javascript
// Access in code (must start with REACT_APP_)
const apiUrl = process.env.REACT_APP_API_URL;
```

> ⚠️ Frontend environment variables are **embedded in the built JavaScript** and visible to anyone who inspects the source. Never put true secrets (database passwords, private API keys) in frontend environment variables.

### Platform Environment Variables

When deploying, set variables through the hosting platform's dashboard — not `.env` files.

#### Netlify

1. Go to **Site settings → Build & deploy → Environment**
2. Add key-value pairs
3. Redeploy the site

#### Vercel

1. Go to **Project settings → Environment Variables**
2. Choose scope: Production, Preview, Development
3. Add key-value pairs

#### Render

1. Go to **Service → Environment**
2. Add individual variables or upload a `.env` file
3. The service restarts automatically

### Multiple Environments

Real projects have different configs for development, staging, and production:

```
.env                # Default / shared values
.env.local          # Local overrides (gitignored)
.env.development    # Dev-specific
.env.production     # Production-specific
```

```javascript
// Node.js — load based on NODE_ENV
const envFile = process.env.NODE_ENV === "production"
  ? ".env.production"
  : ".env";
require("dotenv").config({ path: envFile });
```

---

## ✅ Step-by-Step Tasks

1. **Set up dotenv** — Create a new Node.js project, install `dotenv`, create a `.env` file with PORT and a fake API_KEY, and load them in `index.js`. Print the port to the console (not the key).

2. **Protect secrets** — Add `.env` to `.gitignore`. Create a `.env.example` file with placeholder values. Verify with `git status` that `.env` is NOT tracked.

3. **Use in an Express app** — Build a simple Express server that reads PORT from `.env` and has a `/config` route that returns `{ appName: process.env.APP_NAME }` (non-secret data only).

4. **Frontend variables** — In a Vite project, add a `VITE_API_URL` variable to `.env`. Display it on the page. Verify it appears in the built output.

5. **Platform deployment** — Deploy your Express app to Render or Railway. Add environment variables through the dashboard (not `.env`). Verify the deployed app reads them correctly.

---

## 🧠 Knowledge Check

1. Why should you never commit `.env` files to a Git repository?
2. What is the difference between backend and frontend environment variables in terms of security?
3. What is the purpose of a `.env.example` file?

---

## 💪 Challenge

Create a **"Weather Dashboard"** that:
- Uses an API key from OpenWeatherMap (free tier)
- Stores the API key in `.env` (backend) and proxies requests through an Express server
- The frontend calls YOUR server (not the weather API directly) — so the key is never exposed
- Deploy to Render with the API key set as a platform environment variable

---

## 📚 Resources

- 📖 [dotenv — npm](https://www.npmjs.com/package/dotenv) — Official package
- 📖 [Vite — Env Variables](https://vitejs.dev/guide/env-and-mode.html) — Frontend env docs
- 📖 [The Twelve-Factor App — Config](https://12factor.net/config) — Industry best practices
- 🎥 [Environment Variables Explained — Fireship](https://www.youtube.com/watch?v=GYC-CETSyCE) — Quick overview
- 📖 [GitHub — Removing Sensitive Data](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) — If you accidentally commit secrets

---

## 🐛 Common Mistakes to Avoid

1. **Committing `.env` files** — Once a secret is in Git history, it's there forever (even after deletion). If this happens, rotate your keys immediately and use `git filter-branch` or BFG Repo-Cleaner.
2. **Putting real secrets in frontend env vars** — Variables like `VITE_*` or `REACT_APP_*` are embedded in the bundle. Anyone can inspect them in the browser. Use a backend proxy for secret keys.
3. **Forgetting `.env` on deployment** — Your app works locally but crashes in production because `.env` doesn't exist on the server. Always set variables through the platform dashboard.

---

## 🧭 Navigation

← [Previous Day: Domains, Hosting & Deploying Websites](../day-01/) | [Next Day: CI/CD Pipelines — GitHub Actions →](../day-03/)
