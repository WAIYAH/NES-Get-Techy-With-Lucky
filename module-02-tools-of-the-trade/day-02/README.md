# 📅 Day 02 of Module 02 — Git & GitHub — Version Control for Beginners

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what version control is and why every developer needs it
- Install Git on your computer and configure it with your name and email
- Understand the core Git workflow: init, add, commit, status, log
- Create a GitHub account and your first remote repository
- Push your first project from your computer to GitHub

---

## 📖 Lesson Content

### What Is Version Control?

Imagine writing an essay. You save it as `essay.docx`. Then you make changes and save as `essay-v2.docx`. Then `essay-FINAL.docx`. Then `essay-FINAL-FINAL.docx`. Sound familiar?

**Version control** solves this by tracking every change you make over time — automatically. You always have one file, but you can go back to any previous version whenever you want.

**Git** is the most popular version control system in the world. It was created by Linus Torvalds (the same person who created Linux) in 2005.

### Why Version Control Matters

| Without Version Control | With Git |
|------------------------|----------|
| `project-v1.zip`, `project-v2.zip`, `project-FINAL.zip` | One project folder, complete history |
| "Who changed this? When?" — no one knows | Every change recorded with who, when, and why |
| Someone deletes important code — it's gone forever | Undo any change, go back to any point in time |
| Emailing files back and forth to collaborate | Everyone works on the same project simultaneously |

### Installing Git

**Windows:**
1. Go to [git-scm.com](https://git-scm.com/)
2. Download the Windows installer
3. Run the installer — accept all defaults
4. Open your terminal and type `git --version` to verify

**Mac:**
1. Open Terminal
2. Type `git --version`
3. If not installed, it will prompt you to install Xcode Command Line Tools
4. Follow the prompts

**Verify your installation:**
```bash
git --version
# Should output something like: git version 2.43.0
```

### Configuring Git

Before using Git, tell it who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify your config:
```bash
git config --list
# Shows your name, email, and other settings
```

> 💡 Use the **same email** you'll use for your GitHub account. This links your commits to your GitHub profile.

### The Core Git Workflow

Here's the workflow you'll use every single day as a developer:

```
Working Directory  →  Staging Area  →  Repository
    (your files)       (ready to save)   (saved history)
        │                    │                │
     git add ──────────►  git commit ────────►
```

**Step by step:**

1. **Make changes** — Edit your files normally
2. **`git add`** — Move changes to the staging area ("I want to save these")
3. **`git commit`** — Save a snapshot with a message ("Here's what I did")

### Essential Git Commands

```bash
# Start a new Git repository in your project folder
git init

# Check which files have changed
git status

# Stage a specific file for commit
git add filename.txt

# Stage ALL changed files
git add .

# Save staged changes with a message
git commit -m "Add homepage layout"

# View commit history
git log

# View a compact commit history
git log --oneline
```

### Anatomy of a Good Commit Message

Your commit message should explain **what** you changed and **why**:

| ✅ Good | ❌ Bad |
|---------|--------|
| `Add navigation bar to homepage` | `updates` |
| `Fix broken login button on mobile` | `stuff` |
| `Remove unused CSS from about page` | `asdfgh` |
| `Add form validation for email field` | `final changes` |

**Format:**
```
<type>: <short description>

Types: Add, Fix, Update, Remove, Refactor, Style
```

### What Is GitHub?

**Git** = the tool that tracks changes on your computer (local).

**GitHub** = a website that stores your Git repositories online (remote) so you can share and collaborate.

Think of it this way:
- **Git** is like a diary where you write every change
- **GitHub** is a library where you store your diary so others can read it too

### Setting Up GitHub

1. Go to [github.com](https://github.com) and create a free account
2. Choose a professional username (this will be visible to employers!)
3. Verify your email address
4. You're ready to push code!

### Connecting Local to Remote

```bash
# Create a new repo on GitHub (do this on the website first)
# Then connect your local project to it:

git remote add origin https://github.com/yourusername/your-repo-name.git

# Push your code to GitHub
git push -u origin main

# From now on, just use:
git push
```

### The Full Workflow — Start to Finish

```bash
# 1. Create a project folder
mkdir my-first-project
cd my-first-project

# 2. Initialise Git
git init

# 3. Create a file
echo "# My First Project" > README.md

# 4. Stage it
git add README.md

# 5. Commit it
git commit -m "Add README with project title"

# 6. Connect to GitHub (after creating repo on github.com)
git remote add origin https://github.com/yourusername/my-first-project.git

# 7. Push to GitHub
git push -u origin main
```

---

## ✅ Step-by-Step Tasks

1. **Install Git** — Follow the installation steps for your operating system. Run `git --version` in your terminal to confirm it's working.

2. **Configure Git** — Set your name and email using `git config --global`. Verify with `git config --list`.

3. **Create your first repository** — Create a folder called `hello-git`. Navigate into it. Run `git init`. Create a file called `README.md` with a title and description.

4. **Make your first commit** — Stage your README with `git add .` then commit with `git commit -m "Initial commit: Add README"`. Run `git log` to see your commit.

5. **Push to GitHub** — Create a new repository on [github.com](https://github.com) called `hello-git`. Follow the instructions to push your local project to GitHub. Verify by visiting your repository page in a browser.

---

## 🧠 Knowledge Check

1. What is the difference between `git add` and `git commit`?
2. Why is version control important for developers — even those working alone?
3. What is the difference between Git (local) and GitHub (remote)?

---

## 💪 Challenge

Create a **"Meet the Developer"** project:

1. Create a new folder called `meet-the-developer`
2. Initialise it with `git init`
3. Create a `README.md` with:
   - Your name and a short introduction
   - Three things you want to build with code
   - A section called "Skills I'm Learning" with a bullet list
4. Make at least **3 separate commits** — each one adding a different section
5. Create a repository on GitHub and push everything
6. Share the link with someone!

Your commit history should look like:
```
Add introduction and name
Add goals section with three project ideas
Add skills section with learning progress
```

---

## 📚 Resources

- 📖 [Git Handbook — GitHub](https://docs.github.com/en/get-started/using-git/about-git) — Official beginner guide
- 🎥 [Git & GitHub Crash Course — Traversy Media](https://www.youtube.com/watch?v=SWYqp7iY_Tc) — Excellent video tutorial
- 📖 [Git Cheat Sheet — GitHub Education](https://education.github.com/git-cheat-sheet-education.pdf) — Printable reference
- 📖 [Learn Git Branching](https://learngitbranching.js.org/) — Interactive visual tutorial
- 📖 [Oh My Git!](https://ohmygit.org/) — A game to learn Git

---

## 🐛 Common Mistakes to Avoid

1. **Committing without a meaningful message** — "asdfg" or "stuff" is useless when you look back later. Every commit should explain what changed and why.
2. **Forgetting to `git add` before `git commit`** — If you commit without staging, nothing gets saved. Always check `git status` first.
3. **Committing sensitive data** — Never commit passwords, API keys, or personal tokens. Use a `.gitignore` file and environment variables instead.

---

## 🧭 Navigation

← [Previous Day: VS Code, Terminal & Folder Structures](../day-01/) | [Next Day: Markdown & Documentation →](../day-03/)
