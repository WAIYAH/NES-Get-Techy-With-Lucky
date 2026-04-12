# 📅 Day 04 of Module 06 — Build & Deploy Your First React App

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Understand the build process and what happens when you run `npm run build`
- Configure environment variables in a React project
- Deploy a React app to Netlify (drag & drop and Git-based)
- Deploy a React app to Vercel with Git integration
- Set up custom domains and continuous deployment

---

## 📖 Lesson Content

### The Build Process

During development, you run `npm run dev` which starts a local server with hot reload. For production, you need to **build** your app into optimised, static files.

```bash
npm run build
```

This creates a `dist/` folder (Vite) or `build/` folder (Create React App) containing:
- Minified JavaScript bundles
- Optimised CSS
- An `index.html` file
- Any images and assets

These files can be served by any static hosting service — no Node.js server needed.

### Environment Variables

Environment variables let you store configuration that changes between environments (development vs production).

```bash
# .env (in your project root)
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Get Techy with Lucky
```

```jsx
// Access in your code
const apiUrl = import.meta.env.VITE_API_URL;
const title = import.meta.env.VITE_APP_TITLE;
```

> ⚠️ In Vite, environment variables MUST start with `VITE_` to be exposed to the client. Never put secrets (API keys with write access, passwords) in frontend environment variables — they are visible in the browser.

### .gitignore — Don't Commit These

```gitignore
node_modules/
dist/
.env
.env.local
```

### Deploying to Netlify

#### Option 1: Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the deploy area
4. Your site is live!

#### Option 2: Git-Based (Recommended)

1. Push your project to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your repository
5. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

Now every time you push to GitHub, Netlify automatically rebuilds and redeploys!

#### Fixing Client-Side Routing on Netlify

React Router uses client-side routing, but Netlify doesn't know about your routes. Create a `_redirects` file:

```
# public/_redirects
/*    /index.html   200
```

This tells Netlify to serve `index.html` for all routes, letting React Router handle them.

### Deploying to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite/React — settings are usually correct
5. Click "Deploy"

Vercel handles client-side routing automatically — no `_redirects` file needed.

### Adding a Custom Domain

**On Netlify:**
1. Go to "Domain settings"
2. Add your custom domain
3. Update your DNS settings (add a CNAME record pointing to your Netlify URL)
4. Netlify provides free HTTPS automatically

**On Vercel:**
1. Go to "Project Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Automatic HTTPS is included

### Continuous Deployment Workflow

```
1. Write code locally
2. git add . && git commit -m "Add new feature"
3. git push origin main
4. Netlify/Vercel automatically detects the push
5. Runs npm run build
6. Deploys the new version
7. Your live site is updated in ~60 seconds
```

### Preview Deployments

Both Netlify and Vercel create **preview deployments** for pull requests:

1. Create a branch: `git checkout -b feature/new-navbar`
2. Make changes and push
3. Open a Pull Request on GitHub
4. Netlify/Vercel generates a unique preview URL
5. Review the changes live before merging
6. Merge the PR → main site updates automatically

### Pre-Deployment Checklist

- [ ] All pages and routes work correctly
- [ ] No console errors or warnings
- [ ] Images and assets load properly
- [ ] Responsive design works on mobile
- [ ] Forms and interactive features function
- [ ] Meta tags and page titles are set
- [ ] `_redirects` file added (for Netlify with React Router)
- [ ] Environment variables configured on the hosting platform
- [ ] `.env` file is in `.gitignore`

---

## ✅ Step-by-Step Tasks

1. **Build your project** — Run `npm run build` and explore the `dist/` folder. Open `dist/index.html` in a browser to test locally.

2. **Deploy to Netlify (drag & drop)** — Build your project and deploy via Netlify's drag & drop. Share the live URL.

3. **Deploy via Git** — Push your project to GitHub. Connect it to Netlify or Vercel for continuous deployment.

4. **Test your deployment** — Verify all routes work (especially direct URL access), check mobile responsiveness, and confirm there are no console errors.

5. **Set up a custom domain (optional)** — If you have a domain, configure it with your deployment platform.

---

## 🧠 Knowledge Check

1. What does `npm run build` do and why is it necessary for deployment?
2. Why do you need a `_redirects` file on Netlify when using React Router?
3. What is continuous deployment and how does it work with Git?

---

## 💪 Challenge

**Full Deployment Pipeline:**

- Take the Mini Portfolio you built on Day 03
- Add environment variables for your name and social links
- Create a professional README with a live demo link
- Deploy to both Netlify AND Vercel
- Set up a custom domain (or use the free subdomain)
- Make a change, push to GitHub, and verify auto-deployment works
- Share the live link with a friend and ask for feedback

---

## 📚 Resources

- 📖 [Netlify Docs — Deploy a Vite App](https://docs.netlify.com/frameworks/vite/) — Step-by-step guide
- 📖 [Vercel Docs — Deploy React](https://vercel.com/guides/deploying-react-with-vercel) — Step-by-step guide
- 📖 [Vite Docs — Building for Production](https://vitejs.dev/guide/build.html) — Build configuration
- 🎥 [Deploy React App — Traversy Media](https://www.youtube.com/watch?v=lCMFAR2BQOM) — Video walkthrough
- 📖 [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html) — Official reference

---

## 🐛 Common Mistakes to Avoid

1. **Pushing `.env` files to GitHub** — Your environment variables become public. Always add `.env` to `.gitignore` and configure variables in the hosting platform's dashboard.
2. **Forgetting the `_redirects` file on Netlify** — Without it, refreshing any page other than the homepage returns a 404 error.
3. **Not testing the production build locally** — Run `npm run preview` (Vite) after building to catch issues before deploying. The production build may behave differently from the dev server.

---

## 🧭 Navigation

← [Previous Day: Routing, Project Structure & Best Practices](../day-03/) | [Next Module: Backend Basics: Node.js & APIs →](../../module-07-backend-node-api/)
