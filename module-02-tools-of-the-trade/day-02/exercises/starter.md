# 🏋️ Exercise — Your First Git Repository

## Instructions

Follow each task below using your terminal and VS Code. Record your commands and results.

---

### Task 1: Install & Configure Git

Run these commands and paste the output:

```bash
git --version
```
**Output:** _______________

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list
```
**Output:** _______________

---

### Task 2: Create Your First Repository

```bash
mkdir hello-git
cd hello-git
git init
```

- [ ] Created the folder
- [ ] Initialised Git
- [ ] Verified with `ls -la` (you should see a `.git` folder)

Create a `README.md` file with this content:

```markdown
# Hello Git

This is my first Git repository! I'm learning version control with Get Techy with Lucky.

## About Me

- **Name:** [Your name]
- **Learning:** Git & GitHub
- **Goal:** Become a developer
```

---

### Task 3: Stage and Commit

Run `git status`. What does it show?

**Output:** _______________

Now stage and commit:

```bash
git add README.md
git commit -m "Initial commit: Add README"
```

Run `git log`. Paste your first commit details:

**Commit hash:** _______________
**Author:** _______________
**Date:** _______________
**Message:** _______________

---

### Task 4: Make More Commits

Add a new section to your README.md:

```markdown
## Skills I'm Learning

- [x] File management
- [x] Terminal basics
- [ ] Git & GitHub
- [ ] HTML & CSS
- [ ] JavaScript
```

Now stage and commit:
```bash
git add .
git commit -m "Add skills tracking section"
```

Add one more section:

```markdown
## Fun Fact

I chose to learn coding because _______.
```

Stage and commit:
```bash
git add .
git commit -m "Add fun fact section"
```

Run `git log --oneline`. Paste the result:

_______________
_______________
_______________

---

### Task 5: Push to GitHub

1. Go to [github.com](https://github.com) and create a new repository called `hello-git`
2. Do NOT initialise it with a README (you already have one)
3. Run the commands GitHub gives you to push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/hello-git.git
git branch -M main
git push -u origin main
```

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] README visible on GitHub repository page

**Your GitHub repo URL:** _______________
