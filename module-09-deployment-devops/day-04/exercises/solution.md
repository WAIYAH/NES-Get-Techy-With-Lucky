# ✅ Module 09 · Day 04 — Solutions
# Developer Workflow — Agile, Tickets, Code Reviews & Collaboration

---

## Exercise 1: GitHub Issues — Examples

### Issue #1 — Feature
```markdown
## Title
Add dark mode toggle to navigation bar

## Description
Users should be able to switch between light and dark mode using a toggle
button in the navbar. The preference should persist across page reloads
using localStorage.

## Acceptance Criteria
- [ ] Moon/sun icon toggle button appears in the navbar
- [ ] Clicking the toggle switches CSS classes on the `<body>` element
- [ ] User preference is saved to localStorage
- [ ] Saved preference is loaded and applied on page load
- [ ] Smooth CSS transition between modes

## Labels
feature, frontend, priority: medium
```

### Issue #2 — Bug
```markdown
## Title
Contact form submits without validating email field

## Steps to Reproduce
1. Go to the Contact page
2. Leave the email field empty
3. Fill in the message field
4. Click "Send"

## Expected Behaviour
The form should show an error message: "Please enter a valid email address"
and prevent submission.

## Actual Behaviour
The form submits successfully with no email, causing a server error.

## Labels
bug, priority: high
```

### Issue #3 — Documentation
```markdown
## Title
Add setup instructions to README

## Description
The README currently has no instructions for running the project locally.
Add a "Getting Started" section with installation steps, environment setup,
and how to run the dev server.

## Labels
documentation, good first issue
```

---

## Exercise 2: Project Board

Create the board at **github.com/YOUR-USERNAME/YOUR-REPO/projects** with:

| Backlog | To Do | In Progress | In Review | Done |
|---------|-------|-------------|-----------|------|
| | Issue #3 | Issue #1 | | |
| | Issue #2 | | | |

---

## Exercise 3: Feature Branch Workflow

### Terminal Commands
```bash
# Create feature branch
git checkout -b feature/dark-mode

# Make code changes...

# Stage and commit
git add .
git commit -m "feat: add dark mode toggle to navbar

- Add toggle button with moon/sun icons
- Implement CSS class switching on body
- Save preference to localStorage
- Load saved preference on page load

Closes #1"

# Push to GitHub
git push origin feature/dark-mode
```

### Pull Request Description
```markdown
## What does this PR do?
Adds a dark mode toggle button to the navigation bar. Users can switch
between light and dark themes, and their preference persists via localStorage.

## How to test
1. Run `npm run dev` or open `index.html`
2. Click the moon icon in the top-right of the navbar
3. Verify the page switches to a dark colour scheme
4. Refresh the page — dark mode should still be active
5. Click again to switch back to light mode

## Screenshots
Dark mode: [screenshot]
Light mode: [screenshot]

## Related Issue
Closes #1
```

---

## Exercise 4: Code Review Comments — Examples

### Positive comment
> Great job using `classList.toggle()` here instead of manually adding/removing classes. Clean and readable!

### Suggestion comment
> Consider adding a `prefers-color-scheme` media query check as the default, so the initial mode matches the user's system preference before they interact with the toggle.
>
> ```javascript
> const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
> const saved = localStorage.getItem("theme");
> const theme = saved || (prefersDark ? "dark" : "light");
> ```

---

## Exercise 5: Sprint Simulation

### Sprint Goal
```markdown
## Sprint Goal
Improve the user experience of the portfolio site by adding dark mode,
fixing the contact form validation, and updating the README with setup instructions.
```

### Sprint Retrospective
```markdown
## Sprint Retrospective

### What went well?
- The feature branch workflow was smooth — creating branches and PRs felt organised
- Using GitHub Issues gave clear visibility into what needed to be done
- The Kanban board made it easy to track progress at a glance

### What could improve?
- Spent too long on CSS transitions before getting the core functionality working
- Should have written tests alongside the code, not after
- PR descriptions could be more detailed with screenshots

### Action items for next sprint
- Write tests before or alongside new features (TDD approach)
- Timebox CSS/design work to 30 minutes per task
- Add a PR template to the repo so descriptions are consistent
```
