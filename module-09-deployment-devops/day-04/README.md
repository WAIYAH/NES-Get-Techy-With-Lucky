# 📅 Day 04 of Module 09 — Developer Workflow — Agile, Tickets, Code Reviews & Collaboration

⏱ **Estimated Time:** 2 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain Agile methodology and how sprints work in real dev teams
- Create and manage GitHub Issues as project tickets
- Use GitHub Projects (Kanban board) to organise work
- Write and review pull requests following professional standards
- Collaborate effectively with branches, reviews, and merge strategies

---

## 📖 Lesson Content

### How Professional Teams Work

In the real world, developers don't just write code. They:

1. **Plan** — Break features into small, manageable tickets
2. **Branch** — Create a branch for each ticket
3. **Build** — Write the feature or fix
4. **Review** — Submit a pull request for teammates to review
5. **Merge** — Approved code gets merged to `main` and deployed
6. **Repeat** — Pick the next ticket

### Agile Methodology

Agile is a way of working that favours:

| Principle | Meaning |
|-----------|---------|
| Small iterations | Build in 1–2 week sprints, not 6-month plans |
| Working software | Deliver usable features, not just documents |
| Collaborate | Dev, designer, and stakeholder work together daily |
| Respond to change | Adjust priorities based on feedback |

#### The Sprint Cycle

```
Sprint Planning (Day 1)
    → Pick tickets from the backlog
    → Estimate effort (story points or t-shirt sizes)
    → Commit to a sprint goal

Daily Standup (Every day, 15 min)
    → What did I do yesterday?
    → What will I do today?
    → Any blockers?

Sprint Review (Last day)
    → Demo completed work
    → Get stakeholder feedback

Sprint Retrospective (After review)
    → What went well?
    → What could improve?
    → Action items for next sprint
```

### GitHub Issues — Your Tickets

Issues are the standard way to track work on GitHub.

#### Writing a Good Issue

```markdown
## Title
Add dark mode toggle to navbar

## Description
Users should be able to switch between light and dark mode. 
The preference should persist using localStorage.

## Acceptance Criteria
- [ ] Toggle button in the navbar
- [ ] Switches between light and dark CSS classes on body
- [ ] Saves preference to localStorage
- [ ] Loads saved preference on page load

## Labels
feature, frontend, priority: medium
```

#### Issue Labels

| Label | Purpose |
|-------|---------|
| `bug` | Something is broken |
| `feature` | New functionality |
| `enhancement` | Improvement to existing feature |
| `documentation` | README, guides, comments |
| `good first issue` | Simple task for newcomers |
| `priority: high` | Needs immediate attention |

### GitHub Projects — Kanban Boards

GitHub Projects lets you create a board with columns to track issue status:

```
| Backlog | To Do | In Progress | In Review | Done |
|---------|-------|-------------|-----------|------|
| Issue 7 | Issue 4 | Issue 2   | Issue 1   | Issue 3 |
| Issue 8 | Issue 5 |           |           |         |
|         | Issue 6 |           |           |         |
```

To set up:
1. Go to your repo → **Projects** tab → **New project**
2. Choose **Board** layout
3. Add columns: Backlog, To Do, In Progress, In Review, Done
4. Link issues to the project

### Pull Requests — Professional Code Review

#### Creating a Good PR

```markdown
## What does this PR do?
Adds a dark mode toggle to the navigation bar.

## How to test
1. Run `npm run dev`
2. Click the moon icon in the navbar
3. Verify the page switches to dark mode
4. Refresh — dark mode should persist

## Screenshots
[Before/After screenshots]

## Related Issue
Closes #12
```

#### Reviewing a PR

When reviewing someone's code:

- **Read the description** — Understand what it's meant to do
- **Check the diff** — Look at changed files
- **Leave comments** — Be specific and constructive
- **Approve, request changes, or comment** — Make a decision

##### Good Review Comments

```
✅ "This function handles errors well — nice use of try/catch."
✅ "Consider renaming `x` to `userCount` for readability."
✅ "This could cause a bug if `user` is null — add a check?"
❌ "This is wrong." (Not helpful — explain WHY)
❌ "I would have done it differently." (Not constructive)
```

### Branch Strategy

```
main  ──────────────────────────── production (deployed)
  │
  ├─ feature/dark-mode ──── PR → merged
  │
  ├─ fix/login-bug ──────── PR → merged
  │
  └─ feature/user-profile ── PR → in review
```

#### Naming Conventions

| Pattern | Example |
|---------|---------|
| `feature/description` | `feature/dark-mode` |
| `fix/description` | `fix/login-redirect` |
| `docs/description` | `docs/api-readme` |
| `refactor/description` | `refactor/auth-flow` |

### Working Together — Merge Conflicts

When two people edit the same lines:

```
<<<<<<< HEAD
  background-color: blue;
=======
  background-color: green;
>>>>>>> feature/dark-mode
```

To resolve:
1. Open the conflicting file
2. Choose which version to keep (or combine both)
3. Delete the `<<<<<<<`, `=======`, and `>>>>>>>` markers
4. Stage, commit, and push

---

## ✅ Step-by-Step Tasks

1. **Create Issues** — In your portfolio repo, create 3 GitHub Issues with proper titles, descriptions, acceptance criteria, and labels.

2. **Set up a Project Board** — Create a GitHub Project with Kanban columns. Add your issues to the board. Move one to "In Progress".

3. **Feature branch workflow** — Create a branch for one issue. Make changes, commit, push, and open a pull request. Link the PR to the issue with `Closes #N`.

4. **Review a PR** — If working with a partner, review each other's PRs. Leave at least 2 comments (one positive, one suggestion). Approve the PR.

5. **Simulate a sprint** — Write a brief Sprint Goal. Assign your 3 issues to the sprint. Complete one issue, move it to Done, and write a one-paragraph Sprint Review.

---

## 🧠 Knowledge Check

1. What are the four ceremonies in a typical Agile sprint?
2. What does `Closes #12` in a PR description do?
3. What is the difference between a merge commit and a squash merge?

---

## 💪 Challenge

Run a **"Mini Sprint"** on your portfolio or capstone project:

- Create 5 GitHub Issues covering real work (bug fixes, features, documentation)
- Set up a GitHub Project board
- Write a sprint goal
- Complete at least 3 issues through the full workflow: branch → code → PR → review → merge
- At the end, write a Sprint Retrospective (what went well, what to improve)

---

## 📚 Resources

- 📖 [GitHub Issues — Docs](https://docs.github.com/en/issues) — Issue management
- 📖 [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects) — Kanban boards
- 📖 [Pull Request Reviews — GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) — Review guide
- 🎥 [Agile in 100 Seconds — Fireship](https://www.youtube.com/watch?v=GzzkpAOxHXs) — Quick overview
- 📖 [Atlassian — Agile Coach](https://www.atlassian.com/agile) — In-depth Agile guide

---

## 🐛 Common Mistakes to Avoid

1. **Giant pull requests** — PRs with 50+ files are impossible to review well. Keep PRs small and focused — one feature or fix per PR. If the task is large, break it into smaller PRs.
2. **Vague issue titles** — "Fix stuff" or "Update code" tells nobody anything. Use specific titles like "Fix login redirect on expired session". Your future self will thank you.
3. **Skipping code reviews** — Even solo developers benefit from reviewing their own code before merging. Code review catches bugs, improves readability, and transfers knowledge across the team.

---

## 🧭 Navigation

← [Previous Day: CI/CD Pipelines — GitHub Actions](../day-03/) | [Next Module: Career Launch & Monetisation →](../../module-10-career-launch/)
