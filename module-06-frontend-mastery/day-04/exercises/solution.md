# ✅ Day 04 Solution — Build & Deploy Your React App

## Module 06: Frontend Mastery | Get Techy with Lucky

---

## Task 1: Build Your Project

**Commands:**

```bash
npm run build
npm run preview
```

**Observations:**

> The `dist/` folder contains:
> - `index.html` — a single HTML file with minified references
> - `assets/` folder — containing hashed `.js` and `.css` files (e.g., `index-a1b2c3d4.js`)
> - The JavaScript is minified (whitespace removed, variables shortened)
> - The total `dist/` folder is typically 200-500 KB for a small React app
> - The preview server at `http://localhost:4173` serves the production build locally

---

## Task 2: Deploy to Netlify (Drag & Drop)

**Steps completed:**

1. ✅ Signed into [app.netlify.com](https://app.netlify.com)
2. ✅ Dragged `dist/` folder to the deploy area
3. ✅ Received a randomly generated URL like `https://graceful-narwhal-a1b2c3.netlify.app`

**Fixing the _redirects issue:**

Created `public/_redirects` with:

```
/*    /index.html   200
```

Then rebuilt and redeployed. Sub-page refresh now works.

**Checklist:**

- [x] Homepage loads correctly
- [x] Navigation works between pages
- [x] Refreshing a sub-page works (after `_redirects`)
- [x] No console errors in DevTools

---

## Task 3: Deploy via Git (Continuous Deployment)

**Steps completed:**

```bash
git init
git add .
git commit -m "Initial commit — React portfolio"
git remote add origin https://github.com/username/react-portfolio.git
git push -u origin main
```

Connected to Netlify:
- Build command: `npm run build`
- Publish directory: `dist`

**Testing continuous deployment:**

```bash
# Made a change to the heading
git add .
git commit -m "Update heading text"
git push
```

- [x] Netlify dashboard shows a new deploy triggered
- [x] Site updates within ~60 seconds
- [x] Change is visible on the live URL

---

## Task 4: Test Your Deployment

**Checklist completed:**

- [x] Homepage loads without errors
- [x] All navigation links work
- [x] Refreshing any page works (no 404)
- [x] Site looks correct on mobile
- [x] No errors in the browser console
- [x] Images and assets load correctly
- [x] Interactive features work (buttons, forms, etc.)

**Issues found:**

> 1. Refreshing `/about` returned a 404 — fixed by adding `_redirects` file in the `public/` folder
> 2. One image path was incorrect (used absolute path `/img/photo.jpg` instead of relative) — fixed by using the correct import

---

## Task 5: Professional README

**Completed README includes:**

- [x] Project title and description
- [x] Live demo link
- [x] Screenshot
- [x] Technologies used
- [x] How to run locally
- [x] Author info and links

---

## Reflection

**1. What is the difference between `npm run dev` and `npm run build`?**

> `npm run dev` starts a local development server with hot module replacement — changes appear instantly without refreshing. The code is unoptimised for easy debugging.
>
> `npm run build` creates a production-ready version of the app with minified code, optimised assets, and tree-shaking (removing unused code). This is what gets deployed to the internet.

**2. Why is Git-based deployment better than drag & drop?**

> Git-based deployment enables continuous deployment — every push to GitHub automatically triggers a rebuild and redeploy. This means:
> - No manual steps to deploy updates
> - Every deployment is linked to a specific commit (version tracking)
> - You can roll back to any previous version
> - Pull request preview deployments let you test changes before merging
> - Your team can deploy by simply merging a PR

**3. What would you do differently next time you deploy a project?**

> - Set up Git-based deployment from the start (not drag & drop first)
> - Add the `_redirects` file immediately for React Router
> - Configure environment variables on the platform before deploying
> - Test the production build locally with `npm run preview` before deploying
> - Write a proper README with a live demo link from the beginning
