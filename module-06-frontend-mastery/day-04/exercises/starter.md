# 🚀 Day 04 Exercise — Build & Deploy Your React App

## Module 06: Frontend Mastery | Get Techy with Lucky

---

## Instructions

Follow the steps below to build and deploy your React application. This is a practical, hands-on exercise — you'll be working in the terminal, on GitHub, and on a hosting platform.

---

## Task 1: Build Your Project

1. Open your terminal in your React project folder
2. Run the build command:

```bash
npm run build
```

3. Explore the `dist/` folder that was created:
   - [ ] How many files are in `dist/assets/`?
   - [ ] Open `dist/index.html` — what do you notice about the code?
   - [ ] What is the total size of the `dist/` folder?

4. Test the production build locally:

```bash
npm run preview
```

5. Open the preview URL in your browser. Does everything work?

**Write your observations here:**

> _Your answer..._

---

## Task 2: Deploy to Netlify (Drag & Drop)

1. Go to [app.netlify.com](https://app.netlify.com) and sign up / log in
2. On the dashboard, find the drag & drop deploy area
3. Drag your `dist/` folder onto it
4. Wait for the deployment to complete

**Your Netlify URL:** `___________________________`

5. Test your deployed site:
   - [ ] Homepage loads correctly
   - [ ] Navigation works between pages
   - [ ] Refreshing a sub-page works (e.g., `/about`)
   - [ ] No console errors in DevTools

If refreshing sub-pages gives a 404, create this file:

```
public/_redirects
```

With this content:

```
/*    /index.html   200
```

Then rebuild and redeploy.

---

## Task 3: Deploy via Git (Continuous Deployment)

1. Push your project to GitHub (if not already):

```bash
git init
git add .
git commit -m "Initial commit — React portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Connect to Netlify or Vercel:
   - Go to the platform dashboard
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repo
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy"

**Your Git-deployed URL:** `___________________________`

3. Test continuous deployment:
   - Make a small change to your app (e.g., change the heading text)
   - Commit and push:

```bash
git add .
git commit -m "Update heading text"
git push
```

   - [ ] Check the platform dashboard — did it auto-deploy?
   - [ ] Visit your URL — is the change live?

---

## Task 4: Test Your Deployment

Open your deployed site and complete this checklist:

- [ ] Homepage loads without errors
- [ ] All navigation links work
- [ ] Refreshing any page works (no 404)
- [ ] The site looks correct on mobile (use DevTools responsive mode)
- [ ] No errors in the browser console
- [ ] Images and assets load correctly
- [ ] Interactive features work (buttons, forms, etc.)

**Issues found (if any):**

> _List any issues and how you fixed them..._

---

## Task 5: Professional README

Update your project's `README.md` with:

- [ ] Project title and description
- [ ] Live demo link (your deployed URL)
- [ ] Screenshot of the app
- [ ] Technologies used
- [ ] How to run locally (`npm install` → `npm run dev`)
- [ ] Your name and links (GitHub, LinkedIn, etc.)

**Starter template:**

```markdown
# My React Portfolio

A modern portfolio website built with React and Vite.

## 🔗 Live Demo

[View Live Site](YOUR_URL_HERE)

## 📸 Screenshot

![Screenshot](screenshot.png)

## 🛠️ Built With

- React
- React Router
- Vite
- CSS

## 🚀 Getting Started

1. Clone the repo: `git clone YOUR_REPO_URL`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Build for production: `npm run build`

## 👤 Author

- **Your Name** — [GitHub](https://github.com/YOUR_USERNAME)
```

---

## Reflection

Answer these questions:

1. What is the difference between `npm run dev` and `npm run build`?

> _Your answer..._

2. Why is Git-based deployment better than drag & drop?

> _Your answer..._

3. What would you do differently next time you deploy a project?

> _Your answer..._

---

**Congratulations!** 🎉 You've built and deployed a real React application to the internet. Share your live link with friends and family — you're officially a React developer!
