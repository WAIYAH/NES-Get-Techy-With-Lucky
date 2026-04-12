# 📝 Module 09 · Day 04 — Exercises (Starter)
# Developer Workflow — Agile, Tickets, Code Reviews & Collaboration

---

## Exercise 1: Create GitHub Issues

Create 3 well-structured issues in your portfolio or project repository.

### Steps:

1. Go to your GitHub repo → **Issues** tab → **New issue**

2. **Issue #1 — Feature:**
   ```markdown
   ## Title
   <!-- TODO: Write a specific feature title -->

   ## Description
   <!-- TODO: Describe what the feature does -->

   ## Acceptance Criteria
   - [ ] <!-- TODO: Criterion 1 -->
   - [ ] <!-- TODO: Criterion 2 -->
   - [ ] <!-- TODO: Criterion 3 -->

   ## Labels
   <!-- TODO: Add appropriate labels -->
   ```

3. **Issue #2 — Bug:**
   ```markdown
   ## Title
   <!-- TODO: Describe the bug clearly -->

   ## Steps to Reproduce
   1. <!-- TODO -->
   2. <!-- TODO -->

   ## Expected Behaviour
   <!-- TODO -->

   ## Actual Behaviour
   <!-- TODO -->

   ## Labels
   bug, priority: medium
   ```

4. **Issue #3 — Documentation:**
   ```markdown
   ## Title
   <!-- TODO -->

   ## Description
   <!-- TODO -->
   ```

---

## Exercise 2: Set Up a Project Board

### Steps:

1. Go to your repo → **Projects** tab → **New project**
2. Choose **Board** layout
3. Create columns:
   - TODO: Add these columns: Backlog, To Do, In Progress, In Review, Done
4. Add your 3 issues to the board
5. Move one issue to "In Progress"
6. Take a screenshot of your board

---

## Exercise 3: Feature Branch Workflow

### Steps:

1. Pick one of your issues (e.g., Issue #1)

2. Create a branch:
   ```bash
   # TODO: Create a branch with proper naming convention
   # git checkout -b feature/your-feature-name
   ```

3. Make changes to your code to address the issue

4. Commit and push:
   ```bash
   # TODO: Stage, commit with a descriptive message, and push
   ```

5. Open a Pull Request on GitHub:
   ```markdown
   ## What does this PR do?
   <!-- TODO -->

   ## How to test
   <!-- TODO: Steps to verify the change -->

   ## Related Issue
   Closes #___
   ```

---

## Exercise 4: Code Review Practice

### Steps:

1. If working with a partner:
   - Review their PR in the **Files changed** tab
   - Leave at least 2 comments:
     - One **positive** comment (something done well)
     - One **suggestion** (constructive improvement)
   - Approve the PR or request changes

2. If working solo:
   - Open your own PR
   - Review your own diff in **Files changed**
   - Leave 2 self-review comments
   - Approve and merge

---

## Exercise 5: Sprint Simulation

### Steps:

1. Write a Sprint Goal:
   ```markdown
   ## Sprint Goal
   <!-- TODO: One sentence describing what this sprint aims to achieve -->
   ```

2. Assign your 3 issues to this sprint

3. Complete at least 1 issue through the full workflow:
   - Branch → Code → PR → Review → Merge → Move to Done

4. Write a Sprint Retrospective:
   ```markdown
   ## Sprint Retrospective

   ### What went well?
   - <!-- TODO -->

   ### What could improve?
   - <!-- TODO -->

   ### Action items for next sprint
   - <!-- TODO -->
   ```
