# 📅 Day 01 of Module 09 — Domain Names, Hosting & Deploying Websites

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain the difference between a domain name, hosting, and deployment
- Understand how DNS works at a basic level
- Deploy a static website to Netlify or Vercel for free
- Connect a custom domain name to your deployed site
- Understand the different types of hosting: shared, VPS, cloud, and static

---

## 📖 Lesson Content

### The Journey from Code to Live Website

Right now, your website only exists on your computer. To share it with the world, you need three things:

| What | Why | Example |
|------|-----|---------|
| **Code** | The actual website files | Your HTML, CSS, JS |
| **Hosting** | A server to store and serve your files 24/7 | Netlify, Vercel, AWS |
| **Domain** | A human-friendly address | www.gettechy.com |

```
You write code  →  You upload (deploy) to a host  →  People visit your domain
                                                       ↓
                                                   DNS translates
                                                   gettechy.com → 192.168.1.1 (server IP)
```

### What Is a Domain Name?

A **domain name** is the human-friendly address of a website. Because nobody wants to type `192.168.1.1` into their browser.

```
https://www.gettechy.com
  │       │      │     │
  │       │      │     └── TLD (Top-Level Domain): .com, .org, .co.ke
  │       │      └──────── Domain name: gettechy
  │       └─────────────── Subdomain: www
  └─────────────────────── Protocol: https (secure)
```

**Where to buy domains:**
- [Namecheap](https://namecheap.com) — affordable and reliable
- [Google Domains](https://domains.google) — simple and clean
- [GoDaddy](https://godaddy.com) — popular but upsells aggressively

> 💡 Domains typically cost $10–15/year for a `.com`. Some TLDs like `.dev` or `.io` cost more.

### What Is DNS?

**DNS (Domain Name System)** is like the phone book of the internet. It translates domain names into IP addresses.

When you type `gettechy.com`:
1. Your browser asks a DNS server: "What's the IP for gettechy.com?"
2. DNS responds: "It's 104.21.35.22"
3. Your browser connects to that IP and loads the website

You don't need to manage DNS manually for most deployments — your hosting provider handles it.

### Types of Hosting

| Type | Best for | Cost | Examples |
|------|----------|------|---------|
| **Static hosting** | HTML/CSS/JS sites, React apps | Free–$5/mo | Netlify, Vercel, GitHub Pages |
| **Shared hosting** | WordPress, small business sites | $3–10/mo | Hostinger, Bluehost, SiteGround |
| **VPS (Virtual Private Server)** | Full control, custom backends | $5–40/mo | DigitalOcean, Linode, Vultr |
| **Cloud hosting** | Scalable, enterprise apps | Pay-per-use | AWS, Google Cloud, Azure |

For your first projects, **static hosting on Netlify or Vercel** is perfect — it's free and takes under 5 minutes.

### Deploying to Netlify (Step by Step)

**Method 1: Drag and drop**

1. Go to [netlify.com](https://www.netlify.com/) and sign up (use GitHub login)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag your project folder into the browser
4. Done! Your site is live at `random-name.netlify.app`

**Method 2: Connect to GitHub (recommended)**

1. Push your project to a GitHub repository
2. In Netlify, click **"Add new site"** → **"Import from Git"**
3. Select your GitHub repo
4. Click **Deploy**
5. Every time you push to GitHub, Netlify automatically redeploys!

### Deploying to Vercel

1. Go to [vercel.com](https://vercel.com/) and sign up with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **Deploy**
5. Your site is live at `project-name.vercel.app`

> 💡 Vercel is especially good for React/Next.js projects.

### Connecting a Custom Domain

After deploying, you'll have a URL like `my-site.netlify.app`. To use your own domain:

1. **Buy a domain** from Namecheap or Google Domains
2. In Netlify/Vercel, go to **Domain settings** → **Add custom domain**
3. Enter your domain (e.g., `gettechy.com`)
4. Update your domain's **DNS records** to point to Netlify/Vercel (they'll give you the exact values)
5. Wait 15 minutes to 48 hours for DNS propagation
6. ✅ HTTPS is enabled automatically — your site is secure!

---

## ✅ Step-by-Step Tasks

1. **Create a simple one-page site** — Build a quick landing page with your name, a tagline, and 3 links (GitHub, LinkedIn, email). Name it `index.html`.

2. **Push to GitHub** — Create a new repo on GitHub and push your landing page.

3. **Deploy to Netlify** — Connect your GitHub repo to Netlify and deploy. Copy and share your live URL.

4. **Deploy to Vercel** — Deploy the same repo to Vercel. Now you have two live URLs!

5. **Customise the subdomain** — In Netlify, go to Site settings → Domain management → Change the `random-name.netlify.app` to something meaningful like `lucky-portfolio.netlify.app`.

6. **Inspect DNS** — Open your terminal and run:
   ```bash
   nslookup your-site.netlify.app
   ```
   This shows you the IP address your domain points to.

---

## 🧠 Knowledge Check

1. What three things do you need to make a website accessible on the internet?
2. What does DNS do, in simple terms?
3. What is the advantage of connecting Netlify to GitHub instead of dragging and dropping files?

---

## 💪 Challenge

Deploy **three different pages** as separate Netlify sites:
1. A personal landing page
2. A resume/CV page
3. A project showcase page

Then create a simple "hub" page that links to all three. Deploy the hub page too. You now have a mini network of live websites!

Bonus: Buy a cheap domain ($1–2 for `.xyz` or `.tech`) and connect it to your hub page.

---

## 📚 Resources

- 📖 [Netlify Docs — Get Started](https://docs.netlify.com/) — Official deployment guide
- 📖 [Vercel Docs — Getting Started](https://vercel.com/docs) — Official Vercel docs
- 🎥 [Deploy a Website in 5 Minutes — Fireship](https://www.youtube.com/watch?v=4h8B080Mv4U) — Quick visual guide
- 📖 [How DNS Works — DNS Made Easy](https://www.youtube.com/watch?v=72snZctFFtA) — Clear visual explanation
- 📖 [GitHub Pages Guide](https://pages.github.com/) — Free hosting directly from GitHub

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting to name your main file `index.html`** — Web servers look for `index.html` by default. If your file is named `home.html` or `main.html`, visitors will see a 404 error instead of your site.
2. **Not waiting for DNS propagation** — After connecting a custom domain, DNS changes can take up to 48 hours to spread across the internet. Don't panic if your domain doesn't work immediately — check again in a few hours.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Environment Variables, Secrets & .env Files →](../day-02/)
