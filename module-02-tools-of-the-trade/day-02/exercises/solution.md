# 🏋️ Exercise — Your First Git Repository (Solution)

## Completed Answers

---

### Task 1: Install & Configure Git

```bash
git --version
```
**Output:** `git version 2.43.0` (your version number may differ)

```bash
git config --global user.name "Lucky Dev"
git config --global user.email "lucky@example.com"
git config --list
```
**Output:**
```
user.name=Lucky Dev
user.email=lucky@example.com
core.autocrlf=true
...
```

---

### Task 2: Create Your First Repository

```bash
mkdir hello-git
cd hello-git
git init
```

- [x] Created the folder — `mkdir hello-git`
- [x] Initialised Git — `git init` outputs "Initialized empty Git repository in .../hello-git/.git/"
- [x] Verified with `ls -la` — the `.git` folder is a hidden directory that contains all version history

README.md content created with all sections filled in.

---

### Task 3: Stage and Commit

```bash
git status
```
**Output:**
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```

> The file shows as "Untracked" because Git sees it but isn't tracking changes to it yet.

After staging and committing:
```bash
git add README.md
git commit -m "Initial commit: Add README"
git log
```

**Commit hash:** `a1b2c3d` (yours will be different — every commit has a unique hash)
**Author:** `Lucky Dev <lucky@example.com>`
**Date:** `Mon Jun 2 10:30:00 2025 +0300`
**Message:** `Initial commit: Add README`

---

### Task 4: Make More Commits

After adding the skills section and fun fact section:

```bash
git log --oneline
```
**Output:**
```
f4e5d6c Add fun fact section
b7a8c9d Add skills tracking section
a1b2c3d Initial commit: Add README
```

> 💡 Notice how commits are listed newest-first. Each has a unique short hash (7 characters) and your message. This is why good commit messages matter — they tell the story of your project.

---

### Task 5: Push to GitHub

```bash
git remote add origin https://github.com/luckydev/hello-git.git
git branch -M main
git push -u origin main
```

- [x] Repository created on GitHub — via github.com → "+" → "New repository"
- [x] Code pushed successfully — terminal shows "Branch 'main' set up to track remote branch 'main' from 'origin'"
- [x] README visible on GitHub repository page — GitHub automatically renders README.md on the repo's main page

**Your GitHub repo URL:** `https://github.com/luckydev/hello-git`

> 💡 **Key takeaway:** The workflow you just practised — `init → add → commit → push` — is the exact same workflow professional developers use every single day. You'll repeat this hundreds of times throughout your career. It becomes second nature!
