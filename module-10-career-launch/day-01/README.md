# 📅 Day 01 of Module 10 — Building Your Developer Portfolio: GitHub & Personal Site

⏱ **Estimated Time:** 3–4 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Understand why every developer needs a portfolio and what makes a great one
- Polish your GitHub profile with a professional README, pinned repos, and good commit history
- Plan the content and structure for a personal portfolio website
- Build (or start building) a professional portfolio site using the skills from this course
- Showcase real projects with descriptions, screenshots, and live links

---

## 📖 Lesson Content

### Why You Need a Portfolio

Your portfolio is your **proof of work**. It shows employers, clients, and collaborators what you can actually build — not just what you say you can do.

| Without a portfolio | With a portfolio |
|-------------------|----------------|
| "I know HTML and CSS" | "Here's a responsive website I built from scratch" |
| "I can build React apps" | "Here's a live React app with source code on GitHub" |
| "I'm a developer" | "Here are 5 projects, my GitHub, and my blog" |

> 💡 A portfolio doesn't have to be fancy. It has to be **real, honest, and show what you can do**.

### Part 1: Polish Your GitHub Profile

Your GitHub profile is often the first thing a recruiter or client sees. Make it count.

#### Step 1: Create a Profile README

1. Create a new repo with the **same name as your GitHub username** (e.g., `lucky-developer/lucky-developer`)
2. Add a `README.md` — this will appear on your profile page

**Template:**

```markdown
# Hi, I'm [Your Name] 👋

## About Me
🎯 Aspiring full-stack developer learning through [Get Techy with Lucky](https://github.com/...)
🌍 Based in [Your City, Country]
🌱 Currently learning: React, Node.js, and databases
💬 Ask me about: HTML, CSS, JavaScript, Git

## Tech Stack
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

## Featured Projects
- 🌐 [Project Name](link) — Brief description
- 📱 [Project Name](link) — Brief description
- 🛠️ [Project Name](link) — Brief description

## Let's Connect
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](your-link)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](your-link)
```

#### Step 2: Pin Your Best Repos

1. Go to your GitHub profile
2. Click **"Customize your pins"**
3. Select your **6 best repositories** — the ones that showcase real projects, not forks or hello-world exercises

#### Step 3: Clean Up Your Repos

For each pinned repo:
- ✅ Add a clear **description** (one line)
- ✅ Add **topics/tags** (html, css, javascript, react, etc.)
- ✅ Write a professional **README** with: what it is, screenshot, tech stack, how to run it, live demo link
- ✅ Include a **live demo link** in the repo's About section

### Part 2: Plan Your Portfolio Website

A great portfolio website has these sections:

| Section | Purpose |
|---------|---------|
| **Hero / Header** | Your name, title, tagline, and a call-to-action |
| **About Me** | Who you are, your background, what you're passionate about |
| **Skills** | Tech stack displayed visually (icons, progress bars, or badges) |
| **Projects** | 3–6 featured projects with screenshots, descriptions, and links |
| **Contact** | Email, social links, and optionally a contact form |
| **Footer** | Copyright, social icons |

### What Makes a Project Showcase Great?

For each project, include:

1. **Project name** and one-line description
2. **Screenshot or GIF** showing the project in action
3. **Tech stack** used (HTML, CSS, React, Node.js, etc.)
4. **Live demo link** — always deploy your projects
5. **Source code link** — GitHub repo
6. **What you learned** — one sentence about the challenge or skill

### Portfolio Content Strategy

Don't just build random projects. Show **range**:

| Project | Demonstrates |
|---------|-------------|
| A responsive landing page | HTML, CSS, responsive design |
| An interactive app (to-do list, quiz) | JavaScript, DOM manipulation |
| A React application | Component architecture, state management |
| An API-connected project | Fetch, async/await, data display |
| A full-stack project | Frontend + backend + database |

> ⚠️ **Quality over quantity.** Five polished projects beat twenty half-finished ones.

### Building the Portfolio Site

You have the skills from Modules 03–06 to build this. Here's a simple approach:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucky | Developer Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="hero">
        <h1>Lucky</h1>
        <p>Full-Stack Developer | Building the web, one line at a time.</p>
        <a href="#projects" class="cta">View My Work</a>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Your story goes here...</p>
    </section>

    <section id="projects">
        <h2>Featured Projects</h2>
        <!-- Project cards go here -->
    </section>

    <section id="contact">
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:you@email.com">you@email.com</a></p>
    </section>

    <footer>
        <p>&copy; 2026 Lucky. All rights reserved.</p>
    </footer>
</body>
</html>
```

Deploy to Netlify or Vercel and share the link everywhere.

---

## ✅ Step-by-Step Tasks

1. **Create your GitHub Profile README** — Create the special repo (same name as your username), add a `README.md` using the template above. Customise it with your real information.

2. **Pin your best repos** — Select 3–6 repos to pin on your profile. If you don't have enough yet, make a note to come back after building more projects.

3. **Clean up one repo** — Pick your best project repo. Add a proper README with: project description, screenshot, tech stack, and how to run it locally.

4. **Plan your portfolio content** — Write down (in a document or markdown file):
   - Your name and title
   - A 3-sentence bio
   - Your top 5 skills
   - 3–5 projects you want to showcase (even if they're from this course)

5. **Start building** — Create a new project folder called `my-portfolio`. Build a simple one-page portfolio using HTML and CSS. Include at least: hero section, about section, projects section, and contact section.

6. **Deploy it** — Push to GitHub and deploy to Netlify or Vercel. Share the live link!

---

## 🧠 Knowledge Check

1. Why is a portfolio more powerful than a CV for a developer?
2. What are the essential sections of a developer portfolio website?
3. What should each project showcase include (name at least 4 things)?

---

## 💪 Challenge

Build a **complete, deployed portfolio website** that includes:

- A responsive design that works on mobile and desktop
- At least 3 project cards with screenshots, descriptions, tech stack, and links
- A working contact section (email link and social media links)
- An animated hero section (use CSS transitions or keyframes)
- Clean, semantic HTML with accessibility in mind
- Deployed to Netlify or Vercel with a meaningful subdomain

Bonus: Add a dark mode toggle using JavaScript.

---

## 📚 Resources

- 📖 [GitHub Profile README Guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) — Official GitHub docs
- 🎥 [Build a Developer Portfolio — freeCodeCamp](https://www.youtube.com/watch?v=xV7S8BhIeBo) — Full video tutorial
- 📖 [Awesome GitHub Profile READMEs](https://github.com/abhisheknaiidu/awesome-github-profile-readme) — Inspiration from real developers
- 📖 [shields.io](https://shields.io/) — Generate badge images for your README
- 🎥 [Portfolio Tips for Devs — Joshua Fluke](https://www.youtube.com/watch?v=u-RLu_8kwA0) — What recruiters actually look at

---

## 🐛 Common Mistakes to Avoid

1. **An empty GitHub profile** — Recruiters check your GitHub. If it has no pinned repos, no README, and no recent activity, it signals inactivity. Even small daily commits show consistency and dedication.
2. **Showcasing unfinished projects** — A half-built to-do app with broken links and a default Vite homepage damages your credibility more than having fewer projects. Only showcase work you're proud of. If a project isn't ready, keep it private until it is.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Writing a Winning Tech CV & LinkedIn Profile →](../day-02/)
