# 📘 Assignment 1: Git & GitHub Essentials & HTML Basics
## 🎯 Objective
- Understand Git & GitHub collaboration workflows
- Practice working with branches (team-like workflow)
- Learn basic HTML structure and documentation best practices

---
## 🚨 Important (Read Carefully)
- ❌ **Do NOT** create your own repository.
- ✅ **You MUST** work using a **branch** in the instructor's repository named: `student-yourfullname`.

Failure to follow this rule may result in mark deductions.

## 🧩 Part A — Git & GitHub Essentials (40 marks)
### Task 1 — Fork & Clone (10 marks)
- Fork the instructor repository to your GitHub account.
- Clone your fork locally:

```bash
git clone <your-forked-repo-url>
```
- Enter the project directory.

### Task 2 — Create Your Branch (15 marks)
- Create and switch to your personal branch:

```bash
git checkout -b student-yourfullname
```

- **Branch name format**: `student-yourfullname` (example: `student-john-doe`)
- All work must be done in your branch only.

### Task 3 — Commit Practices (15 marks)
- Make at least **5 meaningful commits**.
- Use clear, professional commit messages.

Good examples:
- `Add index.html structure`
- `Create about page content`
- `Update README with learning outcomes`

Bad examples: `final`, `changes`, `update`

---
## 🌐 Part B — HTML Basics Project (60 marks)
### Task 4 — Project Folder (10 marks)
- Create a folder named exactly as your branch: `student-yourfullname/`.
- Place **all** your files inside this folder.

### Task 5 — Build a Simple Website (40 marks)
Create the following files inside your folder:
- `index.html` (Home page)
- `about.html`
- `contact.html`
- `README.md` (student README)

index.html should include:
- Page title
- Your full name as a heading
- Short personal introduction
- Navigation links to About and Contact pages

about.html should include:
- Who you are
- What you are learning
- Your interests in technology
- A list (ordered or unordered) of skills/topics

contact.html should include:
- Email address (dummy OK)
- Phone number (optional)
- GitHub or LinkedIn link

### Student README (10 marks)
Inside `student-yourfullname/README.md` include:
- Your name
- Short project description
- Technologies used
- What you learned
- Your GitHub username

HTML requirements:
- Valid HTML structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Use headings, paragraphs, lists, and links appropriately

---
## 🧪 Bonus (Optional — up to 10 marks)
- Add basic CSS styles
- Improve layout and navigation styling
- Add images and improve accessibility

---
## 🚀 Final Submission Steps (Mandatory)
1. Verify you're on your branch:
git branch

2. Push your branch:
git push origin student-yourfullname

3. Open a Pull Request (PR):
- Base branch: `main`
- Compare branch: `student-yourfullname`
- PR title: `Git & HTML Assignment – Your Full Name`
- ❌ **Do NOT** merge your PR — the instructor will review and merge it.
---

## 🧑‍🏫 Marking Criteria

| Area                        | Marks |
|---------------------------: | -----:|
| Branch creation & usage     | 20    |
| Git commits quality        | 20    |
| HTML structure & content   | 40    |
| Documentation (README)     | 10    |
| Bonus                      | 10    |
| **Total**                  | **100** |

---
## ⚠️ Common Mistakes to Avoid
- Working on the `main` branch
- Submitting without creating a PR
- Poor commit messages
- Placing files outside your student folder

---
> Treat your branch like your personal workspace and your PR like a job submission. Good luck! ✅